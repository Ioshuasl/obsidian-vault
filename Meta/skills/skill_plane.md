---
name: plane-rest-api-consumer
description: "Consumo da API REST do Plane com bash, curl e jq. Use para validar token, listar projetos, consultar/criar/atualizar work items, estados, labels, membros e comentários no Plane."
category: integration-operations
risk: safe
source: personal
date_added: "2026-05-27"
---

# Skill: Plane REST API Consumer

## Objetivo

Consumir a API REST do Plane com comandos diretos, seguros e reutilizáveis.

Focar em:

- API REST do Plane
- `bash`, `curl` e `jq`
- criação, consulta, atualização e exclusão de work items/issues
- estados, labels, membros e comentários

Evitar explicações longas. Priorizar comando pronto, diagnóstico rápido e validação objetiva.

---

## Quando usar

Use esta skill quando o pedido envolver:

- Plane rodando em Linux
- integração com Plane via terminal Linux
- scripts `.sh` para chamadas REST reutilizáveis
- API do Plane via `curl`
- uso de `jq` para filtrar retornos

Não use quando o pedido for apenas gestão de tarefas sem necessidade técnica.

---

## Conceitos mínimos

Fonte canônica — **dois níveis**:

| Nível | Arquivo |
|-------|---------|
| Instância (URL, workspace, API key) | `C:\Users\kenio\OneDrive\Documentos\Obsidian Vault\env.md` e `.env` |
| Projeto ativo (UUID, estados, links) | `Meta/integracoes/plane/projetos/<slug>.md` |

Playbook multi-projeto: [[Meta/integracoes/plane/agente-plane]]  
Índice: [[Meta/integracoes/plane/00-indice-plane]]  
Roteamento: [[Meta/integracoes/plane/palavras-chave-plane]]

1. Ler `env.md` → `PLANE_BASE_URL`, `PLANE_WORKSPACE`, `PLANE_API_KEY`, `PLANE_DEFAULT_PROJECT_SLUG`.
2. Resolver slug do projeto (palavra-chave ou pedido do usuário).
3. Ler `projetos/<slug>.md` → `PLANE_PROJECT_ID`, `PLANE_STATE_*`.
4. Não usar UUID de projeto fixo nesta skill.

Variáveis padronizadas:

```bash
PLANE_API_KEY="<plane_api_token>"
PLANE_PROJECT_URL="<plane_project_issues_url>"
PLANE_BASE_URL="<plane_base_url>"
PLANE_WORKSPACE="<plane_workspace_slug>"
PLANE_PROJECT_ID="<plane_project_id>"
```

Dada uma URL da interface:

```text
<plane_base_url>/<plane_workspace_slug>/projects/<plane_project_id>/issues/
```

Extrair:

```bash
PLANE_BASE_URL="<plane_base_url>"
PLANE_WORKSPACE="<plane_workspace_slug>"
PLANE_PROJECT_ID="<plane_project_id>"
```

Endpoint principal atual:

```text
/api/v1/workspaces/{workspace_slug}/projects/{project_id}/work-items/
```

Fallback legado:

```text
/api/v1/workspaces/{workspace_slug}/projects/{project_id}/issues/
```

Autenticação por Personal Access Token:

```text
X-API-Key: <token>
```

Nunca imprimir token completo em logs ou respostas.

---

## Preparar ambiente Linux

Instalar dependências:

```bash
sudo apt update
sudo apt install -y curl jq ca-certificates
```

Verificar versões:

```bash
curl --version
jq --version
```

Configurar variáveis temporárias na sessão com os valores de `env.md`:

```bash
export PLANE_API_KEY="<plane_api_token>"
export PLANE_PROJECT_URL="<plane_project_issues_url>"
export PLANE_BASE_URL="<plane_base_url>"
export PLANE_WORKSPACE="<plane_workspace_slug>"
export PLANE_PROJECT_ID="<plane_project_id>"
```

Validar token sem expor completo:

```bash
echo "${PLANE_API_KEY:0:10}..."
echo -n "$PLANE_API_KEY" | wc -c
```

Persistir credenciais somente no arquivo canônico do projeto:

```text
env.md
```

Formato esperado no bloco Plane:

```text
PLANE_API_KEY=<plane_api_token>
PLANE_PROJECT_URL=<plane_project_issues_url>
PLANE_BASE_URL=<plane_base_url>
PLANE_WORKSPACE=<plane_workspace_slug>
PLANE_PROJECT_ID=<plane_project_id>
```

Exportar na sessão quando necessário:

```bash
export PLANE_API_KEY="<plane_api_token>"
export PLANE_PROJECT_URL="<plane_project_issues_url>"
export PLANE_BASE_URL="<plane_base_url>"
export PLANE_WORKSPACE="<plane_workspace_slug>"
export PLANE_PROJECT_ID="<plane_project_id>"
```

