---
tipo: api-rota
area: orius
produto: protesto
tabela: P_OCORRENCIAS
status: implementado
fonte: postman
---

# API — P_OCORRENCIAS

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_OCORRENCIAS]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Resumo (Postman)

CRUD P_OCORRENCIAS — prefix /administrativo/p_ocorrencias. Index: busca (DESCRICAO ou CODIGO), tipo (CADASTRO, APONTADO, INTIMACAO, ACEITE, DESISTENCIA, PAGAMENTO, CANCELAMENTO ou vazio). Variável {{ocorrenciasId}} no Create.

## Prefixo

`/administrativo/p_ocorrencias`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_ocorrencias` |
| **SHOW** | GET | Get | `administrativo/p_ocorrencias/{id}` |
| **SAVE** | POST | Create | `administrativo/p_ocorrencias` |
| **UPDATE** | PUT | Update | `administrativo/p_ocorrencias/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_ocorrencias/{id}` |

## Plane

Card: `[Backend] - CRUD P_OCORRENCIAS` (projeto PROTESTO).
