---
tipo: referencia
area: meta
tags: [plane, scripts, markdown, html, sync]
---

# Scripts Plane (vault)

Pasta: `Meta/integracoes/plane/scripts/`

## Instalação (uma vez)

```powershell
cd "C:\Users\kenio\OneDrive\Documentos\Obsidian Vault\Meta\integracoes\plane\scripts"
npm install
```

Credenciais: [[env]] e [[.env]] na raiz do vault.

---

## 1. `md-to-html.js` — conversão genérica

Converte markdown Obsidian → HTML (`description_html` do Plane).

```powershell
# HTML na tela
node md-to-html.js "C:\...\por-metodo\GetPedidoPO.md"

# Salvar arquivo
node md-to-html.js "C:\...\GetPedidoPO.md" --out C:\temp\GetPedidoPO.html

# Sem wrapper <div class="plane-doc">
node md-to-html.js "C:\...\nota.md" --no-wrap
```

Biblioteca: `lib/md-to-html.js` (frontmatter removido, wikilinks resolvidos, GFM via `marked`).

---

## 2. `sync-plane-descriptions.js` — sync em lote

Atualiza a descrição dos cards existentes no Plane a partir de pastas `.md`.

### AUTONR — proxies n8n (`[n8n] GetPedidoPO - …`)

```powershell
$vault = "C:\Users\kenio\OneDrive\Documentos\Obsidian Vault"
$porMetodo = "$vault\Orius\integracoes\registro-imoveis\onr\webservice-wsoficio\automacao\por-metodo"

node sync-plane-descriptions.js --project autonr --md-dir $porMetodo --dry-run
node sync-plane-descriptions.js --project autonr --md-dir $porMetodo
```

### AUTONR — cards legados (AUTONR-2 … 13)

```powershell
$automacao = "$vault\Orius\integracoes\registro-imoveis\onr\webservice-wsoficio\automacao"
$censec = "$vault\Orius\integracoes\tabelionato-notas\censec\automacao"

node sync-plane-descriptions.js --project autonr `
  --md-dir $automacao --md-dir $censec `
  --map maps/autonr-legacy.json --no-card-prefix --dry-run
```

### Um arquivo só

```powershell
node sync-plane-descriptions.js --project autonr --md-dir $porMetodo --file GetPedidoPO.md
```

### Outro projeto Plane

```powershell
node sync-plane-descriptions.js --project dsaas --md-dir "C:\caminho\docs\demandas" --card-prefix "[Web]"
```

| Flag | Descrição |
|------|-----------|
| `--project` | Slug em `projetos/<slug>.md` |
| `--md-dir` | Pasta com `.md` (repetível) |
| `--map` | JSON: `maps/autonr-legacy.json` |
| `--card-prefix` | Padrão `[n8n]` |
| `--no-card-prefix` | Usar `titleIncludes` do map |
| `--dry-run` | Simula sem PATCH |
| `--verbose` | Log por arquivo |

---

## 3. Postman → vault + Plane (PROTESTO)

```powershell
node parse-postman-protesto.js "C:\Users\kenio\Downloads\Orius.postman_collection.json"
node sync-protesto-postman.js              # gera Orius/desenvolvimento/api/protesto/ + atualiza cards
node sync-protesto-postman.js --no-mark-done  # só descrições, sem mudar estado
```

## 4. `create-protesto-frontend-tasks.js` — CRUD frontend (PROTESTO)

Cria/atualiza cards `[Frontend] - CRUD P_*` para as **15 tabelas** com API no Postman (paridade com backend Done).

```powershell
node create-protesto-frontend-tasks.js --dry-run
node create-protesto-frontend-tasks.js              # cria + Done + assignee (token)
node create-protesto-frontend-tasks.js --state todo # só backlog
```

Gera `Orius/desenvolvimento/frontend/protesto/` (índice + `telas/P_*.md`).

---

## 5. `create-protesto-crud-tasks.js` — CRUD backend (PROTESTO)

Uma card **Todo** por tabela do índice `00-indice-protesto-db.md`:

- Título: `[Backend] - CRUD P_NOME`
- Descrição: métodos INDEX, SHOW, SAVE, UPDATE, DELETE

```powershell
node create-protesto-crud-tasks.js --dry-run
node create-protesto-crud-tasks.js
```

Idempotente: pula tabelas que já têm card com o mesmo título. **Assignee:** usuário de `GET /users/me/` (token do `.env`).

## 3b. `assign-work-items.js` — atribuir responsável

```powershell
node assign-work-items.js --project protesto --filter "[Backend] - CRUD"
node assign-work-items.js --project protesto --dry-run
```

---

## 5. `create-pending-work-items.js` — cadastrar backlog n8n

Cria cards **Todo** para operações WSOficio sem automação concluída (descrição a partir de `metodos/**/*.md`).

```powershell
node create-pending-work-items.js --project autonr --dry-run
node create-pending-work-items.js --project autonr
```

## 5. Registro Plane ↔ automação

| Script | Função |
|--------|--------|
| `sync-plane-registry.js` | Gera `../maps/autonr-work-items.json` (op → UUID, AUTONR-n, URL) |
| `link-vault-plane.js` | Grava `plane_*` no frontmatter + seção **## Plane** nos `.md` |
| `mark-plane-done.js` | Marca card **Done** (`--op` ou `--scan-workflows`) |

```powershell
node sync-plane-registry.js --project autonr
node link-vault-plane.js --project autonr

# Após criar workflow n8n:
node mark-plane-done.js --project autonr --op ListBoletosPO
node mark-plane-done.js --project autonr --scan-workflows
```

## 8. `load-plane-env.ps1`

Carrega `.env` + variáveis do projeto ativo no PowerShell.

```powershell
. ".\load-plane-env.ps1" -ProjectSlug autonr
```

---

## Mapas (`maps/`)

| Arquivo | Uso |
|---------|-----|
| [[maps/autonr-legacy]] | Títulos antigos sem `[n8n] Op` |

Duplicar e adaptar para novos projetos.

## Relacionado

- [[../agente-plane]] · [[../00-indice-plane]]
