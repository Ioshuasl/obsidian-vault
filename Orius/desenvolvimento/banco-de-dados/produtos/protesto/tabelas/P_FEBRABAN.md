---
tipo: tabela-db
area: orius
produto: protesto
dominio: febraban-layout
tabela: P_FEBRABAN
banco: palmelo2
tags: [orius, db, firebird, protesto, febraban-layout]
status: gerado
tem_legado_delphi: true
relaciona_integracao: [febraban]
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `febraban-layout` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_FEBRABAN`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `FEBRABAN_ID` | BIGINT | N | - | sim |  | |
| `NUMERO_TITULO` | VARCHAR(30) | N | - |  |  | |
| `VALOR_TITULO` | BIGINT | N | - |  |  | |
| `VALOR_REEMBOLSO` | BIGINT | N | - |  |  | |
| `CPFCNPJ_CREDOR` | VARCHAR(30) | N | - |  |  | |
| `RG_CREDOR` | VARCHAR(30) | N | - |  |  | |
| `CPFCNPJ_DEVEDOR` | VARCHAR(30) | N | - |  |  | |
| `RG_DEVEDOR` | VARCHAR(30) | N | - |  |  | |
| `CPFCNPJ_APRESENTANTE` | VARCHAR(30) | N | - |  |  | |
| `RG_APRESENTANTE` | VARCHAR(30) | N | - |  |  | |
| `NOSSO_NUMERO` | VARCHAR(30) | N | - |  |  | |
| `SALDO_TITULO` | BIGINT | N | - |  |  | |
| `PRACA_PAGAMENTO` | VARCHAR(30) | N | - |  |  | |
| `NUMERO_NOTA_FISCAL` | VARCHAR(30) | N | - |  |  | |
| `CODIGO_CARTORIO_NOTAS` | VARCHAR(30) | N | - |  |  | |
| `VALOR_RECONHECIMENTO_FIRMA` | BIGINT | N | - |  |  | |
| `NUMERO_SEQUENCIAL` | VARCHAR(30) | N | - |  |  | |
| `PROTOCOLO` | VARCHAR(30) | N | - |  |  | |
| `TIPO_DOCUMENTO` | VARCHAR(30) | N | - |  |  | |
| `ESPECIE_TITULO` | VARCHAR(30) | N | - |  |  | |
| `IRREGULARIDADES_ID` | BIGINT | N | - |  |  | |
| `IDENTIFICACAO_REGISTRO` | VARCHAR(30) | N | - |  |  | |
| `NUMERO_IDENTIFICACAO_DEVEDOR` | VARCHAR(15) | N | - |  |  | |
| `CODIGO_CARTORIO_DESTINO` | VARCHAR(30) | N | - |  |  | |
| `TIPO_OCORRENCIA` | VARCHAR(30) | N | - |  |  | |
| `NUMERO_CONTROLE_DEVEDOR` | VARCHAR(30) | N | - |  |  | |
| `CUSTAS_CARTORIO` | BIGINT | N | - |  |  | |
| `CUSTAS_CARTORIO_DISTRIBUIDOR` | BIGINT | N | - |  |  | |
| `QTD_TITULOS_REMESSA` | BIGINT | N | - |  |  | |
| `QTD_INDICACOES_REMESSA` | BIGINT | N | - |  |  | |
| `QTD_ORIGINAIS_REMESSA` | BIGINT | N | - |  |  | |
| `QTD_REGISTRO_REMESSA` | BIGINT | N | - |  |  | |
| `AGENCIA_CENTRALIZADORA` | BIGINT | N | - |  |  | |
| `SOMA_SEG_QTD_REMESSA` | BIGINT | N | - |  |  | |
| `SOMA_SEG_VLR_REMESSA` | BIGINT | N | - |  |  | |
| `ARQUIVO_TITULO_ID` | BIGINT | N | - |  |  | |
| `TITULO_ID` | BIGINT | N | - |  |  | |
| `DATA_VENCIMENTO_TITULO` | VARCHAR(10) | N | - |  |  | |
| `DATA_EMISSAO_TITULO` | VARCHAR(10) | N | - |  |  | |
| `TIPO_MOEDA` | VARCHAR(10) | N | - |  |  | |
| `DATA_CADASTRO` | VARCHAR(10) | N | - |  |  | |
| `DATA_PROTOCOLO` | VARCHAR(10) | N | - |  |  | |
| `DATA_OCORRENCIA` | VARCHAR(10) | N | - |  |  | |
| `DATA_MOVIMENTO` | VARCHAR(10) | N | - |  |  | |
| `TRANSACAO_REMETENTE` | VARCHAR(10) | N | - |  |  | |
| `TRANSACAO_DESTINATARIO` | VARCHAR(10) | N | - |  |  | |
| `NOME_CREDOR` | VARCHAR(60) | N | - |  |  | |
| `ENDERECO_CREDOR` | VARCHAR(150) | N | - |  |  | |
| `COMPLEMENTO_CREDOR` | VARCHAR(150) | N | - |  |  | |
| `BAIRRO_CREDOR` | VARCHAR(150) | N | - |  |  | |
| `CIDADE_CREDOR` | VARCHAR(150) | N | - |  |  | |
| `NOME_DEVEDOR` | VARCHAR(60) | N | - |  |  | |
| `ENDERECO_DEVEDOR` | VARCHAR(150) | N | - |  |  | |
| `COMPLEMENTO_DEVEDOR` | VARCHAR(150) | N | - |  |  | |
| `BAIRRO_DEVEDOR` | VARCHAR(150) | N | - |  |  | |
| `CIDADE_DEVEDOR` | VARCHAR(150) | N | - |  |  | |
| `NOME_APRESENTANTE` | VARCHAR(60) | N | - |  |  | |
| `ENDERECO_APRESENTANTE` | VARCHAR(150) | N | - |  |  | |
| `COMPLEMENTO_APRESENTANTE` | VARCHAR(150) | N | - |  |  | |
| `BAIRRO_APRESENTANTE` | VARCHAR(150) | N | - |  |  | |
| `CIDADE_APRESENTANTE` | VARCHAR(150) | N | - |  |  | |
| `INFORMACAO_ACEITE` | VARCHAR(60) | N | - |  |  | |
| `CONTROLE_DEVEDORES` | VARCHAR(60) | N | - |  |  | |
| `DECLARACAO_PORTADOR` | VARCHAR(150) | N | - |  |  | |
| `NOME_SACADOR` | VARCHAR(60) | N | - |  |  | |
| `CPFCNPJ_SACADOR` | VARCHAR(60) | N | - |  |  | |
| `ENDERECO_SACADOR` | VARCHAR(150) | N | - |  |  | |
| `CIDADE_SACADOR` | VARCHAR(150) | N | - |  |  | |
| `PRACA_PROTESTO` | VARCHAR(60) | N | - |  |  | |
| `IDENTIFICACAO_DEVEDOR` | VARCHAR(3) | N | - |  |  | |
| `BANCO` | VARCHAR(60) | N | - |  |  | |
| `COMPLEMENTO_REGISTRO` | VARCHAR(150) | N | - |  |  | |
| `CODIGO_PORTADOR` | VARCHAR(15) | N | - |  |  | |
| `AGENCIA_CODIGO_CEDENTE` | VARCHAR(15) | N | - |  |  | |
| `UF_CREDOR` | VARCHAR(3) | N | - |  |  | |
| `CEP_CREDOR` | VARCHAR(15) | N | - |  |  | |
| `UF_DEVEDOR` | VARCHAR(3) | N | - |  |  | |
| `CEP_DEVEDOR` | VARCHAR(15) | N | - |  |  | |
| `UF_APRESENTANTE` | VARCHAR(3) | N | - |  |  | |
| `CEP_APRESENTANTE` | VARCHAR(15) | N | - |  |  | |
| `TIPO_VINCULO` | VARCHAR(15) | N | - |  |  | |
| `TIPO_ENDOSSO` | VARCHAR(1) | N | - |  |  | |
| `LETRA_CAMBIO` | VARCHAR(15) | N | - |  |  | |
| `MOTIVO_FALENCIA` | VARCHAR(1) | N | - |  |  | |
| `ENDOSSO` | VARCHAR(1) | N | - |  |  | |
| `CEP_SACADOR` | VARCHAR(15) | N | - |  |  | |
| `UF_SACADOR` | VARCHAR(3) | N | - |  |  | |
| `TRANSACAO_TIPO` | VARCHAR(15) | N | - |  |  | |
| `VERSAO_LAYOUT` | VARCHAR(3) | N | - |  |  | |
| `CODIGO_MUNICIPIO` | VARCHAR(15) | N | - |  |  | |
| `SITUACAO` | VARCHAR(1) | N | - |  |  | |
| `RETORNO` | VARCHAR(1) | N | - |  |  | |
| `REGISTRO_DISTRIBUIDOR` | VARCHAR(10) | N | - |  |  | |
| `VALOR_GRAVACAO_ELETRONICA` | BIGINT | N | - |  |  | |
| `NUMERO_OPERACAO_BANCO` | VARCHAR(10) | N | - |  |  | |
| `NUMERO_CONTRATO_BANCO` | VARCHAR(15) | N | - |  |  | |
| `NUMERO_PARCELA_CONTRATO` | VARCHAR(15) | N | - |  |  | |
| `IMPORTAR` | VARCHAR(1) | N | - |  |  | |
| `CNPJ_APRESENTANTE_PORTADOR` | VARCHAR(30) | N | - |  |  | |
| `CODIGO_IRREGULARIDADE` | VARCHAR(30) | N | - |  |  | |
| `INSTRUMENTO_PROTESTO` | VARCHAR(1) | N | - |  |  | |
| `CORREIOS` | BIGINT | N | - |  |  | |
| `COMPLEMENTO_IRREGULARIDE` | VARCHAR(10) | N | - |  |  | |
| `EMAIL` | VARCHAR(260) | N | - |  |  | |
| `DEVEDOR_MICROEMPRESA` | VARCHAR(1) | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_FEBRABAN_PK` | PRIMARY KEY | FEBRABAN_ID |
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
