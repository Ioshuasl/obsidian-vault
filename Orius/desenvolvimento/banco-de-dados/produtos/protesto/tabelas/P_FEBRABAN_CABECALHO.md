---
tipo: tabela-db
area: orius
produto: protesto
dominio: febraban-layout
tabela: P_FEBRABAN_CABECALHO
banco: palmelo2
tags: [orius, db, firebird, protesto, febraban-layout]
status: gerado
tem_legado_delphi: true
relaciona_integracao: [febraban]
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `febraban-layout` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_FEBRABAN_CABECALHO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `FEBRABAN_CABECALHO_ID` | BIGINT | N | - | sim |  | |
| `IDENTIFICACAO_REGISTRO` | VARCHAR(1) | N | - |  |  | |
| `PORTADOR_CODIGO` | VARCHAR(3) | N | - |  |  | |
| `PORTADOR_NOME` | VARCHAR(60) | N | - |  |  | |
| `DATA_MOVIMENTO` | VARCHAR(10) | N | - |  |  | |
| `ID_TRANSACAO_REMETENTE` | VARCHAR(3) | N | - |  |  | |
| `ID_TRANSACAO_DESTINATARIO` | VARCHAR(3) | N | - |  |  | |
| `ID_TRANSACAO_TIPO` | VARCHAR(3) | N | - |  |  | |
| `NUMERO_SEQUENCIAL` | VARCHAR(10) | N | - |  |  | |
| `QTDE_REGISTROS` | VARCHAR(10) | N | - |  |  | |
| `QTDE_TITULOS` | VARCHAR(10) | N | - |  |  | |
| `QTDE_INDICACOES` | VARCHAR(10) | N | - |  |  | |
| `QTDE_ORIGINAIS` | VARCHAR(10) | N | - |  |  | |
| `AGENCIA_CENTRALIZADORA` | VARCHAR(10) | N | - |  |  | |
| `VERSAO_LAYOUT` | VARCHAR(3) | N | - |  |  | |
| `CODIGO_PRACA` | VARCHAR(10) | N | - |  |  | |
| `COMPLEMENTO_REGISTRO` | VARCHAR(1000) | N | - |  |  | |
| `SEQUENCIAL_HEADER` | VARCHAR(10) | N | - |  |  | |
| `ARQUIVO_TITULO_ID` | BIGINT | N | - |  | `P_ARQUIVO_TITULO(ARQUIVO_TITULO_ID)` | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_FEBRABAN_CABECALHO_PK` | PRIMARY KEY | FEBRABAN_CABECALHO_ID |
| `P_FEBRABAN_CABECALHO_P_ARQU_FK` | FOREIGN KEY | ARQUIVO_TITULO_ID -> `P_ARQUIVO_TITULO(ARQUIVO_TITULO_ID)` |
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
