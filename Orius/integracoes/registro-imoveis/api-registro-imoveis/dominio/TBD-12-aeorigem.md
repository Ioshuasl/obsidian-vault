---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-12, atendimento-eletronico]
codigo: TBD-12
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/dominio/00-indice-dominio]]

# [TBD-12] — AEOrigem

Identifica **quem originou** cada item do histórico de interações do atendimento eletrônico.

## Valores

| Código | Descrição |
|--------|-----------|
| 0 | Parte |
| 1 | Cartório |
| 2 | Associação |
| 3 | Suporte |
| 4 | VHL |
| 5 | ValideInfo |
| 6 | ONR |
| 7 | Portal de Assinatura |
| 8 | Prefácio |
| 9 | SERVCOM |
| 10 | Jurídico |

## Onde é usado

| Contexto | Campo | Obrigatório |
|----------|-------|-------------|
| [[RAE-02-detalhes-resposta-exigencia]] | `interacoes[].origem` e `interacoes[].origemDescricao` | Sim |

Cada objeto em `interacoes` traz também `data`, `idCartorio`, `mensagem` e opcionalmente `arquivos[]`.

**Tipo no JSON:** `int` (tamanho 4); `origemDescricao` é `string` (100).

> O exemplo do manual mostra `origemDescricao` como `"0 = Parte"` — texto legível; na integração use o **código numérico** em `origem`.

## Integração Orius

| Código | Quem fala | Ação no sistema do cartório |
|--------|-----------|----------------------------|
| **0** | Parte (usuário/solicitante) | Exigência ou resposta do cliente |
| **1** | **Cartório** | Resposta da serventia (após **RAE-03** ou registro na plataforma) |
| 6 | ONR | Mensagem originada na ONR |
| 2, 3, 4–5, 7–10 | Terceiros / parceiros | Tratar conforme regra de negócio |

Ao importar o detalhe (**RAE-02**), montar a linha do tempo ordenando por `data` e rotulando com `origem` / `origemDescricao`.

Relacionado: [[TBD-08-aesituacao]], [[TBD-13-aeacao]], [[TBD-14-aeextensoes-arquivos]] (cadastro de interação em RAE-03).

**Fonte:** `api-registro-imoveis/manual-api-acompanhamento-registral-pagamentos-v2.2.md` — `[TBD-12] - AEOrigem` (pág. 98 do PDF v2.2)
