---
tipo: tabela-db
area: orius
produto: protesto
dominio: febraban-layout
tabela: P_ARQUIVO_TITULO
banco: palmelo2
tags: [orius, db, firebird, protesto, febraban-layout]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `febraban-layout` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_ARQUIVO_TITULO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `ARQUIVO_TITULO_ID` | BIGINT | N | - | sim |  | |
| `DATA_IMPORTACAO` | TIMESTAMP | N | - |  |  | |
| `QUANTIDADE` | BIGINT | N | - |  |  | |
| `DATA_MOVIMENTO` | VARCHAR(30) | N | - |  |  | |
| `NUMERO_SEQUENCIAL` | VARCHAR(30) | N | - |  |  | |
| `QTDE_REGISTROS` | VARCHAR(30) | N | - |  |  | |
| `QTDE_TITULOS` | VARCHAR(30) | N | - |  |  | |
| `QTDE_INDICACOES` | VARCHAR(30) | N | - |  |  | |
| `QTDE_ORIGINAIS` | VARCHAR(30) | N | - |  |  | |
| `SOMA_VLR_REMESSA` | BIGINT | N | - |  |  | |
| `SOMA_QTDE_REMESSA` | BIGINT | N | - |  |  | |
| `AGENCIA_CENTRALIZADORA` | VARCHAR(10) | N | - |  |  | |
| `CODIGO_PRACA` | VARCHAR(10) | N | - |  |  | |
| `SEQUENCIAL_HEADER` | VARCHAR(10) | N | - |  |  | |
| `NOME_ARQUIVO` | VARCHAR(150) | N | - |  |  | |
| `PORTADOR_NOME` | VARCHAR(60) | N | - |  |  | |
| `COMPLEMENTO_HEADER` | VARCHAR(260) | N | - |  |  | |
| `IDENTIFICACAO_REGISTRO` | VARCHAR(1) | N | - |  |  | |
| `PORTADOR_CODIGO` | VARCHAR(3) | N | - |  |  | |
| `ID_TRANSACAO_REMETENTE` | VARCHAR(3) | N | - |  |  | |
| `ID_TRANSACAO_DESTINATARIO` | VARCHAR(3) | N | - |  |  | |
| `ID_TRANSACAO_TIPO` | VARCHAR(3) | N | - |  |  | |
| `VERSAO_LAYOUT` | VARCHAR(3) | N | - |  |  | |
| `SEQUENCIAL_FOOTER` | VARCHAR(15) | N | - |  |  | |
| `COMPLEMENTO_REGISTRO` | VARCHAR(1000) | N | - |  |  | |
| `TEXTO` | BLOB | N | - |  |  | |
| `TEXTO_IMPORTADO` | BLOB | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_ARQUIVO_TITULO_PK` | PRIMARY KEY | ARQUIVO_TITULO_ID |
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
