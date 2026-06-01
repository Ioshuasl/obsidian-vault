---
tipo: regras-validacao
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, doi, validacao]
status: revisado
---

> **Índice:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]

# Visão geral da validação

Após a importação, há três cenários principais:

| Nível | Efeito | Descrição |
|-------|--------|-----------|
| **1. Estrutural (JSON)** | Rejeita o **arquivo inteiro** | Sintaxe JSON inválida, tipos incompatíveis com schema, campos proibidos. |
| **2. Individual (inaptidão)** | Rejeita **declarações** específicas | Erros de lógica, domínio, obrigatoriedade condicional. Outras declarações válidas no mesmo arquivo podem importar. |
| **3. Pendências / avisos** | Permite importação com alertas | Duplicidade suspeita, inconsistências leves, avisos não impeditivos. |

## Resultado por declaração apta

1. Validação estrutural e individual passou.
2. Verificação de pendências (duplicidade com declarações já entregues).
3. Declaração gravada com situação **RASCUNHO**.

## Validações lógicas críticas (resumo)

- **Datas:** `dataNegocioJuridico` ≤ data atual e ≤ `dataLavraturaRegistroAverbacao`.
- **Participação:** soma de alienantes (e de adquirentes) entre 99% e 100%, salvo indicador "não consta".
- **Duplicidade:** combinação CNS, data ato, livro, folha, tipo operação, data negócio, valor, CIB e NIs das partes.
- **tipoDeclaracao:** somente `"0"` (Original) em lote.
- **MNE / CNM / CPF / CNPJ:** validação de dígito verificador.

Detalhes: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/rejeicao-arquivo]] · [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/declaracao-inapta]] · [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/pendencias-duplicidade]]

Voltar: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
