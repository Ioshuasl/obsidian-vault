---
tipo: automacao
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, n8n, upload, xml]
status: revisado
tem-n8n: true
operacao: CCN_Uploads
---

> **Endpoint upstream:** [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-uploads]] · **Índice CCN:** [[Orius/integracoes/tabelionato-notas/ccn/00-indice-ccn]]

# CCN — upload XML (n8n)

Gateway que recebe um **XML CCN** via webhook, valida localmente e repassa para `POST /api/uploads` do e-notariado.

## Workflow

| Item | Valor |
|------|-------|
| Nome | `CCN Upload XML` |
| ID n8n | `oy22MYSQfB7CYcbl` |
| Arquivo | `automacoes e testes/workflows/n8n/extensao-n8n-teste/CCN Upload XML.workflow.ts` |
| URL editor | https://api-n8n.gbrqne.easypanel.host/workflow/oy22MYSQfB7CYcbl |

## Webhook n8n

| | |
|--|--|
| Método | `POST` |
| Path | `/webhook/ccn/uploads` |
| Auth | Basic Auth n8n (`orius`) |
| Body | `multipart/form-data` — campo **`file`** (aceita alias `xml`) |
| Header opcional | `X-Ambiente: homologacao` ou `producao` (default: homologacao) |
| Header CCN | `X-Ccn-Api-Key` (formato `app\|token`) — ou variável n8n `CCN_X_API_KEY` |

## Resposta

| HTTP | Situação |
|------|----------|
| `200` | `success: true`, objeto `upload` (`id`, `location`, `name`, `contentType`) |
| `422` | Validação local (arquivo, raiz `<pessoas>`, API key ausente) |
| `4xx/5xx` | Erro retornado pela API e-notariado |

Use `upload.id` e `upload.location` no passo seguinte: [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-post]] (futuro).

## Validação local

- Arquivo XML presente (`.xml` ou mime xml)
- Tamanho máximo 25 MB
- Raiz `<pessoas>` detectada no início do arquivo
- `X-Ccn-Api-Key` ou `CCN_X_API_KEY` configurada

## Ambientes upstream

| `X-Ambiente` | Base URL |
|--------------|----------|
| `homologacao` (default) | `https://pessoas-hml.e-notariado.org.br` |
| `producao` | `https://pessoas.e-notariado.org.br` |

Chaves HML: [[Orius/integracoes/tabelionato-notas/ambiente-homologacao-api#CCN — Cadastro de pessoas]]

## Push

```powershell
cd "automacoes e testes"
npx --yes n8nac push "workflows/n8n/extensao-n8n-teste/CCN Upload XML.workflow.ts" --verify
```

Voltar: [[Orius/integracoes/tabelionato-notas/ccn/00-indice-ccn]]
