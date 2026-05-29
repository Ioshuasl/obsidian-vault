---
tipo: tabela-db
area: orius
produto: protesto
dominio: cenprot
tabela: P_REG_CENPROT
banco: palmelo2
tags: [orius, db, firebird, protesto, cenprot]
status: gerado
tem_legado_delphi: true
relaciona_integracao: [cenprot]
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `cenprot` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_REG_CENPROT`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `REG_CENPROT_ID` | BIGINT | N | - | sim |  | |
| `CHAVECENPROT` | VARCHAR(150) | N | - |  |  | |
| `TITULO_ID` | BIGINT | N | - |  |  | |
| `DATA_GERACAO` | TIMESTAMP | N | - |  |  | |
| `TIPO` | VARCHAR(60) | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_REG_CENPROT_PK` | PRIMARY KEY | REG_CENPROT_ID |
| _(nenhuma)_ | - | - |
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
