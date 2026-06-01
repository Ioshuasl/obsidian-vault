---
tipo: api-endpoint
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, api, imports, polling]
status: revisado
operacao: CCN_ImportsGet
---

> **Anterior:** [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-post]] · **Erros:** [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-erros]]

# CCN — `GET /api/imports/{id}`

Consulta o status e o progresso do processamento de uma importação.

| | |
|---|---|
| **Método** | `GET` |
| **Path** | `/api/imports/{id}` |
| **Parâmetro** | `id` — UUID retornado no `POST /api/imports` |

**URL (HML):** `https://pessoas-hml.e-notariado.org.br/api/imports/{id}`

## Resposta — processamento concluído

```json
{
  "id": "e99065b2-77e7-4a7b-9f51-776f0e78b063",
  "status": "Successful",
  "processedRecords": 8,
  "failedRecords": 0,
  "totalRecords": 8,
  "fileName": "CCN27052020-10.xml",
  "uploadId": "6ba5fc64-a747-41d0-86f5-ed9d6f046fad"
}
```

## Status típicos

| `status` | Significado |
|----------|-------------|
| `Pending` | Aguardando ou em processamento |
| `Successful` | Importação concluída sem falhas bloqueantes |
| Outros | Consultar Swagger; se `failedRecords` > 0, ver [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-erros]] |

## Campos de acompanhamento

| Campo | Uso |
|-------|-----|
| `processedRecords` | Registros processados com sucesso |
| `failedRecords` | Registros com erro |
| `totalRecords` | Total de pessoas no XML |
| `fileName` | Nome do arquivo importado |

Recomenda-se polling até `status` deixar de ser `Pending` ou até estabilizar contadores.
