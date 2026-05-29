# Visão: Obsidian como base para assistentes

## Objetivo

Este cofre é a **fonte da verdade** para:

1. Organização e documentação humana (Obsidian: links, tags, grafo, busca).
2. Base de conhecimento para **agentes de IA** (Cursor e futuros pipelines RAG/embeddings).
3. Memória de longo prazo: decisões, integrações, estudos, rotina, finanças, saúde.

## Princípios

| Princípio | Prática |
|-----------|---------|
| Uma nota, um assunto | Título claro; linkar em vez de duplicar |
| Links bidirecionais | `[[nota]]` e backlinks do Obsidian |
| Metadados leves | Tags + frontmatter YAML quando ajudar busca/IA |
| Captura → processar | [[Inbox/captura]] → pasta definitiva |
| Sessões Cursor | Skill `obsidian-vault`: gravar o que for reutilizável |

## Frontmatter sugerido (para IA futura)

```yaml
---
tipo: documentacao | decisao | integracao | estudo | rotina | financeiro | saude | cliente
area: orius | pessoal
produto: # se orius: notas, protesto, civil, imoveis, rtd, caixa, nf
status: rascunho | revisado | obsoleto
criado: YYYY-MM-DD
atualizado: YYYY-MM-DD
fonte: cursor | reuniao | documentacao-oficial | experiencia
---
```

## Fluxo Cursor → Obsidian

Skill **`obsidian-vault`** em `~/.cursor/skills/` — **sempre ativa** (todo uso do Cursor é Orius, clientes ou pessoal). O agente reconhece palavras-chave de produtos e centrais via [[Orius/integracoes/palavras-chave-orius]] e skills de stack via [[Meta/skills/palavras-chave-skills]].

## Skills no vault

| Camada | Onde | Conteudo |
|--------|------|----------|
| **Customizadas Orius** | [[Meta/skills/00-indice-skills]] | 20 skills (`skill_*.md`) — Firebird, React, dominio cartorario… |
| **Palavras-chave** | [[Meta/skills/palavras-chave-skills]] | Keyword → skill |
| **Vendor (terceiros)** | [[Meta/skills/catalogo-skills-vendor]] | Apenas catalogo; arquivos em `projetos-orius/docs/skills/vendor/` |
| **Runtime Cursor** | `~/.cursor/skills/` | Execucao operacional do agente |

1. Ao final de sessão relevante, agente pergunta ou propõe: "Salvar no vault?"
2. Criar/atualizar nota na pasta correta com resumo + links + comandos/código se útil.
3. Atualizar índice da seção (`00-indice`) se for nota estrutural nova.

## Próximos passos (evolução)

- [ ] Plugin Dataview (consultas sobre frontmatter)
- [ ] Export periódico ou indexação para RAG local
- [ ] Templates por tipo de nota
- [ ] Migrar docs externos (ex.: OnlyOffice no Desktop) para pastas temáticas

## Relacionado

- [[Home]]
- [[Meta/skills/00-indice-skills]]
- Skill: `~/.cursor/skills/obsidian-vault/SKILL.md`
