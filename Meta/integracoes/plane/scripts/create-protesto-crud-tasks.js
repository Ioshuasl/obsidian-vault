#!/usr/bin/env node
/**
 * Cria cards [Backend] - CRUD P_* no projeto PROTESTO (uma por tabela do índice).
 * Uso: node create-protesto-crud-tasks.js [--dry-run]
 */
const fs = require('fs');
const path = require('path');
const { markdownToHtml } = require('./lib/md-to-html');
const { VAULT_ROOT, loadInstanceEnv, loadProject } = require('./lib/plane-config');
const {
  listAllWorkItems,
  planeRequest,
  getCurrentUserId,
} = require('./lib/plane-api');

const INDEX_PATH = path.join(
  VAULT_ROOT,
  'Orius',
  'desenvolvimento',
  'banco-de-dados',
  'produtos',
  'protesto',
  '00-indice-protesto-db.md'
);

const DESCRIPTION =
  'Implementação dos métodos INDEX, SHOW, SAVE, UPDATE, DELETE';

function parseArgs(argv) {
  const args = { dryRun: false, vault: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--dry-run') args.dryRun = true;
    else if (argv[i] === '--vault') args.vault = argv[++i];
  }
  return args;
}

function loadTablesFromIndex(indexPath) {
  const text = fs.readFileSync(indexPath, 'utf8');
  const start = text.indexOf('## Tabelas');
  if (start < 0) throw new Error('Seção ## Tabelas não encontrada no índice');
  const after = text.slice(start);
  const end = after.search(/\n## /);
  const section = end >= 0 ? after.slice(0, end) : after;

  const tables = [];
  const re = /\[\[[^\]|]+\|`(P_[A-Z0-9_]+)`\]\]/g;
  let m;
  while ((m = re.exec(section)) !== null) {
    tables.push(m[1]);
  }
  if (tables.length === 0) {
    throw new Error('Nenhuma tabela encontrada na seção ## Tabelas');
  }
  return tables.sort();
}

function cardTitle(table) {
  return `[Backend] - CRUD ${table}`;
}

function hasCardForTable(items, table) {
  const title = cardTitle(table);
  return items.some((i) => (i.name || '').trim() === title);
}

async function createWorkItem(instance, project, body) {
  const apiPath = `/api/v1/workspaces/${instance.PLANE_WORKSPACE}/projects/${project.plane_project_id}/work-items/`;
  return planeRequest(instance, apiPath, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const vaultRoot = args.vault || VAULT_ROOT;
  const instance = loadInstanceEnv(vaultRoot);
  const project = loadProject('protesto', vaultRoot);
  const stateTodo =
    project.env.PLANE_STATE_TODO || '7aad5c7b-f949-4dba-b78c-6d9083bedb7b';

  if (!fs.existsSync(INDEX_PATH)) {
    throw new Error(`Índice não encontrado: ${INDEX_PATH}`);
  }

  const tables = loadTablesFromIndex(INDEX_PATH);
  const description_html = markdownToHtml(DESCRIPTION);
  const items = await listAllWorkItems(instance, project);
  const results = { created: [], skipped: [], fail: [], tables: tables.length };

  for (const table of tables) {
    const name = cardTitle(table);
    if (hasCardForTable(items, table)) {
      results.skipped.push({ table, reason: 'card já existe' });
      continue;
    }

    const payload = {
      name,
      description_html,
      priority: 'medium',
      state: stateTodo,
      assignees: [assigneeId],
    };

    try {
      if (args.dryRun) {
        results.created.push({ table, name, dryRun: true });
      } else {
        const created = await createWorkItem(instance, project, payload);
        results.created.push({
          table,
          key: `${project.plane_identifier}-${created.sequence_id}`,
          name,
        });
        await new Promise((r) => setTimeout(r, 250));
      }
    } catch (e) {
      results.fail.push({ table, error: e.message });
    }
  }

  console.log(JSON.stringify(results, null, 2));
  process.exit(results.fail.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