---

## Validações básicas

### Validar API/token

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/users/me/" \
  -H "X-API-Key: $PLANE_API_KEY" | jq
```

Se retornar `Given API token is not valid`, verificar:

- token real foi informado
- token pertence à mesma instância do Plane
- token não foi revogado
- token foi copiado inteiro
- usuário tem acesso ao workspace/projeto

### Listar projetos do workspace

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/" \
  -H "X-API-Key: $PLANE_API_KEY" | jq
```

### Exibir projetos em tabela simples

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/" \
  -H "X-API-Key: $PLANE_API_KEY" |
  jq -r '.[] | [.id, .identifier, .name, .is_member] | @tsv'
```

### Conferir projeto atual

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/" \
  -H "X-API-Key: $PLANE_API_KEY" |
  jq --arg PROJECT_ID "$PLANE_PROJECT_ID" '.[] | select(.id == $PROJECT_ID)'
```

---

## Work items / issues

### Listar itens de trabalho

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/?per_page=20" \
  -H "X-API-Key: $PLANE_API_KEY" | jq
```

### Listar itens em tabela

Use quando o retorno vier paginado em `results`:

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/?per_page=20" \
  -H "X-API-Key: $PLANE_API_KEY" |
  jq -r '.results[] | [.sequence_id, .priority, .name, .target_date, .completed_at] | @tsv'
```

Fallback quando o retorno vier como lista direta:

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/?per_page=20" \
  -H "X-API-Key: $PLANE_API_KEY" |
  jq -r '.[] | [.sequence_id, .priority, .name, .target_date, .completed_at] | @tsv'
```

### Listar mais recentes

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/?per_page=20&order_by=-created_at" \
  -H "X-API-Key: $PLANE_API_KEY" | jq
```

### Selecionar campos

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/?fields=id,name,sequence_id,priority,state,created_at,updated_at" \
  -H "X-API-Key: $PLANE_API_KEY" | jq
```

### Filtrar abertas

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/?per_page=100" \
  -H "X-API-Key: $PLANE_API_KEY" |
  jq -r '.results[] | select(.completed_at == null or .completed_at == "") | [.sequence_id, .priority, .name, .target_date] | @tsv'
```

### Filtrar concluídas

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/?per_page=100" \
  -H "X-API-Key: $PLANE_API_KEY" |
  jq -r '.results[] | select(.completed_at != null and .completed_at != "") | [.sequence_id, .priority, .name, .completed_at] | @tsv'
```

### Criar item de trabalho

```bash
curl -sS -X POST \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/" \
  -H "X-API-Key: $PLANE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "DSAAS-999 - Teste de criação via API",
    "description_html": "<p>Demanda criada automaticamente via integração Linux.</p>",
    "priority": "medium"
  }' | jq
```

Prioridades comuns:

```text
urgent
high
medium
low
none
```

### Criar item com payload em arquivo

```bash
cat > payload.json <<'JSON'
{
  "name": "DSAAS-999 - Teste via payload.json",
  "description_html": "<p>Criado via script Linux.</p>",
  "priority": "high"
}
JSON

curl -sS -X POST \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/" \
  -H "X-API-Key: $PLANE_API_KEY" \
  -H "Content-Type: application/json" \
  --data-binary @payload.json | jq
```

### Atualizar item de trabalho

```bash
export PLANE_WORK_ITEM_ID="uuid-do-item"

curl -sS -X PATCH \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/$PLANE_WORK_ITEM_ID/" \
  -H "X-API-Key: $PLANE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "DSAAS-999 - Nome atualizado",
    "priority": "urgent"
  }' | jq
```

### Excluir item de trabalho

```bash
curl -sS -X DELETE \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/$PLANE_WORK_ITEM_ID/" \
  -H "X-API-Key: $PLANE_API_KEY"
```

### Fallback para endpoint legado

Use apenas se `work-items` retornar `404`.

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/issues/" \
  -H "X-API-Key: $PLANE_API_KEY" | jq
```

---

## Estados

Consultar estados antes de mover itens.

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/states/" \
  -H "X-API-Key: $PLANE_API_KEY" |
  jq -r '.[] | [.id, .name, .group, .color] | @tsv'
```

Mover item para outro estado:

```bash
export PLANE_STATE_ID="uuid-do-estado"

curl -sS -X PATCH \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/$PLANE_WORK_ITEM_ID/" \
  -H "X-API-Key: $PLANE_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"state\":\"$PLANE_STATE_ID\"}" | jq
```

---

## Labels

### Listar labels

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/labels/" \
  -H "X-API-Key: $PLANE_API_KEY" |
  jq -r '.[] | [.id, .name, .color] | @tsv'
```

### Criar label

```bash
curl -sS -X POST \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/labels/" \
  -H "X-API-Key: $PLANE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Integração",
    "color": "#3B82F6"
  }' | jq
```

