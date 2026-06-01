---
tipo: api-endpoint
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, api, fluxo, imports]
status: revisado
---

> **Índice endpoints:** [[Orius/integracoes/tabelionato-notas/ccn/api/00-indice-endpoints]] · **XML:** [[Orius/integracoes/tabelionato-notas/ccn/xml/00-indice-xml]]

# CCN — fluxo da API de importação

```mermaid
sequenceDiagram
  participant App as Sistema do cartório
  participant API as API e-notariado

  App->>API: POST /api/uploads (multipart XML)
  API-->>App: id, location, name
  App->>API: POST /api/imports (JSON + upload)
  API-->>App: id importação, status Pending
  App->>API: GET /api/imports/{id}
  API-->>App: status Successful / erros
  opt Se houver falhas
    App->>API: GET /api/imports/{id}/erros
  end
```

## Headers usados no fluxo

| Header | Quando |
|--------|--------|
| `X-Api-Key` | Upload e criação da importação — formato `your-app\|(ID-DO-CARTORIO)` |
| `X-Subscription` | Criação da importação — id do cartório (subscription) |

Ver [[Orius/integracoes/tabelionato-notas/ccn/visao-geral-e-autenticacao#Headers de integração]].

## Etapas

| Etapa | Endpoint | Documentação |
|-------|----------|----------------|
| 1. Enviar XML | `POST /api/uploads` | [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-uploads]] |
| 2. Registrar importação | `POST /api/imports` | [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-post]] |
| 3. Acompanhar processamento | `GET /api/imports/{id}` | [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-get]] |
| 4. Listar erros (opcional) | `GET /api/imports/{id}/erros` | [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-erros]] |

## Tipo de importação

No passo 2, o campo `type` deve ser **`CcnPessoaFisica`** para cadastro de pessoas físicas via XML CCN.
