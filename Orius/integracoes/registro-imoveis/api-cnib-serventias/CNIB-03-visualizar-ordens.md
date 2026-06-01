---
tipo: integracao
area: orius
produto: imoveis
central: cnib
tags: [cnib, api, visualizar, v2, CNIB-03]
codigo: CNIB-03
manual: v2.0
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/api-cnib-serventias/00-indice]]

# [CNIB-03] — Visualizar ordens de indisponibilidade

**Objetivo:**

- Detalhar ordem por **protocolo**.
- Listar lote de ordens por **período** (`data_inicial` / `data_final`).
- Obter ordens **não visualizadas** pela serventia (`ordens_visualizadas: false`).
- Paginar resultados (máx. **500** por página).

---

## Endpoint (atual — usar este)

| | |
|---|---|
| **Método** | `POST` |
| **URL** | `{base}/api/v2/ordem/visualizar` |
| **Auth** | Bearer obrigatório |

---

## Corpo da requisição

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `cpf_usuario` | string | Sim | CPF titular/preposto na CNIB |
| `ordens_visualizadas` | boolean | Sim | `true` = inclui já vistas; `false` = só pendentes de visualização |
| `protocol` | string \| null | Cond. | Protocolo específico; `null` **sem aspas** se consulta por período |
| `data_inicial` | string \| null | Cond. | Início do período (`YYYY-MM-DD`); `null` se há `protocol` |
| `data_final` | string \| null | Cond. | Fim do período; `null` se há `protocol` |
| `pagina_inicial` | integer | Sim | Índice da página (default `0`) |
| `tamanho_pagina` | integer | Sim | Tamanho da página (default e máx. **500**) |
| `proxima_pagina` | boolean | Sim | Controle de paginação |

### Exemplo — por período

```json
{
  "cpf_usuario": "12345678900",
  "ordens_visualizadas": false,
  "protocol": null,
  "data_inicial": "2025-01-01",
  "data_final": "2025-11-25",
  "pagina_inicial": 0,
  "tamanho_pagina": 500,
  "proxima_pagina": false
}
```

### Exemplo — por protocolo

```json
{
  "cpf_usuario": "12345678900",
  "ordens_visualizadas": true,
  "protocol": "PROT-2025-001",
  "data_inicial": null,
  "data_final": null,
  "pagina_inicial": 0,
  "tamanho_pagina": 500,
  "proxima_pagina": false
}
```

### Exemplo — novas ordens (sem período/protocolo)

```json
{
  "cpf_usuario": "12345678900",
  "ordens_visualizadas": false,
  "protocol": null,
  "data_inicial": null,
  "data_final": null,
  "pagina_inicial": 0,
  "tamanho_pagina": 500,
  "proxima_pagina": false
}
```

---

## Validação

| Regra | Detalhe |
|-------|---------|
| `cpf_usuario` | Não nulo nem vazio |
| `ordens_visualizadas` | Apenas `true` ou `false` |
| `protocol` vs datas | Mutuamente exclusivos conforme modo de consulta |
| `null` | Enviar **sem aspas** — `"null"` ou `"string"` geram erro |
| Paginação | `tamanho_pagina` ≤ 500 |
| Período (legado v1) | No endpoint antigo, intervalo máximo de **30 dias** entre datas |

---

## Resposta de sucesso (200)

Estrutura v2 (Swagger / manual atual):

```json
{
  "identifierRequest": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "success": true,
  "message": "Sucesso!",
  "status": 200,
  "data": {
    "ordens": [
      {
        "id": 0,
        "orderCode": 0,
        "protocol": "PROT-2025-001",
        "cancellationProtocol": null,
        "processNumber": "0001234-56.2025.8.26.0100",
        "processName": "string",
        "organizationLabelComplete": "string",
        "orderStatusCode": 0,
        "orderStatusLabel": "string",
        "organizationLabel": "string",
        "createdOn": "2025-11-28T12:00:00Z",
        "cancellationCreatedOn": null,
        "orderApprovedName": "string",
        "email": "string",
        "phone": "string",
        "visualized": false,
        "isPriorityOrder": false,
        "isSecretJustice": false,
        "parties": [
          {
            "documentNumber": "12345678900",
            "personName": "Nome da Parte",
            "properties": [
              {
                "documentTypeCode": 22,
                "documentNumber": "12345",
                "cpF_CNPJ": "12345678900",
                "details": "string",
                "identification": "matrícula 12345",
                "restrictionStatusCode": 0
              }
            ]
          }
        ],
        "ordersOrigin": []
      }
    ],
    "paginação": {
      "pageSize": 500,
      "totalRows": 1200,
      "totalPages": 3,
      "pageIndex": 0,
      "pageForward": true,
      "totalRowsShowUser": 500
    }
  }
}
```

### Sem ordens para os critérios

`data` pode ser string (padrão documentado na v1):

```json
{
  "identifierRequest": "string",
  "success": true,
  "message": "Sucesso!",
  "status": 200,
  "data": "Não há ordens para os critérios informados."
}
```

---

## Tipos de ordem na resposta (referência v1)

No endpoint legado, o campo `status` distinguia fluxos. Útil para interpretar integrações antigas:

| `status` (v1) | Significado |
|---------------|-------------|
| `INDISPONIBILIDADE` | Indisponibilidade genérica (IA) |
| Cancelamento | TA (total), PA (pessoa), MA (matrícula), BA (outros bens) |

A v2 expõe códigos/labels em `orderStatusCode`, `orderStatusLabel`, `cancellationType`, etc.

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

## Endpoint legado v1

| | |
|---|---|
| **URL** | `POST {base}/api/ordem/visualizar` |
| **Status** | Compatibilidade; **não usar em código novo** |

| Aspecto | v1 legado | **v2 (esta nota)** |
|---------|-----------|-------------------|
| Paginação | Até **1000** ordens/chamada; repetir até `totalordensrestantes` = 0 | `pagina_inicial`, `tamanho_pagina` (máx. 500), `proxima_pagina` |
| Payload | Sem campos de página | Paginação obrigatória |
| Resposta | `protocoloindisponibilidade`, `partes`, `totalordensrestantes` | `ordens[]` + objeto `paginação` |
| Datas | Formato `dd-mm-aaaa`, máx. 30 dias | `YYYY-MM-DD` (validar no Swagger) |

### Payload legado (referência)

```json
{
  "cpf_usuario": "string",
  "ordens_visualizadas": false,
  "protocol": "string",
  "data_inicial": "string",
  "data_final": "string"
}
```

### Resposta legado — ordens pendentes (trecho)

```json
{
  "success": true,
  "status": 200,
  "data": {
    "ordens": {
      "totalordens": 1000,
      "orders": [
        {
          "status": "INDISPONIBILIDADE",
          "protocoloindisponibilidade": "string",
          "numeroprocesso": "string",
          "datapedido": "2025-01-01T12:00:00Z",
          "partes": [
            {
              "cpfcnpj": "string",
              "nomerazao": "string",
              "matricula": []
            }
          ]
        }
      ]
    },
    "totalordensrestantes": 500
  }
}
```
