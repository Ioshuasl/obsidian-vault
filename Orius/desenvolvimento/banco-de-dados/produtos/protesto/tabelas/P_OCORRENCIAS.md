---
tipo: tabela-db
area: orius
produto: protesto
dominio: livro-andamento
tabela: P_OCORRENCIAS
banco: palmelo2
tags: [orius, db, firebird, protesto, livro-andamento]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `livro-andamento` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_OCORRENCIAS`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `OCORRENCIAS_ID` | BIGINT | N | - | sim |  | |
| `CODIGO` | VARCHAR(10) | N | - |  |  | |
| `DESCRICAO` | VARCHAR(260) | N | - |  |  | |
| `TIPO` | VARCHAR(30) | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_OCORRENCIAS_PK` | PRIMARY KEY | OCORRENCIAS_ID |
| _(nenhuma)_ | - | - |
| `P_OCORRENCIAS_CODIGO_IDX` | INDEX | CODIGO |

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
