---
tipo: integracao
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, api, cobranca, pagamento, RFC-01]
codigo: RFC-01
manual: v2.2
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/00-indice]]
> **Autenticação:** [[RFG-01-autenticacao]]
> **Listagem / detalhe:** [[RFC-02-listagem-cobrancas]] · [[RFC-03-detalhe-cobranca]]
> **Nota legada:** [[Orius/integracoes/registro-imoveis/rib-cobranca]]

# [RFC-01] — Geração de cobrança

**Uma frase:** criar uma **cobrança avulsa** (PIX ou boleto) direto pelo sistema do cartório, sem abrir a intranet RIB — opcionalmente com **webhook** para baixa automática quando o pagamento mudar de situação.

Diferente de cobrança **no protocolo**: [[RFP-01-envio-online#Objeto `cobranca`]], [[RFP-03-cobranca-automatizada]].

---

## Pré-requisitos operacionais

| Requisito | Detalhe |
|-----------|---------|
| **Módulo de pagamentos** | Ativar na intranet RIB |
| Manual | [manual-modulo-pagamentos](https://www.registrodeimoveis.org.br/manual-modulo-pagamentos) |
| **Token** | [[RFG-01-autenticacao]] |
| **tipoPagamento** (opcional) | Código pré-cadastrado — listar em **RFC-05** (pendente) |

---

## Endpoint

| Método | Caminho | Descrição |
|--------|---------|-----------|
| `POST` | `/v1/cobranca` | Geração da cobrança |

**Produção:** `https://api.registrodeimoveis.org.br/v1/cobranca`  
**Homologação:** `https://testes-api.registrodeimoveis.org.br/v1/cobranca`

---

## Webhook (opcional)

Mesmas regras de [[RFP-03-cobranca-automatizada#Webhook de pagamento]]:

- Chamado na atualização da situação do pagamento (confirmação, cancelamento, etc.)
- **3 tentativas**; após falhas, sem nova notificação

---

## Request

### Headers

| Campo | Obrigatório |
|-------|-------------|
| `Authorization` | Sim — `Bearer {access_token}` |
| `Content-Type` | Sim — `application/json` |

### Body — raiz

| Campo | Tipo | Tam. | Obrig. | Descrição |
|-------|------|------|--------|-----------|
| `tipoCobranca` | string | 10 | Sim | `PIX` ou `BOLETO` |
| `dataVencimento` | date | 10 | Sim | `YYYY-MM-DD` |
| `observacao` | string | 30 | Não | Texto na cobrança |
| `identificadorCliente` | string | 100 | Não | ID livre do cartório/sistema |
| `tipoPagamento` | int | 11 | Não | `id` do tipo ativo (RFC-05) — status do tipo: [[dominio/TBD-05-status-tipo-pagamento]] |
| `dadosPagador` | object | — | Sim | Pagador |
| `servicos` | array | — | Sim | Itens cobrados |
| `webhook` | object | — | Não | Callback de status |

### `dadosPagador`

| Campo | Tam. | Obrig. |
|-------|------|--------|
| `nome` | 60 | Sim |
| `documento` | 14 | Sim (CPF/CNPJ, só números) |
| `email` | 150 | Sim |
| `telefone` | object | Não — `ddd` (3), `numero` (10) |
| `endereco` | object | Sim |

**`endereco`:** `cep` (8), `tipoLogradouro` (16), `logradouro` (150), `numero` (10), `bairro` (100), `cidade` (100), `estado` (2, UF).

### `servicos[]`

| Campo | Tipo | Obrig. | Descrição |
|-------|------|--------|-----------|
| `codigo` | int | Sim | Código localizador do serviço (número do protocolo, **não** recibo de pré-pagamento) |
| `valor` | int | 10 | Sim | Valor em formato numérico inteiro (ex.: R$ 100,00 → `100000`) |

### `webhook`

| Campo | Obrig. | Descrição |
|-------|--------|-----------|
| `url` | Sim | URL do cartório |
| `metodo` | Sim | `GET` ou `POST` |
| `token` | Não | Segredo enviado na chamada |
| `tipoToken` | Não | `Bearer` ou `Basic` |

### Exemplo

```json
{
  "tipoCobranca": "PIX",
  "dataVencimento": "2024-09-15",
  "observacao": "Emolumentos",
  "identificadorCliente": "ORIUS-PEDIDO-8842",
  "tipoPagamento": 1,
  "dadosPagador": {
    "nome": "João Pagador",
    "documento": "98765432100",
    "email": "joao@exemplo.com",
    "telefone": { "ddd": 11, "numero": 987654321 },
    "endereco": {
      "cep": "01310100",
      "tipoLogradouro": "Avenida",
      "logradouro": "Paulista",
      "numero": "1000",
      "bairro": "Bela Vista",
      "cidade": "São Paulo",
      "estado": "SP"
    }
  },
  "servicos": [
    { "codigo": 2024123456, "valor": 150000 }
  ],
  "webhook": {
    "url": "https://cartorio.exemplo.com/rib/webhook-cobranca",
    "metodo": "POST",
    "token": "segredo",
    "tipoToken": "Bearer"
  }
}
```

---

## Response

### Sucesso

```json
{
  "hash": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "status": 0,
  "dataStatus": "2024-08-04",
  "url": "https://…",
  "valorTotal": 150000,
  "qrcode": "string"
}
```

| Campo | Tam. | Obrig. | Descrição |
|-------|------|--------|-----------|
| `hash` | 36 | Sim | UUID da cobrança — usar em RFC-02/03/04 |
| `status` | 11 | Sim | [[dominio/TBD-01-status-cobranca|StatusCobranca]] |
| `dataStatus` | 10 | Sim | Data da situação |
| `url` | — | Sim | Link de acesso (pagamento/consulta) |
| `valorTotal` | — | Sim | Soma dos serviços (formato inteiro, ver acima) |
| `qrcode` | — | Sim | Imagem/dados do QR Code (**PIX**; manual não diferencia BOLETO) |

### Erro

```json
{
  "codigo": 0,
  "descricao": "string",
  "campos": {}
}
```

---

## Regras de negócio

| Tema | Detalhe |
|------|---------|
| **Avulsa vs protocolo** | RFC-01 não exige `protocolo` no body; vincular no sistema via `identificadorCliente` ou depois RFC-07 |
| **Valores** | Sempre formato numérico “centavos × 1000” conforme exemplos do manual (R$ 100,00 = `100000`) |
| **Consulta** | Resumo em [[RFC-02-listagem-cobrancas]]; completo em [[RFC-03-detalhe-cobranca]] |
| **Cancelamento** | [[RFC-04-cancelamento-cobranca]] |

---

## Relacionado

| Código | Relação |
|--------|---------|
| [[RFC-02-listagem-cobrancas]] | Listar cobranças geradas |
| [[RFP-06-detalhe-protocolo-v1]] | `GET /v1/cobranca/{hash}` no fluxo protocolo |
| [[dominio/TBD-01-status-cobranca]] | Enum `status` |

**Manual bruto:** `[RFC-01]` (págs. 65–68 do PDF v2.2)

---

## Histórico desta nota

| Data | Alteração |
|------|-----------|
| 2026-06-01 | Extraído do manual v2.2 |
