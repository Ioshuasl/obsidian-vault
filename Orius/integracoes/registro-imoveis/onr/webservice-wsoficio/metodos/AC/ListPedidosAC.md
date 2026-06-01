---
operacao: ListPedidosAC
plane_work_item_id: a23600ff-0b91-407d-8da2-98e2c186893d
plane_sequence_id: 58
plane_key: AUTONR-58
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/58
plane_automation_status: pending
---## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-58** |
| Work item ID | `a23600ff-0b91-407d-8da2-98e2c186893d` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/58 |
| Automação | `pending` |


# ListPedidosAC

Método do WSOficio — **3.10 E-Protocolo**.

## Resumo

| Campo | Valor |
|-------|-------|
| Tipo | Listagem |
| Módulo | 3.10 E-Protocolo |
| Operação SOAP | `ListPedidosAC` |

## Serviço

- **WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/eprotocolo.asmx?wsdl`
- **Endpoint:** `https://hml3-wsoficio.onr.org.br/eprotocolo.asmx`
- **WSDL local:** `wsdl/eprotocolo.wsdl`

## Hash de autenticação

Parâmetro obrigatório **`Hash`** no envelope de entrada (`string(50)`).

Cálculo (detalhes em [`../hash.md`](../../hash.md)):

```text
Hash = SHA1( ONR_SERVENTIA_CHAVE + token ).encode('utf-8').hexdigest().upper()
```

| Etapa | Ação |
|-------|------|
| 1 | `LoginUsuarioCertificado` → obter `Tokens` |
| 2 | Escolher token (`ONR_HASH_TOKEN_INDEX`, padrão `0`) |
| 3 | Calcular hash com a chave da serventia (não enviar chave na SOAP) |
| 4 | Chamar `ListPedidosAC` passando `Hash` + demais parâmetros |

Implementação: [`lib/onr_hash.py`](../../lib/onr_hash.py) · Helper: `resolve_auth_hash()` em [`lib/onr_acompanhamento.py`](../../lib/onr_acompanhamento.py).

Erros comuns: **45** (hash inválido), **46** (token já usado), **47** (expirado) — ver tabela em [`../hash.md`](../../hash.md).

## Pré-requisitos e validações de negócio

_Documentar regras de negócio (ex.: IDTipoPedido, IDStatus) e linkar [`webservice/tabelas-dominio/`](../../tabelas-dominio/README.md)._

## Ordem do envelope (`oRequest`)

_Listar campos na ordem de `<ListPedidosAC_WSReq>` no WSDL local._

## Parâmetros de entrada

| Campo | Descrição | Tipo | Obrigatório | Condicional | Exemplo |
|-------|-----------|------|-------------|-------------|---------|
| `Hash` | Hash para validação da mensagem | string(50 | — | — | — |
| `MaxRowPerPage` | Quantidade máxima de registros a serem retornados por página | int | — | — | — |
| `PageNumber` | Página a ser retornada | int | — | — | — |
| `Protocolo` | Protocolo do pedido do Extrato a ser obtido | string(12 | — | — | — |
| — | Instituicao - Nome da instituição solicitante vinculada ao contrato | string | — | — | — |
| `IDTipoServico` | Tipo de Serviço a ser filtrado | int | — | — | — |
| — | IDStatus - Código do Status a ser filtrado. Para retornar todos, informar -1 | int | — | — | — |
| `8 = Reaberto` | Não Concluído; | — | — | — | — |
| — | DataSolicitacaoInicial - Data inicial da solicitação a ser filtrada, formato: aaaa-mm-dd | string | — | — | — |
| — | DataSolicitacaoFinal - Data final da solicitação a ser filtrada, formato: aaaa-mm-dd | string | — | — | — |
| — | NumeroBanco - Número do banco usado para Boleto Sem Registro. Para retornar todos, informar 0 ou -1. | int | — | — | — |

> _Gerado da spec: revisar colunas Obrigatório, Condicional e Exemplo com WSDL + [`TEMPLATE.md`](TEMPLATE.md)._

## Parâmetros de saída

| Campo | Descrição | Tipo | Obrigatório | Condicional | Exemplo |
|-------|-----------|------|-------------|-------------|---------|
| `RETORNO` | Indica se houve erro ou não na execução do método | boolean | — | — | — |
| `CODIGOERRO` | Código do erro | int | — | (se RETORNO = false) | — |
| `ERRODESCRICAO` | Descrição do erro | string(200 | — | (se RETORNO = false) | — |
| `QtdeRegistros` | Quantidade total de registros encontrados | int | — | (se RETORNO = true) | — |
| `QtdePaginas` | Quantidade total de páginas, de acordo com o total de registros encontrados e com a quantidade máxima de registros por página que foi informada no envelope de entrada - MaxRowPerPage - | int | — | (se RETORNO = true) | — |
| `IDPedido` | Código do pedido | int | — | — | — |
| — | Protocolo - Protocolo do pedido | string | — | — | — |
| — | Instituição - Nome da instituição solicitante vinculada ao contrato | string | — | — | — |
| — | IDTipoServico - Tipo de Serviço do contrato. Para uma lista dos valores possíveis abaixo | int | — | — | — |
| `IDStatus` | Código do Status.  Para uma lista dos valores possíveis abaixo | int | — | — | — |

> _Gerado da spec: revisar colunas Obrigatório, Condicional e Exemplo com WSDL + [`TEMPLATE.md`](TEMPLATE.md)._

## Códigos de erro (amostra)

| Código | Descrição |
|--------|-----------|
| 0 | Erro de sistema. |
| 10 | Request inválido. |
| 11 | O Hash de validação não foi informado. |
| 12 | A quantidade de registros por página informada é inválida. A quantidade mínima permitida é 10. |
| 13 | A página informada é inválida. |
| 16 | A data de solicitação inicial é inválida. |

## Implementação neste projeto

- Script: _(ainda não implementado)_

## Referências

- [`webservice/hash.md`](../../hash.md) — geração do `Hash`
- [[[../../00-indice-wsoficio]]](../../00-indice-wsoficio)
- [`webservice/tabelas-dominio/`](../../tabelas-dominio/README.md)
- [`especificacao_wsoficio_dev.md`](../../../especificacao_wsoficio_dev.md) — Envelope de Entrada/Saída `ListPedidosAC`
