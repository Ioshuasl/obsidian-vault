---
tipo: integracao
area: orius
produto: imoveis
central: cnib
tags: [cnib, dominio, tipo_matricula]
codigo: TBD-CNIB-02
---

# TBD-CNIB-02 — `tipo_matricula`

Valores inteiros para os endpoints [[../CNIB-04-responder-ordem]] e [[../CNIB-05-responder-lista]].

| ID | Descrição |
|----|-----------|
| 22 | matrícula |
| 24 | inscrição |
| 25 | transcrição |
| 26 | bens |
| 27 | ficha complementar |

## Campos condicionais por tipo

| Campo | Obrigatório quando |
|-------|-------------------|
| `numero_matricula` | `tipo_matricula` ∈ {22, 24, 25, 27} |
| `numero_inscricao` | `tipo_matricula` = 24 |
| `bens_detalhes` | `tipo_matricula` = 26 |
| `bens_parte_cpf_cnpj` | `tipo_matricula` = 26 |
| `bens_parte_nome_razao` | `tipo_matricula` = 26 |

Índice: [[00-indice-dominio]]
