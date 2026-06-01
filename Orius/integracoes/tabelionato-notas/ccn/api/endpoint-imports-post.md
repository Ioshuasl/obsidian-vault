---
tipo: api-endpoint
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, api, imports]
status: revisado
operacao: CCN_ImportsPost
---

> **Anterior:** [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-uploads]] · **Próximo:** [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-get]]

# CCN — `POST /api/imports`

Registra a importação do XML previamente enviado via upload.

| | |
|---|---|
| **Método** | `POST` |
| **Path** | `/api/imports` |
| **Content-Type** | `application/json` |

## Headers

| Header | Obrigatório | Valor |
|--------|-------------|-------|
| `X-Subscription` | Sim | UUID do cartório (subscription) |
| `X-Api-Key` | Sim | `your-app\|(ID-DO-CARTORIO)` |
| `Content-Type` | Sim | `application/json` |

## Body

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `type` | string | `CcnPessoaFisica` — importação de pessoas físicas |
| `upload` | object | Objeto retornado por `POST /api/uploads` (`id`, `location`, `name`, `contentType`) |

> O `upload.id` deve ser exatamente o `id` retornado na requisição de upload.

## Exemplo (curl)

```bash
curl --location --request POST 'https://pessoas-hml.e-notariado.org.br/api/imports' \
  --header 'X-Subscription: adb07367-c4f2-4f79-b388-156a071b8af2' \
  --header 'X-Api-Key: your-app|(ID-DO-CARTORIO)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "type": "CcnPessoaFisica",
  "upload": {
    "location": "/api/uploads/6ba5fc64-a747-41d0-86f5-ed9d6f046fad?access_ticket=...",
    "id": "6ba5fc64-a747-41d0-86f5-ed9d6f046fad",
    "name": "CCN27052020-10.xml",
    "contentType": "text/xml"
  }
}'
```

## Resposta (200)

```json
{
  "id": "e99065b2-77e7-4a7b-9f51-776f0e78b063",
  "agentId": "b1f1a709-6299-446b-b72f-8d347467a0ad",
  "subscriptionId": "adb07367-c4f2-4f79-b388-156a071b8af2",
  "dateCreated": "2020-06-04T00:33:44.285868+00:00",
  "type": "CcnPessoaFisica",
  "status": "Pending",
  "processedRecords": 0,
  "failedRecords": 0,
  "totalRecords": 0,
  "fileName": "CCN27052020-10.xml",
  "uploadId": "6ba5fc64-a747-41d0-86f5-ed9d6f046fad",
  "errorCode": null,
  "duplicateRecords": null
}
```

| Campo | Descrição |
|-------|-----------|
| `id` | ID da importação — usar em `GET /api/imports/{id}` |
| `status` | Inicialmente `Pending`; evolui para `Successful` ou falha |
| `processedRecords` / `failedRecords` / `totalRecords` | Contadores após processamento |
| `uploadId` | Referência ao upload de origem |

Acompanhar: [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-get]]
