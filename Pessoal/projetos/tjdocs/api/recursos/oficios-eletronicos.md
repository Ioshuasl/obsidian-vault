---
tipo: api-recurso
area: pessoal
projeto: tjdocs
recurso: oficios-eletronicos
tags: [pessoal, tjdocs, api, oficios]
status: rascunho
---

# API — Ofícios eletrônicos

Publicação de **ofícios eletrônicos** pelo TJGO.

## Endpoint

| | |
|---|---|
| **Path provável** | `/v1/oficios-eletronicos` ou `/v1/oficios_eletronicos` |
| **Auth** | Não |

> Validar grafia exata do path na API.

## Diferença vs ofícios “comuns”

_(preencher: quando usar cada recurso, campos específicos)_

## Exemplos

```http
GET /v1/oficios-eletronicos HTTP/1.1
Host: tjdocs-backend.tjgo.jus.br
Accept: application/json
```

Relacionado: [[Pessoal/projetos/tjdocs/api/recursos/oficios]]
