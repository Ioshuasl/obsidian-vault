/**
 * @param {object} instance - loadInstanceEnv()
 * @param {string} apiPath - ex: /api/v1/workspaces/saas/projects/.../work-items/
 * @param {RequestInit} [options]
 */
async function planeRequest(instance, apiPath, options = {}) {
  const url = `${instance.PLANE_BASE_URL}${apiPath}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'X-API-Key': instance.PLANE_API_KEY,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!res.ok) {
    const msg =
      typeof data === 'string' ? data : JSON.stringify(data);
    throw new Error(`${res.status} ${apiPath}: ${msg}`);
  }
  return data;
}

/**
 * @param {object} instance
 * @param {object} project - loadProject()
 */
async function listAllWorkItems(instance, project) {
  const base = `/api/v1/workspaces/${instance.PLANE_WORKSPACE}/projects/${project.plane_project_id}/work-items/`;
  const all = [];
  let cursor = null;
  let page = 0;
  do {
    page += 1;
    const qs = new URLSearchParams({ per_page: '100' });
    if (cursor) qs.set('cursor', cursor);
    const data = await planeRequest(instance, `${base}?${qs}`);
    if (Array.isArray(data)) return data;
    if (data.results) all.push(...data.results);
    cursor = data.next_page_results ? data.next_cursor : null;
  } while (cursor && page < 50);
  return all;
}

/**
 * @param {object} instance
 * @param {object} project
 * @param {string} workItemId
 * @param {object} body
 */
async function patchWorkItem(instance, project, workItemId, body) {
  const path = `/api/v1/workspaces/${instance.PLANE_WORKSPACE}/projects/${project.plane_project_id}/work-items/${workItemId}/`;
  return planeRequest(instance, path, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}

/** Usuário dono do token em PLANE_API_KEY (quem executa as demandas). */
async function getCurrentUser(instance) {
  return planeRequest(instance, '/api/v1/users/me/');
}

/**
 * @param {object} instance
 * @returns {Promise<string>} UUID do usuário autenticado
 */
async function getCurrentUserId(instance) {
  const me = await getCurrentUser(instance);
  if (!me?.id) {
    throw new Error('Não foi possível obter id em GET /api/v1/users/me/');
  }
  return me.id;
}

module.exports = {
  planeRequest,
  listAllWorkItems,
  patchWorkItem,
  getCurrentUser,
  getCurrentUserId,
};
