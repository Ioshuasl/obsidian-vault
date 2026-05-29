---
tipo: api-rota
area: orius
produto: protesto
tabela: P_PESSOA_VINCULO
status: implementado
fonte: postman
---

# API — P_PESSOA_VINCULO

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_PESSOA_VINCULO]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Resumo (Postman)

CRUD P_PESSOA_VINCULO — prefix /administrativo/p_pessoa_vinculo. tipo_vinculo: APRESENTANTE, CEDENTE, CREDOR, DEVEDOR. gerar_selo/devedor_microempresa: S/N. devedor_tipo_aceite: A/E. Variável {{pessoaVinculoId}} no Create.

## Prefixo

`/administrativo/p_pessoa_vinculo`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_pessoa_vinculo` |
| **SHOW** | GET | Get | `administrativo/p_pessoa_vinculo/{id}` |
| **SAVE** | POST | Create | `administrativo/p_pessoa_vinculo` |
| **UPDATE** | PUT | Update | `administrativo/p_pessoa_vinculo/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_pessoa_vinculo/{id}` |

## Plane

Card: `[Backend] - CRUD P_PESSOA_VINCULO` (projeto PROTESTO).
