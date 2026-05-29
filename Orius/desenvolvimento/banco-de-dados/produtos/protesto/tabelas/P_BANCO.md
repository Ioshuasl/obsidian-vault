---
tipo: tabela-db
area: orius
produto: protesto
dominio: cadastro
tabela: P_BANCO
banco: palmelo2
tags: [orius, db, firebird, protesto, cadastro]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `cadastro` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_BANCO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `BANCO_ID` | BIGINT | N | - | sim |  | |
| `CODIGO_BANCO` | VARCHAR(30) | N | - |  |  | |
| `DESCRICAO` | VARCHAR(60) | N | - |  |  | |
| `PESSOA_ID` | BIGINT | N | - |  | `P_PESSOA(PESSOA_ID)` | |
| `LAYOUT_ID` | BIGINT | N | - |  | `P_LAYOUT(LAYOUT_ID)` | |
| `APONTAMENTO_PAG_POSTERIOR` | VARCHAR(1) | N | - |  |  | |
| `CUSTAS_NA_CONFIRMACAO` | VARCHAR(1) | N | - |  |  | |
| `DEMAIS_DESPESAS` | BIGINT | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_BANCO_PK` | PRIMARY KEY | BANCO_ID |
| `P_BANCO_PESSOA_FK` | FOREIGN KEY | PESSOA_ID -> `P_PESSOA(PESSOA_ID)` |
| `P_BANCO_P_LAYOUT_FK` | FOREIGN KEY | LAYOUT_ID -> `P_LAYOUT(LAYOUT_ID)` |
| _(nenhuma)_ | - | - |

## Relacionamentos

_(Documentar cardinalidades na fase seguinte - ver FK acima.)_

## Regras de negocio

- 

## Legado (Delphi)

| Item | Referencia |
|------|------------|
| Unit / datamodule | |
| Telas | |

## Web (novo)

| Item | Referencia |
|------|------------|
| Entidade / API | |
| Migracao | [[Orius/desenvolvimento/refatoracao/migracao-delphi-para-web]] |

## Integracoes

_(Se aplicavel.)_

## Metadados

| Campo | Valor |
|-------|-------|
| Export JSON | [[Orius/desenvolvimento/banco-de-dados/metadata/palmelo2/protesto-p-metadata.json]] |
| Script | [[Orius/desenvolvimento/scripts/firebird/export-protesto-p.md]] |
| Extraido em | 2026-05-29 |
| Charset conexao | ISO8859_1 |
| Status | `gerado` - schema automatico; objetivo/descricao pendentes |
