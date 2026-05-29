#!/usr/bin/env node
/**
 * Sincroniza arquivos .md do vault → description_html dos cards no Plane.
 *
 * Uso:
 *   node sync-plane-descriptions.js --project autonr --md-dir "C:\...\por-metodo"
 *   node sync-plane-descriptions.js --project autonr --md-dir "...\automacao" --map maps/autonr-legacy.json
 *   node sync-plane-descriptions.js --project autonr --file GetPedidoPO.md --md-dir "...\por-metodo"
 *   node sync-plane-descriptions.js --project autonr --md-dir "...\por-metodo" --dry-run
 */
const fs = require('fs');
const path = require('path');
const { markdownToHtml } = require('./lib/md-to-html');
const { VAULT_ROOT, loadInstanceEnv, loadProject } = require('./lib/plane-config');
const { listAllWorkItems, patchWorkItem } = require('./lib/plane-api');

function printHelp() {
  console.log(`Sincroniza markdown do Obsidian → description_html no Plane.

Uso:
  node sync-plane-descriptions.js --project <slug> --md-dir <pasta> [opções]

Obrigatório:
  --project <slug>     Slug em Meta/integracoes/plane/projetos/<slug>.md (ex: autonr)
  --md-dir <path>      Pasta com arquivos .md (pode repetir)

Opções:
  --file <name.md>     Sincroniza só um arquivo (basename) dentro de --md-dir
  --map <path.json>    Regras extras de vínculo card ↔ arquivo (ver maps/)
  --card-prefix <s>    Prefixo do título no Plane (padrão: [n8n])
  --no-card-prefix     Busca card só por trecho do título (--title-includes no map)
  --glob <pattern>     Padrão de arquivos (padrão: *.md)
  --recursive          Inclui subpastas
  --dry-run            Não envia PATCH
  --verbose            Log detalhado
  --delay-ms <n>       Pausa entre PATCH (padrão: 250)
  --vault <path>       Raiz do vault (auto-detect por padrão)
  -h, --help

Exemplos:
  node sync-plane-descriptions.js --project autonr \\
    --md-dir "%VAULT%\\Orius\\integracoes\\registro-imoveis\\onr\\webservice-wsoficio\\automacao\\por-metodo"

  node sync-plane-descriptions.js --project autonr \\
    --md-dir "...\\automacao" --map maps/autonr-legacy.json --no-card-prefix
`);
}

function parseArgs(argv) {
  const args = {
    project: null,
    mdDirs: [],
    file: null,
    mapPath: null,
    cardPrefix: '[n8n]',
    noCardPrefix: false,
    glob: '*.md',
    recursive: false,
    dryRun: false,
    verbose: false,
    delayMs: 250,
    vault: null,
    help: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    const next = () => {
      const v = argv[i + 1];
      i += 1;
      return v;
    };
    switch (a) {
      case '-h':
      case '--help':
        args.help = true;
        break;
      case '--project':
        args.project = next();
        break;
      case '--md-dir':
        args.mdDirs.push(next());
        break;
      case '--file':
        args.file = next();
        break;
      case '--map':
        args.mapPath = next();
        break;
      case '--card-prefix':
        args.cardPrefix = next();
        break;
      case '--no-card-prefix':
        args.noCardPrefix = true;
        break;
      case '--glob':
        args.glob = next();
        break;
      case '--recursive':
        args.recursive = true;
        break;
      case '--dry-run':
        args.dryRun = true;
        break;
      case '--verbose':
        args.verbose = true;
        break;
      case '--delay-ms':
        args.delayMs = Number(next()) || 250;
        break;
      case '--vault':
        args.vault = next();
        break;
      default:
        break;
    }
  }
  return args;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** @param {string} content */
function readOperacaoFromFrontmatter(content) {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('---', 3);
  if (end === -1) return null;
  const block = content.slice(3, end);
  const m = block.match(/^operacao:\s*(.+)$/m);
  return m ? m[1].trim() : null;
}

/**
 * @param {string} dir
 * @param {{ glob: string, recursive: boolean, file: string|null }} opts
 */
function collectMdFiles(dir, opts) {
  const resolved = path.resolve(dir);
  if (!fs.existsSync(resolved)) {
    throw new Error(`md-dir não existe: ${resolved}`);
  }
  const out = [];
  const walk = (d) => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, ent.name);
      if (ent.isDirectory()) {
        if (opts.recursive) walk(full);
        continue;
      }
      if (!ent.name.endsWith('.md')) continue;
      if (opts.file && ent.name !== opts.file) continue;
      if (opts.glob !== '*.md' && !ent.name.match(globToRegExp(opts.glob))) continue;
      out.push(full);
    }
  };
  walk(resolved);
  return out.sort();
}

