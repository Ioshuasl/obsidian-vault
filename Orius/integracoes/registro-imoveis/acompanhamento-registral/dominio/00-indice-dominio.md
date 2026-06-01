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

## Documentadas

| Código | Nome no manual | Nota | Uso principal |
|--------|----------------|------|----------------|
| **TBD-01** | `StatusCobranca` | [[TBD-01-status-cobranca]] | Status da **cobrança** (RFC-01, RFC-02, RFC-03) |
| **TBD-02** | `ACTipoSolicitacao` | [[TBD-02-actipo-solicitacao]] | `tipoSolicitacao` (RFP-01 … RFP-07) |
| **TBD-03** | `ACCodigoStatus` | [[TBD-03-accodigo-status]] | Código da situação do protocolo |
| **TBD-04** | `ACFilaSituacao` | [[TBD-04-acfila-situacao]] | Fila de lote (RFP-02, RFP-03) |
| **TBD-05** | `StatusTipoPagamento` | [[TBD-05-status-tipo-pagamento]] | [[RFC-05-listagem-tipos-pagamento]]; ≠ TBD-01 |
| **TBD-06** | `ACTipoDescricao` | [[TBD-06-actipo-descricao]] | Formato de `status.descricao` / `listaStatus[].descricao` |
| **TBD-07** | `AETipoAtendimento` | [[TBD-07-aetipo-atendimento]] | `tipoAtendimento` (RAE; cód. 90/91 para RI) |
| **TBD-08** | `AESituacao` | [[TBD-08-aesituacao]] | `status` do atendimento eletrônico (RAE) |
| **TBD-09** | `AEAtendimentoPrioritario` | [[TBD-09-aeatendimento-prioritario]] | `atendimentoPrioritario` (RAE) |
| **TBD-10** | `AEFormaAtendimento` | [[TBD-10-aeforma-atendimento]] | `formaAtendimento` (RAE-02, RAE-03) |
| **TBD-11** | `AETipoContato` | [[TBD-11-aetipo-contato]] | `destinoContato` (RAE-02) |
| **TBD-12** | `AEOrigem` | [[TBD-12-aeorigem]] | `interacoes[].origem` (RAE-02) |
| **TBD-13** | `AEAcao` | [[TBD-13-aeacao]] | Body `acao` em RAE-03 |
| **TBD-14** | `AEExtensoesArquivos` | [[TBD-14-aeextensoes-arquivos]] | `arquivos[].tipo` em RAE-03 (slugs) |

> **Atendimento eletrônico:** TBD-07 … TBD-14 cobrem todos os enums AE do manual v2.2.

---

## Fonte

- Manual: `api-registro-imoveis/manual-api-acompanhamento-registral-pagamentos-v2.2.md` — seção *Tabelas de Domínio* (págs. 93–99 do PDF v2.2)

Voltar: [[Orius/integracoes/registro-imoveis/acompanhamento-registral/00-indice]]
