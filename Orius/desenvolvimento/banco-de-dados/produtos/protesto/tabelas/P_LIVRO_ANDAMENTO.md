---
tipo: tabela-db
area: orius
produto: protesto
dominio: livro-andamento
tabela: P_LIVRO_ANDAMENTO
banco: palmelo2
tags: [orius, db, firebird, protesto, livro-andamento]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `livro-andamento` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_LIVRO_ANDAMENTO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `LIVRO_ANDAMENTO_ID` | BIGINT | N | - | sim |  | |
| `LIVRO_NATUREZA_ID` | BIGINT | N | - |  | `P_LIVRO_NATUREZA(LIVRO_NATUREZA_ID)` | |
| `FOLHA_ATUAL` | BIGINT | N | - |  |  | |
| `NUMERO_LIVRO` | BIGINT | N | - |  |  | |
| `NUMERO_LIVRO_LETRA` | VARCHAR(3) | N | - |  |  | |
| `DATA_ABERTURA` | TIMESTAMP | N | - |  |  | |
| `DATA_FECHAMENTO` | TIMESTAMP | N | - |  |  | |
| `NUMERO_FOLHAS` | BIGINT | N | - |  |  | |
| `SIGLA` | VARCHAR(3) | N | - |  |  | |
| `USUARIO_ID` | BIGINT | N | - |  | `G_USUARIO(USUARIO_ID)` | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_LIVRO_ANDAMENTO_PK` | PRIMARY KEY | LIVRO_ANDAMENTO_ID |
| `P_LIVRO_ANDAMENTO_LIVRO_NAT_FK` | FOREIGN KEY | LIVRO_NATUREZA_ID -> `P_LIVRO_NATUREZA(LIVRO_NATUREZA_ID)` |
| `P_LIVRO_ANDAMENTO_USUARIO_FK` | FOREIGN KEY | USUARIO_ID -> `G_USUARIO(USUARIO_ID)` |
| `P_LIVRO_ANDAMENTO_IDX` | INDEX | NUMERO_LIVRO |

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
