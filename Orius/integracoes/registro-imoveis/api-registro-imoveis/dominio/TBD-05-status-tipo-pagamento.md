---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-05, cobranca, tipo-pagamento]
codigo: TBD-05
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/dominio/00-indice-dominio]]

# [TBD-05] — StatusTipoPagamento

Situação de um **tipo de pagamento** cadastrado pelo cartório na intranet RIB (catálogo usado no campo `tipoPagamento` da cobrança).

> **Não confundir** com [[TBD-01-status-cobranca|StatusCobranca]] (TBD-01), que descreve o status de uma **cobrança** já gerada (aguardando, pago, cancelado).

## Valores

| Código | Descrição |
|--------|-----------|
| 0 | Inativo |
| 1 | Ativo |

## Onde é usado

| Contexto | Campo |
|----------|-------|
| [[RFC-05-listagem-tipos-pagamento]] | `GET /v1/cobranca/tipo/pagamento` — query `status`; item `dados[].status` |
| [[RFC-01-geracao-cobranca]] | Body opcional `tipoPagamento` = **`id`** (tipo **ativo**, `status=1`) |

### Fluxo típico

1. Cartório cadastra tipos de pagamento na intranet (módulo pagamentos).
2. Sistema lista via `GET /v1/cobranca/tipo/pagamento` (RFC-05) filtrando `status=1` (ativo).
3. Ao gerar cobrança ([[RFC-01-geracao-cobranca]] ou `cobranca` em RFP-01/02/03), envia `tipoPagamento: {id}`.

**Tipo no JSON:** `int` (tamanho 1 no manual para `status` do tipo).

## Histórico no manual

- v1.2 (07/2024): campo `tipoPagamento` na cobrança + API de listagem de tipos (RFC-05).

**Manual bruto:** seção `[TBD-05] - StatusTipoPagamento`
