---
tipo: plane-projeto
area: orius
plane_workspace: saas
plane_identifier: IDENTIFICADOR
plane_slug: slug-minusculo
plane_project_id: "00000000-0000-0000-0000-000000000000"
plane_nome: Nome do Projeto
categoria: web | n8n | infra | pbo
produto: notas | imoveis | protesto | rtd | geral
status: ativo
tags: [plane]
criado: YYYY-MM-DD
---

# Plane — {plane_identifier} ({plane_nome})

| Campo | Valor |
|-------|-------|
| Identificador cards | `{plane_identifier}-123` |
| Project ID | `plane_project_id` |
| Issues UI | http://192.168.1.100:8090/saas/projects/{plane_project_id}/issues/ |

## Documentação no vault

- (links para pastas Orius / Pessoal relacionadas)

## Estados (workflow)

> Sincronizar: `GET /api/v1/workspaces/saas/projects/{plane_project_id}/states/`

| Nome | UUID | Grupo |
|------|------|-------|
| Backlog | | backlog |
| Todo / Fazer | | unstarted |
| In Progress / Fazendo | | started |
| Done / Feito | | completed |
| Cancelled | | cancelled |

```env
# Usar com PLANE_* da instância em [[env]]
PLANE_PROJECT_ID=
PLANE_PROJECT_IDENTIFIER=
PLANE_PROJECT_URL=
PLANE_STATE_DONE=
```

## Convenções de cards

- Título: `[n8n] …` ou `[Web] …` conforme o tipo.
- Descrição: markdown do vault convertido para HTML (ver [[../agente-plane]]).

## Relacionado

- [[00-indice-projetos]] · [[../palavras-chave-plane]]
