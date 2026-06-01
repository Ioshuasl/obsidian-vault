---
tipo: api-endpoint
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, api, imports, erros]
status: revisado
operacao: CCN_ImportsErros
---

> **Consulta status:** [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-get]] · **Validações XML:** [[Orius/integracoes/tabelionato-notas/ccn/xml/validacoes-xml]]

# CCN — `GET /api/imports/{id}/erros`

Retorna somente os registros com erro de uma importação.

| | |
|---|---|
| **Método** | `GET` |
| **Path** | `/api/imports/{id}/erros` |
| **Parâmetro** | `id` — UUID da importação |

**URL (HML):** `https://pessoas-hml.e-notariado.org.br/api/imports/{id}/erros`

## Quando usar

- Após `GET /api/imports/{id}` indicar `failedRecords` > 0
- Para diagnóstico de rejeição por pessoa (CPF, campos obrigatórios, formato Base64, etc.)

## Relacionado

Estrutura esperada do XML: [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]] · Exemplo válido: [[Orius/integracoes/tabelionato-notas/ccn/xml/exemplo-xml]]

Consultar Swagger para o schema exato da lista de erros retornada pela API.
