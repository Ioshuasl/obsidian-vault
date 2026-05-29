---
tipo: indice-db
area: orius
produto: protesto
banco: palmelo2
tags: [orius, db, firebird, protesto, indice]
atualizado: 2026-05-29
total_tabelas: 35
status: gerado
---

# Protesto - indice de tabelas (`P_`)

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]]  
> **Negócio (o que é protesto):** [[Orius/empresa/produtos/protesto/00-indice-protesto-negocio]]  
> **Plane (web SaaS):** [[Meta/integracoes/plane/projetos/protesto]]  
> **API REST (Postman):** [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]  
> **Inventario:** [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/protesto-tabelas]]  
> **Convencoes:** [[Orius/desenvolvimento/banco-de-dados/convencoes-nomenclatura]]  
> **Script:** [[Orius/desenvolvimento/scripts/firebird/export-protesto-p.md]]

Metadados de schema (**colunas, PK, FK, indices**) gerados automaticamente. Relacionamentos de negocio e objetivo de cada tabela: _fase seguinte_.

## Tabelas (35)

- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_ANDAMENTO|`P_ANDAMENTO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_ARQUIVO_TITULO|`P_ARQUIVO_TITULO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_BANCO|`P_BANCO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_CERTIDAO|`P_CERTIDAO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_CUSTAS_CANCELAMENTO|`P_CUSTAS_CANCELAMENTO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_DEMAIS_CUSTAS|`P_DEMAIS_CUSTAS`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_ESPECIE|`P_ESPECIE`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_FEBRABAN|`P_FEBRABAN`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_FEBRABAN_CABECALHO|`P_FEBRABAN_CABECALHO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_FEBRABAN_DETALHE|`P_FEBRABAN_DETALHE`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_FEBRABAN_RODAPE|`P_FEBRABAN_RODAPE`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_HISTORICO|`P_HISTORICO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_INDISP_VINCULO|`P_INDISP_VINCULO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_INDISPONIBILIDADE|`P_INDISPONIBILIDADE`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_INST_PROTESTO|`P_INST_PROTESTO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_IRREGULARIDADES|`P_IRREGULARIDADES`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_LAYOUT|`P_LAYOUT`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_LAYOUT_ARQUIVO|`P_LAYOUT_ARQUIVO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_LAYOUT_CONFIG|`P_LAYOUT_CONFIG`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_LAYOUT_SECAO|`P_LAYOUT_SECAO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_LIVRO_ANDAMENTO|`P_LIVRO_ANDAMENTO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_LIVRO_NATUREZA|`P_LIVRO_NATUREZA`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_MOTIVOS|`P_MOTIVOS`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_MOTIVOS_CANCELAMENTO|`P_MOTIVOS_CANCELAMENTO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_NOTA_TITULO|`P_NOTA_TITULO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_OCORRENCIA_ANDAMENTO|`P_OCORRENCIA_ANDAMENTO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_OCORRENCIAS|`P_OCORRENCIAS`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_PARCELAMENTO|`P_PARCELAMENTO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_PESSOA|`P_PESSOA`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_PESSOA_VINCULO|`P_PESSOA_VINCULO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_PROTECAO_CREDITO|`P_PROTECAO_CREDITO`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_REG_CENPROT|`P_REG_CENPROT`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_SEQUENCIA_CENPROT|`P_SEQUENCIA_CENPROT`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_TEMPLATE|`P_TEMPLATE`]]
- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_TITULO|`P_TITULO`]]

## Dominios sugeridos (rascunho)

| Dominio | Tabelas |
|---------|---------|
| titulo | `P_TITULO`, `P_PARCELAMENTO`, `P_NOTA_TITULO`, ... |
| pessoa | `P_PESSOA`, `P_PESSOA_VINCULO`, indisponibilidade |
| febraban-layout | `P_FEBRABAN*`, `P_LAYOUT*`, `P_ARQUIVO_TITULO` |
| cenprot | `P_REG_CENPROT`, `P_SEQUENCIA_CENPROT` |
| livro-andamento | `P_LIVRO_*`, `P_ANDAMENTO`, `P_HISTORICO`, ocorrencias |
| certidao | `P_CERTIDAO`, `P_PROTECAO_CREDITO` |
| cadastro | bancos, especies, motivos, custas, templates |

Voltar: [[Orius/desenvolvimento/banco-de-dados/00-indice-banco-dados]]
