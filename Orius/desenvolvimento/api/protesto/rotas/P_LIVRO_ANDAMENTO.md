---
tipo: api-rota
area: orius
produto: protesto
tabela: P_LIVRO_ANDAMENTO
status: implementado
fonte: postman
---

# API — P_LIVRO_ANDAMENTO

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_LIVRO_ANDAMENTO]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Resumo (Postman)

CRUD P_LIVRO_ANDAMENTO — prefix /administrativo/p_livro_andamento. Livro aberto = DATA_FECHAMENTO null; um aberto por natureza (409). Ordenação padrão data_abertura DESC. GET proximo-numero-livro/{livro_natureza_id}. Delete 409 com P_TITULO. Variável {{livroAndamentoId}}.

## Prefixo

`/administrativo/p_livro_andamento`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_livro_andamento` |
| **SHOW** | GET | Get | `administrativo/p_livro_andamento/{id}` |
| **SAVE** | POST | Create | `administrativo/p_livro_andamento` |
| **UPDATE** | PUT | Update | `administrativo/p_livro_andamento/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_livro_andamento/{id}` |

### Rotas extras

- **Proximo Numero Livro** — `GET` `administrativo/p_livro_andamento/proximo-numero-livro/{id}`
- **Finalizar** — `PUT` `administrativo/p_livro_andamento/finalizar/{id}`

## Plane

Card: `[Backend] - CRUD P_LIVRO_ANDAMENTO` (projeto PROTESTO).
