const fs = require('fs');
const path = require('path');

const SCRIPTS_DIR = path.resolve(__dirname, '..');
const VAULT_ROOT = path.resolve(SCRIPTS_DIR, '..', '..', '..', '..');

/**
 * @param {string} [vaultRoot]
 */
function loadInstanceEnv(vaultRoot = VAULT_ROOT) {
  const envPath = path.join(vaultRoot, '.env');
  if (!fs.existsSync(envPath)) {
    throw new Error(`.env não encontrado: ${envPath}`);
  }
  let raw = fs.readFileSync(envPath);
  let text;
  if (raw[0] === 0xff && raw[1] === 0xfe) {
    text = raw.toString('utf16le');
  } else if (raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf) {
    text = raw.toString('utf8').slice(1);
  } else {
    text = raw.toString('utf8');
  }
  text = text.replace(/\uFEFF/g, '').replace(/\0/g, '');
  const vars = {};
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*([^#][^=]+)=(.*)$/);
    if (m) vars[m[1].trim()] = m[2].trim();
  }
  const required = ['PLANE_BASE_URL', 'PLANE_WORKSPACE', 'PLANE_API_KEY'];
  for (const k of required) {
    if (!vars[k]) throw new Error(`Variável ausente em .env: ${k}`);
  }
  return { ...vars, VAULT_ROOT: vaultRoot };
}

/**
 * @param {string} slug
 * @param {string} [vaultRoot]
 */
function loadProject(slug, vaultRoot = VAULT_ROOT) {
  const projPath = path.join(
    vaultRoot,
    'Meta',
    'integracoes',
    'plane',
    'projetos',
    `${slug}.md`
  );
  if (!fs.existsSync(projPath)) {
    throw new Error(`Projeto não encontrado: ${projPath}`);
  }
  const content = fs.readFileSync(projPath, 'utf8');
  const fm = {};
  if (content.startsWith('---')) {
    const end = content.indexOf('---', 3);
    if (end !== -1) {
      const block = content.slice(3, end).trim();
      for (const line of block.split('\n')) {
        const m = line.match(/^([\w-]+):\s*(.+)$/);
        if (m) fm[m[1]] = m[2].replace(/^["']|["']$/g, '');
      }
    }
  }
  const envBlock = {};
  const re = /^([A-Z_]+)=([^\s`]+)/gm;
  let match;
  while ((match = re.exec(content)) !== null) {
    envBlock[match[1]] = match[2];
  }
  return {
    slug,
    path: projPath,
    frontmatter: fm,
    plane_project_id:
      envBlock.PLANE_PROJECT_ID || fm.plane_project_id,
    plane_identifier:
      envBlock.PLANE_PROJECT_IDENTIFIER || fm.plane_identifier,
    plane_workspace: fm.plane_workspace || 'saas',
    env: envBlock,
  };
}

module.exports = {
  SCRIPTS_DIR,
  VAULT_ROOT,
  loadInstanceEnv,
  loadProject,
};
