---
tipo: integracao
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, api, protocolo, exclusao, RFP-04]
codigo: RFP-04
manual: v2.2
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/00-indice]]
> **Autenticação:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFG-01-autenticacao]]

# [RFP-04] — Exclusão de protocolo

**Uma frase:** remover do RIB um protocolo previamente integrado, de forma que **deixe de aparecer nas consultas** — distinto de **atualizar** o mesmo protocolo (reenvio sobrescreve dados sem precisar excluir).

---

## Endpoint

| Método | Caminho | Descrição |
|--------|---------|-----------|
| `DELETE` | `/v1/protocolo/{numeroProtocolo}` | Exclusão do protocolo integrado |

**Produção:** `https://api.registrodeimoveis.org.br/v1/protocolo/{numeroProtocolo}`  
**Homologação:** `https://testes-api.registrodeimoveis.org.br/v1/protocolo/{numeroProtocolo}`

---

## Pré-requisitos

- [x] Token JWT — [[RFG-01-autenticacao]]
- [ ] Identificador do protocolo no path (ver abaixo)
- [ ] Entender impacto em cobranças vinculadas (não são canceladas automaticamente)

---

## Request

### Headers

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| `Authorization` | Sim | `Bearer {access_token}` |

### Path

| Parâmetro | Tipo | Tam. | Obrig. | Descrição |
|-----------|------|------|--------|-----------|
| `numeroProtocolo` | string | 30 | Sim | Identificador do protocolo a excluir |

> **Atenção (manual v2.2):** o parâmetro na URL chama-se `numeroProtocolo`, mas a descrição do PDF menciona “hash do protocolo”. Na prática dos outros endpoints (RFP-05/06), a listagem expõe tanto `protocolo` (número do cartório) quanto `hash` (UUID RIB). **Validar em homologação** qual valor o DELETE aceita — em integrações típicas costuma ser o **número do protocolo** do cartório, coerente com o nome do path.

**Exemplo:**

```http
DELETE /v1/protocolo/2024%2F123456 HTTP/1.1
Host: api.registrodeimoveis.org.br
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

(URL-encode barras e caracteres especiais no número do protocolo.)

---

## Response

### Sucesso

| HTTP | Corpo |
|------|--------|
| **200 OK** | Manual **não** documenta JSON de sucesso — resposta vazia ou sem payload relevante |

### Erro

```json
{
  "codigo": 0,
  "descricao": "string",
  "campos": {}
}
```

| Campo | Obrig. | Descrição |
|-------|--------|-----------|
| `codigo` | Não | Código interno |
| `descricao` | Sim | Mensagem do erro |
| `campos` | Não | Detalhes por campo |

---

## Regras de negócio

| Situação | Comportamento |
|----------|----------------|
| **Atualizar dados** | Reenviar protocolo (RFP-01 / RFP-02) — **sobrescreve** conteúdo e situação; **não** precisa DELETE |
| **Excluir registro** | DELETE — protocolo **some** das consultas (RFP-05/06/07) |
| **Cobrança existente** | **Não** é cancelada automaticamente na exclusão do protocolo |
| **Cancelar cobrança** | Usar **RFC-04** (cancelamento de cobrança) separadamente, se aplicável |

```mermaid
flowchart LR
  A[Quer só corrigir dados?] -->|Sim| B[POST RFP-01 ou lote RFP-02]
  A -->|Não, remover do RIB| C[DELETE RFP-04]
  C --> D{Cobrança ativa?}
  D -->|Sim| E[RFC-04 cancelar cobrança]
  D -->|Não| F[Fim]
```

---

## Relacionado

| Código | Relação |
|--------|---------|
| [[RFP-01-envio-online]] | Cadastro / sobrescrita online |
| [[RFP-02-envio-lote]] | Cadastro em lote |
| [[RFP-03-cobranca-automatizada]] | Cobrança não cancelada no DELETE |
| [[RFP-05-listagem-protocolos]] / [[RFP-06-detalhe-protocolo-v1]] | Consultas após integração |
| RFC-04 | Cancelamento de cobrança (pendente) |

**Manual bruto:** `api-registro-imoveis/manual-api-acompanhamento-registral-pagamentos-v2.2.md` — `[RFP-04]` (pág. 37 do PDF v2.2)

---

## Histórico desta nota

| Data | Alteração |
|------|-----------|
| 2026-06-01 | Extraído do manual v2.2 |
