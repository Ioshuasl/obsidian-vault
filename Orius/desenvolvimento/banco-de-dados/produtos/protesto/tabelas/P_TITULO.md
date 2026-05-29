---
tipo: tabela-db
area: orius
produto: protesto
dominio: titulo
tabela: P_TITULO
banco: palmelo2
tags: [orius, db, firebird, protesto, titulo]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `titulo` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_TITULO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `TITULO_ID` | BIGINT | N | - | sim |  | |
| `DATA_APONTAMENTO` | TIMESTAMP | N | - |  |  | |
| `LOCAL_ACEITE` | VARCHAR(150) | N | - |  |  | |
| `DATA_ACEITE` | TIMESTAMP | N | - |  |  | |
| `PRAZO` | VARCHAR(15) | N | - |  |  | |
| `VALOR_TITULO` | BIGINT | N | - |  |  | |
| `DATA_PROTESTO` | TIMESTAMP | N | - |  |  | |
| `DATA_CANCELAMENTO` | TIMESTAMP | N | - |  |  | |
| `OBSERVACOES` | VARCHAR(260) | N | - |  |  | |
| `ESPECIE_ID` | BIGINT | N | - |  | `P_ESPECIE(ESPECIE_ID)` | |
| `OCORRENCIA_ID` | BIGINT | N | - |  | `P_OCORRENCIAS(OCORRENCIAS_ID)` | |
| `NUMERO_TITULO` | VARCHAR(30) | N | - |  |  | |
| `DATA_VENCIMENTO_TITULO` | TIMESTAMP | N | - |  |  | |
| `DATA_EMISSAO_TITULO` | TIMESTAMP | N | - |  |  | |
| `MOTIVO_APONTAMENTO_ID` | BIGINT | N | - |  | `P_MOTIVOS(MOTIVOS_ID)` | |
| `TABELA_EMOLUMENTO_ID` | BIGINT | N | - |  | `G_EMOLUMENTO(EMOLUMENTO_ID)` | |
| `VALOR_EMOLUMENTO` | BIGINT | N | - |  |  | |
| `VALOR_TAXA_JUDICIARIA` | BIGINT | N | - |  |  | |
| `VALOR_TAXA_INTIMACAO` | BIGINT | N | - |  |  | |
| `VALOR_DESCONTO` | BIGINT | N | - |  |  | |
| `VALOR_TAXA_EDITAL` | BIGINT | N | - |  |  | |
| `VALOR_TAXA_JUROS` | BIGINT | N | - |  |  | |
| `NUMERO_APONTAMENTO` | BIGINT | N | - |  |  | |
| `DATA_CADASTRO` | TIMESTAMP | N | - |  |  | |
| `MOTIVO_CANCELAMENTO` | BIGINT | N | - |  | `P_MOTIVOS_CANCELAMENTO(MOTIVOS_CANCELAMENTO_ID)` | |
| `DATA_SUSTADO` | TIMESTAMP | N | - |  |  | |
| `FOLHA_APONTAMENTO` | BIGINT | N | - |  |  | |
| `LIVRO_ID_APONTAMENTO` | BIGINT | N | - |  | `P_LIVRO_ANDAMENTO(LIVRO_ANDAMENTO_ID)` | |
| `TIPO_ACEITE` | VARCHAR(1) | N | - |  |  | |
| `USER_ASSINA_PROT` | BIGINT | N | - |  | `G_USUARIO(USUARIO_ID)` | |
| `LIVRO_ID_PROTESTO` | BIGINT | N | - |  | `P_LIVRO_ANDAMENTO(LIVRO_ANDAMENTO_ID)` | |
| `FOLHA_PROTESTO` | BIGINT | N | - |  |  | |
| `USER_ASSINA_APONT` | BIGINT | N | - |  | `G_USUARIO(USUARIO_ID)` | |
| `DATA_PAGO` | TIMESTAMP | N | - |  |  | |
| `VALOR_TAXA_CORREIOS` | BIGINT | N | - |  |  | |
| `DATA_ENV_SERASA` | TIMESTAMP | N | - |  |  | |
| `DATA_RET_SERASA` | TIMESTAMP | N | - |  |  | |
| `VALOR_TAXA_CANCEL` | BIGINT | N | - |  |  | |
| `VALOR_TAXA_AVERB` | BIGINT | N | - |  |  | |
| `DATA_DESISTENCIA` | TIMESTAMP | N | - |  |  | |
| `NUMERO_CANCELAMENTO` | BIGINT | N | - |  |  | |
| `NUMERO_PROTESTO` | BIGINT | N | - |  |  | |
| `NUMERO_AR` | VARCHAR(30) | N | - |  |  | |
| `SITUACAO_ACEITE` | VARCHAR(60) | N | - |  |  | |
| `PESSOA_ACEITOU` | VARCHAR(150) | N | - |  |  | |
| `AGENCIA_CORREIO` | VARCHAR(60) | N | - |  |  | |
| `TAXA_CORRECAO` | BIGINT | N | - |  |  | |
| `NUMERO_LIVRO_APONT` | VARCHAR(15) | N | - |  |  | |
| `NUMERO_TITULO_BANCO` | VARCHAR(30) | N | - |  |  | |
| `PRACA_PAGAMENTO` | VARCHAR(60) | N | - |  |  | |
| `DATA_MOV_SERASA` | TIMESTAMP | N | - |  |  | |
| `TIPO_ENDOSSO` | VARCHAR(1) | N | - |  |  | |
| `NOSSO_NUMERO` | VARCHAR(30) | N | - |  |  | |
| `VALOR_TAXA_FUNDESP` | BIGINT | N | - |  |  | |
| `COBRAR_JUROS` | VARCHAR(1) | N | - |  |  | |
| `EMOLUMENTO_ITEM_ID` | BIGINT | N | - |  | `G_EMOLUMENTO_ITEM(EMOLUMENTO_ITEM_ID)` | |
| `DATA_INTIMACAO` | TIMESTAMP | N | - |  |  | |
| `DATA_VENCIMENTO_BOLETO` | TIMESTAMP | N | - |  |  | |
| `VALOR_TOTAL` | BIGINT | N | - |  |  | |
| `LETRA_FOLHA` | VARCHAR(1) | N | - |  |  | |
| `PAGAMENTO_POSTERIOR` | VARCHAR(1) | N | - |  |  | |
| `VALOR_ISS` | BIGINT | N | - |  |  | |
| `SERVICO_GRATUITO` | VARCHAR(1) | N | - |  |  | |
| `MOTIVO_ISENCAO` | VARCHAR(150) | N | - |  |  | |
| `PAGAMENTO_DIFERIDO` | VARCHAR(1) | N | - |  |  | |
| `TITULO_ANTIGO` | VARCHAR(1) | N | - |  |  | |
| `NLOTE` | BIGINT | N | - |  |  | |
| `FORMA_PAGAMENTO` | VARCHAR(1) | N | - |  |  | |
| `VALOR_TOTAL_CUSTAS` | BIGINT | N | - |  |  | |
| `AGENCIA_CODIGO_CEDENTE` | VARCHAR(15) | N | - |  |  | |
| `AGENCIA_CENTRALIZADORA` | VARCHAR(10) | N | - |  |  | |
| `STATUS_IMPORTACAO` | VARCHAR(1) | N | - |  |  | |
| `BANCO_ID` | BIGINT | N | - |  | `P_BANCO(BANCO_ID)` | |
| `CODIGO_PRACA` | VARCHAR(10) | N | - |  |  | |
| `PROTESTADO` | VARCHAR(1) | N | - |  |  | |
| `SELECAO_STATUS` | VARCHAR(1) | N | - |  |  | |
| `IMPORTAR` | VARCHAR(1) | N | - |  |  | |
| `DATA_RETORNO_CDA` | TIMESTAMP | N | - |  |  | |
| `ARQUIVO_TITULO_ID` | BIGINT | N | - |  | `P_ARQUIVO_TITULO(ARQUIVO_TITULO_ID)` | |
| `EMAIL` | VARCHAR(260) | N | - |  |  | |
| `DATA_ANUENCIA` | TIMESTAMP | N | - |  |  | |
| `ORIGEM_ANUENCIA` | VARCHAR(3) | N | - |  |  | |
| `APRESENTANTE_PERMITIDO` | VARCHAR(1) | N | - |  |  | |
| `CEDENTE_PERMITIDO` | VARCHAR(1) | N | - |  |  | |
| `CREDOR_PERMITIDO` | VARCHAR(1) | N | - |  |  | |
| `ANUENCIA` | VARCHAR(1) | N | - |  |  | |
| `SITUACAO_CENPROT` | VARCHAR(1) | N | - |  |  | |
| `CUSTAS_CANCELAMENTO_ID` | BIGINT | N | - |  | `P_CUSTAS_CANCELAMENTO(CUSTAS_CANCELAMENTO_ID)` | |
| `CHAVE_IMPORTACAO` | BIGINT | N | - |  |  | |
| `IMPSITUACAO_TITULO` | VARCHAR(30) | N | - |  |  | |
| `LIVRO_PAGAMENTO` | BIGINT | N | - |  |  | |
| `LETRA_LIVRO_PAGAMENTO` | VARCHAR(3) | N | - |  |  | |
| `FOLHA_LIVRO_PAGAMENTO` | BIGINT | N | - |  |  | |
| `CHAVE_UNICA_CENPROT` | VARCHAR(150) | N | - |  |  | |
| `PROTESTO_ARTIGO_9` | VARCHAR(1) | N | - |  |  | |
| `OCORRENCIA_ANDAMENTO_ID` | BIGINT | N | - |  | `P_OCORRENCIA_ANDAMENTO(OCORRENCIA_ANDAMENTO_ID)` | |
| `NFSE_ID` | INTEGER | N | - |  | `NFSE(ID_NFSE)` | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_TITULO_PK` | PRIMARY KEY | TITULO_ID |
| `FK_P_TITULO_NFSE` | FOREIGN KEY | NFSE_ID -> `NFSE(ID_NFSE)` |
| `P_TITULO_CUSTAS_CANCELAMENT_FK` | FOREIGN KEY | CUSTAS_CANCELAMENTO_ID -> `P_CUSTAS_CANCELAMENTO(CUSTAS_CANCELAMENTO_ID)` |
| `P_TITULO_EMOLUMENTO_ITEM_FK` | FOREIGN KEY | EMOLUMENTO_ITEM_ID -> `G_EMOLUMENTO_ITEM(EMOLUMENTO_ITEM_ID)` |
| `P_TITULO_ESPECIE_FK` | FOREIGN KEY | ESPECIE_ID -> `P_ESPECIE(ESPECIE_ID)` |
| `P_TITULO_LIVRO_ANDAME_FK` | FOREIGN KEY | LIVRO_ID_APONTAMENTO -> `P_LIVRO_ANDAMENTO(LIVRO_ANDAMENTO_ID)` |
| `P_TITULO_LIVRO_ID_PROTE_FK` | FOREIGN KEY | LIVRO_ID_PROTESTO -> `P_LIVRO_ANDAMENTO(LIVRO_ANDAMENTO_ID)` |
| `P_TITULO_MOTIVO_APONTAMENTO_FK` | FOREIGN KEY | MOTIVO_APONTAMENTO_ID -> `P_MOTIVOS(MOTIVOS_ID)` |
| `P_TITULO_MOTIVO_CANCELAME_FK` | FOREIGN KEY | MOTIVO_CANCELAMENTO -> `P_MOTIVOS_CANCELAMENTO(MOTIVOS_CANCELAMENTO_ID)` |
| `P_TITULO_P_ARQUIVO_TITULO_FK` | FOREIGN KEY | ARQUIVO_TITULO_ID -> `P_ARQUIVO_TITULO(ARQUIVO_TITULO_ID)` |
| `P_TITULO_P_BANCO_FK` | FOREIGN KEY | BANCO_ID -> `P_BANCO(BANCO_ID)` |
| `P_TITULO_P_OCORRENCIA_ANDAM_FK` | FOREIGN KEY | OCORRENCIA_ANDAMENTO_ID -> `P_OCORRENCIA_ANDAMENTO(OCORRENCIA_ANDAMENTO_ID)` |
| `P_TITULO_P_OCORRENCIA_FK` | FOREIGN KEY | OCORRENCIA_ID -> `P_OCORRENCIAS(OCORRENCIAS_ID)` |
| `P_TITULO_TABELA_EMOLUMENTO_FK` | FOREIGN KEY | TABELA_EMOLUMENTO_ID -> `G_EMOLUMENTO(EMOLUMENTO_ID)` |
| `P_TITULO_USER_ASSINA_AP_FK` | FOREIGN KEY | USER_ASSINA_APONT -> `G_USUARIO(USUARIO_ID)` |
| `P_TITULO_USUARIO_ASS_FK` | FOREIGN KEY | USER_ASSINA_PROT -> `G_USUARIO(USUARIO_ID)` |
| `IDX_P_TITULO_NFSE` | INDEX | NFSE_ID |
| `P_TITULO_DATA_ACEITE_IDX` | INDEX | DATA_ACEITE |
| `P_TITULO_DATA_CANC_IDX` | INDEX | DATA_CANCELAMENTO |
| `P_TITULO_DATA_PROTESTO_IDX` | INDEX | DATA_PROTESTO |
| `P_TITULO_DTAPONT_IDX` | INDEX | DATA_APONTAMENTO |
| `P_TITULO_DTCAD_IDX` | INDEX | DATA_CADASTRO |
| `P_TITULO_DTDESIST_IDX` | INDEX | DATA_DESISTENCIA |
| `P_TITULO_DTENVSER_IDX` | INDEX | DATA_ENV_SERASA |
| `P_TITULO_DTMOVSER_IDX` | INDEX | DATA_MOV_SERASA |
| `P_TITULO_DTPAGO_IDX` | INDEX | DATA_PAGO |
| `P_TITULO_DTRETSER_IDX` | INDEX | DATA_RET_SERASA |
| `P_TITULO_DTSUST_IDX` | INDEX | DATA_SUSTADO |
| `P_TITULO_FLSAP_IDX` | INDEX | FOLHA_APONTAMENTO |
| `P_TITULO_NLVAP_IDX` | INDEX | NUMERO_LIVRO_APONT |
| `P_TITULO_NLV_APONT_IDX` | INDEX | NUMERO_APONTAMENTO |
| `P_TITULO_NOSSON_IDX` | INDEX | NOSSO_NUMERO |
| `P_TITULO_NTITULO_IDX` | INDEX | NUMERO_TITULO |

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
