#!/usr/bin/env node
/**
 * Extrai CRUDs p_* da collection Postman Orius.
 */
const fs = require('fs');
const path = require('path');

const COLLECTION =
  process.argv[2] ||
  'C:\\Users\\kenio\\Downloads\\Orius.postman_collection.json';

const STD_OPS = ['INDEX', 'SHOW', 'SAVE', 'UPDATE', 'DELETE'];

function normalizePath(raw) {
  if (!raw) return '';
  let p = raw
    .replace(/\{\{BaseUrlV1\}\}/gi, '')
    .replace(/\{\{[^}]+\}\}/g, '{id}')
    .replace(/\/+/g, '/')
    .replace(/\/$/, '');
  const q = p.indexOf('?');
  if (q >= 0) p = p.slice(0, q);
  return p;
}

function tableFromPath(raw) {
  const m = raw.match(/\/(p_[a-z0-9_]+)/i);
  return m ? m[1].toUpperCase() : null;
}

function opFromRequestName(name, method, pathNorm) {
  const n = (name || '').toLowerCase();
  // Sub-recursos: /p_titulo/{id}/selos, /p_andamento/titulo/{id}, etc.
  if (/\/\{id\}\/[^/]+/i.test(pathNorm) || /\/titulo\/\{id\}/i.test(pathNorm)) {
    return 'EXTRA';
  }
  if (!['all', 'index', 'create', 'save', 'get', 'show', 'update', 'delete'].includes(n)) {
    return 'EXTRA';
  }
  if (n === 'all' || n === 'index') return 'INDEX';
  if (n === 'create' || n === 'save') return 'SAVE';
  if (n === 'get' || n === 'show') return 'SHOW';
  if (n === 'update') return 'UPDATE';
  if (n === 'delete') return 'DELETE';
  if (method === 'GET') {
    if (/\/\{id\}$/i.test(pathNorm) || /\/\{id\}\/$/i.test(pathNorm)) return 'SHOW';
    return 'INDEX';
  }
  if (method === 'POST') return 'SAVE';
  if (method === 'PUT' || method === 'PATCH') return 'UPDATE';
  if (method === 'DELETE') return 'DELETE';
  return 'EXTRA';
}

function walk(items, ctx = {}) {
  const out = [];
  for (const it of items || []) {
    const folderDesc = it.description || ctx.folderDesc || '';
    const folderName = it.name || ctx.folderName || '';

    if (it.request) {
      const url = it.request.url;
      let raw = '';
      if (typeof url === 'string') raw = url;
      else if (url) raw = url.raw || '';
      const pathNorm = normalizePath(raw);
      const table = tableFromPath(pathNorm);
      if (!table) continue;

      const method = (it.request.method || 'GET').toUpperCase();
      const op = opFromRequestName(it.name, method, pathNorm);

      out.push({
        table,
        folderName,
        folderDesc,
        requestName: it.name,
        method,
        op,
        path: pathNorm,
      });
    }

    if (it.item) {
      out.push(
        ...walk(it.item, {
          folderName: it.name,
          folderDesc: it.description || folderDesc,
        })
      );
    }
  }
  return out;
}

function tableFromCrudDescription(desc) {
  const m = (desc || '').match(/CRUD\s+(P_[A-Z0-9_]+)/i);
  return m ? m[1].toUpperCase() : null;
}

function buildByTable(rows) {
  const byTable = {};

  for (const r of rows) {
    if (!byTable[r.table]) {
      byTable[r.table] = {
        table: r.table,
        prefix: '',
        description: '',
        folderName: r.folderName,
        endpoints: [],
        extras: [],
        ops: {},
      };
    }
    const t = byTable[r.table];
    if (r.folderDesc && !t.description) t.description = r.folderDesc.trim();
    if (!t.folderName) t.folderName = r.folderName;

    const prefixMatch = r.path.match(/^(.*\/p_[a-z0-9_]+)/i);
    if (prefixMatch) t.prefix = `/${prefixMatch[1]}`;

    const ep = {
      op: r.op,
      method: r.method,
      name: r.requestName,
      path: r.path,
    };

    if (r.op === 'EXTRA') t.extras.push(ep);
    else {
      const key = `${r.op}:${r.method}:${r.path}`;
      if (!t.ops[key]) {
        t.ops[key] = ep;
        t.endpoints.push(ep);
      }
    }
  }

  for (const t of Object.values(byTable)) {
    const have = new Set(t.endpoints.map((e) => e.op));
    t.crudComplete = STD_OPS.every((o) => have.has(o));
    t.missingOps = STD_OPS.filter((o) => !have.has(o));
  }

  return byTable;
}

function extractDescriptionsFromJson(text) {
  const map = {};
  const re = /"description":\s*"(CRUD P_[^"]+)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const table = tableFromCrudDescription(m[1]);
    if (table) map[table] = m[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
  }
  return map;
}

function main() {
  const rawText = fs.readFileSync(COLLECTION, 'utf8');
  const col = JSON.parse(rawText);
  const rows = walk(col.item);
  const byTable = buildByTable(rows);
  const descMap = extractDescriptionsFromJson(rawText);

  for (const [table, desc] of Object.entries(descMap)) {
    if (!byTable[table]) {
      byTable[table] = {
        table,
        prefix: desc.match(/prefix\s+(\/administrativo\/p_[a-z0-9_]+)/i)?.[1] || '',
        description: desc,
        folderName: '',
        endpoints: [],
        extras: [],
        ops: {},
        crudComplete: false,
        missingOps: [...STD_OPS],
      };
    } else if (!byTable[table].description) {
      byTable[table].description = desc;
    }
  }

  const tables = Object.keys(byTable).sort();
  const summary = {
    collection: path.basename(COLLECTION),
    parsedAt: new Date().toISOString().slice(0, 10),
    basePath: '/administrativo',
    tablesFound: tables.length,
    tables,
    implemented: tables.filter((t) => byTable[t].crudComplete),
    partial: tables.filter((t) => !byTable[t].crudComplete && byTable[t].endpoints.length),
    byTable,
  };

  const outPath = path.join(__dirname, 'maps', 'postman-protesto-cruds.json');
  fs.writeFileSync(outPath, JSON.stringify(summary, null, 2), 'utf8');
  console.log(
    JSON.stringify(
      {
        outPath,
        tablesFound: tables.length,
        complete: summary.implemented.length,
        partial: summary.partial.length,
        tables,
      },
      null,
      2
    )
  );
}

main();
