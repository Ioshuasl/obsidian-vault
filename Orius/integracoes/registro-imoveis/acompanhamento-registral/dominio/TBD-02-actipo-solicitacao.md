---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-02, protocolo]
codigo: TBD-02
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/00-indice-dominio]]

# [TBD-02] — ACTipoSolicitacao

Tipo de **solicitação** do acompanhamento registral enviado pelo cartório.

## Valores

| Código | Descrição |
|--------|-----------|
| 1 | Registro |
| 2 | Exame e cálculo |

## Onde é usado

| Endpoint / nota | Campo |
|-----------------|-------|
| [[RFP-01-envio-online]] | `tipoSolicitacao` (obrigatório) |
| [[RFP-02-envio-lote]] | `tipoSolicitacao` em cada item do array |
| [[RFP-03-cobranca-automatizada]] | `tipoSolicitacao` (obrigatório no lote) |
| RFP-05 / RFP-06 / RFP-07 | Filtro ou retorno em consultas (pendente) |

**Tipo no JSON:** `int` (tamanho 1 no manual).

**Manual bruto:** seção `[TBD-02] - ACTipoSolicitacao`
