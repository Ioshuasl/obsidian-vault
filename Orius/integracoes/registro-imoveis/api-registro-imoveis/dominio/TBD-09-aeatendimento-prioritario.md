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

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/dominio/00-indice-dominio]]

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
| [[RAE-02-detalhes-resposta-exigencia]] | `atendimentoPrioritario` no detalhe (não na listagem RAE-01) |

**Tipo no JSON:** `int` (tamanho 1 no manual).

## Integração — sugestão

| Valor | Ação no sistema do cartório |
|-------|----------------------------|
| `1` | Destacar na fila de exigências / SLA reduzido |
| `0` | Fila normal |

Relacionado: [[TBD-07-aetipo-atendimento]] (`tipoAtendimento` = 91 para exigência) e [[TBD-08-aesituacao]] (`status` do fluxo).

**Manual bruto:** `[TBD-09] - AEAtendimentoPrioritario` (pág. 97 do PDF v2.2)
