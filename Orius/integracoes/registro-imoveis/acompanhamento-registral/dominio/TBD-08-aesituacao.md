---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-08, atendimento-eletronico]
codigo: TBD-08
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/00-indice-dominio]]

# [TBD-08] — AESituacao

Situação do **atendimento eletrônico** (ciclo de vida da exigência/interação).

## Valores

| Código | Descrição |
|--------|-----------|
| 1 | Em aberto |
| 2 | Confirmado |
| 3 | Cancelado |
| 4 | Finalizado |
| 5 | Reaberto |
| 6 | Respondido pela Associação |
| 7 | Respondido pela Serventia |
| 8 | Respondido pela Equipe de Suporte |
| 9 | Em análise |
| 10 | Finalizado pelo Solicitante |
| 11 | Respondido pelo Solicitante |
| 12 | Encaminhado |
| 13 | Respondido pela ValideInfo |
| 14 | Respondido pela VHL |
| 15 | Em análise - Programação |
| 16 | Em análise - Suporte |
| 17 | Em análise - Pendente com Terceiros |
| 18 | Respondido pelo Usuário CORI-BR |
| 19 | Respondido pela ONR |
| 20 | Respondido por Portal de Assinatura |
| 21 | Respondido pela Prefácio |
| 22 | Respondido pela SERVCOM |
| 23 | Em análise - GIS |

## Grupos úteis para o cartório

| Grupo | Códigos | Interpretação |
|-------|---------|----------------|
| Aberto / em tratamento | 1, 5, 9, 12, 15–17, 23 | Ainda em fluxo |
| Respondido (vários atores) | 6–8, 11, 13–14, 18–22 | Houve resposta de alguma parte |
| Encerrado | 3, 4, 10 | Cancelado ou finalizado |
| **Serventia (cartório)** | **7** | Resposta registrada pelo cartório |

## Onde é usado

| Contexto | Campo |
|----------|-------|
| **RAE-01** (pendente) | Query `status` (filtro); item `status` + `statusDescricao` |
| **RAE-02** (pendente) | Situação no detalhe |
| **RAE-03** (pendente) | Nova situação ao cadastrar interação |

O manual também envia `statusDescricao` (string, 150) — texto legível alinhado a este enum.

**Tipo no JSON:** `int` (tamanho 3).

**Manual bruto:** `[TBD-08] - AESituacao` (págs. 96–97 do PDF v2.2)
