#!/usr/bin/env node
/**
 * Gera doc Obsidian + atualiza cards Plane PROTESTO a partir de postman-protesto-cruds.json
 * Uso: node sync-protesto-postman.js [--dry-run] [--mark-done]
 */
const fs = require('fs');
const path = require('path');
const { markdownToHtml } = require('./lib/md-to-html');
const { VAULT_ROOT, loadInstanceEnv, loadProject } = require('./lib/plane-config');
const { listAllWorkItems, patchWorkItem } = require('./lib/plane-api');

const MAP_PATH = path.join(__dirname, 'maps', 'postman-protesto-cruds.json');
const INDEX_DB = path.join(
  VAULT_ROOT,
  'Orius',
  'desenvolvimento',
  'banco-de-dados',
  'produtos',
  'protesto',
  '00-indice-protesto-db.md'
);
const API_INDEX = path.join(
  VAULT_ROOT,
  'Orius',
  'desenvolvimento',
  'api',
  'protesto',
  '00-indice-api-protesto.md'
);
const API_ROTAS_DIR = path.join(
  VAULT_ROOT,
  'Orius',
  'desenvolvimento',
  'api',
  'protesto',
  'rotas'
);

const STD_OPS = ['INDEX', 'SHOW', 'SAVE', 'UPDATE', 'DELETE'];

function parseArgs(argv) {
  const args = { dryRun: false, markDone: true, vault: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--dry-run') args.dryRun = true;
    else if (argv[i] === '--no-mark-done') args.markDone = false;
    else if (argv[i] === '--vault') args.vault = argv[++i];
  }
  return args;
}

function loadTablesFromIndex(indexPath) {
  const text = fs.readFileSync(indexPath, 'utf8');
  const start = text.indexOf('## Tabelas');
  const after = text.slice(start);
  const end = after.search(/\n## /);
  const section = end >= 0 ? after.slice(0, end) : after;
  const tables = [];
  const re = /\[\[[^\]|]+\|`(P_[A-Z0-9_]+)`\]\]/g;
  let m;
  while ((m = re.exec(section)) !== null) tables.push(m[1]);
  return tables;
}

function cardTitle(table) {
  return `[Backend] - CRUD ${table}`;
}

function buildTableMarkdown(table, info, allTables) {
  const implemented = info && info.endpoints?.length > 0;
  const lines = [
    '---',
    'tipo: api-rota',
    'area: orius',
    'produto: protesto',
    `tabela: ${table}`,
    `status: ${implemented && info.crudComplete ? 'implementado' : implemented ? 'parcial' : 'pendente'}`,
    'fonte: postman',
    '---',
    '',
    `# API — ${table}`,
    '',
    `> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/${table}]]`,
    `> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]`,
    '',
  ];

  if (!implemented) {
    lines.push(
      '## Status',
      '',
      '**Sem rotas** na collection Postman `Orius.postman_collection.json` (2026-05-29).',
      '',
      'Escopo planejado: INDEX, SHOW, SAVE, UPDATE, DELETE.',
      ''
    );
    return lines.join('\n');
  }

  if (info.description) {
    lines.push('## Resumo (Postman)', '', info.description, '');
  }

  if (info.prefix) {
    lines.push('## Prefixo', '', `\`${info.prefix}\``, '');
  }

  lines.push('## Endpoints', '', '| Operação | Método | Request Postman | Path |', '|----------|--------|-----------------|------|');

  const byOp = {};
  for (const ep of info.endpoints) {
    if (!byOp[ep.op] || ep.op === 'SHOW') byOp[ep.op] = ep;
  }
  for (const op of STD_OPS) {
    const ep = byOp[op];
    if (ep) {
      lines.push(`| **${op}** | ${ep.method} | ${ep.name} | \`${ep.path}\` |`);
    } else {
      lines.push(`| **${op}** | — | — | _pendente_ |`);
    }
  }

  if (info.extras?.length) {
    lines.push('', '### Rotas extras', '');
    for (const ep of info.extras) {
      lines.push(`- **${ep.name}** — \`${ep.method}\` \`${ep.path}\``);
    }
  }

  if (info.missingOps?.length) {
    lines.push('', '## Pendências', '', `Operações CRUD ainda ausentes no Postman: ${info.missingOps.join(', ')}.`, '');
  }

  lines.push('', '## Plane', '', `Card: \`[Backend] - CRUD ${table}\` (projeto PROTESTO).`, '');
  return lines.join('\n');
}

