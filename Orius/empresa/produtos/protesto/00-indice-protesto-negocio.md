---
tipo: indice
area: orius
produto: protesto
tags: [orius, protesto, negocio, dominio, indice]
status: revisado
fonte: "Protesto_de_T_tulos (1).md — material de estudo"
atualizado: 2026-05-29
---

# Protesto de títulos — conhecimento de negócio

Documentação de **domínio** para orientar o desenvolvimento do SaaS Protesto (Orius). Não substitui normas do CNJ/CNJ-Core ou manuais oficiais da CRA/CENPROT — use como mapa mental e glossário interno.

## Leitura recomendada

| Ordem | Nota | Conteúdo |
|-------|------|----------|
| 1 | [[conceito-protesto-de-titulos]] | O que é, papel do cartório, exemplo prático |
| 2 | [[fluxo-operacional-protesto]] | Apresentação → apontamento → intimação → tríduo → protesto/cancelamento |
| 3 | [[glossario-protesto]] | Termos (lavrar, elidir, tríduo, apresentante…) |
| 4 | [[mapa-dominio-software]] | Conceitos de negócio ↔ tabelas `P_*` e módulos do sistema |

## Integrações nacionais

| Central | Papel | Nota |
|---------|-------|------|
| **CRA** | Remessa/retorno eletrônico apresentante ↔ cartório | [[Orius/integracoes/centrais/cra]] |
| **CENPROT** | Hub nacional (consultas, envio, certidões, cancelamento) | [[Orius/integracoes/centrais/cenprot]] |

## Desenvolvimento (técnico)

| Área | Índice |
|------|--------|
| Produto / Plane | [[Orius/empresa/produtos/tabelionato-protesto]] |
| Banco `P_*` | [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]] |
| API REST | [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]] |
| Frontend CRUD | [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]] |

## Relacionado

- [[Orius/integracoes/centrais/00-indice-centrais]]
- [[Orius/integracoes/palavras-chave-orius]]
