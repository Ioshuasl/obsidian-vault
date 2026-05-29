---
tipo: indice
area: orius
tags: [orius, firebird, banco-de-dados, indice]
atualizado: 2026-05-29
---

# Banco de dados Firebird — índice

**Motor:** Firebird 4.0.5 · **497 tabelas** (`palmelo2`) · organização por produto Orius.

> **Plano completo:** [[Orius/desenvolvimento/banco-de-dados/00-briefing-documentacao-firebird]]

## Documentos

| Nota | Conteúdo |
|------|----------|
| [[Orius/desenvolvimento/banco-de-dados/00-briefing-documentacao-firebird]] | Briefing — estrutura, fases, convenções |
| [[Orius/desenvolvimento/banco-de-dados/convencoes-nomenclatura]] | **Prefixos oficiais** — mapa produto × tabela |
| [[Orius/desenvolvimento/banco-de-dados/inventario/00-indice-inventario]] | Inventário — listas por banco |
| [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2-lista-tabelas]] | `palmelo2` — 497 tabelas (2026-05-29) |
| [[Orius/desenvolvimento/banco-de-dados/templates/_template-tabela]] | Template de nota por tabela |
| [[Orius/desenvolvimento/banco-de-dados/visao-geral-firebird]] | **Charset, encoding, conexão** — ISO8859_1, ANSI, migração UTF-8 |
| [[Orius/desenvolvimento/scripts/00-indice-scripts]] | **Scripts auxiliares** (PS1, Python, JS) no vault |
| [[Orius/desenvolvimento/banco-de-dados/extracao-metadados]] | Export metadata Firebird — guia de uso |
| [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]] | **Protesto** — 35 tabelas `P_` com schema |

## `palmelo2` — por produto

| Produto | Tabelas | Índice |
|---------|---------|--------|
| Registro de Imóveis | 130 | [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/imoveis-tabelas]] |
| Global | 107 | [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/global-tabelas]] |
| Tabelionato de Notas | 57 | [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/notas-tabelas]] |
| Registro Civil | 46 | [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/civil-tabelas]] |
| RTD | 36 | [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/rtd-tabelas]] |
| Protesto | 35 | [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/protesto-tabelas]] · [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db|schema]] |
| Caixa (`C_`) | 35 | [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/caixa-tabelas]] |
| Caixa auxiliar (`F_`) | 18 | [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/caixa-auxiliar-tabelas]] |
| Nota fiscal | 4 | [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/nota-fiscal-tabelas]] |
| Fora de escopo | 29 | [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/deferido-tabelas]] |

## Por produto _(pastas Fase 2 — notas por tabela)_

| Produto | Índice DB _(a criar)_ |
|---------|------------------------|
| Tabelionato de Notas | `produtos/notas/00-indice-notas-db.md` |
| Registro de Imóveis | `produtos/imoveis/00-indice-imoveis-db.md` |
| Registro Civil | `produtos/civil/00-indice-civil-db.md` |
| Protesto | `produtos/protesto/00-indice-protesto-db.md` |
| RTD | `produtos/rtd/00-indice-rtd-db.md` |
| Caixa | `produtos/caixa/00-indice-caixa-db.md` |
| Nota fiscal | `produtos/nota-fiscal/00-indice-nf-db.md` |
| Compartilhado | `compartilhado/00-indice-compartilhado.md` |

## Progresso _(atualizar manualmente)_

| Status | Qtd. | Significado |
|--------|------|-------------|
| `gerado` | 35 | Schema exportado (protesto `P_`) |
| `rascunho` | 0 | Objetivo/descrição parcial |
| `revisado` | 497 | Inventário + classificação por prefixo |

Voltar: [[Orius/desenvolvimento/00-indice-dev]] · [[Orius/00-indice]]
