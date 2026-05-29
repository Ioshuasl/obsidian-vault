---
tipo: tabela-db
area: orius
produto: protesto
dominio: pessoa
tabela: P_PESSOA
banco: palmelo2
tags: [orius, db, firebird, protesto, pessoa]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `pessoa` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_PESSOA`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `PESSOA_ID` | BIGINT | N | - | sim |  | |
| `NOME` | VARCHAR(150) | N | - |  |  | |
| `CPFCNPJ` | VARCHAR(15) | N | - |  |  | |
| `ENDERECO` | VARCHAR(90) | N | - |  |  | |
| `BAIRRO` | VARCHAR(60) | N | - |  |  | |
| `CIDADE` | VARCHAR(60) | N | - |  |  | |
| `UF` | VARCHAR(3) | N | - |  |  | |
| `CEP` | VARCHAR(15) | N | - |  |  | |
| `TELEFONE` | VARCHAR(15) | N | - |  |  | |
| `RG` | VARCHAR(30) | N | - |  |  | |
| `OBSERVACOES` | VARCHAR(260) | N | - |  |  | |
| `BANCO` | VARCHAR(3) | N | - |  |  | |
| `AGENCIA` | VARCHAR(30) | N | - |  |  | |
| `CONTA` | VARCHAR(30) | N | - |  |  | |
| `NOME_BANCO` | VARCHAR(30) | N | - |  |  | |
| `NACIONALIDADE` | VARCHAR(30) | N | - |  |  | |
| `ESTADO_CIVIL_ID` | BIGINT | N | - |  | `G_TB_ESTADOCIVIL(TB_ESTADOCIVIL_ID)` | |
| `PROFISSAO_ID` | BIGINT | N | - |  | `G_TB_PROFISSAO(TB_PROFISSAO_ID)` | |
| `CIDADE_AGENCIA` | VARCHAR(30) | N | - |  |  | |
| `DATA_NASCIMENTO` | TIMESTAMP | N | - |  |  | |
| `EMAIL` | VARCHAR(60) | N | - |  |  | |
| `CIDADE_ID` | BIGINT | N | - |  | `G_CIDADE(CIDADE_ID)` | |
| `DATA_VALIDADE` | TIMESTAMP | N | - |  |  | |
| `MICRO_EMPRESA` | VARCHAR(1) | N | - |  |  | |
| `CHAVE_PESSOA_IMP` | BIGINT | N | - |  |  | |
| `COD_CRA` | VARCHAR(30) | N | - |  |  | |
| `NOME_FANTASIA` | VARCHAR(260) | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_PESSOA_PK` | PRIMARY KEY | PESSOA_ID |
| `P_PESSOA_ESTADO_CIVIL_FK` | FOREIGN KEY | ESTADO_CIVIL_ID -> `G_TB_ESTADOCIVIL(TB_ESTADOCIVIL_ID)` |
| `P_PESSOA_PROFISSAO_FK` | FOREIGN KEY | PROFISSAO_ID -> `G_TB_PROFISSAO(TB_PROFISSAO_ID)` |
| `P_PESSOA_P_CIDADE_FK` | FOREIGN KEY | CIDADE_ID -> `G_CIDADE(CIDADE_ID)` |
| `P_PESSOA_CPFCNPJ_IDX` | INDEX | CPFCNPJ |
| `P_PESSOA_NOME_IDX` | INDEX | NOME |

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
