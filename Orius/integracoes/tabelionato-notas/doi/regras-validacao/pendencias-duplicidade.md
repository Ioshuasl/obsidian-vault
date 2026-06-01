---
tipo: regras-validacao
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, doi, validacao, duplicidade]
status: revisado
---

> **Visão geral:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/visao-geral-validacao]]

# Pendências e duplicidade

Validações que **geram pendências** (impeditivas ou avisos). Declarações aptas podem importar após tratamento no DOI-Web.

## Duplicidade com declarações já entregues

| Regra | Detalhe |
|-------|---------|
| Escopo | Compara declaração aberta com declarações **já entregues** |
| Pré-requisito | Todos os campos da lista abaixo preenchidos |
| Resultado | Pendência **impeditiva** se suspeita de duplicidade |
| Tratamento | Usuário pode indicar que duplicidade não procede; sistema grava IDs verificados |
| Revalidação | Alterar qualquer campo da lista limpa IDs verificados |

Mensagem: *"Esta declaração já pode ter sido cadastrada. Analise a declaração existente e verifique se esta pendência é impeditiva."*

## Duplicidade no mesmo arquivo

Não é permitida segunda declaração com valores **idênticos** nos campos da lista abaixo.

## Lista de campos para suspeita de duplicidade

| # | Campo (conceitual) | Campo JSON (referência) |
|---|-------------------|---------------------------|
| 1 | CNS / CNPJ do Cartório | (dados da serventia na sessão) |
| 2 | Tipo da Declaração | `tipoDeclaracao` |
| 3 | Data de Anotação/Lavratura/Matrícula/Registro | `dataLavraturaRegistroAverbacao` |
| 4 | Livro | `numeroLivro` / `tipoLivro` |
| 5 | Ficha/Folha | `folha` |
| 6 | Transcrição/Matrícula/Inscrição | `matricula`, `transcricao`, CNM |
| 7 | Averbação/Registro | `numeroRegistroAverbacao` |
| 8 | Tipo de Operação Imobiliária | `tipoOperacaoImobiliaria` |
| 9 | Data do Negócio Jurídico | `dataNegocioJuridico` |
| 10 | Valor da Operação | `valorOperacaoImobiliaria` |
| 11 | CIB | `cib` |
| 12 | NIs dos Alienantes | `alienantes[].ni` |
| 13 | NIs dos Adquirentes | `adquirentes[].ni` |

## Avisos não impeditivos

- CPF/CNPJ repetido em **partes distintas** da operação (alienante vs adquirente): aviso amarelo; não impede importação nem gravação.

Voltar: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
