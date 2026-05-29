---
tipo: referencia
area: meta
tags: [skills, vendor, cursor, catalogo]
atualizado: 2026-05-29
---

# Catalogo — skills vendor (terceiros)

Skills de terceiros **nao migradas** para o vault (evita duplicacao e drift). Mantidas em:

`C:\Users\kenio\projetos-orius\docs\skills\vendor\`

Atualizacao via `skills-lock.json` no repo `projetos-orius`.

## Principais bundles

| Area | Exemplos | Path repo |
|------|----------|-----------|
| React / Vercel | `vercel-react-best-practices`, composition patterns | `vendor/.agents/skills/` |
| Next.js | `next-best-practices` | `vendor/.agents/skills/next-best-practices/` |
| UI | `shadcn`, `web-design-guidelines` | `vendor/.agents/skills/` |
| Design | `pencil-design` | `vendor/.agents/skills/pencil-design/` |
| Backend / API | `api-patterns`, `api-design-principles`, `clean-code` | `vendor/skills-bundle/backend/` |
| Arquitetura | DDD, backend-architect | `vendor/skills-bundle/architecture/` |
| DevOps | `devops-troubleshooter` | `vendor/skills-bundle/devops/` |

## Quando usar vendor vs vault

| Situacao | Onde |
|----------|------|
| Regra **Orius** ou stack **curada pelo time** | [[Meta/skills/00-indice-skills]] |
| Best practice **generica** (Vercel, shadcn, DDD) | Repo `vendor/` + Cursor runtime |

Indice vault: [[Meta/skills/00-indice-skills]]
