---
tipo: integracao
area: orius
produto: imoveis
central: cnib
tags: [cnib, api, auth, oauth2, CNIB-01]
codigo: CNIB-01
manual: v2.0
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/api-cnib-serventias/00-indice]]
> **Visão geral:** [[Orius/integracoes/registro-imoveis/api-cnib-serventias/visao-geral]]

# [CNIB-01] — Autenticação OAuth2

**Objetivo:** obter `access_token` para chamar as demais rotas da API SERVENTIAS com `Authorization: Bearer`.

---

## Endpoint

| | |
|---|---|
| **Método** | `POST` |
| **URL** | `https://auth.id.onr.org.br/connect/token` |
| **Content-Type** | `application/json` |

---

## Corpo da requisição

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `grant_type` | string | Sim | Valor fixo: `client_credentials` |
| `client_id` | string | Sim | ID da serventia (portal CNIB) |
| `client_secret` | string | Sim | Secret da serventia |
| `scope` | string | Sim | Valor fixo: `cnib-serventia-api` |

### Exemplo

```json
{
  "grant_type": "client_credentials",
  "client_id": "string",
  "client_secret": "string",
  "scope": "cnib-serventia-api"
}
```

---

## Validação

- Todos os quatro campos são obrigatórios.
- Credenciais de **STG** e **produção** são distintas.
- Emissão: portais em [[visao-geral#Autenticação nas requisições]].

---

## Resposta de sucesso (200)

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Usar em todas as requisições seguintes:

```http
Authorization: Bearer {access_token}
```

---

## Resposta de erro (400)

```json
{
  "error": "invalid_request"
}
```

---

## Atores

Registros de Imóveis, Registros Civis, Tabeliães de Notas.
