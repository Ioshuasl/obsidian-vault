---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-13, atendimento-eletronico]
codigo: TBD-13
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/dominio/00-indice-dominio]]

# [TBD-13] — AEAcao

Define a **ação** que o cartório (ou outro ator) executa ao registrar uma nova interação no atendimento eletrônico.

## Valores

| Código | Descrição |
|--------|-----------|
| 0 | Informativo / mensagem |
| 1 | Confirmação de Contato |
| 2 | Cancelamento de Contato |
| 3 | Finalização de Contato |
| 4 | Reabertura de Contato |

## Onde é usado

| Contexto | Campo | Obrigatório |
|----------|-------|-------------|
| [[RAE-03-cadastro-interacao]] | `acao` no body | **Sim** |

Acompanha `mensagem` (obrigatória), `formaAtendimento` (opcional, [[TBD-10-aeforma-atendimento]]) e `arquivos[]` (opcional, [[TBD-14-aeextensoes-arquivos]]).

**Tipo no JSON:** `int` (tamanho 2 no manual).

> O exemplo do manual ilustra `acao` como texto (`"0 = Informativo / mensagem"`); na requisição real envie o **número** (`0`, `1`, …).

## Integração Orius — exigências (RAE-03)

O manual descreve **RAE-03** para o cartório informar que a exigência foi **recebida e está em análise**:

| Código | Uso típico |
|--------|------------|
| **0** | Mensagem informativa no histórico (cenário principal para “em análise”) |
| 1 | Confirmar contato/atendimento |
| 2 | Cancelar |
| 3 | Finalizar o atendimento |
| 4 | Reabrir após encerramento |

Após o POST, a nova linha em `interacoes` deve refletir `origem` = cartório ([[TBD-12-aeorigem]], código `1`) e a situação global pode mudar conforme [[TBD-08-aesituacao]].

Relacionado: [[TBD-07-aetipo-atendimento]] (`tipoAtendimento` 91), [[TBD-10-aeforma-atendimento]].

**Fonte:** `api-registro-imoveis/manual-api-api-registro-imoveis-pagamentos-v2.2.md` — `[TBD-13] - AEAcao` (pág. 99 do PDF v2.2)
