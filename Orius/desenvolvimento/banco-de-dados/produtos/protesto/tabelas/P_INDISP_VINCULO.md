---
tipo: tabela-db
area: orius
produto: protesto
dominio: pessoa
tabela: P_INDISP_VINCULO
banco: palmelo2
tags: [orius, db, firebird, protesto, pessoa]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `pessoa` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_INDISP_VINCULO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `INDISP_VINCULO_ID` | BIGINT | N | - | sim |  | |
| `INDISPONIBILIDADE_ID` | BIGINT | N | - |  | `P_INDISPONIBILIDADE(INDISPONIBILIDADE_ID)` | |
| `PESSOA_ID` | BIGINT | N | - |  | `P_PESSOA(PESSOA_ID)` | |
| `SITUACAO` | VARCHAR(1) | N | - |  |  | |
| `NOME` | VARCHAR(150) | N | - |  |  | |
| `CPFCNPJ` | VARCHAR(15) | N | - |  |  | |
| `DOCUMENTO` | VARCHAR(30) | N | - |  |  | |
| `DATA_BAIXA` | TIMESTAMP | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_INDISP_VINCULO_PK` | PRIMARY KEY | INDISP_VINCULO_ID |
| `P_INDISP_VINCULO_INDISPONIB_FK` | FOREIGN KEY | INDISPONIBILIDADE_ID -> `P_INDISPONIBILIDADE(INDISPONIBILIDADE_ID)` |
| `P_INDISP_VINCULO_PESSOA_FK` | FOREIGN KEY | PESSOA_ID -> `P_PESSOA(PESSOA_ID)` |
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
