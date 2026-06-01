---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-09, atendimento-eletronico]
codigo: TBD-09
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/00-indice-dominio]]

# [TBD-09] — AEAtendimentoPrioritario

Indica se o atendimento eletrônico é **prioritário** na fila de tratamento.

## Valores

| Código | Descrição |
|--------|-----------|
| 0 | Atendimento não prioritário |
| 1 | Atendimento prioritário |

## Onde é usado

| Contexto | Campo |
|----------|-------|
| **RAE-01** (pendente) | Retorno `atendimentoPrioritario` (opcional na listagem) |
| **RAE-02** (pendente) | Detalhe do atendimento |
| **RAE-03** (pendente) | Pode informar prioridade ao cadastrar interação |

**Tipo no JSON:** `int` (tamanho 1 no manual).

## Integração — sugestão

| Valor | Ação no sistema do cartório |
|-------|----------------------------|
| `1` | Destacar na fila de exigências / SLA reduzido |
| `0` | Fila normal |

Relacionado: [[TBD-07-aetipo-atendimento]] (`tipoAtendimento` = 91 para exigência) e [[TBD-08-aesituacao]] (`status` do fluxo).

**Manual bruto:** `[TBD-09] - AEAtendimentoPrioritario` (pág. 97 do PDF v2.2)
