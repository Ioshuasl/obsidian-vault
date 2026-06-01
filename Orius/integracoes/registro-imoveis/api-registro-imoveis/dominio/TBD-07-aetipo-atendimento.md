---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-07, atendimento-eletronico]
codigo: TBD-07
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/dominio/00-indice-dominio]]

# [TBD-07] — AETipoAtendimento

Classifica o **tipo/canal** do atendimento eletrônico (exigências, contatos, help desk).

## Valores

| Código | Descrição |
|--------|-----------|
| 1 | Contato |
| 2 | Agendamento de atendimento |
| 3 | Institucional |
| 4 | Intranet |
| 5 | Formulário Interno Intranet |
| 6 | WhatsApp |
| 7 | Ligação |
| 8 | E-mail |
| 9 | Help Desk |
| 10 | LGPD |
| **90** | **Acompanhamento Registral** |
| **91** | **Resposta de exigência** |

> Para integração de **cartório / RI**, os códigos mais relevantes costumam ser **90** e **91**.

## Onde é usado

| Contexto | Campo |
|----------|-------|
| [[RAE-01-listagem-resposta-exigencia]] | Query `tipoAtendimento` (filtro); retorno `tipoAtendimento` + `tipoAtendimentoDescricao` |
| [[RAE-02-detalhes-resposta-exigencia]] | Detalhe do atendimento |

**Tipo no JSON:** `int` (tamanho 3 no manual).

## Integração Orius

| Código | Uso sugerido |
|--------|----------------|
| `91` | Importar/listar **respostas de exigência** no sistema do cartório |
| `90` | Demais fluxos ligados ao acompanhamento registral na plataforma |

**Manual bruto:** `api-registro-imoveis/manual-api-acompanhamento-registral-pagamentos-v2.2.md` — `[TBD-07] - AETipoAtendimento` (pág. 96 do PDF v2.2)
