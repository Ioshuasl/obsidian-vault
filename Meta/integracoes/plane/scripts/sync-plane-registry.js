#!/usr/bin/env node
/**
 * Atualiza maps/<project>-work-items.json a partir da API Plane.
 * Uso: node sync-plane-registry.js --project autonr
 */
const { loadInstanceEnv, loadProject } = require('./lib/plane-config');
const { listAllWorkItems } = require('./lib/plane-api');
const {
  buildRegistryFromItems,
  saveRegistry,
  getRegistryPath,
} = require('./lib/plane-registry');

function parseArgs(argv) {
  const args = { project: 'autonr', vault: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--project') args.project = argv[++i];
    else if (argv[i] === '--vault') args.vault = argv[++i];
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const instance = loadInstanceEnv(args.vault || undefined);
  const project = loadProject(args.project, args.vault || undefined);
  const items = await listAllWorkItems(instance, project);
  const registry = buildRegistryFromItems(items, project, instance);
  const outPath = getRegistryPath(args.project);
  saveRegistry(registry, outPath);
  console.log(
    JSON.stringify(
      {
        path: outPath,
        total: Object.keys(registry.items).length,
        done: Object.values(registry.items).filter((i) => i.automation_status === 'done')
          .length,
        pending: Object.values(registry.items).filter((i) => i.automation_status === 'pending')
          .length,
      },
      null,
      2
    )
  );
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
