---
tipo: api-recurso
area: pessoal
projeto: tjdocs
recurso: provimentos
tags: [pessoal, tjdocs, api, provimentos]
status: rascunho
---

# API — Provimentos

Publicação de **provimentos** (atos normativos / administrativos do tribunal).

## Listagem

Filtrar na busca avançada com `tipoDocumento` contendo `provimento`:

[[Pessoal/projetos/tjdocs/api/endpoints/consulta-busca-avancada-nova]]

## Exemplos

```http
GET /v1/provimentos HTTP/1.1
Host: tjdocs-backend.tjgo.jus.br
Accept: application/json
```

[[Pessoal/projetos/tjdocs/api/00-indice-api]]
