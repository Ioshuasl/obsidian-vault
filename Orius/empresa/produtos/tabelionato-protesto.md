---
tipo: produto
area: orius
produto: protesto
tags: [orius, produto, protesto, tabelionato]
---

# Tabelionato de protesto

Produto Orius para cartórios de **protesto de títulos** — procedimento extrajudicial de registro de inadimplência em duplicatas, notas promissórias, cheques e títulos afins.

## Entender o domínio (leia primeiro)

| Nota | Para quê |
|------|----------|
| **[[Orius/empresa/produtos/protesto/00-indice-protesto-negocio]]** | Índice de negócio |
| [[Orius/empresa/produtos/protesto/conceito-protesto-de-titulos]] | O que é protesto e papel do cartório |
| [[Orius/empresa/produtos/protesto/fluxo-operacional-protesto]] | Apresentação → intimação → tríduo → protesto/cancelamento |
| [[Orius/empresa/produtos/protesto/glossario-protesto]] | Termos (lavrar, elidir, tríduo…) |
| [[Orius/empresa/produtos/protesto/mapa-dominio-software]] | Negócio ↔ tabelas `P_*` e API |

> Fonte didática: material `Protesto_de_T_tulos (1).md` (estudo interno, 2026-05-29).

## Plane (gestão)

| Projeto | Quando usar |
|---------|-------------|
| **SAAS Protesto** (`PROTESTO`) | Desenvolvimento do **sistema web SaaS** — telas, API, migração, integrações no stack novo |
| PBO Protesto (`PBOTP`) | Demandas do produto **PBO** legado (desktop), se ainda aplicável |
| Demandas (`DSAAS`) | Itens transversais de software |

- Catálogo: [[Meta/integracoes/plane/projetos/protesto]]
- Board: http://192.168.1.100:8090/saas/projects/bdfacc65-4131-44ad-bb3d-cfbc664f00bc/issues/

## Documentação técnica

| Área | Nota |
|------|------|
| **API backend (Postman)** | [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]] |
| **Frontend CRUD (web)** | [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]] |
| Schema Firebird (`P_*`) | [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]] |
| CRA (remessa/retorno) | [[Orius/integracoes/centrais/cra]] |
| CENPROT (hub nacional) | [[Orius/integracoes/centrais/cenprot]] |
