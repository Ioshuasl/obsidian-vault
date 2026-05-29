---
tipo: api-recurso
area: pessoal
projeto: tjdocs
recurso: pastas
tags: [pessoal, tjdocs, api, pastas]
status: rascunho
---

# API — Pastas

Agrupamento hierárquico de publicações no TJDocs.

## Endpoint

| | |
|---|---|
| **GET** | `https://tjdocs-backend.tjgo.jus.br/v1/pastas` |
| **Auth** | Não |

## Descoberta

Link na raiz da API:

```json
"_links": {
  "pastas": { "href": "http://tjdocs-backend.tjgo.jus.br/v1/pastas" }
}
```

## Resposta

`GET /v1/pastas` retorna **200** com estrutura HAL:

- `_embedded.pastas[]` — lista grande (resposta observada ~13 MB)
- Campos por pasta (amostra): `id`, `nome`, `caminho`, `pastaPaiId`, `visibilidade`, …

Exemplo truncado:

```json
{
  "_embedded": {
    "pastas": [
      {
        "id": 12569,
        "nome": "Pautas Sessões Julgamentos",
        "caminho": "0.191.191.8230.8230.12497.12497.12569",
        "pastaPaiId": 12497
      }
    ]
  }
}
```

> Cuidado: resposta completa é pesada — usar filtros/paginação se a API suportar (investigar `_links` de navegação).

## Relacionado

- [[Pessoal/projetos/tjdocs/api/recursos/documentos]]
- [[Pessoal/projetos/tjdocs/api/00-indice-api]]
