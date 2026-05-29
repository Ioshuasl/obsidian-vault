---
tipo: tabela-dominio
area: orius
central: onr
protocolo: soap
fonte_repositorio: C:\Users\kenio\soap-ui test\webservice-onr\tabelas-dominio\ModoNotificacaoStatus-AT.md
---

# ModoNotificacaoStatus — Acompanhamento de Títulos

Modo de notificação do apresentante (`InsertTituloAT`, `UpdateTituloAT`).

Fonte: especificação § **3.2.12** (`InsertTituloAT`).

| Valor | Descrição |
|-------|-----------|
| `E` | E-mail — exige `ApresentanteEmail` |
| `S` | SMS — exige `ApresentanteDDDTelefone` e `ApresentanteNumeroTelefone` |

String vazia na consulta (`GetTituloAT`) indica que nenhum modo foi informado.
