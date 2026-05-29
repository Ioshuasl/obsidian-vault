---
tipo: api-rota
area: orius
produto: protesto
tabela: P_MOTIVOS
status: implementado
fonte: postman
---

# API — P_MOTIVOS

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_MOTIVOS]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Resumo (Postman)

CRUD P_MOTIVOS — prefix /administrativo/p_motivos. Situação A (ativo) / I (inativo). Busca index só por descricao. Variável {{motivosId}} no Create.

## Prefixo

`/administrativo/p_motivos`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_motivos` |
| **SHOW** | GET | Get | `administrativo/p_motivos/{id}` |
| **SAVE** | POST | Create | `administrativo/p_motivos` |
| **UPDATE** | PUT | Update | `administrativo/p_motivos/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_motivos/{id}` |

## Plane

Card: `[Backend] - CRUD P_MOTIVOS` (projeto PROTESTO).
