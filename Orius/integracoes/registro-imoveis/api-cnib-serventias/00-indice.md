---
tipo: indice
area: orius
produto: imoveis
central: cnib
tags: [orius, imoveis, cnib, api, indice]
status: revisado
criado: 2026-06-01
---

> **Visão geral:** [[Orius/integracoes/registro-imoveis/api-cnib-serventias/visao-geral]]
> **Conceito:** [[Orius/integracoes/registro-imoveis/cnib]] · **RI:** [[Orius/integracoes/registro-imoveis/00-indice]]

# API CNIB — SERVENTIAS (índice)

Documentação estruturada da **API REST CNIB 2.0** para serventias. Endpoints sempre na **versão mais atual**; detalhes de resposta legada v1 ficam em notas de migração quando aplicável.

| Código | Endpoint | Nota |
|--------|----------|------|
| — | Visão geral, ambientes, auth | [[visao-geral]] |
| CNIB-01 | `POST` …/connect/token | [[CNIB-01-autenticacao]] |
| CNIB-02 | `POST` /api/ordem/consultar | [[CNIB-02-consultar]] |
| CNIB-03 | `POST` **/api/v2/ordem/visualizar** | [[CNIB-03-visualizar-ordens]] |
| CNIB-04 | `POST` /api/ordem/responder | [[CNIB-04-responder-ordem]] |
| CNIB-05 | `POST` /api/ordem/responder/lista | [[CNIB-05-responder-lista]] |
| CNIB-06 | `POST` /api/documentos/tipos | [[CNIB-06-documentos-tipos]] |

## Domínio

| Tabela | Nota |
|--------|------|
| Envelope `success` / `notifications` | [[dominio/envelope-resposta]] |
| `tipo_matricula` | [[dominio/tipo-matricula]] |
| Índice domínio | [[dominio/00-indice-dominio]] |
