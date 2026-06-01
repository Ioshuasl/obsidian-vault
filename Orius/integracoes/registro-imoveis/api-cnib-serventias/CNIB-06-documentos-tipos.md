---
tipo: integracao
area: orius
produto: imoveis
central: cnib
tags: [cnib, api, documentos, dominio, CNIB-06]
codigo: CNIB-06
manual: v2.0
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/api-cnib-serventias/00-indice]]

# [CNIB-06] — Tipos de documento / status da ordem

**Objetivo:** obter códigos de domínio auxiliares (tipos ou status de documento/ordem) para uso nas demais operações. Documentado na **API v2**; não consta no manual v1.0.

---

## Endpoint

| | |
|---|---|
| **Método** | `POST` |
| **URL** | `{base}/api/documentos/tipos` |
| **Auth** | Bearer obrigatório |
| **Body** | Sem corpo (ou vazio `{}` — confirmar no Swagger) |

---

## Corpo da requisição

Sem parâmetros obrigatórios no manual oficial. Enviar `POST` com header Bearer; se a API exigir body, usar `{}`.

---

## Validação

- Token válido.
- Sem campos de negócio no payload.

---

## Resposta de sucesso (200)

Estrutura conforme Swagger (migrado do portal):

```json
{
  "identifierRequest": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "success": true,
  "message": "string",
  "status": 200,
  "data": {
    "id": 0,
    "descricao": "string"
  }
}
```

> Em produção, `data` pode ser **lista** de itens `{ id, descricao }` — validar resposta real no Swagger ou ambiente STG.

---

## Uso sugerido

- Popular combos ou validar `orderStatusCode` / tipos retornados em [[CNIB-03-visualizar-ordens]].
- Não confundir com [[dominio/tipo-matricula]] (`tipo_matricula` nos endpoints de **responder**).

---

## Relacionado

| Domínio | Nota |
|---------|------|
| `tipo_matricula` (bens) | [[dominio/tipo-matricula]] |
| Envelope HTTP | [[dominio/envelope-resposta]] |
