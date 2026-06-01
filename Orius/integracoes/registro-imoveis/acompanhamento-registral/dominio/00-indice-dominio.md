---
tipo: indice
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, tbd]
manual: v2.2
---

> **API:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/00-indice|Acompanhamento registral — índice]]

# Tabelas de domínio (TBD)

Enums e códigos referenciados nos bodies e respostas da API RIB (manual v2.2). Cada nota abaixo espelha uma seção **TBD-xx** do manual oficial.

## Documentadas (protocolo + fila + cobrança base)

| Código | Nome no manual | Nota | Uso principal |
|--------|----------------|------|----------------|
| **TBD-01** | `StatusCobranca` | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-01-status-cobranca]] | Status de cobrança (RFC-02, RFC-03) |
| **TBD-02** | `ACTipoSolicitacao` | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-02-actipo-solicitacao]] | Campo `tipoSolicitacao` (RFP-01, RFP-02, RFP-03) |
| **TBD-03** | `ACCodigoStatus` | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-03-accodigo-status]] | Campo `status.status` do protocolo |
| **TBD-04** | `ACFilaSituacao` | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-04-acfila-situacao]] | Fila de processamento (RFP-02, RFP-03) |

## Pendentes (resto do manual)

| Código | Nome | Uso previsto |
|--------|------|----------------|
| TBD-05 | `StatusTipoPagamento` | Campo `tipoPagamento` em [[RFC-01-geracao-cobranca]] · RFC-05 |
| TBD-06 | `ACTipoDescricao` | `status.tipoDescricao`, histórico |
| TBD-07 … TBD-14 | Atendimento eletrônico | RAE-01 … RAE-03 |

---

## Fonte

- Manual: `api-registro-imoveis/manual-api-acompanhamento-registral-pagamentos-v2.2.md` — seção *Tabelas de Domínio* (págs. 93–99 do PDF v2.2)

Voltar: [[Orius/integracoes/registro-imoveis/acompanhamento-registral/00-indice]]
