---
tipo: integracao
area: orius
produto: notas
central: tabinf
tags: [orius, notas, tabinf, ibge, zip, layout]
status: revisado
---

# TABINF IBGE — especificacao dos arquivos gerados

## Pacote final

- Nome do pacote: `TABINF.ZIP`
- Conteudo obrigatorio:
  - `TABINF07.TXT` - divorcios extrajudiciais
  - `TABINF12.TXT` - resumo dos dados (recibo)
  - `CONTROLE.SIS` - controle do IBGE (arquivo vazio)

## Tamanho de registro

- `TABINF07.TXT`: **121 bytes** por registro
- `TABINF12.TXT`: **26 bytes** por registro
- `CONTROLE.SIS`: **0 byte**

## Identificacao do tabelionato

A chave de identificacao (fornecida pelo IBGE) deve constar em `TABINF07` e `TABINF12`:
- `UF-PESQUISA` (2)
- `MUN-PESQUISA` (5)
- `DIST-PESQUISA` (2)
- `COD_CARTORIO` (2)

## Observacao operacional

Em base centralizada, o `TABINF12` pode ter mais de um registro (um por tabelionato).
