---
tipo: integracao
area: orius
produto: imoveis
central: cnib
tags: [cnib, api, responder, CNIB-04]
codigo: CNIB-04
manual: v1.0
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/api-cnib-serventias/00-indice]]
> **Domínio:** [[dominio/tipo-matricula]]

# [CNIB-04] — Responder ordem de indisponibilidade

**Objetivo:** registrar a resposta da serventia a uma **ordem de indisponibilidade** (vincular matrícula/bem à ordem pelo protocolo).

---

## Endpoint

| | |
|---|---|
| **Método** | `POST` |
| **URL** | `{base}/api/ordem/responder` |
| **Auth** | Bearer obrigatório |

---

## Corpo da requisição

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `cpf_usuario` | string | Sim | CPF titular/preposto na CNIB |
| `protocolo` | string | Sim* | Número do protocolo da ordem |
| `tipo_matricula` | integer | Sim* | ID do tipo de bem — [[dominio/tipo-matricula]] |
| `cpf_cnpj` | string | Sim | Documento da parte indisponibilizada |
| `numero_matricula` | string | Cond. | Matrícula/inscrição/transcrição |
| `numero_inscricao` | string | Cond. | Inscrição (tipo 24) |
| `bens_detalhes` | string | Cond. | Detalhe do bem (tipo 26) |
| `bens_parte_cpf_cnpj` | string | Cond. | CPF/CNPJ da parte do bem (tipo 26) |
| `bens_parte_nome_razao` | string | Cond. | Nome/razão (tipo 26) |

\* Manual v2 resume `protocolo` e `tipo_matricula` como opcionais na tabela; manual v1 e operação exigem protocolo para responder — **informar sempre na prática**.

### Exemplo

```json
{
  "cpf_usuario": "12345678900",
  "protocolo": "PROT-2025-001",
  "tipo_matricula": 22,
  "cpf_cnpj": "98765432100",
  "numero_matricula": "12345",
  "numero_inscricao": null,
  "bens_detalhes": null,
  "bens_parte_cpf_cnpj": null,
  "bens_parte_nome_razao": null
}
```

---

## Validação

| Campo | Regra |
|-------|-------|
| `cpf_usuario` | Obrigatório |
| `cpf_cnpj` | Obrigatório |
| `numero_matricula` | Obrigatório se `tipo_matricula` ∈ {22, 24, 25, 27} |
| `numero_inscricao` | Obrigatório se `tipo_matricula` = 24 |
| `bens_detalhes`, `bens_parte_cpf_cnpj`, `bens_parte_nome_razao` | Obrigatórios se `tipo_matricula` = 26 |

> Campo correto: `bens_detalhes` (Swagger antigo às vezes lista `bens_detalhe`).

---

## Resposta de sucesso (200)

```json
{
  "identifierRequest": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "success": true,
  "message": "string",
  "status": 200,
  "data": "Confirmação ou identificador da operação"
}
```

---

## Resposta de erro (400)

```json
{
  "success": false,
  "message": "string",
  "status": 400,
  "notifications": [
    {
      "title": "string",
      "reason": "string"
    }
  ]
}
```

---

## Atores

Principalmente **Registros de Imóveis**; também RC e Notas conforme manual ONR.
