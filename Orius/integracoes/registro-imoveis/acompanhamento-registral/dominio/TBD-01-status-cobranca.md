---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-01, cobranca]
codigo: TBD-01
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/00-indice-dominio]]

# [TBD-01] — StatusCobranca

Situação de uma **cobrança** gerada no RIB (PIX, boleto, etc.).

## Valores

| Código | Descrição |
|--------|-----------|
| 0 | Aguardando pagamento |
| 1 | Pagamento confirmado |
| 2 | Pagamento cancelado |

## Onde é usado

| Contexto | Campo / API |
|----------|-------------|
| Listagem de cobranças | Query `status` em [[RFC-02-listagem-cobrancas]] |
| Geração / retorno | `status` em [[RFC-01-geracao-cobranca]] |
| Detalhe da cobrança | **RFC-03** (pendente) · `GET /v1/cobranca/{hash}` em [[RFP-06-detalhe-protocolo-v1]] |
| Filtros e painéis | [[Orius/integracoes/registro-imoveis/rib-cobranca]] |

## Relacionado

- Geração: [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFP-01-envio-online#Objeto `cobranca`]], [[RFP-03-cobranca-automatizada]], RFC-01 (pendente)
- Cancelamento: RFC-04 (pendente) — código `2` após cancelar

**Manual bruto:** seção `[TBD-01] - StatusCobranca`
