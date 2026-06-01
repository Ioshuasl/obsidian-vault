---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-04, fila, lote]
codigo: TBD-04
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/dominio/00-indice-dominio]]

# [TBD-04] — ACFilaSituacao

Situação do **processamento em fila** após `POST /v1/protocolo/lote` ([[RFP-02-envio-lote]], [[RFP-03-cobranca-automatizada]]).

## Valores

| Código | Descrição |
|--------|-----------|
| 0 | Pendente |
| 1 | Em processamento |
| 2 | Processado com sucesso |
| 3 | Processado com alertas |
| 4 | Processado com erros |

## Onde é usado

| API | Campo |
|-----|-------|
| `GET /v1/fila/processamento/protocolo` | Query `situacao` (filtro); item `dados[].situacao` |
| `GET /v1/fila/processamento/protocolo/{hashFila}` | `situacao`; `historico[].situacao` |

## Integração — quando parar o polling

| `situacao` | Ação sugerida no sistema |
|------------|--------------------------|
| 0, 1 | Continuar consultando a fila |
| 2 | Sucesso — consultar protocolos (RFP-05/06/07) |
| 3 | Sucesso com alertas — revisar `alertas` do POST e detalhe da fila |
| 4 | Erros no processamento — tratar operacionalmente / reenviar lote |

**Tipo no JSON:** `int` (tamanho 1 no manual).

## Relacionado

- [[TBD-03-accodigo-status]] — situação do **protocolo** (após processar fila com sucesso)
- [[RFP-05-listagem-protocolos]] — consultar protocolos integrados
- [[FFP-02-fluxo-processamento-protocolo]] — quando a fila é atualizada (lado plataforma)

**Manual bruto:** `api-registro-imoveis/manual-api-acompanhamento-registral-pagamentos-v2.2.md` — `[TBD-04] - ACFilaSituacao` (pág. 95 do PDF v2.2)
