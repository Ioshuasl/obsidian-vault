---
tipo: tabela-db
area: orius
produto: protesto
dominio: cadastro
tabela: P_INST_PROTESTO
banco: palmelo2
tags: [orius, db, firebird, protesto, cadastro]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `cadastro` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_INST_PROTESTO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `INST_PROTESTO_ID` | BIGINT | N | - | sim |  | |
| `INST_PDF` | BLOB | N | - |  |  | |
| `TITULO_ID` | BIGINT | N | - |  | `P_TITULO(TITULO_ID)` | |
| `INT_CHAVEASSINARTURA` | VARCHAR(260) | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_INST_PROTESTO_PK` | PRIMARY KEY | INST_PROTESTO_ID |
| `P_INST_PROTESTO_P_TITULO_FK` | FOREIGN KEY | TITULO_ID -> `P_TITULO(TITULO_ID)` |
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
