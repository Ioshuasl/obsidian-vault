---
tipo: configuracao
area: meta
tags: [plane, api, credenciais, ambiente]
status: revisado
criado: 2026-05-29
atualizado: 2026-05-29
fonte: cursor
---

# Variáveis de ambiente — instância Plane

> **Instância** (token + URL) fica aqui e em [[.env]].  
> **Projetos** (IDs, estados, links) ficam em [[Meta/integracoes/plane/projetos/00-indice-projetos]].  
> **Agente Cursor:** [[Meta/integracoes/plane/agente-plane]] · **Skill:** [[Meta/skills/skill_plane]]

## Segurança

- Vault no **OneDrive** — não compartilhar `PLANE_API_KEY`.
- Em chat/logs, mostrar só `plane_api_bfe7…` (prefixo).

## Instância (compartilhada por todos os projetos)

```env
PLANE_BASE_URL=http://192.168.1.100:8090
PLANE_WORKSPACE=saas
PLANE_API_KEY=plane_api_bfe7e373315b4a3c84e1ed95e1789f11
```

## Projeto padrão da sessão

Quando o pedido não citar projeto (`AUTONR`, `DSAAS`, etc.), o agente usa:

```env
PLANE_DEFAULT_PROJECT_SLUG=autonr
```

Altere para `dsaas`, `mvptn`, etc. conforme o foco do dia.

## Responsável padrão (cards criados pelo agente)

O usuário dono de `PLANE_API_KEY` é resolvido em tempo de execução:

```http
GET {PLANE_BASE_URL}/api/v1/users/me/
```

Hoje: **Ioshua Lopes** (`ioshua@oriustecnologia.com.br`). Scripts em `Meta/integracoes/plane/scripts/` atribuem `assignees` automaticamente a esse UUID.

## API

| Uso | Padrão |
|-----|--------|
| Base API | `{PLANE_BASE_URL}/api/v1` |
| Listar projetos | `/workspaces/{PLANE_WORKSPACE}/projects/` |
| Work items | `/workspaces/{PLANE_WORKSPACE}/projects/{PLANE_PROJECT_ID}/work-items/` |

`PLANE_PROJECT_ID` e estados vêm da nota `Meta/integracoes/plane/projetos/<slug>.md` do projeto ativo.
