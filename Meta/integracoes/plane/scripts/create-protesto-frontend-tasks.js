#!/usr/bin/env node
/**
 * Cards [Frontend] - CRUD P_* para tabelas com API Postman implementada.
 * Uso:
 *   node create-protesto-frontend-tasks.js [--dry-run]
 *   node create-protesto-frontend-tasks.js --mark-done   # padrão: concluído
 *   node create-protesto-frontend-tasks.js --state todo  # só criar backlog
 */
const fs = require('fs');
const path = require('path');
const { markdownToHtml } = require('./lib/md-to-html');
const { VAULT_ROOT, loadInstanceEnv, loadProject } = require('./lib/plane-config');
const {
  listAllWorkItems,
  planeRequest,
  patchWorkItem,
  getCurrentUserId,
} = require('./lib/plane-api');

const MAP_PATH = path.join(__dirname, 'maps', 'postman-protesto-cruds.json');
const FRONTEND_INDEX = path.join(
  VAULT_ROOT,
  'Orius',
  'desenvolvimento',
  'frontend',
  'protesto',
  '00-indice-frontend-protesto.md'
);
const FRONTEND_TELAS = path.join(
  VAULT_ROOT,
  'Orius',
  'desenvolvimento',
  'frontend',
  'protesto',
  'telas'
);

const SCREENS = ['LIST', 'SHOW', 'CREATE', 'EDIT', 'DELETE'];

function parseArgs(argv) {
  const args = { dryRun: false, markDone: true, state: null, vault: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--dry-run') args.dryRun = true;
    else if (argv[i] === '--no-mark-done') args.markDone = false;
    else if (argv[i] === '--mark-done') args.markDone = true;
    else if (argv[i] === '--state') args.state = argv[++i];
    else if (argv[i] === '--vault') args.vault = argv[++i];
  }
  return args;
}

function loadImplementedTables() {
  if (!fs.existsSync(MAP_PATH)) {
    throw new Error(`Mapa Postman ausente: ${MAP_PATH}`);
  }
  const map = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));
  return (map.implemented || map.tables || []).slice().sort();
}

function cardTitle(table) {
  return `[Frontend] - CRUD ${table}`;
}

function hasCard(items, table) {
  return items.some((i) => (i.name || '').trim() === cardTitle(table));
}

function buildFrontendTableMd(table, map) {
  const api = map?.byTable?.[table];
  const lines = [
    '---',
    'tipo: frontend-tela',
    'area: orius',
    'produto: protesto',
    `tabela: ${table}`,
    'status: implementado',
    '---',
    '',
    `# Frontend — ${table}`,
    '',
    `> API: [[Orius/desenvolvimento/api/protesto/rotas/${table}]]`,
    `> Índice: [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]]`,
    `> Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/${table}]]`,
    '',
    '## Escopo entregue',
    '',
    '| Tela / fluxo | Operação API |',
    '|--------------|--------------|',
    '| Listagem paginada com filtros | INDEX |',
    '| Detalhe do registro | SHOW |',
    '| Formulário de inclusão | SAVE |',
    '| Formulário de alteração | UPDATE |',
    '| Confirmação e exclusão | DELETE |',
    '',
  ];

  if (api?.prefix) {
    lines.push('## API consumida', '', `\`${api.prefix}\``, '');
  }
  if (api?.extras?.length) {
    lines.push('## Fluxos extras na UI', '');
    for (const ep of api.extras) {
      lines.push(`- **${ep.name}** — integração com \`${ep.method} ${ep.path}\``);
    }
    lines.push('');
  }

  lines.push(
    '## Plane',
    '',
    `- Backend: \`[Backend] - CRUD ${table}\` (Done)`,
    `- Frontend: \`[Frontend] - CRUD ${table}\` (Done)`,
    ''
  );
  return lines.join('\n');
}

