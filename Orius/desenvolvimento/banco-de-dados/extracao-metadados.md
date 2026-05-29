---
tipo: referencia
area: orius
tags: [orius, db, firebird, extracao, metadata, isql]
status: revisado
atualizado: 2026-05-29
---

# Extração de metadados — Firebird

Como exportar schema (colunas, PK, FK, índices) do `palmelo2` para JSON e stubs no Obsidian.

> **Scripts:** [[Orius/desenvolvimento/scripts/00-indice-scripts]]  
> **Charset:** [[Orius/desenvolvimento/banco-de-dados/visao-geral-firebird]] (`ISO8859_1` na conexão)  
> **Briefing:** [[Orius/desenvolvimento/banco-de-dados/00-briefing-documentacao-firebird#7. Extração de metadados (Firebird 4)]]

## Abordagem em fases (protesto primeiro)

| Fase | Escopo | Saída |
|------|--------|-------|
| **1a** | Prefixo `P_` (protesto) | JSON + 35 notas no vault |
| **1b** | Tabelas `G_` escolhidas | JSON parcial + notas em `compartilhado/` |
| **2** | Relacionamentos de negócio | Seção `Relacionamentos` + ERD por domínio |

## Script — protesto `P_`

**Documentação:** [[Orius/desenvolvimento/scripts/firebird/export-protesto-p]]  
**Arquivo:** `Orius/desenvolvimento/scripts/firebird/export-protesto-p.ps1`

```powershell
cd "C:\Users\kenio\OneDrive\Documentos\Obsidian Vault\Orius\desenvolvimento\scripts\firebird"
.\export-protesto-p.ps1
```

### Saídas

| Artefato | Caminho no vault |
|----------|------------------|
| JSON (fonte técnica) | [[Orius/desenvolvimento/banco-de-dados/metadata/palmelo2/protesto-p-metadata.json]] |
| Notas Obsidian | `Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_*.md` |
| Índice | [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]] |

Regenerar só os `.md` a partir do JSON existente:

```powershell
.\export-protesto-p.ps1 -VaultOnly
```

### Parâmetros úteis

| Parâmetro | Padrão | Uso |
|-----------|--------|-----|
| `-Database` | `192.168.1.100/3050:palmelo2` | Banco alvo |
| `-Charset` | `ISO8859_1` | Alinhado ao legado |
| `-TablePrefix` | `P_` | Filtro de tabelas |
| `-VaultOnly` | — | Pula export Firebird; só gera markdown |

Credenciais: usar variável de ambiente ou editar parâmetros localmente — **não** commitar senha.

## O que cada nota contém (status `gerado`)

- Colunas com tipo Firebird, nullability, PK, FK declarada
- Chaves primárias, FKs e índices secundários
- Placeholders: objetivo, descrição, relacionamentos de negócio, Delphi, web

FKs para tabelas **fora** do escopo (`G_*`, `NFSE`, `C_*`) aparecem na coluna FK — útil para a fase em que você pedir metadados das `G_` específicas.

## Próximo passo

Quando indicar a lista de tabelas `G_` (ex.: `G_USUARIO`, `G_EMOLUMENTO*`), replicamos o script com filtro por nome em vez de prefixo único.

Voltar: [[Orius/desenvolvimento/banco-de-dados/00-indice-banco-dados]]
