---
tipo: regras-validacao
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, doi, validacao, exemplos]
status: revisado
---

> **Índice:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]

# Exemplos de inconsistências

Casos frequentes documentados no manual RFB.

## Rejeição por erro na estrutura

- Vírgula ausente entre propriedades JSON.
- Tipo incorreto no schema (ex.: valor monetário como string quando schema exige number).

**Correto:** seguir tipos do schema (`4440.12` como número quando aplicável).

## Inaptidão — tipo de declaração

- Enviar `tipoDeclaracao`: `"1"` (Retificadora) ou `"3"` (Canceladora).
- Mensagem: declarações retificadoras/canceladoras não podem ser importadas.

## Erro de domínio

- Campo fora da tabela (ex.: `motivoNaoIdentificacaoNi` com valor inválido).

**Correto:** `"motivoNaoIdentificacaoNi": "2"` (Não consta no documento).

## Erro no CIB

- CIB com DV incorreto.

**Correto:** calcular conforme [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/algoritmo-cib]] (ex.: `J7DNF01S`).

## Exclusão mútua — valor da operação

Quando `indicadorNaoConstaValorOperacaoImobiliaria` = `true`, **não enviar** `valorOperacaoImobiliaria`.

Enviar ambos causa erro de validação/schema.

## Aviso — CPF em partes distintas

Mesmo CPF/CNPJ informado como alienante e adquirente: **aviso amarelo**, não impede importação.

Voltar: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
