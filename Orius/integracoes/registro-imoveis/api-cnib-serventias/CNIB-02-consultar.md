---
tipo: integracao
area: orius
produto: imoveis
central: cnib
tags: [cnib, api, consultar, CNIB-02]
codigo: CNIB-02
manual: v1.0
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/api-cnib-serventias/00-indice]]

# [CNIB-02] — Consultar indisponibilidades

**Objetivo:**

- Verificar situação de parte por **CPF/CNPJ** (`documento`).
- Repetir consulta anterior via **hash** gerado em pesquisa prévia.

---

## Endpoint

| | |
|---|---|
| **Método** | `POST` |
| **URL** | `{base}/api/ordem/consultar` |
| **Auth** | Bearer obrigatório |

`{base}` = `https://stg-serventia-api.onr.org.br` ou `https://serventia-api.onr.org.br`

---

## Corpo da requisição

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `cpf_usuario` | string | Sim | CPF do titular/preposto da serventia na CNIB |
| `documento` | string | Cond. | CPF/CNPJ da parte pesquisada |
| `hash` | string | Cond. | Hash de consulta anterior |

### Exemplo

```json
{
  "cpf_usuario": "12345678900",
  "documento": "98765432100",
  "hash": null
}
```

---

## Validação

| Regra | Detalhe |
|-------|---------|
| `cpf_usuario` | Obrigatório |
| `documento` **ou** `hash` | Pelo menos um deve ser informado |
| `null` | Campos aceitam `null` quando não usados |

---

## Resposta de sucesso (200)

```json
{
  "identifierRequest": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "success": true,
  "message": "string",
  "status": 200,
  "data": {
    "documento": "98765432100",
    "nomeRazao": "Nome da Parte",
    "indisponivel": true,
    "qtdOrdens": 2,
    "protocolos": ["PROT-001", "PROT-002"],
    "dados_usuario": {
      "hash": "abc123",
      "data": "2024-06-24T17:43:25.193Z",
      "nome": "string",
      "documento": "string",
      "organizacao": "string",
      "filtros": "string"
    }
  }
}
```

| Campo em `data` | Descrição |
|-----------------|-----------|
| `indisponivel` | Se há indisponibilidade para o documento/hash |
| `qtdOrdens` | Quantidade de ordens |
| `protocolos` | Lista de protocolos relacionados |
| `dados_usuario` | Metadados quando a busca foi por hash |

---

## Resposta de erro (400)

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

Ver [[dominio/envelope-resposta]].
