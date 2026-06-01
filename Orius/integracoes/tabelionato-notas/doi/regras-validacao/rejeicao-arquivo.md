---
tipo: regras-validacao
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, doi, validacao, json]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/estrutura-basica]]

# Rejeição do arquivo JSON (estrutural)

Validações que **rejeitam o arquivo por completo** — nenhuma declaração é importada.

## Pré-requisitos do arquivo

| Regra | Detalhe |
|-------|---------|
| Extensão | `.json` (DOI-Web) ou `.zip` com um único `.json` |
| Estrutura JSON | Sintaxe válida (vírgulas, chaves, aspas) |
| Schema | Conforme JSON Schema 2020-12 do DOI-Web |
| Tipos | Valores compatíveis com o tipo do campo (número vs string, etc.) |

## Erros comuns

- Vírgula ausente ou sobrando entre propriedades.
- Valor numérico enviado como string onde o schema exige number (ex.: `4440.12` em vez de `"4440.12"` quando aplicável).
- Campo desconhecido ao schema.
- JSON malformado (detectável por validadores online).

## Mensagem típica

O DOI-Web exibe erro de estrutura apontando linha/campo (ex.: ausência de vírgula).

Ver também: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/exemplos-inconsistencias#Rejeição por erro na estrutura]]

Voltar: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
