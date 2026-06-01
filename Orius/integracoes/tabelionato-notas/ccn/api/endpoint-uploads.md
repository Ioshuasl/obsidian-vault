---
tipo: api-endpoint
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, api, uploads, multipart]
status: revisado
operacao: CCN_Uploads
---

> **Fluxo:** [[Orius/integracoes/tabelionato-notas/ccn/api/fluxo-importacao]] · **Próximo:** [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-post]]

# CCN — `POST /api/uploads`

Envia o arquivo XML de cadastro de pessoas para o servidor e-notariado antes de registrar a importação.

| | |
|---|---|
| **Método** | `POST` |
| **Path** | `/api/uploads` |
| **Base URL (HML)** | `https://pessoas-hml.e-notariado.org.br` |
| **Content-Type** | `multipart/form-data` (não enviar como `application/xml` no body único) |

## Headers

| Header | Obrigatório | Valor |
|--------|-------------|-------|
| `X-Api-Key` | Sim | `your-app\|(ID-DO-CARTORIO)` |

## Form fields

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `file` | arquivo | XML CCN (encoding típico: ISO-8859-1) |
| `name` | string | Nome do arquivo (ex.: `CCN27052020-10.xml`) |
| `contentType` | string | `text/xml` |

## Exemplo (curl)

```bash
curl --location --request POST 'https://pessoas-hml.e-notariado.org.br/api/uploads' \
  --header 'X-Api-Key: your-app|(ID-DO-CARTORIO)' \
  --form 'file=@/C:/CCN27052020-10.xml' \
  --form 'name=CCN27052020-10.xml' \
  --form 'contentType=text/xml'
```

## Resposta (200)

```json
{
  "location": "/api/uploads/6ba5fc64-a747-41d0-86f5-ed9d6f046fad?access_ticket=...",
  "id": "6ba5fc64-a747-41d0-86f5-ed9d6f046fad",
  "name": "CCN27052020-10.xml",
  "contentType": "text/xml"
}
```

| Campo | Uso |
|-------|-----|
| `id` | Referência do upload — obrigatório no `POST /api/imports` |
| `location` | URL relativa com ticket de acesso — repassar no objeto `upload` |
| `name` | Nome do arquivo |
| `contentType` | Tipo MIME informado |

Guarde `id` e `location` — serão usados em [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-post]].

## Estrutura esperada do XML

[[Orius/integracoes/tabelionato-notas/ccn/xml/00-indice-xml]]
