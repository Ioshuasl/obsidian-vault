const fs = require('fs');
const path = require('path');
const { VAULT_ROOT } = require('./plane-config');

const LEGACY_MAP_PATH = path.join(__dirname, '..', 'maps', 'autonr-legacy.json');
const DEFAULT_REGISTRY = path.join(
  VAULT_ROOT,
  'Meta',
  'integracoes',
  'plane',
  'maps',
  'autonr-work-items.json'
);

const DONE_STATE = 'eb47829e-8e98-4a02-8951-d4bac7db2264';
const TODO_STATE = '9a73743b-e03e-4736-87a7-e5360efe61b5';

function loadLegacyMap() {
  if (!fs.existsSync(LEGACY_MAP_PATH)) return {};
  return JSON.parse(fs.readFileSync(LEGACY_MAP_PATH, 'utf8'));
}

/**
 * @param {string} name
 * @param {object} legacyMap
 */
function parseOperacaoFromCardName(name, legacyMap = {}) {
  const n8n = name.match(/^\[n8n\]\s+(\S+)\s+-/i);
  if (n8n) return n8n[1];

  const lower = name.toLowerCase();
  for (const [file, rule] of Object.entries(legacyMap)) {
    if (file.startsWith('_')) continue;
    if (rule.titleIncludes && lower.includes(rule.titleIncludes.toLowerCase())) {
      return rule.op || file.replace('.md', '');
    }
  }
  if (lower.includes('autentica')) return 'LoginUsuarioCertificado';
  if (lower.includes('censec')) return 'CENSEC_UploadJSON';
  return null;
}

function workflowFileNameToOp(fileName) {
  const base = fileName.replace(/\.workflow\.ts$/i, '').trim();
  if (/auth\s*onr/i.test(base)) return 'LoginUsuarioCertificado';

  const parts = base.split(/\s+/);
  let op = '';
  for (let i = 0; i < parts.length; i += 1) {
    const p = parts[i];
    if (p.toUpperCase() === 'V2' && i === parts.length - 1) {
      op += '_V2';
      continue;
    }
    if (/^(PO|OE|AT|AC|IN)$/i.test(p)) {
      op += p.toUpperCase();
      continue;
    }
    op += p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
  }
  return op;
}

function planeIssueUrl(projectId, sequenceId, baseUrl, workspace) {
  return `${baseUrl}/${workspace}/projects/${projectId}/issues/${sequenceId}`;
}

/**
 * @param {object[]} workItems
 * @param {object} project - loadProject()
 * @param {object} instance - loadInstanceEnv()
 */
function buildRegistryFromItems(workItems, project, instance) {
  const legacyMap = loadLegacyMap();
  const items = {};

  for (const wi of workItems) {
    const op = parseOperacaoFromCardName(wi.name || '', legacyMap);
    if (!op) continue;

    const key = project.plane_identifier || 'AUTONR';
    const seq = wi.sequence_id;
    const isDone =
      wi.state === DONE_STATE ||
      (wi.completed_at != null && wi.completed_at !== '');

    items[op] = {
      operacao: op,
      plane_work_item_id: wi.id,
      plane_sequence_id: seq,
      plane_key: `${key}-${seq}`,
      plane_url: planeIssueUrl(
        project.plane_project_id,
        seq,
        instance.PLANE_BASE_URL,
        instance.PLANE_WORKSPACE
      ),
      plane_state: wi.state,
      automation_status: isDone ? 'done' : 'pending',
      card_name: wi.name,
    };
  }

  return {
    project: project.plane_slug || 'autonr',
    plane_project_id: project.plane_project_id,
    plane_identifier: project.plane_identifier,
    plane_state_done: project.env.PLANE_STATE_DONE || DONE_STATE,
    plane_state_todo: project.env.PLANE_STATE_TODO || TODO_STATE,
    updated_at: new Date().toISOString().slice(0, 10),
    items,
  };
}

function loadRegistry(registryPath = DEFAULT_REGISTRY) {
  if (!fs.existsSync(registryPath)) return null;
  return JSON.parse(fs.readFileSync(registryPath, 'utf8'));
}

function saveRegistry(registry, registryPath = DEFAULT_REGISTRY) {
  fs.mkdirSync(path.dirname(registryPath), { recursive: true });
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf8');
}

function getRegistryPath(projectSlug) {
  return path.join(
    VAULT_ROOT,
    'Meta',
    'integracoes',
    'plane',
    'maps',
    `${projectSlug}-work-items.json`
  );
}

module.exports = {
  DEFAULT_REGISTRY,
  DONE_STATE,
  TODO_STATE,
  parseOperacaoFromCardName,
  workflowFileNameToOp,
  buildRegistryFromItems,
  loadRegistry,
  saveRegistry,
  getRegistryPath,
  planeIssueUrl,
};
