---
operacao: ImportarPrenotacaoIN
plane_work_item_id: 3269fbb7-dbdc-4538-b329-e2e42087585f
plane_sequence_id: 72
plane_key: AUTONR-72
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/72
plane_automation_status: pending
---## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-72** |
| Work item ID | `3269fbb7-dbdc-4538-b329-e2e42087585f` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/72 |
| Automação | `pending` |


# ImportarPrenotacaoIN

Método do WSOficio — **3.11 Intimações**.

## Resumo

| Campo | Valor |
|-------|-------|
| Tipo | Importação |
| Módulo | 3.11 Intimações |
| Operação SOAP | `ImportarPrenotacaoIN` |

## Serviço

- **WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/intimacoes.asmx?wsdl`
- **Endpoint:** `https://hml3-wsoficio.onr.org.br/intimacoes.asmx`
- **WSDL local:** `wsdl/intimacoes.wsdl`

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
| 4 | Chamar `ImportarPrenotacaoIN` passando `Hash` + demais parâmetros |

Implementação: [`lib/onr_hash.py`](../../lib/onr_hash.py) · Helper: `resolve_auth_hash()` em [`lib/onr_acompanhamento.py`](../../lib/onr_acompanhamento.py).

Erros comuns: **45** (hash inválido), **46** (token já usado), **47** (expirado) — ver tabela em [`../hash.md`](../../hash.md).

## Pré-requisitos e validações de negócio

_Documentar regras de negócio (ex.: IDTipoPedido, IDStatus) e linkar [`webservice/tabelas-dominio/`](../../tabelas-dominio/README.md)._

## Ordem do envelope (`oRequest`)

_Listar campos na ordem de `<ImportarPrenotacaoIN_WSReq>` no WSDL local._

## Parâmetros de entrada

| Campo | Descrição | Tipo | Obrigatório | Condicional | Exemplo |
|-------|-----------|------|-------------|-------------|---------|
| `Hash` | Hash para validação da mensagem | string(50 | — | — | — |
| `XMLs` | Array de URLs referentes aos arquivos XML, disponíveis na nuvem, onde: `o` URLXML – URL do arquivo XML | string | — | — | — |

> _Gerado da spec: revisar colunas Obrigatório, Condicional e Exemplo com WSDL + [`TEMPLATE.md`](TEMPLATE.md)._

## Parâmetros de saída

| Campo | Descrição | Tipo | Obrigatório | Condicional | Exemplo |
|-------|-----------|------|-------------|-------------|---------|
| `RETORNO` | Indica se houve erro ou não na execução do método | boolean | — | — | — |
| `CODIGOERRO` | Código do erro | int | — | (se RETORNO = false) | — |
| `ERRODESCRICAO` | Descrição do erro | string(200 | — | (se RETORNO = false) | — |

> _Gerado da spec: revisar colunas Obrigatório, Condicional e Exemplo com WSDL + [`TEMPLATE.md`](TEMPLATE.md)._

## Códigos de erro (amostra)

| Código | Descrição |
|--------|-----------|
| 0 | Erro de sistema. |
| 10 | Request inválido. |
| 11 | O Hash de validação não foi informado. |
| 12 | Nenhum arquivo foi informado. |
| 45 | Hash inválido. |
| 46 | Hash inválido: Hash já utilizado. |
| 47 | Hash inválido: Hash expirado. |
| 60 | Não foi possível desbloquear os arquivos. |
| 502 | Já existe resposta para esse pedido. O status do |

## Implementação neste projeto

- Script: _(ainda não implementado)_

## Referências

- [`webservice/hash.md`](../../hash.md) — geração do `Hash`
- [[[../../00-indice-wsoficio]]](../../00-indice-wsoficio)
- [`webservice/tabelas-dominio/`](../../tabelas-dominio/README.md)
- [`especificacao_wsoficio_dev.md`](../../../especificacao_wsoficio_dev.md) — Envelope de Entrada/Saída `ImportarPrenotacaoIN`
