---
tipo: regras-validacao
area: orius
produto: notas
orgao: receita-federal
ficha: operacao-imobiliaria
tags: [orius, notas, doi, validacao]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-operacoes-imobiliarias]]

# Validação — Ficha Operação Imobiliária

| Campo | Mensagem | Condição |
|-------|----------|----------|
| Data do Negócio Jurídico | Obrigatório informar Data do Negócio Jurídico | Quando não informada |
| Data do Negócio Jurídico | Data do Negócio Jurídico informada é maior que a data atual | Data futura |
| Data do Negócio Jurídico | Data do Negócio Jurídico informada é maior que Data do Ato | Negócio posterior ao ato |
| Tipo da Operação Imobiliária | Obrigatório informar Tipo da Operação | Quando não informado |
| Descrição de Outras Operações | Obrigatório quando Tipo = Outras (`39`) | Sem descricaoOutrasOperacoesImobiliarias |
| Indicador da Parte Transacionada | Obrigatório informar Indicador da Parte Transacionada | Quando não informado |
| Valor da Parte Transacionada | Obrigatório informar Valor da Parte Transacionada | Quando não informado |
| Valor da Parte Transacionada (%) | Percentual não pode ser maior que 100% | tipoParteTransacionada = % e valor > 100 |
| Valor da Parte Transacionada (%) | Percentual tem que ser maior que 0% | tipoParteTransacionada = % e valor ≤ 0 |
| Valor da Operação | Deve estar preenchido quando "Não consta" não marcado | Sem valor e sem indicador |
| Não consta — Valor da Operação | Indicador obrigatório quando valor não preenchido | Exclusão mútua |
| Valor da Base ITBI/ITCMD | Deve estar preenchido quando "Não consta" não marcado | Exclusão mútua |
| Não consta — Base ITBI/ITCMD | Indicador obrigatório quando base não preenchida | Exclusão mútua |
| Houve pagamento em dinheiro? | Obrigatório informar | Quando não marcado |
| Houve permuta de bens? | Obrigatório informar | Quando não marcado |
| Forma de Pagamento | Obrigatório informar Forma de pagamento | Quando não selecionada |
| Mês/Ano da última Parcela | Obrigatório quando Forma = A prazo (`7`) | Pagamento a prazo |
| Alienação fiduciária | Obrigatório quando Forma = A prazo | Pagamento a prazo |
| Valor pago até a data do Ato | Obrigatório quando Forma = A prazo | Pagamento a prazo |
| Valor pago em moeda corrente | Obrigatório quando pagamento em dinheiro = Sim | indicadorPagamentoDinheiro = true |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
