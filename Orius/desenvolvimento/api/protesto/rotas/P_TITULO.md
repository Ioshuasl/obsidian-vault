---
tipo: api-rota
area: orius
produto: protesto
tabela: P_TITULO
status: implementado
fonte: postman
---

# API — P_TITULO

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_TITULO]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Resumo (Postman)

CRUD P_TITULO — prefix /administrativo/p_titulo. Index paginado (formato3: p, per_page, sort) retorna shape enxuto: numero_titulo, numero_apontamento, especie_id+descricao, valor_titulo, ocorrencia_id+descricao, banco_id+descricao, quantidade_pessoas_vinculadas, apresentante_nome/cpfcnpj (TIPO_VINCULO=APRESENTANTE). Filtros opcionais: busca_pessoa, numero_apontamento, nosso_numero, numero_titulo, numero_titulo_banco, ocorrencia_id, ocorrencia_andamento_id, banco_id, especie_id. Variável {{tituloId}} no Create. Show retorna título completo (inclui vinculos_selos). Request Selos: GET /{tituloId}/selos — lista selos vinculados (atual + legado).

## Prefixo

`/administrativo/p_titulo`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_titulo` |
| **SHOW** | GET | Get | `administrativo/p_titulo/{id}` |
| **SAVE** | POST | Create | `administrativo/p_titulo` |
| **UPDATE** | PUT | Update | `administrativo/p_titulo/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_titulo/{id}` |

### Rotas extras

- **Selos** — `GET` `administrativo/p_titulo/{id}/selos`

## Plane

Card: `[Backend] - CRUD P_TITULO` (projeto PROTESTO).
