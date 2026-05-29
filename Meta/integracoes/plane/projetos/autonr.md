---
tipo: plane-projeto
area: orius
plane_workspace: saas
plane_identifier: AUTONR
plane_slug: autonr
plane_project_id: "1c5d97b3-edfc-49e1-b0ba-da037b09bb84"
plane_nome: Automação ONR
categoria: n8n-integracao
produto: imoveis
status: ativo
tags: [plane, onr, n8n, wsoficio]
---

# Plane — AUTONR (Automação ONR)

Proxies **n8n** para o WebService SOAP **WSOficio** (ONR) e carga **CENSEC** (JSON).

| Campo | Valor |
|-------|-------|
| Issues UI | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/ |

## Documentação no vault

| Tema | Caminho |
|------|---------|
| Hub ONR | [[Orius/integracoes/registro-imoveis/onr/00-indice-onr]] |
| Automação n8n (índice) | [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/automacao/00-indice-automacao]] |
| Por método SOAP | `Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/automacao/por-metodo/` |
| Auth login | [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/automacao/auth-n8n]] |
| CENSEC gateway | [[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway]] |

## Código local

`C:\Users\kenio\soap-ui test\workflows\n8n\`

## Estados

| Nome | UUID | Grupo |
|------|------|-------|
| Backlog | `1d822b69-b74b-4b8a-86d5-5df9cec4ab29` | backlog |
| Todo | `9a73743b-e03e-4736-87a7-e5360efe61b5` | unstarted |
| In Progress | `33eae62a-0fc6-49b1-b7ca-d69cb7dc6705` | started |
| Done | `eb47829e-8e98-4a02-8951-d4bac7db2264` | completed |
| Cancelled | `e8a5e321-6687-44ce-aa29-5199ddcf9321` | cancelled |

```env
PLANE_PROJECT_ID=1c5d97b3-edfc-49e1-b0ba-da037b09bb84
PLANE_PROJECT_IDENTIFIER=AUTONR
PLANE_PROJECT_URL=http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/
PLANE_STATE_DONE=eb47829e-8e98-4a02-8951-d4bac7db2264
PLANE_STATE_TODO=9a73743b-e03e-4736-87a7-e5360efe61b5
PLANE_STATE_IN_PROGRESS=33eae62a-0fc6-49b1-b7ca-d69cb7dc6705
```

## Inventário atual (Plane)

| Situação | Qtd | Cards |
|----------|-----|-------|
| **Concluídas** (Done) | 35 | `AUTONR-2` … `AUTONR-37` (Auth, AT, PO, OE, CENSEC) |
| **Pendentes** (Todo) | 48 | `AUTONR-38` … `AUTONR-85` (restante WSOficio) |
| **Total** | 83 | |

Pendentes por módulo: PO (2), BD Light legado (4), Certidões (11), Matrícula (2), E-Protocolo (15), Intimações (12), CTP (2).

Scripts: `Meta/integracoes/plane/scripts/` — registro [[../maps/autonr-work-items]], `mark-plane-done.js --scan-workflows`

## Relacionado

- [[00-indice-projetos]] · [[../palavras-chave-plane]]
