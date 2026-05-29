---
tipo: referencia
area: pessoal
projeto: tjdocs
tags: [pessoal, tjdocs, api, dominio]
---

# Tipos de documento (busca avançada)

Valores do array `tipoDocumento` no body de [[Pessoal/projetos/tjdocs/api/endpoints/consulta-busca-avancada-nova|busca-avancada-nova]].

| Slug (request) | Descrição | `tipoDocumento` na resposta (ex.) |
|----------------|-----------|-----------------------------------|
| `oficio` | Ofício | _(confirmar texto exato na resposta)_ |
| `oficio_circular` | Ofício circular | _(confirmar)_ |
| `provimento` | Provimento | `"Provimento"` |

Adicionar novos slugs conforme você for documentando rotas.
