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

Credenciais HML: [[env#CCN — Cadastro de pessoas e-notariado (homologação)]]

## Teste com Postman

### Arquivos

| Item | Caminho no repo |
|------|-----------------|
| Coleção | `postman/CCN-Upload-XML-n8n.postman_collection.json` |
| Environment (template) | `postman/CCN-Upload-XML-n8n.postman_environment.template.json` |
| XML mínimo (cópia local) | `scripts/ccn/exemplo-ccn-minimo.xml` |
| XML inválido (teste raiz) | `scripts/ccn/exemplo-ccn-sem-pessoas.xml` |

### Variáveis do environment

| Variável | Valor |
|----------|--------|
| `n8n_base_url` | `https://api-n8n.gbrqne.easypanel.host` |
| `n8n_webhook_mode` | `webhook-test` (editor) ou `webhook` (workflow ativo) |
| `N8N_BASIC_AUTH_USER` / `N8N_BASIC_AUTH_PASSWORD` | [[env#n8n — Easypanel (API + webhooks Basic Auth)]] |
| `CCN_X_API_KEY` | [[env#CCN — Cadastro de pessoas e-notariado (homologação)]] |
| `CCN_X_AMBIENTE` | `homologacao` |
| `CCN_XML_PATH` | Caminho absoluto do XML — ver abaixo |

**`CCN_XML_PATH` (Windows):**

```
c:\Users\kenio\automacoes e testes\scripts\ccn\exemplo-ccn-minimo.xml
```

No Postman, o request **Upload XML CCN — HML** usa esse caminho no campo `file` (pre-request). Se preferir, selecione o arquivo manualmente no body **form-data**.

### Passo a passo

1. Importe coleção + environment no Postman.
2. Preencha `CCN_X_API_KEY` e confira `CCN_XML_PATH`.
3. No n8n, abra o workflow `CCN Upload XML` e clique **Execute workflow** (modo `webhook-test`).
4. Envie **Upload XML CCN — HML** — esperado HTTP `200`, `success: true`, `upload.id` e `upload.location` (salvos no env como `ccn_upload_id` / `ccn_upload_location`).
5. Requests de erro (422): sem arquivo, sem API key, raiz inválida.

### Exemplo XML mínimo (válido)

Arquivo espelhado em `scripts/ccn/exemplo-ccn-minimo.xml`. Raiz `<pessoas>` + um CPF/nome — suficiente para passar na validação local e no upload HML.

```xml
<?xml version="1.0" encoding="ISO8859-1"?>
<pessoas>
  <pessoa>
    <cpf>11144477735</cpf>
    <nome>Joao da Silva</nome>
  </pessoa>
</pessoas>
```

XML completo com todos os grupos de campos: [[Orius/integracoes/tabelionato-notas/ccn/xml/exemplo-xml]].

## Push

```powershell
cd "automacoes e testes"
npx --yes n8nac push "workflows/n8n/extensao-n8n-teste/CCN Upload XML.workflow.ts" --verify
```

Voltar: [[Orius/integracoes/tabelionato-notas/ccn/00-indice-ccn]]
