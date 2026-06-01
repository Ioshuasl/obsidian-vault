---
tipo: playbook
area: meta
tags: [plane, agente, cursor, automacao, jarvis]
status: revisado
criado: 2026-05-29
---

# Playbook — agente Cursor × Plane

Instruções para o **assistente Cursor** (e skills `obsidian-vault` + `skill_plane`) gerenciarem o Plane sem pedir API key a cada sessão.

## 1. Ler credenciais (sempre)

1. Abrir [[env]] ou `.env` na raiz do vault.
2. Usar `PLANE_BASE_URL`, `PLANE_WORKSPACE`, `PLANE_API_KEY`.
3. **Nunca** colar o token completo na resposta ao usuário.

## 2. Resolver qual projeto usar

Ordem de prioridade:

1. **Explícito** — usuário citou `AUTONR-14`, `DSAAS`, URL com `projects/{uuid}`, ou nome do projeto.
2. **Palavras-chave** — [[palavras-chave-plane]] → `plane_slug` (ex.: `ONR`, `n8n` → `autonr`).
3. **Padrão** — `PLANE_DEFAULT_PROJECT_SLUG` em [[env]] (hoje: `autonr`).

Depois abrir `Meta/integracoes/plane/projetos/<slug>.md` e obter:

- `plane_project_id`
- `plane_identifier` (prefixo dos cards)
- bloco `## Estados` → UUIDs para PATCH

## 3. Operações permitidas via API

| Ação | Método | Quando |
|------|--------|--------|
| Listar cards | `GET …/work-items/` | Inventário, relatório |
| Criar card | `POST …/work-items/` | Nova automação, demanda web, bug |
| Atualizar descrição | `PATCH …/work-items/{id}/` | Sync doc Obsidian → Plane |
| Mudar estado | `PATCH` + `state` | Concluir, iniciar |
| Listar estados | `GET …/states/` | Se nota do projeto estiver desatualizada |

Endpoint principal: `work-items`. Fallback legado: `issues`.

## 4. Criar demanda (padrão)

**Título sugerido:**

```text
[n8n] {OperacaoSOAP} - {resumo curto}
```

ou, para web:

```text
[Web] {módulo} - {resumo}
```

**Descrição (`description_html`):**

- Converter o markdown **inteiro** do vault (não só link para o arquivo).
- Fontes típicas: `Orius/integracoes/.../automacao/por-metodo/{Op}.md`, notas de produto, ADRs.
- Remover frontmatter YAML antes de converter.
- Resolver wikilinks `[[path|label]]` → texto legível.

**Padrão AUTONR (runbook de uso — espelho no Plane):**

Cada automação n8n deve ter um `.md` enxuto com **4 seções** (corpo após frontmatter + `## Plane`):

1. **Endpoint** — método e URL do webhook
2. **Autenticação** — Basic Auth, headers obrigatórios (ou “Nenhuma”)
3. **Corpo da requisição (exemplo)** — JSON mínimo funcional + caminho do exemplo completo
4. **Resposta esperada** — sucesso e erros com HTTP e JSON de exemplo

Referências: [[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway|AUTONR-13]] · [[Orius/integracoes/tabelionato-notas/doi/automacao/n8n-validate-json-gateway|AUTONR-87]]

Sync: `node sync-plane-descriptions.js --project autonr --md-dir <pasta-automacao> --file <nota>.md`

**Estado inicial:**

- Implementação já pronta → `done` / `Feito` / `Done` (ver UUID na nota do projeto).
- Trabalho novo → `todo` / `Fazer` / `Backlog`.

**Responsável (`assignees`):**

- Sempre o usuário de `GET /api/v1/users/me/` (mesmo token de [[env]]).
- No `POST`/`PATCH` work-items: `"assignees": ["<uuid-do-users-me>"]`.
- Script: `assign-work-items.js --project <slug>` para corrigir lote já criado.

## 5. Vínculo Plane ↔ automação (obrigatório)

Registro JSON: `Meta/integracoes/plane/maps/autonr-work-items.json`

| Campo | Uso |
|-------|-----|
| `plane_work_item_id` | UUID para `PATCH` na API |
| `plane_key` | `AUTONR-38` (humano) |
| `plane_url` | Link direto na UI |
| `operacao` | Nome SOAP / chave da automação |

Fluxo após criar ou alterar cards:

```powershell
node sync-plane-registry.js --project autonr
node link-vault-plane.js --project autonr
```

Ao **concluir** workflow n8n:

```powershell
node mark-plane-done.js --project autonr --op ListBoletosPO
# ou varrer todos os .workflow.ts existentes:
node mark-plane-done.js --project autonr --scan-workflows
```

Cada `por-metodo/{Op}.md` e `metodos/**/{Op}.md` deve ter frontmatter `plane_*` + seção **## Plane (gestão)**.

## 6. Sincronizar documentação → card existente

1. Localizar card por `sequence_id` (`AUTONR-14`) ou por título.
2. `GET work-items` com filtro ou busca na lista paginada.
3. `PATCH` com `description_html` gerado do `.md` canônico no vault.
4. O vault continua sendo **fonte da verdade**; o Plane é espelho para gestão.

Scripts no vault (`Meta/integracoes/plane/scripts/`):

```powershell
# Converter um .md para HTML (stdout)
node md-to-html.js "caminho\nota.md"

# Sync lote (cards [n8n] Op - …)
node sync-plane-descriptions.js --project autonr --md-dir "...\por-metodo" --dry-run
```

Ver [[scripts/README]].

## 7. Novo projeto no Plane

Quando o usuário criar projeto na UI:

1. `GET …/workspaces/saas/projects/` → copiar `id`, `identifier`, `name`.
2. Duplicar [[projetos/_template-projeto]] → `projetos/<slug>.md` (`slug` = identifier em minúsculas).
3. `GET …/projects/{id}/states/` → preencher tabela de estados.
4. Adicionar linha em [[projetos/00-indice-projetos]] e entradas em [[palavras-chave-plane]].
5. Não colocar `PLANE_PROJECT_ID` em `env.md` — só na nota do projeto.

## 8. O que não fazer

- Não misturar cards de projetos diferentes no mesmo slug.
- Não assumir que todos os projetos têm os mesmos nomes de estado (`Done` vs `Feito`).
- Não criar card sem saber o `plane_slug` (perguntar se ambíguo).
- Não duplicar API key em notas de projeto — só em [[env]].

## 9. Checklist fim de sessão (integração / n8n)

- [ ] Doc técnica salva no vault (caminho Orius correto)?
- [ ] Card criado ou atualizado no Plane (projeto certo)?
- [ ] `sync-plane-registry` + `link-vault-plane` rodados?
- [ ] Se n8n pronto: `mark-plane-done --op …`?
- [ ] `palavras-chave-plane` atualizado se surgiu novo produto?

## Relacionado

- [[00-indice-plane]] · [[instancia]] · [[Meta/skills/skill_plane]]
