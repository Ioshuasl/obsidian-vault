---
tipo: plane-projeto
area: orius
plane_workspace: saas
plane_identifier: PROTESTO
plane_slug: protesto
plane_project_id: "bdfacc65-4131-44ad-bb3d-cfbc664f00bc"
plane_nome: SAAS Protesto
categoria: web
produto: protesto
status: ativo
tags: [plane, saas, protesto, web]
---

# Plane — PROTESTO (SAAS Protesto)

Gestão de demandas do **sistema web SaaS** do Tabelionato de Protesto (frontend, API, migração do legado Delphi/Firebird).

| Campo | Valor |
|-------|-------|
| Issues UI | http://192.168.1.100:8090/saas/projects/bdfacc65-4131-44ad-bb3d-cfbc664f00bc/issues/ |

## Relação com outros projetos Plane

| Projeto | Identificador | Uso |
|---------|---------------|-----|
| **Este** | `PROTESTO` | Desenvolvimento web SaaS de protesto (telas, API, integrações no produto novo) |
| [[pbotp]] | `PBOTP` | Backlog legado **PBO** (produto desktop/legado); manter só se a demanda for explicitamente PBO |
| [[dsaas]] | `DSAAS` | Demandas transversais de software que não cabem só em protesto |

Paralelo de produto: [[mvptn]] (MVP web Notas) ↔ **PROTESTO** (SaaS web Protesto).

## Documentação no vault

| Tema | Caminho |
|------|---------|
| Produto | [[Orius/empresa/produtos/tabelionato-protesto]] |
| Banco Firebird (`P_*`) | [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]] |
| API REST (rotas) | [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]] |
| Frontend CRUD | [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]] |
| Centrais CRA / CENPROT | [[Orius/integracoes/centrais/cra]] · [[Orius/integracoes/centrais/cenprot]] |
| Índice centrais | [[Orius/integracoes/centrais/00-indice-centrais]] |

## Estados

| Nome | UUID | Grupo |
|------|------|-------|
| Backlog | `b71afc44-ee48-4e41-a623-e72824b7b46a` | backlog |
| Todo | `7aad5c7b-f949-4dba-b78c-6d9083bedb7b` | unstarted |
| In Progress | `3dcc9b5e-35a4-4f34-8449-7ee9c5c22e19` | started |
| Done | `c8e7b7ba-0011-40f5-88a6-a09dc3f06c29` | completed |
| Cancelled | `e76f94e1-3166-4ac5-8110-bd19474171bd` | cancelled |

```env
PLANE_PROJECT_ID=bdfacc65-4131-44ad-bb3d-cfbc664f00bc
PLANE_PROJECT_IDENTIFIER=PROTESTO
PLANE_PROJECT_URL=http://192.168.1.100:8090/saas/projects/bdfacc65-4131-44ad-bb3d-cfbc664f00bc/issues/
PLANE_STATE_DONE=c8e7b7ba-0011-40f5-88a6-a09dc3f06c29
PLANE_STATE_TODO=7aad5c7b-f949-4dba-b78c-6d9083bedb7b
PLANE_STATE_IN_PROGRESS=3dcc9b5e-35a4-4f34-8449-7ee9c5c22e19
PLANE_STATE_BACKLOG=b71afc44-ee48-4e41-a623-e72824b7b46a
```

## Inventário atual (Plane)

| Situação | Qtd | Cards |
|----------|-----|-------|
| **CRUD backend** | 35 | `[Backend] - CRUD P_*` — `PROTESTO-1` … `35` |
| **Backend Done** (Postman) | 15 | [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]] |
| **Backend Todo** | 20 | FEBRABAN, LAYOUT, CENPROT, etc. |
| **CRUD frontend** | 15 | `[Frontend] - CRUD P_*` (paridade com backend Done) |
| **Frontend Done** | 15 | [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]] |

Sync Postman → vault + Plane: `node parse-postman-protesto.js` · `node sync-protesto-postman.js`

Script de criação (idempotente): `node create-protesto-crud-tasks.js` em `scripts/`.

Scripts (mesmo padrão dos demais projetos): `Meta/integracoes/plane/scripts/` — registro [[../maps/protesto-work-items]], `sync-plane-registry.js --project protesto`.

## Relacionado

- [[00-indice-projetos]] · [[../palavras-chave-plane]] · [[../agente-plane]]
