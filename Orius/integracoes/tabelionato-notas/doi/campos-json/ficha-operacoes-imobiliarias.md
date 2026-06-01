---
tipo: campos-json
area: orius
produto: notas
orgao: receita-federal
ficha: operacoes-imobiliarias
tags: [orius, notas, doi, json]
status: revisado
---

> **Domínios:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoOperacaoImobiliaria|tipoOperacaoImobiliaria]], [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/formaPagamento|formaPagamento]], [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoParteTransacionada|tipoParteTransacionada]]  
> **Validação:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-operacao-imobiliaria]]

# Ficha: Operações Imobiliárias

Detalhes da transação financeira e contratual.

| Campo | Tipo | Tam. | Obrigatório | Descrição / Regra |
| --- | --- | --- | --- | --- |
| **dataNegocioJuridico** | Data | — | Sim | Data da celebração. Formato: `YYYY-MM-DD`. |
| **tipoOperacaoImobiliaria** | Alfanumérico | — | Sim | Conforme [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoOperacaoImobiliaria]]. |
| **descricaoOutrasOperacoesImobiliarias** | Alfanumérico | 30 | Não* | Obrigatório se `tipoOperacaoImobiliaria` = `"39"` (Outras). |
| **valorOperacaoImobiliaria** | Monetário | 20.2 | Sim* | Obrigatório se `indicadorNaoConstaValorOperacaoImobiliaria` for falso ou não enviado. **Não enviar** se indicador for `true`. |
| **indicadorNaoConstaValorOperacaoImobiliaria** | Booleano | — | * | `true` se valor não consta nos documentos. |
| **valorBaseCalculoItbiItcmd** | Monetário | 20.2 | Sim* | Valor base ITBI/ITCMD. |
| **indicadorNaoConstaValorBaseCalculoItbiItcmd** | Booleano | — | * | `true` se valor base não consta nos documentos. |
| **formaPagamento** | Alfanumérico | — | Sim | Conforme [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/formaPagamento]]. |
| **indicadorAlienacaoFiduciaria** | Booleano | — | * | Obrigatório se `formaPagamento` = `"7"` (A prazo). |
| **mesAnoUltimaParcela** | Data | — | * | Obrigatório se `formaPagamento` = `"7"`. Formato: `YYYY-MM-DD`. |
| **valorPagoAteDataAto** | Monetário | 20.2 | * | Obrigatório se `formaPagamento` = `"7"`. |
| **indicadorPermutaBens** | Booleano | — | Sim | Houve permuta? |
| **indicadorPagamentoDinheiro** | Booleano | — | Sim | Houve pagamento em espécie? |
| **valorPagoMoedaCorrenteDataAto** | Monetário | 20.2 | Sim* | Obrigatório se `indicadorPagamentoDinheiro` = `true`. |
| **tipoParteTransacionada** | Alfanumérico | — | Sim | Medida da parte (% ou área). Conforme [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoParteTransacionada]]. |
| **valorParteTransacionada** | Alfanumérico | 20.2 | Sim | Quantidade (m²/ha) ou percentual conforme `tipoParteTransacionada`. |

## Regras condicionais — forma de pagamento

Quando `formaPagamento` = `"7"` (A prazo), incluir obrigatoriamente:

- `indicadorAlienacaoFiduciaria`
- `mesAnoUltimaParcela`
- `valorPagoAteDataAto`

## Valor da operação — exclusão mútua

Se `indicadorNaoConstaValorOperacaoImobiliaria` = `true`, **omitir** `valorOperacaoImobiliaria`. Enviar ambos gera erro de schema/validação.

Voltar: [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]]
