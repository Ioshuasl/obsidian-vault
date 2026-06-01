#!/usr/bin/env node
/**
 * Grava referências Plane no frontmatter e seção ## Plane dos .md do vault.
 * Uso: node link-vault-plane.js --project autonr
 */
const fs = require('fs');
const path = require('path');
const { VAULT_ROOT } = require('./lib/plane-config');
const { loadRegistry, getRegistryPath } = require('./lib/plane-registry');

const WSOFICIO = path.join(
  VAULT_ROOT,
  'Orius',
  'integracoes',
  'registro-imoveis',
  'onr',
  'webservice-wsoficio'
);

function parseArgs(argv) {
  const args = { project: 'autonr' };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--project') args.project = argv[++i];
  }
  return args;
}

function findMdForOp(op) {
  if (op === 'LoginUsuarioCertificado') {
    const p = path.join(WSOFICIO, 'automacao', 'auth-n8n.md');
    if (fs.existsSync(p)) return p;
  }
  if (op === 'CENSEC_UploadJSON') {
    const p = path.join(
      VAULT_ROOT,
      'Orius',
      'integracoes',
      'tabelionato-notas',
      'censec',
      'automacao',
      'n8n-upload-json-gateway.md'
    );
    if (fs.existsSync(p)) return p;
  }
  if (op === 'DOI_ValidateJSON') {
    const p = path.join(
      VAULT_ROOT,
      'Orius',
      'integracoes',
      'tabelionato-notas',
      'doi',
      'automacao',
      'n8n-validate-json-gateway.md'
    );
    if (fs.existsSync(p)) return p;
  }
  const porMetodo = path.join(WSOFICIO, 'automacao', 'por-metodo', `${op}.md`);
  if (fs.existsSync(porMetodo)) return porMetodo;
  const metodosRoot = path.join(WSOFICIO, 'metodos');
  const stack = [metodosRoot];
  while (stack.length) {
    const dir = stack.pop();
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) stack.push(full);
      else if (ent.name === `${op}.md`) return full;
    }
  }
  return null;
}

function upsertFrontmatter(content, fields) {
  const lines = {};
  for (const [k, v] of Object.entries(fields)) {
    if (v != null && v !== '') lines[k] = String(v);
  }

  if (!content.startsWith('---')) {
    const fm = ['---', ...Object.entries(lines).map(([k, v]) => `${k}: ${v}`), '---', ''];
    return fm.join('\n') + content;
  }

  const end = content.indexOf('---', 3);
  if (end === -1) return content;
  const fmBlock = content.slice(3, end).trim();
  const body = content.slice(end + 3).replace(/^\s+/, '');
  const existing = {};
  for (const line of fmBlock.split('\n')) {
    const m = line.match(/^([\w-]+):\s*(.*)$/);
    if (m) existing[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  Object.assign(existing, lines);
  const newFm = [
    '---',
    ...Object.entries(existing).map(([k, v]) => `${k}: ${v}`),
    '---',
    '',
  ].join('\n');
  const cleanBody = body.replace(/^---\s*##/, '##').replace(/^## Plane/, '## Plane');
  return newFm + (cleanBody.startsWith('\n') ? cleanBody.trimStart() : cleanBody);
}

function upsertPlaneSection(body, entry) {
  const section = `## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **${entry.plane_key}** |
| Work item ID | \`${entry.plane_work_item_id}\` |
| URL | ${entry.plane_url} |
| Automação | \`${entry.automation_status}\` |

`;

  const re = /## Plane \(gestão\)[\s\S]*?(?=\n## |\n# |$)/;
  if (re.test(body)) {
    return body.replace(re, section);
  }
  const quoteEnd = body.indexOf('\n# ');
  if (body.startsWith('>') && quoteEnd !== -1) {
    return body.slice(0, quoteEnd + 1) + '\n' + section + body.slice(quoteEnd + 1);
  }
  return section + body;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const registryPath = getRegistryPath(args.project);
  const registry = loadRegistry(registryPath);
  if (!registry) {
    console.error(`Registry não encontrado. Rode: node sync-plane-registry.js --project ${args.project}`);
    process.exit(1);
  }

  const results = { updated: [], missing_md: [] };

  for (const [op, entry] of Object.entries(registry.items)) {
    const mdPath = findMdForOp(op);
    if (!mdPath) {
      results.missing_md.push(op);
      continue;
    }

    let content = fs.readFileSync(mdPath, 'utf8');
    content = upsertFrontmatter(content, {
      operacao: op,
      plane_work_item_id: entry.plane_work_item_id,
      plane_sequence_id: entry.plane_sequence_id,
      plane_key: entry.plane_key,
      plane_url: entry.plane_url,
      plane_automation_status: entry.automation_status,
    });
    const endFm = content.indexOf('---', 3);
    const bodyStart = endFm === -1 ? 0 : endFm + 3;
    const body = content.slice(bodyStart).replace(/^\s+/, '');
    const newBody = upsertPlaneSection(body, entry);
    content = content.slice(0, bodyStart) + newBody;
    fs.writeFileSync(mdPath, content, 'utf8');
    results.updated.push({ op, path: mdPath, plane_key: entry.plane_key });
  }

  console.log(JSON.stringify(results, null, 2));
}

main();
