---
tipo: briefing
area: orius
produto: notas
central: censec
tags: [orius, notas, censec, briefing, n8n, validacao]
status: concluido
---

# Briefing — documentação CENSEC + automação n8n

## Fontes da verdade

| O quê | Onde |
|-------|------|
| **Conhecimento (Obsidian)** | `Orius/integracoes/tabelionato-notas/censec/` |
| **Especificação editável + Postman** | `C:\Users\kenio\soap-ui test\censec\` |
| **Workflow n8n (código)** | `C:\Users\kenio\soap-ui test\workflows\n8n-censec\censec-upload-json.workflow.ts` |

O vault guarda especificação de campos, **regras de validação**, **tabelas de domínio** e o mapa da automação. Código JavaScript dos nós n8n e exports JSON ficam fora do vault.

## O que foi integrado ao vault (2026-05-29)

- `regras-validacao/` — CEP, CESDI, CTP (JSON estruturado)
- `tabelas-dominio/` — valores aceitos por campo
- `automacao/n8n-upload-json-gateway.md` — fluxo webhook → validação → `POST /api/cargas/upload-json`
- `artefatos/00-indice-artefatos.md` — Postman, exemplos, paths locais

## Payload único

Um JSON por transmissão com:

| Bloco | Central |
|-------|---------|
| `atosCep` | CEP |
| `atosCesdi` | CESDI |
| `testamentos` | RCTO |
| `declaracoes` | CTP |

Cabeçalho: `cns`, `quinzena` (`anoReferencia`, `mesReferencia`, `quinzenaReferencia`).

## Lacunas conhecidas

- **RCTO:** sem validador no gateway n8n atual; conferir manualmente ou estender workflow.
- **Homologação:** workflow aponta produção; usar `hml.censec.org.br` em testes.

## Índice

[[Orius/integracoes/tabelionato-notas/censec/00-indice-censec]]
