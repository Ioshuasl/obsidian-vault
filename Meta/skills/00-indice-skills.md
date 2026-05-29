---
tipo: indice
area: meta
tags: [skills, cursor, stack, indice]
atualizado: 2026-05-29
total_skills: 20
origem: projetos-orius/docs/skills
---

# Skills customizadas — indice

Catalogo de **skills Orius** migradas para o vault. Usadas pelo agente Cursor como referencia de stack, dominio cartorario, design e processo.

> **Palavras-chave:** [[Meta/skills/palavras-chave-skills]]  
> **Skills vendor (terceiros):** `C:\Users\kenio\projetos-orius\docs\skills\vendor\` — nao copiadas; ver [[Meta/skills/catalogo-skills-vendor]]  
> **Jarvis:** [[Meta/visao-jarvis]]

## Como usar

1. Mencione a stack ou dominio na conversa (ex.: *Firebird*, *protesto web*, *React*).
2. Consulte [[Meta/skills/palavras-chave-skills]] para a skill correspondente.
3. O agente aplica o conteudo da nota `skill_*.md` como guia de trabalho.

Para **runtime Cursor**, skills operacionais continuam em `~/.cursor/skills/`; este vault e a **fonte legivel e linkavel**.

---

## Stack — frontend e linguagens

| Skill | Slug Cursor | Nota |
|-------|-------------|------|
| React avancado | `react-avancado` | [[Meta/skills/skill_react]] |
| Next.js 14+ | `react-nextjs-development` | [[Meta/skills/skill_nextjs]] |
| TypeScript avancado | `typescript-avancado` | [[Meta/skills/skill_typescript]] |
| Python producao | `python-producao` | [[Meta/skills/skill_python]] |
| Python code review | `python-code-review` | [[Meta/skills/skill_python_reviewer]] |

## Stack — dados e infra

| Skill | Slug Cursor | Nota |
|-------|-------------|------|
| Firebird SQL | `firebird-sql` | [[Meta/skills/skill_firebird]] |
| Git operacional | `git-operacoes-essenciais` | [[Meta/skills/skill_git]] |
| Plane API | `plane-rest-api-consumer` | [[Meta/skills/skill_plane]] |

## Dominio cartorario (Orius)

| Skill | Slug Cursor | Produto vault |
|-------|-------------|---------------|
| Registro de Imoveis (software) | `mentor-ri-software` | [[Orius/empresa/produtos/registro-imoveis]] · [[Meta/skills/skill_registro_imoveis]] |
| Registro Civil (operacional) | `registro-civil-cartorario` | [[Orius/empresa/produtos/registro-civil]] · [[Meta/skills/skill_registro_civil_cartorario]] |

## UX, UI e copy

| Skill | Slug Cursor | Nota |
|-------|-------------|------|
| UX writing SaaS | `ux-writing-saas` | [[Meta/skills/skill_copywriter]] |
| UI/UX systems senior | `ui-ux-systems-senior` | [[Meta/skills/skill_ui_ux_systems]] |
| Designer acessibilidade | _stub_ | [[Meta/skills/skill_desinger_accessibility]] |
| Designer copywriter | _stub_ | [[Meta/skills/skill_desinger_copywriter]] |
| Designer design review | _stub_ | [[Meta/skills/skill_desinger_design_review]] |
| Designer design system | _stub_ | [[Meta/skills/skill_desinger_design_system]] |
| Designer UI | _stub_ | [[Meta/skills/skill_desinger_ui]] |
| Designer UX | _stub_ | [[Meta/skills/skill_desinger_ux]] |

## Processo e meta

| Skill | Slug Cursor | Nota |
|-------|-------------|------|
| TDD avancado | `tdd-avancado` | [[Meta/skills/skill_tdd]] |
| Skill creator | `skill-creator-optimized` | [[Meta/skills/skill_skill_creator]] |

---

## Combos por iniciativa

| Iniciativa | Skills recomendadas |
|------------|---------------------|
| **Protesto web** (primeiro modulo) | [[Meta/skills/skill_react]], [[Meta/skills/skill_nextjs]], [[Meta/skills/skill_typescript]], [[Meta/skills/skill_firebird]], [[Meta/skills/skill_copywriter]] |
| **Migracao Delphi → web** | stack frontend + [[Meta/skills/skill_firebird]] + dominio do produto |
| **API / backend Python** | [[Meta/skills/skill_python]], [[Meta/skills/skill_tdd]] |
| **PR / qualidade** | [[Meta/skills/skill_git]], [[Meta/skills/skill_python_reviewer]] ou stack equivalente |

## Links Orius

| Area | Indice |
|------|--------|
| Banco Firebird | [[Orius/desenvolvimento/banco-de-dados/00-indice-banco-dados]] |
| Scripts vault | [[Orius/desenvolvimento/scripts/00-indice-scripts]] |
| Palavras-chave produtos | [[Orius/integracoes/palavras-chave-orius]] |

Voltar: [[Home]] · [[Meta/visao-jarvis]]
