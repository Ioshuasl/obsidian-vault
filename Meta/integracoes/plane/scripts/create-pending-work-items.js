#!/usr/bin/env node
/**
 * Cria cards no Plane para operações WSOficio sem automação n8n concluída.
 * Uso: node create-pending-work-items.js --project autonr [--dry-run]
 */
const fs = require('fs');
const path = require('path');
const { markdownToHtml } = require('./lib/md-to-html');
const { VAULT_ROOT, loadInstanceEnv, loadProject } = require('./lib/plane-config');
const { listAllWorkItems, planeRequest } = require('./lib/plane-api');

const DONE_OPS = new Set([
  'LoginUsuarioCertificado',
  'ListTitulosAT', 'ListStatusAT', 'GetTituloAT', 'GetStatusAT',
  'InsertTituloAT', 'UpdateTituloAT', 'DeleteTituloAT', 'InsertStatusAT', 'UpdateStatusAT',
  'ListPedidosPO', 'ListVarasPO', 'GetPedidoPO', 'SetBaixaBoletoPO', 'SetPrenotacaoPO',
  'SetCustasPO', 'SetPenhoraAverbadoPO', 'SetPenhoraExigenciaPO',
  'SetPedidoPessoaRespondidoPO', 'SetPedidoPessoaDevolvidoPO',
  'SetPedidoMatriculaRespondidoPO', 'SetPedidoMatriculaDevolvidoPO',
  'SetPedidoNegativaLotePO', 'ListPedidosExportacaoPO', 'SetPedidoFinalizarPrenotacaoVencida',
  'GetPedidoOE', 'ListInstituicoesOE', 'ListPedidosOE', 'ListPedidosOE_V2',
  'SetPedidoRespondidoOE', 'SetPedidoDevolvidoOE', 'SetPedidoRetransmitidoOE',
  'SetPedidoNegativaLoteOE', 'ListCartoriosRestransmitirOE',
]);

/** Operações com n8n/script mas ainda sem card “concluído” — forçar se já existir card Done duplicado */
const PENDING_OPS = [
  'ListBoletosPO',
  'ListPedidosExportacaoPO_v2',
  'ListArquivosXMLBDL', 'GetArquivoXMLBDL', 'ImportarArquivoBDL', 'SetBDLightAtualizado',
  'ObterXMLSolicitacoes_v4', 'ObterXMLSolicitacoes_v5', 'ObterXMLSolicitacoes_v6',
  'DevolverCertidao', 'EnviarAnexoCertidao', 'EnviarAnexoCertidao_DocID',
  'EnviarAnexoCertidao_DocID_V2', 'EnviarAnexosListCertidao_DocID',
  'EnviarAnexosListCertidao_DocID_V2', 'FinalizarRespostaCertidao', 'InformarCustasCertidao',
  'ObterXMLSolicitacoes', 'ObterXMLSolicitacoesV2',
  'GetExtratoXMLAC', 'ListPedidosAC', 'ListAnexosAC', 'ListBoletosAC', 'SetBaixaBoletoAC',
  'GetPedidoAC_V3', 'AlterarPedidoAC', 'SetPrenotacaoAC', 'SetCustasAC',
  'SetPrenotacaoExameCalculoAC', 'SetContratoAverbadoAC', 'SetContratoExigenciaAC',
  'SetContratoDevolvidoAC', 'ListDocumentosRepositorioAC', 'ContratoXMLtoPDF',
  'ImportarPrenotacaoIN', 'ListPedidosIN', 'ListMensagensPedidoIN', 'AdicionarMensagemIN',
  'GetDetalhesIN_V2', 'GetDetalhesIN_V3', 'GetMensagemIN', 'GetEmolumentosIN',
  'AdicionarEmolumentoIN', 'ExcluirEmolumentoIN', 'ListPagamentosIN', 'ListStatusIN',
  'ImportacaoArquivos', 'AtualizarStatusProcesso',
];

const MODULE_LABEL = {
  PO: 'Penhora Online',
  OE: 'Ofícios Eletrônicos',
  AT: 'Acompanhamento de Títulos',
  BDL: 'BD Light (legado)',
  AC: 'E-Protocolo',
  IN: 'Intimações',
  CTP: 'Comunicação Prefeituras',
  certidoes: 'Certidões',
  matricula: 'Matrícula Online',
  login: 'Login',
};

const WSOFICIO_ROOT = path.join(
  VAULT_ROOT,
  'Orius',
  'integracoes',
  'registro-imoveis',
  'onr',
  'webservice-wsoficio'
);

function parseArgs(argv) {
  const args = { project: 'autonr', dryRun: false, vault: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--project') args.project = argv[++i];
    else if (argv[i] === '--dry-run') args.dryRun = true;
    else if (argv[i] === '--vault') args.vault = argv[++i];
  }
  return args;
}

