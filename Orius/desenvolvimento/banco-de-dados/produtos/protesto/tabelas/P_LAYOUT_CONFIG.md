---
tipo: tabela-db
area: orius
produto: protesto
dominio: febraban-layout
tabela: P_LAYOUT_CONFIG
banco: palmelo2
tags: [orius, db, firebird, protesto, febraban-layout]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `febraban-layout` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_LAYOUT_CONFIG`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `LAYOUT_CONFIG_ID` | BIGINT | N | - | sim |  | |
| `DESCRICAO` | VARCHAR(60) | N | - |  |  | |
| `POS_INICIAL` | BIGINT | N | - |  |  | |
| `POS_FINAL` | BIGINT | N | - |  |  | |
| `CONSTANTE` | VARCHAR(30) | N | - |  |  | |
| `CARAC_PREENCHER` | VARCHAR(1) | N | - |  |  | |
| `LAYOUT_SECAO_ID` | BIGINT | N | - |  | `P_LAYOUT_SECAO(LAYOUT_SECAO_ID)` | |
| `ROTINA_VALIDACAO` | BIGINT | N | - |  |  | |
| `CAMPO_TABELA` | VARCHAR(30) | N | - |  |  | |
| `TIPO_DADO` | VARCHAR(1) | N | - |  |  | |
| `MASCARA` | VARCHAR(15) | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_LAYOUT_CONFIG_PK` | PRIMARY KEY | LAYOUT_CONFIG_ID |
| `P_LAYOUT_CONFIG_P_LAYOUT_SE_FK` | FOREIGN KEY | LAYOUT_SECAO_ID -> `P_LAYOUT_SECAO(LAYOUT_SECAO_ID)` |
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
