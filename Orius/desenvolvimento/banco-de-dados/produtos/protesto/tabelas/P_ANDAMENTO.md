---
tipo: tabela-db
area: orius
produto: protesto
dominio: livro-andamento
tabela: P_ANDAMENTO
banco: palmelo2
tags: [orius, db, firebird, protesto, livro-andamento]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `livro-andamento` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_ANDAMENTO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `ANDAMENTO_ID` | BIGINT | N | - | sim |  | |
| `OCORRENCIA_ANDAMENTO_ID` | BIGINT | N | - |  | `P_OCORRENCIA_ANDAMENTO(OCORRENCIA_ANDAMENTO_ID)` | |
| `DATA_OCORRENCIA` | TIMESTAMP | N | - |  |  | |
| `TITULO_ID` | BIGINT | N | - |  | `P_TITULO(TITULO_ID)` | |
| `USUARIO_ID` | BIGINT | N | - |  | `G_USUARIO(USUARIO_ID)` | |
| `ARQUIVO_GERADO` | VARCHAR(1) | N | - |  |  | |
| `DATA_GERACAO` | TIMESTAMP | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_ANDAMENTO_PK` | PRIMARY KEY | ANDAMENTO_ID |
| `P_ANDAMENTO_P_OCORRENCIA_AN_FK` | FOREIGN KEY | OCORRENCIA_ANDAMENTO_ID -> `P_OCORRENCIA_ANDAMENTO(OCORRENCIA_ANDAMENTO_ID)` |
| `P_ANDAMENTO_P_TITULO_FK` | FOREIGN KEY | TITULO_ID -> `P_TITULO(TITULO_ID)` |
| `P_ANDAMENTO_P_USUARIO_FK` | FOREIGN KEY | USUARIO_ID -> `G_USUARIO(USUARIO_ID)` |
| `P_ANDAMENTO_DATA_OCORR_IDX` | INDEX | DATA_OCORRENCIA |

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