function findMethodMd(op) {
  const porMetodo = path.join(WSOFICIO_ROOT, 'automacao', 'por-metodo', `${op}.md`);
  if (fs.existsSync(porMetodo)) return porMetodo;
  const metodosDir = path.join(WSOFICIO_ROOT, 'metodos');
  const stack = [metodosDir];
  while (stack.length) {
    const dir = stack.pop();
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) stack.push(full);
      else if (ent.name === `${op}.md`) return full;
    }
  }
  const scriptsRoot = 'C:\\Users\\kenio\\soap-ui test\\scripts';
  const variants = [
    op,
    op.replace(/PO$/, 'Po'),
    op.replace(/OE$/, 'Oe'),
    op.replace(/AT$/, 'At'),
  ];
  for (const v of variants) {
    const dirs = fs.existsSync(scriptsRoot)
      ? fs.readdirSync(scriptsRoot, { withFileTypes: true }).filter((d) => d.isDirectory())
      : [];
    for (const d of dirs) {
      if (d.name.toLowerCase() !== v.toLowerCase() && !d.name.toLowerCase().startsWith(v.toLowerCase().slice(0, 8))) continue;
      const folder = path.join(scriptsRoot, d.name);
      for (const f of fs.readdirSync(folder)) {
        if (f.endsWith(' WebService ONR.md')) return path.join(folder, f);
      }
    }
  }
  return null;
}

function inferModule(op, mdPath) {
  if (mdPath) {
    const rel = path.relative(path.join(WSOFICIO_ROOT, 'metodos'), mdPath);
    if (!rel.startsWith('..')) return rel.split(path.sep)[0];
  }
  if (op.includes('Certidao') || op.startsWith('ObterXML') || op.startsWith('Enviar') || op.startsWith('Devolver') || op.startsWith('Finalizar') || op.startsWith('Informar')) return 'certidoes';
  if (op.endsWith('AC') || op.includes('Contrato') || op.includes('Repositorio')) return 'AC';
  if (op.endsWith('IN') || op.includes('Emolumento') || op.includes('Mensagem') && op.includes('IN')) return 'IN';
  if (op.includes('BDL') || op.includes('BDLight') || op.includes('ArquivoBDL')) return 'BDL';
  if (op.includes('Importacao') || op.includes('AtualizarStatusProcesso')) return 'CTP';
  if (op.endsWith('PO')) return 'PO';
  if (op.endsWith('OE')) return 'OE';
  if (op.endsWith('AT')) return 'AT';
  return 'geral';
}

function buildDescription(op, mdPath, mod) {
  if (mdPath && fs.existsSync(mdPath)) {
    return markdownToHtml(fs.readFileSync(mdPath, 'utf8'));
  }
  const modLabel = MODULE_LABEL[mod] || mod;
  return markdownToHtml(`# ${op} — WebService ONR (pendente)

> Automação **n8n ainda não concluída**. Especificação: \`metodos/${mod}/${op}.md\`

## Escopo

- Módulo: **${modLabel}**
- Operação SOAP: \`${op}\`
- Estado alvo: proxy HTTP (webhook n8n) + documentação em \`automacao/por-metodo/${op}.md\`

## Referências

- [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/00-indice-wsoficio]]
- Scripts locais: \`C:\\\\Users\\\\kenio\\\\soap-ui test\\\\scripts\\\\\`
`);
}

function cardTitle(op, mod) {
  const modLabel = MODULE_LABEL[mod] || mod;
  const legado = mod === 'BDL' ? ' [legado]' : '';
  return `[n8n] ${op} - Proxy ${modLabel} webservice onr${legado}`;
}

function hasCardForOp(items, op) {
  const re = new RegExp(`\\[n8n\\]\\s+${op}\\s+-`, 'i');
  return items.some((i) => re.test(i.name || ''));
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
  const instance = loadInstanceEnv(vaultRoot);
  const project = loadProject(args.project, vaultRoot);
  const stateTodo =
    project.env.PLANE_STATE_TODO || '9a73743b-e03e-4736-87a7-e5360efe61b5';

  const items = await listAllWorkItems(instance, project);
  const results = { created: [], skipped: [], fail: [] };

  for (const op of PENDING_OPS) {
    if (DONE_OPS.has(op)) {
      results.skipped.push({ op, reason: 'já em DONE_OPS' });
      continue;
    }
    if (hasCardForOp(items, op)) {
      results.skipped.push({ op, reason: 'card [n8n] já existe' });
      continue;
    }

    const mdPath = findMethodMd(op);
    const mod = inferModule(op, mdPath);
    const name = cardTitle(op, mod);
    const description_html = buildDescription(op, mdPath, mod);
    const payload = {
      name,
      description_html,
      priority: mod === 'BDL' ? 'low' : 'medium',
      state: stateTodo,
    };

    try {
      if (args.dryRun) {
        results.created.push({ op, name, dryRun: true, htmlLen: description_html.length });
      } else {
        const created = await createWorkItem(instance, project, payload);
        results.created.push({
          op,
          id: `${project.plane_identifier}-${created.sequence_id}`,
          name,
        });
        await new Promise((r) => setTimeout(r, 300));
      }
    } catch (e) {
      results.fail.push({ op, error: e.message });
    }
  }

  console.log(JSON.stringify(results, null, 2));
  process.exit(results.fail.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
