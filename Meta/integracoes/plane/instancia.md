---
tipo: referencia
area: meta
tags: [plane, api, instancia]
status: revisado
---

# Plane — instância e API

Valores globais: [[env]] · [[.env]]

## Autenticação

```http
X-API-Key: {PLANE_API_KEY}
```

## Endpoints base

```text
{PLANE_BASE_URL}/api/v1/workspaces/{PLANE_WORKSPACE}/projects/
{PLANE_BASE_URL}/api/v1/workspaces/{PLANE_WORKSPACE}/projects/{PLANE_PROJECT_ID}/work-items/
```

`PLANE_PROJECT_ID` vem da nota do projeto em [[projetos/00-indice-projetos]].

## Validar token

```powershell
curl.exe -sS "$env:PLANE_BASE_URL/api/v1/users/me/" -H "X-API-Key: $env:PLANE_API_KEY"
```

## Listar todos os projetos

```powershell
curl.exe -sS "$env:PLANE_BASE_URL/api/v1/workspaces/$env:PLANE_WORKSPACE/projects/?per_page=100" `
  -H "X-API-Key: $env:PLANE_API_KEY"
```

## Carregar env + projeto ativo

Ver [[scripts/load-plane-env]] (`autonr` por padrão).

## Relacionado

- [[00-indice-plane]] · [[agente-plane]]
