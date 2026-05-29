---
tipo: tabela-db
area: orius
produto: protesto
dominio: certidao
tabela: P_CERTIDAO
banco: palmelo2
tags: [orius, db, firebird, protesto, certidao]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `certidao` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_CERTIDAO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `CERTIDAO_ID` | BIGINT | N | - | sim |  | |
| `USUARIO_ID` | BIGINT | N | - |  | `G_USUARIO(USUARIO_ID)` | |
| `DATA_CERTIDAO` | TIMESTAMP | N | - |  |  | |
| `HORA_CERTIDAO` | VARCHAR(10) | N | - |  |  | |
| `TIPO_CERTIDAO` | VARCHAR(1) | N | - |  |  | |
| `VALOR_EMOLUMENTO` | BIGINT | N | - |  |  | |
| `VALOR_TAXA_JUDICIARIA` | BIGINT | N | - |  |  | |
| `VALOR_FUNDESP` | BIGINT | N | - |  |  | |
| `VALOR_TAXA_EXTRA` | BIGINT | N | - |  |  | |
| `NUMERO_IMPRESSAO` | BIGINT | N | - |  |  | |
| `CPFCNPJ` | VARCHAR(15) | N | - |  |  | |
| `NOME` | VARCHAR(150) | N | - |  |  | |
| `STATUS` | VARCHAR(1) | N | - |  |  | |
| `OBSERVACAO` | BLOB | N | - |  |  | |
| `VALOR_TAXA_ISS` | BIGINT | N | - |  |  | |
| `APRESENTANTE` | VARCHAR(150) | N | - |  |  | |
| `QTD_PROTESTOS` | BIGINT | N | - |  |  | |
| `QTD_CANCELADOS` | BIGINT | N | - |  |  | |
| `QTD_SUSTADO` | BIGINT | N | - |  |  | |
| `N_REMESSA` | BIGINT | N | - |  |  | |
| `TIPO_REMESSA` | VARCHAR(1) | N | - |  |  | |
| `PROTECAO_CREDITO_ID` | BIGINT | N | - |  | `P_PROTECAO_CREDITO(PROTECAO_CREDITO_ID)` | |
| `NFSE_ID` | INTEGER | N | - |  | `NFSE(ID_NFSE)` | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_CERTIDAO_PK` | PRIMARY KEY | CERTIDAO_ID |
| `FK_P_CERTIDAO_NFSE` | FOREIGN KEY | NFSE_ID -> `NFSE(ID_NFSE)` |
| `P_CERTIDAO_P_PROTECAO_CREDI_FK` | FOREIGN KEY | PROTECAO_CREDITO_ID -> `P_PROTECAO_CREDITO(PROTECAO_CREDITO_ID)` |
| `P_CERTIDAO_USUARIO_FK` | FOREIGN KEY | USUARIO_ID -> `G_USUARIO(USUARIO_ID)` |
| `IDX_P_CERTIDAO_NFSE` | INDEX | NFSE_ID |
| `P_CERTIDAO_CPFCNPJ_IDX` | INDEX | CPFCNPJ |
| `P_CERTIDAO_DATA_IDX` | INDEX | DATA_CERTIDAO |
| `P_CERTIDAO_NOME_IDX` | INDEX | NOME |

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
