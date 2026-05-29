---
tipo: api-rota
area: orius
produto: protesto
tabela: P_MOTIVOS_CANCELAMENTO
status: implementado
fonte: postman
---

# API — P_MOTIVOS_CANCELAMENTO

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_MOTIVOS_CANCELAMENTO]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Resumo (Postman)

CRUD P_MOTIVOS_CANCELAMENTO — prefix /administrativo/p_motivos_cancelamento. Situação A (ativo) / I (inativo). Busca index só por descricao. Variável {{motivosCancelamentoId}} no Create.

## Prefixo

`/administrativo/p_motivos_cancelamento`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_motivos_cancelamento` |
| **SHOW** | GET | Get | `administrativo/p_motivos_cancelamento/{id}` |
| **SAVE** | POST | Create | `administrativo/p_motivos_cancelamento` |
| **UPDATE** | PUT | Update | `administrativo/p_motivos_cancelamento/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_motivos_cancelamento/{id}` |

## Plane

Card: `[Backend] - CRUD P_MOTIVOS_CANCELAMENTO` (projeto PROTESTO).
