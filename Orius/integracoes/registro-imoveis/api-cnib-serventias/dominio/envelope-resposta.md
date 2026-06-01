---
tipo: integracao
area: orius
produto: imoveis
central: cnib
tags: [cnib, dominio, resposta]
codigo: TBD-CNIB-01
---

# TBD-CNIB-01 — Envelope de resposta

Padrão retornado pela maioria dos endpoints da API SERVENTIAS (exceto token OAuth2).

## Sucesso (exemplo genérico)

```json
{
  "identifierRequest": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "success": true,
  "message": "Sucesso!",
  "status": 200,
  "data": {}
}
```

`data` pode ser `object`, `string` (ex.: mensagem quando não há ordens) ou estrutura específica do endpoint.

## Erro de validação (400)

```json
{
  "success": false,
  "message": "Requisição inválida",
  "status": 400,
  "notifications": [
    {
      "title": "Campo obrigatório não fornecido",
      "reason": "O campo 'cpf_usuario' é obrigatório."
    }
  ]
}
```

## Token OAuth2 — erro (400)

```json
{
  "error": "invalid_request"
}
```

Índice: [[00-indice-dominio]]
