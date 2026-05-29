---
tipo: api-rota
area: orius
produto: protesto
tabela: P_ANDAMENTO
status: implementado
fonte: postman
---

# API — P_ANDAMENTO

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_ANDAMENTO]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Resumo (Postman)

CRUD P_ANDAMENTO — prefix /administrativo/p_andamento. arquivo_gerado: D=Aguardando, E=Exportado. Filtros index: titulo_id, data_ocorrencia, ocorrencia_andamento_id. Variável {{andamentoId}} no Create.

## Prefixo

`/administrativo/p_andamento`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_andamento` |
| **SHOW** | GET | Get | `administrativo/p_andamento/{id}` |
| **SAVE** | POST | Create | `administrativo/p_andamento` |
| **UPDATE** | PUT | Update | `administrativo/p_andamento/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_andamento/{id}` |

### Rotas extras

- **All by Titulo (include ocorrencia)** — `GET` `administrativo/p_andamento/titulo/316261`

## Plane

Card: `[Backend] - CRUD P_ANDAMENTO` (projeto PROTESTO).
