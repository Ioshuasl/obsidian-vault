---
tipo: configuracao
area: meta
tags: [plane, api, credenciais, ambiente]
status: revisado
criado: 2026-05-29
atualizado: 2026-06-01
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

---

## Mapa ONR — API polígonos (Bearer)

> Usar em `Authorization: Bearer …` nos endpoints `…/sistemas/api/v1/poligonos/*`.  
> **Não** colar esta chave nas notas de integração do vault — só referenciar esta seção.  
> A API **Mapa e Estatísticas** (`/api-estatisticas`) usa fluxo diferente (chave intranet Estatísticas + `POST /auth` + hash SHA1) — ver [[Orius/integracoes/registro-imoveis/onr-mapa-estatisticas-guia]].

| Campo | Valor |
|-------|--------|
| Gerada em | 2026-06-01 (aprox., `iat` do JWT) |
| Expira em | 2027-06-01 (aprox., `exp` do JWT) |
| Prefixo (logs) | `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2…` |

```env
MAPA_ONR_API_BEARER_POLIGONOS=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMjE4NSwiaXNzIjoiYXBpLW1hcGEtb25yIiwiYXVkIjoidXN1YXJpby1tYXBhLW9uciIsInR5cGUiOiJhcGlfa2V5IiwiaWF0IjoxNzgwMzE4NjEyLCJleHAiOjE4MTE4NTQ2MTJ9.k_iSp_LDzJYMSdFAvsRJ29hg8zB4kr6RukfEp0P_7_I
```

**Intranet:** Configurações → Chave API para envio de polígonos · Renovar antes do `exp` se a ONR invalidar antes.

**Docs:** [[Orius/integracoes/registro-imoveis/onr-mapa-api-poligonos]] · [[Orius/integracoes/registro-imoveis/onr-mapa-estatisticas]]

---

## RIB — API Acompanhamento Registral + Pagamentos (OAuth)

> `POST /v1/auth/token` em `api.registrodeimoveis.org.br` (homolog: `testes-api.registrodeimoveis.org.br`).  
> **Não** repetir `client_secret` nas notas — só referenciar esta seção.  
> **Docs:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFG-01-autenticacao]] · [[Orius/integracoes/registro-imoveis/acompanhamento-registral/00-indice]]

| Ambiente | Base URL |
|----------|----------|
| Produção | `https://api.registrodeimoveis.org.br` |
| Homologação | `https://testes-api.registrodeimoveis.org.br` |

```env
# Preencher quando o cartório/integrador fornecer credenciais RIB
RIB_API_CLIENT_ID=
RIB_API_CLIENT_SECRET=
RIB_API_GRANT_TYPE=client_credentials
# Se grant_type=password:
RIB_API_USERNAME=
RIB_API_PASSWORD=
```
