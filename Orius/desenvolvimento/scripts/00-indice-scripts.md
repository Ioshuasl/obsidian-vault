---
tipo: indice
area: orius
tags: [orius, scripts, automacao, indice]
atualizado: 2026-05-29
---

# Scripts auxiliares — indice

Scripts de apoio ao vault Orius (PowerShell, Python, JavaScript). **Codigo e documentacao ficam juntos no Obsidian** para reutilizacao futura.

> **Principio:** cada script tem uma nota `.md` irmã com uso, parametros e saidas.

## Estrutura

```
Orius/desenvolvimento/scripts/
├── 00-indice-scripts.md          ← este arquivo
├── firebird/                     ← export metadata, inventario
│   ├── export-protesto-p.ps1
│   └── export-protesto-p.md
└── (futuro: integracoes/, n8n/, etc.)
```

Artefatos gerados (JSON, CSV) ficam em `Orius/desenvolvimento/banco-de-dados/metadata/` — nao misturar com notas de conhecimento.

## Scripts ativos

| Script | Linguagem | Proposito | Documentacao |
|--------|-----------|-----------|--------------|
| `export-protesto-p.ps1` | PowerShell | Metadados tabelas `P_` (protesto) | [[Orius/desenvolvimento/scripts/firebird/export-protesto-p]] |

## Como adicionar um script novo

1. Criar pasta por dominio (`firebird/`, `integracoes/onr/`, ...)
2. Colocar o arquivo (`.ps1`, `.py`, `.js`)
3. Criar nota `nome-do-script.md` com pre-requisitos, comando e saidas
4. Registrar nesta tabela
5. Linkar do documento de dominio relevante (ex.: [[Orius/desenvolvimento/banco-de-dados/extracao-metadados]])

## Relacionados

| Area | Indice |
|------|--------|
| Banco de dados | [[Orius/desenvolvimento/banco-de-dados/00-indice-banco-dados]] |
| Desenvolvimento | [[Orius/desenvolvimento/00-indice-dev]] |

Voltar: [[Orius/00-indice]]
