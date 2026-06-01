---
tipo: integracao
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, api, cobranca, pagamento, RFC-03]
codigo: RFC-03
manual: v2.2
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/00-indice]]
> **Autenticação:** [[RFG-01-autenticacao]]
> **Gerar / listar:** [[RFC-01-geracao-cobranca]] · [[RFC-02-listagem-cobrancas]]
> **Cancelar:** [[RFC-04-cancelamento-cobranca]]

# [RFC-03] — Detalhes da cobrança

**Uma frase:** consultar **todos os dados** de uma cobrança pelo `hash` — URL de pagamento (PIX/boleto), pagador, serviços, devoluções PIX e cobrança vinculada.

Mesmo endpoint usado em [[RFP-06-detalhe-protocolo-v1]] e [[RFP-07-detalhe-protocolo-v2]] (`hashCobranca` do protocolo); esta nota é a referência **completa** do recurso cobrança.

---

## Pré-requisitos

- [x] Token JWT — [[RFG-01-autenticacao]]
- [ ] `hash` da cobrança ([[RFC-01-geracao-cobranca]], [[RFC-02-listagem-cobrancas]], ou `hashCobranca` do protocolo)
- [ ] Módulo de pagamentos ativo — [manual-modulo-pagamentos](https://www.registrodeimoveis.org.br/manual-modulo-pagamentos)

---

## Endpoint

| Método | Caminho | Descrição |
|--------|---------|-----------|
| `GET` | `/v1/cobranca/{hashCobranca}` | Detalhamento da cobrança |

**Produção:** `https://api.registrodeimoveis.org.br/v1/cobranca/{hashCobranca}`  
**Homologação:** `https://testes-api.registrodeimoveis.org.br/v1/cobranca/{hashCobranca}`

### Path

| Parâmetro | Tipo | Tam. | Obrig. | Descrição |
|-----------|------|------|--------|-----------|
| `hashCobranca` | string | 40* | Sim | UUID da cobrança (*manual path; resposta usa tam. 36) |

### Headers

| Campo | Obrigatório |
|-------|-------------|
| `Authorization` | Sim — `Bearer {access_token}` |

**Sem body** (GET).

---

## Response de sucesso

```json
{
  "hash": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "status": 0,
  "dataStatus": "2024-08-04",
  "dataGeracao": "2024-08-04",
  "url": "https://…",
  "valorTotal": 100000,
  "tipoCobranca": "PIX",
  "dataVencimento": "2024-08-15",
  "observacao": "string",
  "identificadorCliente": "ORIUS-8842",
  "dadosPagador": {
    "nome": "João Pagador",
    "documento": "98765432100",
    "email": "joao@exemplo.com",
    "telefone": { "ddd": 11, "numero": 987654321 },
    "endereco": {
      "cep": "01310100",
      "tipoLogradouro": "Avenida",
      "logradouro": "Paulista",
      "bairro": "Bela Vista",
      "cidade": "São Paulo",
      "estado": "SP"
    }
  },
  "servicos": [
    { "codigo": 2024123456, "valor": 100000 }
  ],
  "devolucoes": [
    {
      "hash": "uuid-devolucao",
      "status": 0,
      "valor": 50000,
      "dataCadastro": "2025-01-29T20:10:55",
      "dataAtualizacao": "2025-01-29T20:10:55"
    }
  ],
  "pagamentoVinculado": { }
}
```

### Campos raiz

| Campo | Tam. | Obrig. | Descrição |
|-------|------|--------|-----------|
| `hash` | 36 | Sim | UUID da cobrança |
| `status` | 11 | Sim | [[dominio/TBD-01-status-cobranca]] |
| `dataStatus` | 10 | Sim | Data da situação |
| `dataGeracao` | 10 | Sim | Data de geração |
| `url` | — | Sim | Link boleto/PIX |
| `valorTotal` | — | Sim | Valor inteiro (R$ 100,00 → `100000`) |
| `tipoCobranca` | 10 | Sim | `PIX` ou `BOLETO` |
| `dataVencimento` | 10 | Sim | Vencimento |
| `observacao` | 150 | Não | Observação (até 150 caracteres no detalhe) |
| `identificadorCliente` | 100 | Não | ID do sistema do cartório |
| `dadosPagador` | — | Sim | Pagador completo |
| `servicos` | — | Sim | Itens cobrados |
| `devolucoes` | — | Não | Devoluções PIX solicitadas (v1.4+) |
| `pagamentoVinculado` | — | Não | Cobrança relacionada (estrutura espelhada) |

> Na **criação** ([[RFC-01-geracao-cobranca]]), a resposta inclui também `qrcode` (PIX); o detalhe RFC-03 documenta `url` para acesso.

### `dadosPagador` / `servicos[]`

Igual [[RFC-01-geracao-cobranca#Request]] — pagador com endereço obrigatório; `servicos[].codigo` + `servicos[].valor`.

### `devolucoes[]`

| Campo | Obrig. | Descrição |
|-------|--------|-----------|
| `hash` | Sim | UUID da operação de devolução |
| `status` | Sim | Situação da devolução (enum não nomeado no manual — ver RFC-06) |
| `valor` | Sim | Valor devolvido (formato inteiro) |
| `dataCadastro` | Sim | Solicitação (`DateTime`) |
| `dataAtualizacao` | Sim | Última atualização |

Solicitar devolução: **RFC-06** (pendente).

### `pagamentoVinculado`

Objeto opcional com a **mesma forma** da cobrança principal (hash, status, pagador, servicos, devolucoes, etc.) — usado quando há vínculo entre cobranças (ex.: listagem resumida em [[RFC-02-listagem-cobrancas]]).

---

## Response de erro

Padrão: `codigo`, `descricao`, `campos`.

---

## RFC-03 vs RFC-02

| | RFC-02 (lista) | RFC-03 (detalhe) |
|--|----------------|------------------|
| Dados | Resumo + `pagamentoVinculado` parcial | Completo + `devolucoes` + `identificadorCliente` |
| Pagador / serviços | Não | Sim |
| Uso | Painéis, filtros | Tela de detalhe, conciliação |

---

## Relacionado

| Código | Relação |
|--------|---------|
| [[RFC-04-cancelamento-cobranca]] | `status` → `2` (cancelado) no portal RIB |
| [[RFP-06-detalhe-protocolo-v1]] / [[RFP-07-detalhe-protocolo-v2]] | Origem do `hashCobranca` |
| [[dominio/TBD-01-status-cobranca]] | Enum `status` |

**Manual bruto:** `[RFC-03]` (págs. 71–77 do PDF v2.2)

---

## Histórico desta nota

| Data | Alteração |
|------|-----------|
| 2026-06-01 | Extraído do manual v2.2 |