---

## Membros

### Listar membros do projeto

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/members/" \
  -H "X-API-Key: $PLANE_API_KEY" | jq
```

### Listar membros do workspace

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/members/" \
  -H "X-API-Key: $PLANE_API_KEY" | jq
```

---

## Comentários

### Listar comentários

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/$PLANE_WORK_ITEM_ID/comments/" \
  -H "X-API-Key: $PLANE_API_KEY" | jq
```

### Adicionar comentário

```bash
curl -sS -X POST \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/$PLANE_WORK_ITEM_ID/comments/" \
  -H "X-API-Key: $PLANE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "comment_html": "<p>Comentário criado via integração Linux.</p>"
  }' | jq
```

---

## Script utilitário Linux

Criar script base depois de exportar as variáveis padronizadas a partir de `env.md`:

```bash
mkdir -p ~/scripts
nano ~/scripts/plane-api.sh
chmod +x ~/scripts/plane-api.sh
```

Conteúdo:

```bash
#!/usr/bin/env bash
set -euo pipefail

: "${PLANE_API_KEY:?PLANE_API_KEY não definida}"
: "${PLANE_BASE_URL:?PLANE_BASE_URL não definida}"
: "${PLANE_WORKSPACE:?PLANE_WORKSPACE não definida}"
: "${PLANE_PROJECT_ID:?PLANE_PROJECT_ID não definida}"

plane_get() {
  local path="$1"
  curl -sS \
    "$PLANE_BASE_URL$path" \
    -H "X-API-Key: $PLANE_API_KEY" \
    -H "Content-Type: application/json"
}

plane_post() {
  local path="$1"
  local payload="$2"
  curl -sS -X POST \
    "$PLANE_BASE_URL$path" \
    -H "X-API-Key: $PLANE_API_KEY" \
    -H "Content-Type: application/json" \
    -d "$payload"
}

case "${1:-}" in
  me)
    plane_get "/api/v1/users/me/" | jq
    ;;
  projects)
    plane_get "/api/v1/workspaces/$PLANE_WORKSPACE/projects/" |
      jq -r '.[] | [.id, .identifier, .name, .is_member] | @tsv'
    ;;
  items)
    plane_get "/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/?per_page=50" |
      jq -r '.results[] | [.sequence_id, .priority, .name, .target_date, .completed_at] | @tsv'
    ;;
  states)
    plane_get "/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/states/" |
      jq -r '.[] | [.id, .name, .group] | @tsv'
    ;;
  *)
    echo "Uso: $0 {me|projects|items|states}"
    exit 1
    ;;
esac
```

Uso:

```bash
~/scripts/plane-api.sh me
~/scripts/plane-api.sh projects
~/scripts/plane-api.sh items
~/scripts/plane-api.sh states
```

---

## Diagnóstico rápido

### Token inválido

Erro:

```text
Given API token is not valid
```

Ações:

```bash
echo "${PLANE_API_KEY:0:10}..."
echo -n "$PLANE_API_KEY" | wc -c
curl -sS "$PLANE_BASE_URL/api/v1/users/me/" -H "X-API-Key: $PLANE_API_KEY" | jq
```

Verificar:

- token real está em `PLANE_API_KEY`
- token não está com aspas copiadas junto
- token foi gerado na instância correta do Plane
- usuário tem acesso ao projeto

### Endpoint não encontrado

Erro provável:

```text
404
```

Ações:

```bash
curl -sS "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/work-items/" -H "X-API-Key: $PLANE_API_KEY" | jq
curl -sS "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/$PLANE_PROJECT_ID/issues/" -H "X-API-Key: $PLANE_API_KEY" | jq
```

Verificar:

- `PLANE_BASE_URL`
- `PLANE_WORKSPACE`
- `PLANE_PROJECT_ID`
- versão do Plane
- uso de `work-items` vs `issues`

### Sem permissão

Verificar participação no projeto:

```bash
curl -sS \
  "$PLANE_BASE_URL/api/v1/workspaces/$PLANE_WORKSPACE/projects/" \
  -H "X-API-Key: $PLANE_API_KEY" |
  jq --arg PROJECT_ID "$PLANE_PROJECT_ID" '.[] | select(.id == $PROJECT_ID) | {id, name, is_member, member_role}'
```

---

## Critérios de qualidade

Antes de concluir uma operação:

- validar token com `/api/v1/users/me/` ou listagem de projetos
- confirmar `PLANE_BASE_URL`
- confirmar `PLANE_WORKSPACE`
- confirmar `PLANE_PROJECT_ID`
- usar `work-items` como endpoint principal
- usar `issues` apenas como fallback
- não expor token completo
- usar `jq` para validar estrutura do retorno
- consultar `states` antes de mover tarefa
- tratar paginação em listagens grandes
- manter scripts com `set -euo pipefail`
