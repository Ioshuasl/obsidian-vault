---
tipo: script-doc
area: orius
tags: [orius, script, firebird, metadata, powershell, protesto]
linguagem: powershell
arquivo: export-protesto-p.ps1
atualizado: 2026-05-29
status: ativo
---

# Script — export-protesto-p.ps1

Exporta metadados das **35 tabelas `P_`** do banco `palmelo2` e gera/atualiza notas de schema no vault.

> **Indice de scripts:** [[Orius/desenvolvimento/scripts/00-indice-scripts]]  
> **Guia Firebird:** [[Orius/desenvolvimento/banco-de-dados/extracao-metadados]]

## Arquivo

`Orius/desenvolvimento/scripts/firebird/export-protesto-p.ps1`

## Pre-requisitos

| Item | Valor |
|------|-------|
| Firebird client | `isql.exe` (Firebird 4.0) |
| Banco | `192.168.1.100/3050:palmelo2` |
| Charset conexao | `ISO8859_1` — [[Orius/desenvolvimento/banco-de-dados/visao-geral-firebird]] |

## Uso

```powershell
cd "C:\Users\kenio\OneDrive\Documentos\Obsidian Vault\Orius\desenvolvimento\scripts\firebird"
.\export-protesto-p.ps1
```

Regenerar apenas as notas `.md` (sem consultar o banco):

```powershell
.\export-protesto-p.ps1 -VaultOnly
```

## Saidas

| Artefato | Onde |
|----------|------|
| JSON | [[Orius/desenvolvimento/banco-de-dados/metadata/palmelo2/protesto-p-metadata.json]] |
| Notas tabela | `Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_*.md` |
| Indice DB | [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]] |

## Parametros

| Parametro | Padrao | Descricao |
|-----------|--------|-----------|
| `-Database` | `192.168.1.100/3050:palmelo2` | Conexao Firebird |
| `-Charset` | `ISO8859_1` | Charset da sessao isql |
| `-TablePrefix` | `P_` | Filtro de tabelas |
| `-VaultOnly` | — | So regenera markdown a partir do JSON |
| `-Password` | _(local)_ | Preferir variavel de ambiente no futuro |

**Seguranca:** nao versionar senha de producao; usar parametro ou env local.

## O que extrai

- Colunas (tipo, null, default, charset)
- Primary keys
- Foreign keys
- Indices secundarios

Secoes **Objetivo**, **Descricao** e **Relacionamentos** (negocio) ficam para preenchimento manual ou fase seguinte.

## Evolucao prevista

- Variante com lista explicita de tabelas `G_` (compartilhado)
- Diagramas ERD por dominio de protesto

Voltar: [[Orius/desenvolvimento/scripts/00-indice-scripts]]
