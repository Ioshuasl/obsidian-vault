---
tipo: indice-api
area: orius
produto: protesto
tags: [orius, api, protesto, postman, backend]
atualizado: 2026-05-29
---

# API Protesto — rotas backend

> Fonte: `C:\Users\kenio\Downloads\Orius.postman_collection.json`
> Base: `{{BaseUrlV1}}administrativo/`

## Resumo

| Métrica | Qtd |
|---------|-----|
| Tabelas Firebird (`P_*`) | 35 |
| Com rotas no Postman | 15 |
| CRUD completo (5 ops) | 15 |
| Sem API no Postman ainda | 20 |

## Implementadas (Postman)

| Tabela | CRUD | Nota |
|--------|------|------|
| `P_ANDAMENTO` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_ANDAMENTO]] |
| `P_ARQUIVO_TITULO` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_ARQUIVO_TITULO]] |
| `P_BANCO` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_BANCO]] |
| `P_CERTIDAO` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_CERTIDAO]] |
| `P_ESPECIE` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_ESPECIE]] |
| `P_LIVRO_ANDAMENTO` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_LIVRO_ANDAMENTO]] |
| `P_LIVRO_NATUREZA` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_LIVRO_NATUREZA]] |
| `P_MOTIVOS` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_MOTIVOS]] |
| `P_MOTIVOS_CANCELAMENTO` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_MOTIVOS_CANCELAMENTO]] |
| `P_OCORRENCIAS` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_OCORRENCIAS]] |
| `P_OCORRENCIA_ANDAMENTO` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_OCORRENCIA_ANDAMENTO]] |
| `P_PESSOA` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_PESSOA]] |
| `P_PESSOA_VINCULO` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_PESSOA_VINCULO]] |
| `P_TEMPLATE` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_TEMPLATE]] |
| `P_TITULO` | completo | [[Orius/desenvolvimento/api/protesto/rotas/P_TITULO]] |

## Pendentes de API

| Tabela | Plane |
|--------|-------|
| `P_CUSTAS_CANCELAMENTO` | PROTESTO — CRUD P_CUSTAS_CANCELAMENTO |
| `P_DEMAIS_CUSTAS` | PROTESTO — CRUD P_DEMAIS_CUSTAS |
| `P_FEBRABAN` | PROTESTO — CRUD P_FEBRABAN |
| `P_FEBRABAN_CABECALHO` | PROTESTO — CRUD P_FEBRABAN_CABECALHO |
| `P_FEBRABAN_DETALHE` | PROTESTO — CRUD P_FEBRABAN_DETALHE |
| `P_FEBRABAN_RODAPE` | PROTESTO — CRUD P_FEBRABAN_RODAPE |
| `P_HISTORICO` | PROTESTO — CRUD P_HISTORICO |
| `P_INDISPONIBILIDADE` | PROTESTO — CRUD P_INDISPONIBILIDADE |
| `P_INDISP_VINCULO` | PROTESTO — CRUD P_INDISP_VINCULO |
| `P_INST_PROTESTO` | PROTESTO — CRUD P_INST_PROTESTO |
| `P_IRREGULARIDADES` | PROTESTO — CRUD P_IRREGULARIDADES |
| `P_LAYOUT` | PROTESTO — CRUD P_LAYOUT |
| `P_LAYOUT_ARQUIVO` | PROTESTO — CRUD P_LAYOUT_ARQUIVO |
| `P_LAYOUT_CONFIG` | PROTESTO — CRUD P_LAYOUT_CONFIG |
| `P_LAYOUT_SECAO` | PROTESTO — CRUD P_LAYOUT_SECAO |
| `P_NOTA_TITULO` | PROTESTO — CRUD P_NOTA_TITULO |
| `P_PARCELAMENTO` | PROTESTO — CRUD P_PARCELAMENTO |
| `P_PROTECAO_CREDITO` | PROTESTO — CRUD P_PROTECAO_CREDITO |
| `P_REG_CENPROT` | PROTESTO — CRUD P_REG_CENPROT |
| `P_SEQUENCIA_CENPROT` | PROTESTO — CRUD P_SEQUENCIA_CENPROT |

## Frontend (paridade)

Telas CRUD concluídas para as 15 tabelas acima: [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]].

## Relacionado

- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]
- [[Orius/empresa/produtos/tabelionato-protesto]]
- [[Meta/integracoes/plane/projetos/protesto]]
- JSON: `Meta/integracoes/plane/scripts/maps/postman-protesto-cruds.json`