function globToRegExp(glob) {
  const escaped = glob.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.');
  return new RegExp(`^${escaped}$`, 'i');
}

/**
 * @param {object} mapJson
 * @param {string} basename
 */
function getMapEntry(mapJson, basename) {
  if (!mapJson) return null;
  return mapJson[basename] || mapJson[path.basename(basename, '.md')] || null;
}

/**
 * @param {object[]} items
 * @param {object} rule
 * @param {string} op
 * @param {object} args
 */
function findWorkItem(items, rule, op, args) {
  const nameNorm = (s) => (s || '').toLowerCase();

  if (rule?.titleIncludes) {
    const needle = rule.titleIncludes.toLowerCase();
    const found = items.filter((i) => nameNorm(i.name).includes(needle));
    if (found.length === 1) return found[0];
    if (found.length > 1) return found[0];
    return null;
  }

  if (rule?.sequenceId) {
    return items.find((i) => i.sequence_id === rule.sequenceId) || null;
  }

  if (!args.noCardPrefix && args.cardPrefix && op) {
    const re = new RegExp(
      `^${escapeRegExp(args.cardPrefix)}\\s+${escapeRegExp(op)}\\s+-`,
      'i'
    );
    return items.find((i) => re.test(i.name || '')) || null;
  }

  if (op) {
    const re = new RegExp(escapeRegExp(op), 'i');
    const found = items.filter((i) => re.test(i.name || ''));
    if (found.length >= 1) return found[0];
  }

  return null;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    process.exit(0);
  }
  if (!args.project || args.mdDirs.length === 0) {
    printHelp();
    process.exit(1);
  }

  const vaultRoot = args.vault ? path.resolve(args.vault) : VAULT_ROOT;
  const instance = loadInstanceEnv(vaultRoot);
  const project = loadProject(args.project, vaultRoot);

  let mapJson = null;
  if (args.mapPath) {
    const mp = path.isAbsolute(args.mapPath)
      ? args.mapPath
      : path.join(__dirname, args.mapPath);
    mapJson = JSON.parse(fs.readFileSync(mp, 'utf8'));
  }

  const files = [];
  for (const dir of args.mdDirs) {
    files.push(
      ...collectMdFiles(dir, {
        glob: args.glob,
        recursive: args.recursive,
        file: args.file,
      })
    );
  }

  if (files.length === 0) {
    console.error('Nenhum arquivo .md encontrado.');
    process.exit(1);
  }

  console.error(
    `Projeto: ${project.plane_identifier} (${args.project}) · ${files.length} arquivo(s) · dry-run=${args.dryRun}`
  );

  const items = await listAllWorkItems(instance, project);
  const results = { ok: [], skip: [], fail: [] };

  for (const filePath of files) {
    const basename = path.basename(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const mapEntry = getMapEntry(mapJson, basename);
    const op =
      mapEntry?.op ||
      readOperacaoFromFrontmatter(content) ||
      path.basename(filePath, '.md');

    const item = findWorkItem(items, mapEntry, op, args);
    if (!item) {
      results.skip.push({ file: basename, op, reason: 'card não encontrado no Plane' });
      continue;
    }

    const description_html = markdownToHtml(content);
    const label = `${project.plane_identifier}-${item.sequence_id}`;

    try {
      if (args.dryRun) {
        results.ok.push({
          file: basename,
          card: label,
          op,
          htmlLen: description_html.length,
          dryRun: true,
        });
      } else {
        await patchWorkItem(instance, project, item.id, { description_html });
        results.ok.push({
          file: basename,
          card: label,
          op,
          htmlLen: description_html.length,
        });
        await sleep(args.delayMs);
      }
      if (args.verbose) {
        console.error(`  OK ${label} ← ${basename} (${description_html.length} bytes)`);
      }
    } catch (e) {
      results.fail.push({ file: basename, card: label, error: e.message });
    }
  }

  console.log(JSON.stringify(results, null, 2));
  process.exit(results.fail.length > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
