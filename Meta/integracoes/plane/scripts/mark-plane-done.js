#!/usr/bin/env node
/**
 * Marca card Plane como Done quando a automação n8n existir.
 *
 * Uso:
 *   node mark-plane-done.js --project autonr --op ListBoletosPO
 *   node mark-plane-done.js --project autonr --scan-workflows
 *   node mark-plane-done.js --project autonr --plane-key AUTONR-38
 */
const fs = require('fs');
const path = require('path');
const { loadInstanceEnv, loadProject } = require('./lib/plane-config');
const { patchWorkItem } = require('./lib/plane-api');
const {
  loadRegistry,
  getRegistryPath,
  DONE_STATE,
  workflowFileNameToOp,
} = require('./lib/plane-registry');

const N8N_ROOT = 'C:\\Users\\kenio\\soap-ui test\\workflows\\n8n';
const CENSEC_WORKFLOW =
  'C:\\Users\\kenio\\soap-ui test\\workflows\\n8n-censec\\censec-upload-json.workflow.ts';

function parseArgs(argv) {
  const args = {
    project: 'autonr',
    op: null,
    planeKey: null,
    scanWorkflows: false,
    dryRun: false,
    syncDoc: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--project') args.project = argv[++i];
    else if (a === '--op') args.op = argv[++i];
    else if (a === '--plane-key') args.planeKey = argv[++i];
    else if (a === '--scan-workflows') args.scanWorkflows = true;
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--sync-doc') args.syncDoc = true;
  }
  return args;
}

function collectWorkflowOps() {
  const ops = new Set();
  if (!fs.existsSync(N8N_ROOT)) return ops;
  for (const dir of fs.readdirSync(N8N_ROOT, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    const folder = path.join(N8N_ROOT, dir.name);
    for (const f of fs.readdirSync(folder)) {
      if (f.endsWith('.workflow.ts')) {
        ops.add(workflowFileNameToOp(f));
      }
    }
  }
  if (fs.existsSync(CENSEC_WORKFLOW)) ops.add('CENSEC_UploadJSON');
  return ops;
}

function findEntry(registry, args) {
  if (args.planeKey) {
    return Object.values(registry.items).find((e) => e.plane_key === args.planeKey);
  }
  if (args.op) return registry.items[args.op];
  return null;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const registryPath = getRegistryPath(args.project);
  const registry = loadRegistry(registryPath);
  if (!registry) {
    console.error(`Registry ausente. Rode: node sync-plane-registry.js --project ${args.project}`);
    process.exit(1);
  }

  const instance = loadInstanceEnv();
  const project = loadProject(args.project);
  const doneState = registry.plane_state_done || DONE_STATE;

  let targets = [];

  if (args.scanWorkflows) {
    const workflowOps = collectWorkflowOps();
    for (const op of workflowOps) {
      const entry = registry.items[op];
      if (entry && entry.automation_status !== 'done') targets.push({ op, entry });
    }
  } else {
    const entry = findEntry(registry, args);
    if (!entry) {
      console.error('Card não encontrado no registry.');
      process.exit(1);
    }
    targets.push({ op: entry.operacao, entry });
  }

  const results = { done: [], skipped: [], fail: [] };

  for (const { op, entry } of targets) {
    if (entry.automation_status === 'done' && entry.plane_state === doneState) {
      results.skipped.push({ op, plane_key: entry.plane_key, reason: 'já Done' });
      continue;
    }

    try {
      if (!args.dryRun) {
        await patchWorkItem(instance, project, entry.plane_work_item_id, {
          state: doneState,
        });
        entry.automation_status = 'done';
        entry.plane_state = doneState;
        registry.items[op] = entry;
      }
      results.done.push({ op, plane_key: entry.plane_key, dryRun: args.dryRun });
    } catch (e) {
      results.fail.push({ op, error: e.message });
    }
  }

  if (!args.dryRun && results.done.length) {
    const { saveRegistry } = require('./lib/plane-registry');
    saveRegistry(registry, registryPath);
  }

  if (args.syncDoc && results.done.length && !args.dryRun) {
    const { execSync } = require('child_process');
    const scriptDir = __dirname;
    for (const { op } of results.done) {
      try {
        execSync(
          `node "${path.join(scriptDir, 'sync-plane-descriptions.js')}" --project ${args.project} --file ${op}.md --md-dir "${path.join('C:\\Users\\kenio\\OneDrive\\Documentos\\Obsidian Vault\\Orius\\integracoes\\registro-imoveis\\onr\\webservice-wsoficio\\automacao\\por-metodo')}"`,
          { stdio: 'ignore' }
        );
      } catch {
        /* por-metodo pode não existir ainda */
      }
    }
  }

  console.log(JSON.stringify(results, null, 2));
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
