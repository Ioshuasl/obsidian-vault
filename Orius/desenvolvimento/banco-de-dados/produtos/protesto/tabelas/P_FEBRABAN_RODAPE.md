---
tipo: tabela-db
area: orius
produto: protesto
dominio: febraban-layout
tabela: P_FEBRABAN_RODAPE
banco: palmelo2
tags: [orius, db, firebird, protesto, febraban-layout]
status: gerado
tem_legado_delphi: true
relaciona_integracao: [febraban]
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `febraban-layout` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_FEBRABAN_RODAPE`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `FEBRABAN_RODAPE_ID` | BIGINT | N | - | sim |  | |
| `COMPLEMENTO_REGISTRO` | VARCHAR(1000) | N | - |  |  | |
| `DATA_MOVIMENTO` | VARCHAR(10) | N | - |  |  | |
| `IDENTIFICACAO_REGISTRO` | VARCHAR(1) | N | - |  |  | |
| `PORTADOR_CODIGO` | VARCHAR(3) | N | - |  |  | |
| `PORTADOR_NOME` | VARCHAR(60) | N | - |  |  | |
| `SEQUENCIAL_FOOTER` | VARCHAR(10) | N | - |  |  | |
| `SOMA_QTDE_REMESSA` | VARCHAR(10) | N | - |  |  | |
| `SOMA_VLR_REMESSA` | VARCHAR(30) | N | - |  |  | |
| `ARQUIVO_TITULO_ID` | BIGINT | N | - |  | `P_ARQUIVO_TITULO(ARQUIVO_TITULO_ID)` | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_FEBRABAN_RODAPE_PK` | PRIMARY KEY | FEBRABAN_RODAPE_ID |
| `P_FEBRABAN_RODAPE_P_ARQUIVO_FK` | FOREIGN KEY | ARQUIVO_TITULO_ID -> `P_ARQUIVO_TITULO(ARQUIVO_TITULO_ID)` |
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
