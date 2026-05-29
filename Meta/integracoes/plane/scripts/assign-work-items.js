#!/usr/bin/env node
/**
 * Atribui work items ao usuário do token (GET /users/me/).
 * Uso:
 *   node assign-work-items.js --project protesto
 *   node assign-work-items.js --project protesto --filter "[Backend] - CRUD"
 *   node assign-work-items.js --project protesto --dry-run
 */
const { loadInstanceEnv, loadProject } = require('./lib/plane-config');
const {
  listAllWorkItems,
  patchWorkItem,
  getCurrentUser,
  getCurrentUserId,
} = require('./lib/plane-api');

function parseArgs(argv) {
  const args = {
    project: 'protesto',
    filter: null,
    dryRun: false,
    vault: null,
  };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--project') args.project = argv[++i];
    else if (argv[i] === '--filter') args.filter = argv[++i];
    else if (argv[i] === '--dry-run') args.dryRun = true;
    else if (argv[i] === '--vault') args.vault = argv[++i];
  }
  return args;
}

function alreadyAssigned(item, userId) {
  const list = item.assignees || [];
  return list.includes(userId);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const { VAULT_ROOT } = require('./lib/plane-config');
  const vaultRoot = args.vault || VAULT_ROOT;
  const instance = loadInstanceEnv(vaultRoot);
  const project = loadProject(args.project, vaultRoot);
  const userId = await getCurrentUserId(instance);
  const me = await getCurrentUser(instance);
  const label =
    me.display_name ||
    [me.first_name, me.last_name].filter(Boolean).join(' ') ||
    me.email;

  let items = await listAllWorkItems(instance, project);
  if (args.filter) {
    const f = args.filter.toLowerCase();
    items = items.filter((i) => (i.name || '').toLowerCase().includes(f));
  }

  const results = { actor: { id: userId, label }, assigned: [], skipped: [], fail: [] };

  for (const item of items) {
    const key = `${project.plane_identifier}-${item.sequence_id}`;
    if (alreadyAssigned(item, userId)) {
      results.skipped.push({ key, name: item.name, reason: 'já atribuído' });
      continue;
    }

    try {
      if (args.dryRun) {
        results.assigned.push({ key, name: item.name, dryRun: true });
      } else {
        await patchWorkItem(instance, project, item.id, {
          assignees: [userId],
        });
        results.assigned.push({ key, name: item.name });
        await new Promise((r) => setTimeout(r, 200));
      }
    } catch (e) {
      results.fail.push({ key, name: item.name, error: e.message });
    }
  }

  console.log(JSON.stringify(results, null, 2));
  process.exit(results.fail.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
