---
tipo: api-rota
area: orius
produto: protesto
tabela: P_TEMPLATE
status: implementado
fonte: postman
---

# API — P_TEMPLATE

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_TEMPLATE]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Resumo (Postman)

CRUD P_TEMPLATE — prefix /administrativo/p_template. Contrato inicial não manipula o BLOB TEXTO: index/show/create/update usam apenas template_id e descricao. Variável {{templateId}} no Create.

## Prefixo

`/administrativo/p_template`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_template` |
| **SHOW** | GET | Get | `administrativo/p_template/{id}` |
| **SAVE** | POST | Create | `administrativo/p_template` |
| **UPDATE** | PUT | Update | `administrativo/p_template/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_template/{id}` |

## Plane

Card: `[Backend] - CRUD P_TEMPLATE` (projeto PROTESTO).
