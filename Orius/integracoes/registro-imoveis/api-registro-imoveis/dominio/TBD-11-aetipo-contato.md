---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-11, atendimento-eletronico]
codigo: TBD-11
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/dominio/00-indice-dominio]]

# [TBD-11] — AETipoContato

Classifica o **destino/tipo do contato** no atendimento eletrônico (quem recebe ou trata o contato na plataforma).

## Valores

| Código | Descrição |
|--------|-----------|
| 1 | Associação |
| 2 | Serventia |
| 3 | Outros |

## Onde é usado

| Contexto | Campo | Obrigatório |
|----------|-------|-------------|
| [[RAE-02-detalhes-resposta-exigencia]] | `destinoContato` no detalhe | Não |

Não consta na listagem **RAE-01** nem no body **RAE-03**.

**Tipo no JSON:** `int` (tamanho 3 no manual).

## Integração Orius

| Código | Interpretação para cartório |
|--------|----------------------------|
| **2** | Contato direcionado à **serventia** (cartório) — caso principal na importação de exigências |
| 1 | Encaminhado à associação (CORI/regional) |
| 3 | Demais destinos |

Útil para filtrar no sistema interno apenas atendimentos cuja serventia é o destino (`destinoContato = 2`).

Relacionado: [[TBD-07-aetipo-atendimento]] (`tipoAtendimento` 91 = resposta de exigência), [[TBD-08-aesituacao]].

**Fonte:** `api-registro-imoveis/manual-api-acompanhamento-registral-pagamentos-v2.2.md` — `[TBD-11] - AETipoContato` (pág. 98 do PDF v2.2)
