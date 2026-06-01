---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-10, atendimento-eletronico]
codigo: TBD-10
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/dominio/00-indice-dominio]]

# [TBD-10] — AEFormaAtendimento

Indica se o atendimento eletrônico ocorreu de forma **presencial** ou **virtual**.

## Valores

| Código | Descrição |
|--------|-----------|
| 1 | Presencial |
| 2 | Virtual |

## Onde é usado

| Contexto | Campo | Obrigatório |
|----------|-------|-------------|
| [[RAE-02-detalhes-resposta-exigencia]] | `formaAtendimento` no detalhe | Não |
| [[RAE-03-cadastro-interacao]] | `formaAtendimento` no body | Não |

Não aparece na listagem **RAE-01** (`GET /v1/atendimento/eletronico`).

**Tipo no JSON:** `int` (tamanho 1 no detalhe RAE-02; tamanho 2 no body RAE-03, conforme manual).

## Integração Orius

| Valor | Uso típico no cartório |
|-------|------------------------|
| `1` | Exigência tratada presencialmente no balcão |
| `2` | Resposta/análise apenas pelo canal digital (acompanhamento registral) |

Ao cadastrar interação (**RAE-03**), informar `formaAtendimento` quando o fluxo interno distinguir presencial × virtual.

Relacionado: [[TBD-07-aetipo-atendimento]], [[TBD-08-aesituacao]], [[TBD-13-aeacao]] (mesmo POST em RAE-03).

**Fonte:** `api-registro-imoveis/manual-api-api-registro-imoveis-pagamentos-v2.2.md` — `[TBD-10] - AEFormaAtendimento` (pág. 98 do PDF v2.2)
