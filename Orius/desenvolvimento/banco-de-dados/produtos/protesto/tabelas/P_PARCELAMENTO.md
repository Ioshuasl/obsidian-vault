---
tipo: tabela-db
area: orius
produto: protesto
dominio: titulo
tabela: P_PARCELAMENTO
banco: palmelo2
tags: [orius, db, firebird, protesto, titulo]
status: gerado
tem_legado_delphi: true
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** `titulo` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# `P_PARCELAMENTO`

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
| `PARCELAMENTO_ID` | BIGINT | N | - | sim |  | |
| `PARCELA` | BIGINT | N | - |  |  | |
| `VALOR` | BIGINT | N | - |  |  | |
| `CUSTO_BOLETO` | BIGINT | N | - |  |  | |
| `CUSTO_ADICIONAL` | BIGINT | N | - |  |  | |
| `VENCIMENTO` | TIMESTAMP | N | - |  |  | |
| `TITULO_ID` | BIGINT | N | - |  | `P_TITULO(TITULO_ID)` | |
| `TOTAL` | BIGINT | N | - |  |  | |
| `BOLETO_ID` | BIGINT | N | - |  | `C_BOLETO(BOLETO_ID)` | |
| `TIPO_PAGAMENTO` | VARCHAR(3) | N | - |  |  | |
| `OBSERVACAO` | VARCHAR(260) | N | - |  |  | |

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
| `P_PARCELAMENTO_PK` | PRIMARY KEY | PARCELAMENTO_ID |
| `P_PARCELAMENTO_BOLETO_FK` | FOREIGN KEY | BOLETO_ID -> `C_BOLETO(BOLETO_ID)` |
| `P_PARCELAMENTO_TITULO_FK` | FOREIGN KEY | TITULO_ID -> `P_TITULO(TITULO_ID)` |
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
