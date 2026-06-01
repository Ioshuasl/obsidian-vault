---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-03, protocolo, status]
codigo: TBD-03
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/00-indice-dominio]]

# [TBD-03] — ACCodigoStatus

Código da **situação** do título/protocolo no acompanhamento registral. O manual distingue a descrição exibida ao **cartório** e a do **usuário** no site RIB.

## Valores

| Código | Descrição do cartório | Descrição do usuário (site) |
|--------|----------------------|----------------------------|
| 1 | Título com reingresso | Exame |
| 2 | Cancelado | Cancelado |
| 3 | Título pronto para retirada | Pronto |
| 4 | Título prenotado | Exame |
| 5 | Exame e cálculo concluído | Pronto |
| 6 | Título Registrado — não disponível para retirada | Registrado |
| 7 | Nota de exigência | Pendente |
| 8 | Título entregue | Entregue |
| 9 | Suscitação de dúvida | Dúvida |
| 10 | Dúvida jugada procedente | Dúvida |
| 11 | Dúvida jugada improcedente | Dúvida |
| 12 | Exame e cálculo protocolado | Exame |
| 13 | Exame e cálculo pronto para a retirada | Pronto |
| 14 | Bloqueio de matrículas | Bloqueio de matrículas |
| 15 | Prorrogado o prazo da prenotação | Prorrogado o prazo da prenotação |
| 16 | Prorrogado o prazo de entrega ou devolução | Prorrogado o prazo de entrega ou devolução |
| 17 | Prorrogado o prazo da Penhora online | Prorrogado o prazo da Penhora online |
| 18 | Notificação | Notificação |
| 19 | Prorrogado o prazo da Notificação | Prorrogado o prazo da Notificação |
| 20 | Processamento | Exame |
| 21 | Aguardando pagamento | Aguardando pagamento |
| 22 | Confirmação da Lavratura | Pendente de confirmação pelo cartório de notas |
| 23 | Retirado pelo interessado | Retirado pelo interessado |

> v2.2 do manual inclui novas situações de acompanhamento registral — manter esta tabela alinhada ao PDF ao atualizar versão.

## Onde é usado

| Contexto | Campo |
|----------|-------|
| Envio de protocolo | `status.status` em [[RFP-01-envio-online]], [[RFP-02-envio-lote]] |
| Consulta / andamento | Retornos **RFP-06** / **RFP-07** (pendente) — às vezes como `codigo` no andamento |

**Tipo no JSON:** `int` (tamanho 11 no manual para `status.status`).

**Formato da descrição:** campo `status.tipoDescricao` — tabela **TBD-06** `ACTipoDescricao` (pendente no índice de domínio).

**Manual bruto:** seção `[TBD-03] - ACCodigoStatus`
