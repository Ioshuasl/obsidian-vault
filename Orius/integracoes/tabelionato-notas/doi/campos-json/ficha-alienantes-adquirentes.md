---
tipo: campos-json
area: orius
produto: notas
orgao: receita-federal
ficha: alienantes-adquirentes
tags: [orius, notas, doi, json]
status: revisado
---

> **Domínios:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/motivoNaoIdentificacaoNi|motivoNaoIdentificacaoNi]], [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/regimeBens|regimeBens]]  
> **Validação:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-partes]]

# Ficha: Alienantes e Adquirentes

Arrays `alienantes` e `adquirentes` no objeto da declaração. Estrutura **idêntica** para ambos.

| Campo | Tipo | Tam. | Obrigatório | Descrição / Regra |
| --- | --- | --- | --- | --- |
| **indicadorNiIdentificado** | Booleano | — | Sim | CPF/CNPJ consta no documento? |
| **motivoNaoIdentificacaoNi** | Alfanumérico | 2 | Sim* | Se `indicadorNiIdentificado` = `false`. Conforme [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/motivoNaoIdentificacaoNi]]. |
| **ni** | Alfanumérico | 11/14 | Sim | CPF ou CNPJ. Validado por DV. |
| **participacao** | Numérico | 7.4 | Sim* | Percentual de participação. Soma do grupo: ≥ 99% e ≤ 100% (exceto se "não consta"). |
| **indicadorNaoConstaParticipacaoOperacao** | Booleano | — | Sim | Percentual não consta nos documentos? |
| **indicadorEstrangeiro** | Booleano | — | Sim | É estrangeiro? |
| **indicadorEspolio** | Booleano | — | Sim | É espólio? |
| **cpfInventariante** | Alfanumérico | 11 | Sim* | Se `indicadorEspolio` = `true`. |
| **indicadorConjuge** | Booleano | — | Sim | Possui cônjuge? |
| **indicadorConjugeParticipa** | Booleano | — | Sim* | Se `indicadorConjuge` = `true`. Cônjuge participa da operação? |
| **regimeBens** | Alfanumérico | — | Sim* | Se possui cônjuge. Conforme [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/regimeBens]]. |
| **indicadorCpfConjugeIdentificado** | Booleano | — | Sim* | Se cônjuge participa. CPF do cônjuge consta? |
| **cpfConjuge** | Alfanumérico | 11 | Sim* | Se `indicadorCpfConjugeIdentificado` = `true`. |
| **indicadorRepresentante** | Booleano | — | Sim | Há procurador/representante? |
| **representantes** | Lista (JSON) | — | Sim* | Se `indicadorRepresentante` = `true`, ao menos um CPF/CNPJ na lista. |

## Objeto representante

Cada item de `representantes` contém identificação (CPF/CNPJ) do representante/assistente/procurador.

## Participação

- Soma das participações de **alienantes** e, separadamente, de **adquirentes**: entre 99% e 100%.
- Se `indicadorNaoConstaParticipacaoOperacao` = `true`, regras de soma relaxam com aviso (ver [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-partes]]).

Voltar: [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]]
