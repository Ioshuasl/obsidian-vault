---
tipo: tabela-db
area: orius
produto: protesto
dominio: pessoa
tabela: P_PESSOA_VINCULO
banco: palmelo2
tags: [orius, db, firebird, protesto, pessoa]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `pessoa` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_PESSOA_VINCULO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `PESSOA_VINCULO_ID` | BIGINT | N | - | sim |  | |
| `NOME` | VARCHAR(150) | N | - |  |  | |
| `CPFCNPJ` | VARCHAR(15) | N | - |  |  | |
| `ENDERECO` | VARCHAR(90) | N | - |  |  | |
| `BAIRRO` | VARCHAR(60) | N | - |  |  | |
| `CIDADE` | VARCHAR(60) | N | - |  |  | |
| `UF` | VARCHAR(3) | N | - |  |  | |
| `CEP` | VARCHAR(15) | N | - |  |  | |
| `TELEFONE` | VARCHAR(15) | N | - |  |  | |
| `RG` | VARCHAR(30) | N | - |  |  | |
| `TITULO_ID` | BIGINT | N | - |  |  | |
| `TIPO_VINCULO` | VARCHAR(15) | N | - |  |  | |
| `PESSOA_ID` | BIGINT | N | - |  | `P_PESSOA(PESSOA_ID)` | |
| `BANCO` | VARCHAR(3) | N | - |  |  | |
| `AGENCIA` | VARCHAR(30) | N | - |  |  | |
| `CONTA` | VARCHAR(30) | N | - |  |  | |
| `NOME_BANCO` | VARCHAR(30) | N | - |  |  | |
| `NACIONALIDADE` | VARCHAR(30) | N | - |  |  | |
| `ESTADO_CIVIL_ID` | BIGINT | N | - |  | `G_TB_ESTADOCIVIL(TB_ESTADOCIVIL_ID)` | |
| `PROFISSAO_ID` | BIGINT | N | - |  | `G_TB_PROFISSAO(TB_PROFISSAO_ID)` | |
| `CIDADE_AGENCIA` | VARCHAR(30) | N | - |  |  | |
| `PRINCIPAL` | VARCHAR(1) | N | - |  |  | |
| `FAVORECIDO` | VARCHAR(1) | N | - |  |  | |
| `GERAR_SELO` | VARCHAR(1) | N | - |  |  | |
| `DEVEDOR_DATA_ACEITE` | TIMESTAMP | N | - |  |  | |
| `DEVEDOR_AGENCIA` | VARCHAR(90) | N | - |  |  | |
| `DEVEDOR_NUMERO_AR` | VARCHAR(90) | N | - |  |  | |
| `DEVEDOR_RECEBIDO_POR` | VARCHAR(90) | N | - |  |  | |
| `DEVEDOR_SITUACAO` | VARCHAR(90) | N | - |  |  | |
| `DEVEDOR_TIPO_ACEITE` | VARCHAR(1) | N | - |  |  | |
| `OCORRENCIA_ID` | BIGINT | N | - |  | `P_OCORRENCIAS(OCORRENCIAS_ID)` | |
| `CHAVE_IMPORTACAO` | BIGINT | N | - |  |  | |
| `DEVEDOR_MICROEMPRESA` | VARCHAR(1) | N | - |  |  | |
| `OCORRENCIA_ANDAMENTO_ID` | BIGINT | N | - |  |  | |
| `CONTROLE_DEVEDOR` | BIGINT | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_PESSOA_VINCULO_PK` | PRIMARY KEY | PESSOA_VINCULO_ID |
| `P_PESSOA_VINCULO_ESTADO_CIV_FK` | FOREIGN KEY | ESTADO_CIVIL_ID -> `G_TB_ESTADOCIVIL(TB_ESTADOCIVIL_ID)` |
| `P_PESSOA_VINCULO_PESSOA_FK` | FOREIGN KEY | PESSOA_ID -> `P_PESSOA(PESSOA_ID)` |
| `P_PESSOA_VINCULO_PROFISSAO_FK` | FOREIGN KEY | PROFISSAO_ID -> `G_TB_PROFISSAO(TB_PROFISSAO_ID)` |
| `P_PESSOA_VINCULO_P_OCORRENC_FK` | FOREIGN KEY | OCORRENCIA_ID -> `P_OCORRENCIAS(OCORRENCIAS_ID)` |
| `DEVEDOR_DT_ACEITE_IDX` | INDEX | DEVEDOR_DATA_ACEITE |
| `P_PESSOA_VINCULO_CPFCNPJ_IDX` | INDEX | CPFCNPJ |
| `P_PESSOA_VINCULO_NOME_IDX` | INDEX | NOME |
| `P_PES_VINC_TITULO_ID_IDX` | INDEX | TITULO_ID |
| `TIPO_VINCULO_IDX` | INDEX | TIPO_VINCULO |

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
