const { marked } = require('marked');

/**
 * Remove YAML frontmatter do Obsidian.
 * @param {string} text
 * @returns {string}
 */
function stripFrontmatter(text) {
  if (!text || !text.startsWith('---')) return text || '';
  const end = text.indexOf('---', 3);
  if (end === -1) return text;
  return text.slice(end + 3).trimStart();
}

/**
 * Wikilinks Obsidian → texto legível para o Plane.
 * @param {string} md
 * @returns {string}
 */
function normalizeObsidian(md) {
  return md
    .replace(/\r\n/g, '\n')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, (_, p) => p.split('/').pop());
}

/**
 * Converte markdown (vault) em HTML para description_html do Plane.
 * @param {string} markdown
 * @param {{ wrap?: boolean }} [opts]
 * @returns {string}
 */
function markdownToHtml(markdown, opts = {}) {
  const wrap = opts.wrap !== false;
  const body = normalizeObsidian(stripFrontmatter(markdown)).trim();
  const html = marked.parse(body, { gfm: true, breaks: false });
  return wrap ? `<div class="plane-doc">${html}</div>` : html;
}

module.exports = {
  stripFrontmatter,
  normalizeObsidian,
  markdownToHtml,
};
