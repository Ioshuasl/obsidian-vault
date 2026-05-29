---
tipo: api-rota
area: orius
produto: protesto
tabela: P_ESPECIE
status: implementado
fonte: postman
---

# API — P_ESPECIE

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_ESPECIE]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Resumo (Postman)

CRUD P_ESPECIE — prefix /administrativo/p_especie. Sigla em especie (até 3 chars). Variável {{especieId}} preenchida no Create.

## Prefixo

`/administrativo/p_especie`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_especie` |
| **SHOW** | GET | Get | `administrativo/p_especie/{id}` |
| **SAVE** | POST | Create | `administrativo/p_especie` |
| **UPDATE** | PUT | Update | `administrativo/p_especie/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_especie/{id}` |

## Plane

Card: `[Backend] - CRUD P_ESPECIE` (projeto PROTESTO).
