---
tipo: automacao
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, imoveis, doi, n8n, validacao]
status: revisado
tem-n8n: true
operacao: DOI_ValidateJSON
plane_work_item_id: 79f5102a-457e-4be0-93eb-a8ac46c404f8
plane_sequence_id: 87
plane_key: AUTONR-87
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/87
plane_automation_status: pending
---

## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-87** |
| Work item ID | `79f5102a-457e-4be0-93eb-a8ac46c404f8` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/87 |
| Automação | `pending` |

> **Regras:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]] · **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]]

# DOI — validador JSON (n8n)

Workflow **somente de validacao local** — nao chama DOI-Web nem outro webservice externo.

## Workflow

| Item | Valor |
|------|-------|
| Nome | `DOI Validate JSON` |
| ID n8n | `HewsInHfw3Gfrs5Z` |
| Arquivo | `automacoes e testes/workflows/n8n/extensao-n8n-teste/DOI Validate JSON.workflow.ts` |
| URL editor | https://api-n8n.gbrqne.easypanel.host/workflow/HewsInHfw3Gfrs5Z |

## Webhook

| | |
|--|--|
| Método | `POST` |
| Path | `/webhook/doi/validate-json` |
| URL produção | `https://api-n8n.gbrqne.easypanel.host/webhook/doi/validate-json` |
| Body | JSON `{ "declaracoes": [ ... ] }` (ou objeto raiz igual ao arquivo de importacao) |

## Resposta

| HTTP | Significado |
|------|-------------|
| `200` | Payload valido (`valid: true`, `errors: []`) |
| `400` | Erros de validacao (`valid: false`, lista em `errors`) |

Campos uteis: `declarationCount`, `warningCount`, `warnings` (avisos nao impeditivos), `meta.produtos`.

## Fonte de verdade

Regras derivadas da base DOI no vault (completa):

- [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json|Fichas de campos JSON]]
- [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio|Tabelas de domínio 1–12]]
- [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao|Regras de validação]]

A validação CTP legada em [[Orius/integracoes/tabelionato-notas/censec/regras-validacao/ctp]] está incompleta; este módulo e o gateway CENSEC usam o mesmo código alinhado à base DOI.

## Escopo da validacao

- Estrutura `declaracoes[]`
- Domínios (tabelas 1–12)
- Regras por `tipoServico` (`1` Notas, `2` Registro de Imóveis, `3` RTD)
- RI: `tipoLivro`, matricula/CNM, transcricao, `naturezaTitulo`, `existeDoiAnterior`
- Urbano/rural: `inscricaoMunicipal`, `areaConstruida`, campos rurais, `municipiosUF`
- Cônjuge, representante, espólio; CPF/CNPJ; datas e limites
- Participacao 99–100%; exclusao mutua valor/indicador (operacao e base ITBI)
- Pagamento a prazo (`formaPagamento` 7): parcelas e alienacao fiduciaria
- Imovel da Uniao; CIB; tamanhos maximos de campos
- Avisos (ex.: NI duplicado, urbano sem matricula no bloco imovel)

Logica compartilhada: `automacoes e testes/scripts/doi/doi-validate-payload.cjs`  
Também injetada no nó **Validate CTP Declarations** do [[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway|CENSEC Upload JSON Gateway]].

Regenerar workflows apos alterar regras:

```powershell
cd "automacoes e testes"
node scripts/doi/build-validate-workflows.cjs
npx --yes n8nac push "workflows/n8n/extensao-n8n-teste/DOI Validate JSON.workflow.ts" --verify
npx --yes n8nac push "workflows/n8n/extensao-n8n-teste/CENSEC Upload JSON Gateway.workflow.ts" --verify
```

Teste local:

```powershell
node scripts/doi/doi-validate-payload.cjs scripts/doi/exemplo-doi-valido.json
```

Voltar: [[Orius/integracoes/tabelionato-notas/doi/00-indice-doi]]
