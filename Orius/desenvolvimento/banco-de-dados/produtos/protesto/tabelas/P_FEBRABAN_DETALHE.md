---
tipo: tabela-db
area: orius
produto: protesto
dominio: febraban-layout
tabela: P_FEBRABAN_DETALHE
banco: palmelo2
tags: [orius, db, firebird, protesto, febraban-layout]
status: gerado
tem_legado_delphi: true
relaciona_integracao: [febraban]
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `febraban-layout` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_FEBRABAN_DETALHE`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `FEBRABAN_DETALHE_ID` | BIGINT | N | - | sim |  | |
| `IDENTIFICACAO_REGISTRO` | VARCHAR(1) | N | - |  |  | |
| `CODIGO_PORTADOR` | VARCHAR(3) | N | - |  |  | |
| `AGENCIA_CODIGO_CEDENTE` | VARCHAR(15) | N | - |  |  | |
| `NOME_CREDOR` | VARCHAR(60) | N | - |  |  | |
| `NOME_APRESENTANTE` | VARCHAR(60) | N | - |  |  | |
| `CPFCNPJ_APRESENTANTE` | VARCHAR(15) | N | - |  |  | |
| `ENDERECO_APRESENTANTE` | VARCHAR(60) | N | - |  |  | |
| `CEP_APRESENTANTE` | VARCHAR(10) | N | - |  |  | |
| `CIDADE_APRESENTANTE` | VARCHAR(30) | N | - |  |  | |
| `UF_APRESENTANTE` | VARCHAR(3) | N | - |  |  | |
| `NOSSO_NUMERO` | VARCHAR(15) | N | - |  |  | |
| `ESPECIE_TITULO` | VARCHAR(3) | N | - |  |  | |
| `NUMERO_TITULO` | VARCHAR(15) | N | - |  |  | |
| `DATA_EMISSAO_TITULO` | VARCHAR(10) | N | - |  |  | |
| `DATA_VENCIMENTO_TITULO` | VARCHAR(10) | N | - |  |  | |
| `TIPO_MOEDA` | VARCHAR(3) | N | - |  |  | |
| `VALOR_TITULO` | VARCHAR(15) | N | - |  |  | |
| `SALDO_TITULO` | VARCHAR(15) | N | - |  |  | |
| `PRACA_PROTESTO` | VARCHAR(30) | N | - |  |  | |
| `TIPO_ENDOSSO` | VARCHAR(1) | N | - |  |  | |
| `INFORMACAO_ACEITE` | VARCHAR(1) | N | - |  |  | |
| `NUMERO_CONTROLE_DEVEDOR` | VARCHAR(1) | N | - |  |  | |
| `NOME_DEVEDOR` | VARCHAR(60) | N | - |  |  | |
| `IDENTIFICACAO_DEVEDOR` | VARCHAR(3) | N | - |  |  | |
| `CPFCNPJ_DEVEDOR` | VARCHAR(15) | N | - |  |  | |
| `RG_DEVEDOR` | VARCHAR(15) | N | - |  |  | |
| `ENDERECO_DEVEDOR` | VARCHAR(60) | N | - |  |  | |
| `CEP_DEVEDOR` | VARCHAR(10) | N | - |  |  | |
| `CIDADE_DEVEDOR` | VARCHAR(30) | N | - |  |  | |
| `UF_DEVEDOR` | VARCHAR(3) | N | - |  |  | |
| `CODIGO_CARTORIO_DESTINO` | VARCHAR(3) | N | - |  |  | |
| `PROTOCOLO` | VARCHAR(10) | N | - |  |  | |
| `TIPO_OCORRENCIA` | VARCHAR(1) | N | - |  |  | |
| `DATA_PROTOCOLO` | VARCHAR(10) | N | - |  |  | |
| `DECLARACAO_PORTADOR` | VARCHAR(1) | N | - |  |  | |
| `DATA_OCORRENCIA` | VARCHAR(10) | N | - |  |  | |
| `CODIGO_IRREGULARIDADE` | VARCHAR(3) | N | - |  |  | |
| `BAIRRO_DEVEDOR` | VARCHAR(30) | N | - |  |  | |
| `CUSTAS_CARTORIO_DISTRIBUIDOR` | VARCHAR(10) | N | - |  |  | |
| `NUMERO_PARCELA_CONTRATO` | VARCHAR(3) | N | - |  |  | |
| `LETRA_CAMBIO` | VARCHAR(1) | N | - |  |  | |
| `COMPLEMENTO_IRREGULARIDE` | VARCHAR(10) | N | - |  |  | |
| `MOTIVO_FALENCIA` | VARCHAR(1) | N | - |  |  | |
| `INSTRUMENTO_PROTESTO` | VARCHAR(1) | N | - |  |  | |
| `CUSTAS_CARTORIO` | VARCHAR(10) | N | - |  |  | |
| `COMPLEMENTO_REGISTRO` | VARCHAR(30) | N | - |  |  | |
| `NUMERO_SEQUENCIAL` | VARCHAR(10) | N | - |  |  | |
| `REGISTRO_DISTRIBUIDOR` | VARCHAR(10) | N | - |  |  | |
| `NUMERO_OPERACAO_BANCO` | VARCHAR(10) | N | - |  |  | |
| `NUMERO_CONTRATO_BANCO` | VARCHAR(15) | N | - |  |  | |
| `ARQUIVO_TITULO_ID` | BIGINT | N | - |  | `P_ARQUIVO_TITULO(ARQUIVO_TITULO_ID)` | |
| `IMPORTAR` | VARCHAR(1) | N | - |  |  | |
| `SITUACAO` | VARCHAR(1) | N | - |  |  | |
| `IRREGULARIDADES_ID` | BIGINT | N | - |  | `P_IRREGULARIDADES(IRREGULARIDADES_ID)` | |
| `CORREIOS` | BIGINT | N | - |  |  | |
| `CPFCNPJ_CREDOR` | VARCHAR(15) | N | - |  |  | |
| `ENDERECO_CREDOR` | VARCHAR(60) | N | - |  |  | |
| `BAIRRO_CREDOR` | VARCHAR(30) | N | - |  |  | |
| `CIDADE_CREDOR` | VARCHAR(10) | N | - |  |  | |
| `UF_CREDOR` | VARCHAR(3) | N | - |  |  | |
| `RG_CREDOR` | VARCHAR(15) | N | - |  |  | |
| `CEP_CREDOR` | VARCHAR(10) | N | - |  |  | |
| `BAIRRO_APRESENTANTE` | VARCHAR(30) | N | - |  |  | |
| `RG_APRESENTANTE` | VARCHAR(15) | N | - |  |  | |
| `TITULO_ID` | BIGINT | N | - |  | `P_TITULO(TITULO_ID)` | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_FEBRABAN_DETALHE_PK` | PRIMARY KEY | FEBRABAN_DETALHE_ID |
| `P_FEBRABAN_DETALHE_P_ARQUIV_FK` | FOREIGN KEY | ARQUIVO_TITULO_ID -> `P_ARQUIVO_TITULO(ARQUIVO_TITULO_ID)` |
| `P_FEBRABAN_DETALHE_P_IRREGU_FK` | FOREIGN KEY | IRREGULARIDADES_ID -> `P_IRREGULARIDADES(IRREGULARIDADES_ID)` |
| `P_FEBRABAN_DETALHE_P_TITULO_FK` | FOREIGN KEY | TITULO_ID -> `P_TITULO(TITULO_ID)` |
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
