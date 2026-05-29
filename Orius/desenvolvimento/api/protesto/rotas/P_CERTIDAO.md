---
tipo: api-rota
area: orius
produto: protesto
tabela: P_CERTIDAO
status: implementado
fonte: postman
---

# API — P_CERTIDAO

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_CERTIDAO]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Resumo (Postman)

CRUD P_CERTIDAO — prefix /administrativo/p_certidao. Siglas: tipo_certidao P=positiva, N=negativa, R=Serasa; tipo_remessa P=protesto Serasa, C=cancelamento Serasa; status A=ativo, C=cancelado. Index paginado com filtros tipo_certidao, data_certidao, status e busca em CPFCNPJ/NOME. Variável {{certidaoId}} no Create.

## Prefixo

`/administrativo/p_certidao`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_certidao` |
| **SHOW** | GET | Get | `administrativo/p_certidao/{id}` |
| **SAVE** | POST | Create | `administrativo/p_certidao` |
| **UPDATE** | PUT | Update | `administrativo/p_certidao/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_certidao/{id}` |

## Plane

Card: `[Backend] - CRUD P_CERTIDAO` (projeto PROTESTO).