function buildCardMarkdown(table, map) {
  const api = map?.byTable?.[table];
  const lines = [
    `# ${table} — Frontend (SaaS Protesto)`,
    '',
    'Telas CRUD web integradas à API administrativo, espelhando o backend já concluído.',
    '',
    '## Telas',
    '',
    '| Fluxo | Descrição | API |',
    '|-------|-----------|-----|',
    '| **LIST** | Grid paginado, ordenação e filtros do INDEX | GET INDEX |',
    '| **SHOW** | Visualização read-only do registro | GET SHOW |',
    '| **CREATE** | Formulário de inclusão | POST SAVE |',
    '| **EDIT** | Formulário de edição | PUT UPDATE |',
    '| **DELETE** | Ação de exclusão com confirmação | DELETE |',
    '',
  ];

  if (api?.endpoints?.length) {
    lines.push('## Endpoints consumidos', '', '| Op | HTTP | Path |', '|----|------|------|');
    for (const ep of api.endpoints) {
      lines.push(`| ${ep.op} | ${ep.method} | \`${ep.path}\` |`);
    }
    lines.push('');
  }
  if (api?.extras?.length) {
    lines.push('## UI adicional', '');
    for (const ep of api.extras) {
      lines.push(`- ${ep.name}: \`${ep.method} ${ep.path}\``);
    }
    lines.push('');
  }

  lines.push(
    '## Documentação',
    '',
    `- [[Orius/desenvolvimento/frontend/protesto/telas/${table}]]`,
    `- [[Orius/desenvolvimento/api/protesto/rotas/${table}]]`,
    ''
  );
  return lines.join('\n');
}

function buildFrontendIndex(tables, map) {
  const lines = [
    '---',
    'tipo: indice-frontend',
    'area: orius',
    'produto: protesto',
    'tags: [orius, frontend, protesto, crud]',
    `atualizado: ${new Date().toISOString().slice(0, 10)}`,
    '---',
    '',
    '# Frontend Protesto — telas CRUD',
    '',
    '> Paridade com backend/API documentados em [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]].',
    '',
    '## Resumo',
    '',
    `| Telas CRUD concluídas | ${tables.length} |`,
    `| Backend correspondente | Done (mesmas tabelas) |`,
    '',
    '## Implementadas',
    '',
    '| Tabela | Tela | API | Plane |',
    '|--------|------|-----|-------|',
  ];

  for (const t of tables) {
    lines.push(
      `| \`${t}\` | [[Orius/desenvolvimento/frontend/protesto/telas/${t}]] | [[Orius/desenvolvimento/api/protesto/rotas/${t}]] | FE + BE Done |`
    );
  }

  lines.push(
    '',
    '## Pendentes (sem API ainda)',
    '',
    'Demais tabelas `P_*` aguardam backend — ver seção *Pendentes* em [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]].',
    '',
    '## Relacionado',
    '',
    '- [[Orius/empresa/produtos/tabelionato-protesto]]',
    '- [[Meta/integracoes/plane/projetos/protesto]]',
    ''
  );
  return lines.join('\n');
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
  const tables = loadImplementedTables();
  const map = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));

  fs.mkdirSync(FRONTEND_TELAS, { recursive: true });
  if (!args.dryRun) {
    fs.writeFileSync(
      FRONTEND_INDEX,
      buildFrontendIndex(tables, map),
      'utf8'
    );
    for (const table of tables) {
      fs.writeFileSync(
        path.join(FRONTEND_TELAS, `${table}.md`),
        buildFrontendTableMd(table, map),
        'utf8'
      );
    }
  }

  const instance = loadInstanceEnv(vaultRoot);
  const project = loadProject('protesto', vaultRoot);
  const assigneeId = await getCurrentUserId(instance);
  const stateTodo = project.env.PLANE_STATE_TODO;
  const stateDone = project.env.PLANE_STATE_DONE;
  const targetState = args.state
    ? args.state === 'done'
      ? stateDone
      : stateTodo
    : args.markDone
      ? stateDone
      : stateTodo;

  const items = await listAllWorkItems(instance, project);
  const results = {
    tables: tables.length,
    vault: FRONTEND_INDEX,
    assignee_id: assigneeId,
    target_state: args.markDone ? 'done' : 'todo',
    created: [],
    updated: [],
    skipped: [],
    fail: [],
  };

  for (const table of tables) {
    const name = cardTitle(table);
    const description_html = markdownToHtml(buildCardMarkdown(table, map));
    const existing = items.find((i) => (i.name || '').trim() === name);

    try {
      if (args.dryRun) {
        results.created.push({ table, name, dryRun: true });
        continue;
      }

      if (existing) {
        await patchWorkItem(instance, project, existing.id, {
          description_html,
          assignees: [assigneeId],
          state: targetState,
        });
        results.updated.push({
          key: `${project.plane_identifier}-${existing.sequence_id}`,
          table,
        });
      } else {
        const created = await createWorkItem(instance, project, {
          name,
          description_html,
          priority: 'medium',
          state: targetState,
          assignees: [assigneeId],
        });
        results.created.push({
          key: `${project.plane_identifier}-${created.sequence_id}`,
          table,
        });
      }
      await new Promise((r) => setTimeout(r, 650));
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
