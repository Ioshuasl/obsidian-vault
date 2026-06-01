---
tipo: integracao
area: orius
produto: imoveis
central: cnib
tags: [cnib, api, responder, lista, CNIB-05]
codigo: CNIB-05
manual: v1.0
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/api-cnib-serventias/00-indice]]
> **Item único:** [[CNIB-04-responder-ordem]] · **Domínio:** [[dominio/tipo-matricula]]

# [CNIB-05] — Responder lista de ordens

**Objetivo:** responder **várias** ordens de indisponibilidade em uma única requisição (array de bens/ordens).

---

## Endpoint

| | |
|---|---|
| **Método** | `POST` |
| **URL** | `{base}/api/ordem/responder/lista` |
| **Auth** | Bearer obrigatório |

---

## Corpo da requisição

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `cpf_usuario` | string | Sim | CPF titular/preposto na CNIB |
| `bens` | array | Sim | Lista de objetos com mesma estrutura do [[CNIB-04-responder-ordem]] |

### Campos de cada item em `bens[]`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `protocolo` | string | Protocolo da ordem |
| `tipo_matricula` | integer | [[dominio/tipo-matricula]] |
| `cpf_cnpj` | string | Documento da parte |
| `numero_matricula` | string | Condicional por tipo |
| `numero_inscricao` | string | Condicional por tipo |
| `bens_detalhes` | string | Condicional por tipo |
| `bens_parte_cpf_cnpj` | string | Condicional por tipo |
| `bens_parte_nome_razao` | string | Condicional por tipo |

### Exemplo

```json
{
  "cpf_usuario": "12345678900",
  "bens": [
    {
      "protocolo": "PROT-2025-001",
      "tipo_matricula": 22,
      "cpf_cnpj": "98765432100",
      "numero_matricula": "12345",
      "numero_inscricao": null,
      "bens_detalhes": null,
      "bens_parte_cpf_cnpj": null,
      "bens_parte_nome_razao": null
    },
    {
      "protocolo": "PROT-2025-002",
      "tipo_matricula": 26,
      "cpf_cnpj": "11122233344",
      "numero_matricula": null,
      "numero_inscricao": null,
      "bens_detalhes": "Veículo placa ABC1D23",
      "bens_parte_cpf_cnpj": "11122233344",
      "bens_parte_nome_razao": "João da Silva"
    }
  ]
}
```

---

## Validação

- `cpf_usuario` obrigatório.
- Cada elemento de `bens[]` segue as mesmas regras condicionais de [[CNIB-04-responder-ordem#Validação]].

---

## Resposta de sucesso (200)

```json
{
  "identifierRequest": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "success": true,
  "message": "string",
  "status": 200,
  "data": {}
}
```

`data` pode ser objeto vazio ou string de confirmação conforme versão da API.

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
