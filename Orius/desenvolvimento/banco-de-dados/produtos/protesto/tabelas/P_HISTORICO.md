---
tipo: tabela-db
area: orius
produto: protesto
dominio: livro-andamento
tabela: P_HISTORICO
banco: palmelo2
tags: [orius, db, firebird, protesto, livro-andamento]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `livro-andamento` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_HISTORICO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `HISTORICO_ID` | BIGINT | N | - | sim |  | |
| `TABELA` | VARCHAR(30) | N | - |  |  | |
| `CAMPO` | VARCHAR(60) | N | - |  |  | |
| `OPERACAO` | VARCHAR(1) | N | - |  |  | |
| `NEW_VALUE` | BLOB | N | - |  |  | |
| `DATA` | TIMESTAMP | N | - |  |  | |
| `USUARIO_ID` | BIGINT | N | - |  | `G_USUARIO(USUARIO_ID)` | |
| `OBSERVACAO` | VARCHAR(260) | N | - |  |  | |
| `ID` | BIGINT | N | - |  |  | |
| `DATA_REGISTRO` | TIMESTAMP | N | - |  |  | |
| `DADOS_COMPLEMENTARES` | BLOB | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_HISTORICO_PK` | PRIMARY KEY | HISTORICO_ID |
| `P_HISTORICO_USUARIO_FK` | FOREIGN KEY | USUARIO_ID -> `G_USUARIO(USUARIO_ID)` |
| `P_HISTORICO_DATA_IDX` | INDEX | DATA |
| `P_HISTORICO_ID_IDX` | INDEX | ID |

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
