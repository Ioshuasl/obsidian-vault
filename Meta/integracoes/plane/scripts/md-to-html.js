#!/usr/bin/env node
/**
 * Converte markdown (Obsidian) → HTML para o Plane.
 *
 * Uso:
 *   node md-to-html.js caminho/nota.md
 *   node md-to-html.js caminho/nota.md --out saida.html
 *   node md-to-html.js caminho/nota.md --no-wrap
 *   type nota.md | node md-to-html.js --stdin
 */
const fs = require('fs');
const path = require('path');
const { markdownToHtml } = require('./lib/md-to-html');

function printHelp() {
  console.log(`Uso:
  node md-to-html.js <arquivo.md> [--out <arquivo.html>] [--no-wrap]
  node md-to-html.js --stdin [--out <arquivo.html>]

Opções:
  --out <path>     Grava HTML em arquivo (senão stdout)
  --no-wrap        Sem <div class="plane-doc">
  --stdin          Lê markdown da entrada padrão
  -h, --help       Esta ajuda
`);
}

function parseArgs(argv) {
  const args = { files: [], stdin: false, out: null, wrap: true, help: false };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '-h' || a === '--help') args.help = true;
    else if (a === '--stdin') args.stdin = true;
    else if (a === '--no-wrap') args.wrap = false;
    else if (a === '--out') {
      args.out = argv[i + 1];
      i += 1;
    } else if (!a.startsWith('-')) args.files.push(a);
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  let markdown;
  if (args.stdin) {
    markdown = fs.readFileSync(0, 'utf8');
  } else if (args.files.length === 0) {
    printHelp();
    process.exit(1);
  } else {
    const file = path.resolve(args.files[0]);
    if (!fs.existsSync(file)) {
      console.error(`Arquivo não encontrado: ${file}`);
      process.exit(1);
    }
    markdown = fs.readFileSync(file, 'utf8');
  }

  const html = markdownToHtml(markdown, { wrap: args.wrap });

  if (args.out) {
    fs.writeFileSync(path.resolve(args.out), html, 'utf8');
    console.error(`HTML gravado: ${path.resolve(args.out)} (${html.length} bytes)`);
  } else {
    process.stdout.write(html);
  }
}

main();
