---
tipo: tabela-db
area: orius
produto: protesto
dominio: cadastro
tabela: P_MOTIVOS
banco: palmelo2
tags: [orius, db, firebird, protesto, cadastro]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `cadastro` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_MOTIVOS`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `MOTIVOS_ID` | BIGINT | N | - | sim |  | |
| `DESCRICAO` | VARCHAR(60) | N | - |  |  | |
| `SITUACAO` | VARCHAR(15) | N | - |  |  | |
| `CODIGO` | VARCHAR(3) | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_MOTIVOS_PK` | PRIMARY KEY | MOTIVOS_ID |
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
