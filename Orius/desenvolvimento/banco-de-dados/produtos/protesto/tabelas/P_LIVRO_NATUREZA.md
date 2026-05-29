---
tipo: tabela-db
area: orius
produto: protesto
dominio: livro-andamento
tabela: P_LIVRO_NATUREZA
banco: palmelo2
tags: [orius, db, firebird, protesto, livro-andamento]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `livro-andamento` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_LIVRO_NATUREZA`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `LIVRO_NATUREZA_ID` | BIGINT | N | - | sim |  | |
| `NATUREZA_ID` | BIGINT | N | - |  | `G_NATUREZA(NATUREZA_ID)` | |
| `DESCRICAO` | VARCHAR(60) | N | - |  |  | |
| `SITUACAO` | VARCHAR(1) | N | - |  |  | |
| `SIGLA` | VARCHAR(3) | N | - |  |  | |
| `TIPO` | VARCHAR(1) | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_LIVRO_NATUREZA_PK` | PRIMARY KEY | LIVRO_NATUREZA_ID |
| `P_LIVRO_NATUREZA_NATUREZA_FK` | FOREIGN KEY | NATUREZA_ID -> `G_NATUREZA(NATUREZA_ID)` |
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
