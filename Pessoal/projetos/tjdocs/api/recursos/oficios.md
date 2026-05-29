---
tipo: api-recurso
area: pessoal
projeto: tjdocs
recurso: oficios
tags: [pessoal, tjdocs, api, oficios]
status: rascunho
---

# API — Ofícios

Publicação de **ofícios** pelo TJGO.

## Listagem

Filtrar na busca avançada com `tipoDocumento` contendo `oficio` (e `oficio_circular` se aplicável):

[[Pessoal/projetos/tjdocs/api/endpoints/consulta-busca-avancada-nova]]

## Exemplos

```http
GET /v1/oficios HTTP/1.1
Host: tjdocs-backend.tjgo.jus.br
Accept: application/json
```

Relacionado: [[Pessoal/projetos/tjdocs/api/recursos/oficios-eletronicos]]
