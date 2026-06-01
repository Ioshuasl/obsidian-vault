---
tipo: automacao
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, imoveis, doi, n8n, validacao]
status: revisado
---

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

## Escopo da validacao

- Estrutura `declaracoes[]`
- Domínios (tabelas 1–12)
- Regras por `tipoServico` (`1` Notas, `2` Registro de Imóveis, `3` RTD)
- CPF/CNPJ, datas, participacao 99–100%, exclusao mutua valor/indicador
- Avisos (ex.: NI duplicado no mesmo grupo)

Logica compartilhada: `automacoes e testes/scripts/doi/doi-validate-payload.cjs`

Regenerar workflow apos alterar regras:

```powershell
cd "automacoes e testes"
node scripts/doi/build-n8n-validate-snippet.cjs
node scripts/doi/build-doi-validate-workflow.cjs
npx --yes n8nac push "workflows/n8n/extensao-n8n-teste/DOI Validate JSON.workflow.ts" --verify
```

Teste local:

```powershell
node scripts/doi/doi-validate-payload.cjs scripts/doi/exemplo-doi-valido.json
```

Voltar: [[Orius/integracoes/tabelionato-notas/doi/00-indice-doi]]