function buildCardDescription(table, info) {
  const lines = [
    `# ${table} — API backend`,
    '',
    'Implementação dos métodos **INDEX, SHOW, SAVE, UPDATE, DELETE**.',
    '',
  ];

  if (!info || !info.endpoints?.length) {
    lines.push(
      '## Status',
      '',
      '**Não encontrado** na collection Postman `Orius` — CRUD ainda não documentado/testado na API.',
      '',
      `- Schema Firebird: \`Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/${table}.md\``,
      ''
    );
    return lines.join('\n');
  }

  lines.push(
    '## Status Postman',
    '',
    info.crudComplete
      ? '**CRUD completo** na collection Postman (5 operações).'
      : `**Parcial** — faltam: ${info.missingOps.join(', ') || '—'}.`,
    ''
  );

  if (info.description) {
    lines.push('## Notas', '', info.description, '');
  }

  if (info.prefix) {
    lines.push('## Prefixo', '', `\`${info.prefix}\``, '');
  }

  lines.push('## Endpoints', '', '| Op | HTTP | Path |', '|----|------|------|');

  const sorted = [...info.endpoints].sort((a, b) => {
    const ia = STD_OPS.indexOf(a.op);
    const ib = STD_OPS.indexOf(b.op);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  for (const ep of sorted) {
    lines.push(`| ${ep.op} | ${ep.method} | \`${ep.path}\` |`);
  }

  if (info.extras?.length) {
    lines.push('', '### Extras', '');
    for (const ep of info.extras) {
      lines.push(`- \`${ep.method}\` \`${ep.path}\` (${ep.name})`);
    }
  }

  lines.push(
    '',
    '## Vault',
    '',
    `[[Orius/desenvolvimento/api/protesto/rotas/${table}]]`,
    ''
  );

  return lines.join('\n');
}

function buildApiIndex(allTables, map) {
  const implemented = allTables.filter((t) => map.byTable[t]?.endpoints?.length);
  const complete = allTables.filter((t) => map.byTable[t]?.crudComplete);
  const pending = allTables.filter((t) => !map.byTable[t]?.endpoints?.length);

  const lines = [
    '---',
    'tipo: indice-api',
    'area: orius',
    'produto: protesto',
    'tags: [orius, api, protesto, postman, backend]',
    `atualizado: ${map.parsedAt || new Date().toISOString().slice(0, 10)}`,
    '---',
    '',
    '# API Protesto — rotas backend',
    '',
    '> Fonte: `C:\\Users\\kenio\\Downloads\\Orius.postman_collection.json`',
    '> Base: `{{BaseUrlV1}}administrativo/`',
    '',
    '## Resumo',
    '',
    `| Métrica | Qtd |`,
    `|---------|-----|`,
    `| Tabelas Firebird (\`P_*\`) | ${allTables.length} |`,
    `| Com rotas no Postman | ${implemented.length} |`,
    `| CRUD completo (5 ops) | ${complete.length} |`,
    `| Sem API no Postman ainda | ${pending.length} |`,
    '',
    '## Implementadas (Postman)',
    '',
    '| Tabela | CRUD | Nota |',
    '|--------|------|------|',
  ];

  for (const t of implemented.sort()) {
    const info = map.byTable[t];
    const status = info.crudComplete ? 'completo' : `parcial (${info.missingOps.join(', ')})`;
    lines.push(
      `| \`${t}\` | ${status} | [[Orius/desenvolvimento/api/protesto/rotas/${t}]] |`
    );
  }

  lines.push('', '## Pendentes de API', '', '| Tabela | Plane |', '|--------|-------|');
  for (const t of pending.sort()) {
    lines.push(`| \`${t}\` | PROTESTO — CRUD ${t} |`);
  }

  lines.push(
    '',
    '## Relacionado',
    '',
    '- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]',
    '- [[Orius/empresa/produtos/tabelionato-protesto]]',
    '- [[Meta/integracoes/plane/projetos/protesto]]',
    '- JSON: `Meta/integracoes/plane/scripts/maps/postman-protesto-cruds.json`',
    ''
  );

  return lines.join('\n');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const vaultRoot = args.vault || VAULT_ROOT;

  if (!fs.existsSync(MAP_PATH)) {
    throw new Error(`Execute antes: node parse-postman-protesto.js → ${MAP_PATH}`);
  }

  const map = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));
  const allTables = loadTablesFromIndex(INDEX_DB);

  fs.mkdirSync(API_ROTAS_DIR, { recursive: true });

  for (const table of allTables) {
    const info = map.byTable[table] || null;
    const md = buildTableMarkdown(table, info, allTables);
    const out = path.join(API_ROTAS_DIR, `${table}.md`);
    if (!args.dryRun) fs.writeFileSync(out, md, 'utf8');
  }

  const indexMd = buildApiIndex(allTables, map);
  if (!args.dryRun) {
    fs.mkdirSync(path.dirname(API_INDEX), { recursive: true });
    fs.writeFileSync(API_INDEX, indexMd, 'utf8');
  }

  const instance = loadInstanceEnv(vaultRoot);
  const project = loadProject('protesto', vaultRoot);
  const stateDone = project.env.PLANE_STATE_DONE;
  const items = await listAllWorkItems(instance, project);
  const planeResults = { updated: [], markedDone: [], skipped: [], fail: [] };

  for (const table of allTables) {
    const title = cardTitle(table);
    const wi = items.find((i) => (i.name || '').trim() === title);
    if (!wi) {
      planeResults.skipped.push({ table, reason: 'card não encontrado' });
      continue;
    }

    const info = map.byTable[table] || null;
    const md = buildCardDescription(table, info);
    const description_html = markdownToHtml(md);

    try {
      if (!args.dryRun) {
        await patchWorkItem(instance, project, wi.id, { description_html });
        planeResults.updated.push({
          key: `${project.plane_identifier}-${wi.sequence_id}`,
          table,
        });

        if (args.markDone && info?.crudComplete && stateDone) {
          await patchWorkItem(instance, project, wi.id, { state: stateDone });
          planeResults.markedDone.push({
            key: `${project.plane_identifier}-${wi.sequence_id}`,
            table,
          });
        }
        await new Promise((r) => setTimeout(r, 600));
      } else {
        planeResults.updated.push({ table, dryRun: true, crudComplete: !!info?.crudComplete });
      }
    } catch (e) {
      planeResults.fail.push({ table, error: e.message });
    }
  }

  console.log(
    JSON.stringify(
      {
        vault: { apiIndex: API_INDEX, rotasDir: API_ROTAS_DIR, tables: allTables.length },
        plane: planeResults,
        dryRun: args.dryRun,
      },
      null,
      2
    )
  );
  process.exit(planeResults.fail.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
