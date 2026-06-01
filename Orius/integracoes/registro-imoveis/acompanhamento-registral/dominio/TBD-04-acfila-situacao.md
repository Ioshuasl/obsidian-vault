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

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/00-indice-dominio]]

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

**Manual bruto:** seção `[TBD-04] - ACFilaSituacao`
