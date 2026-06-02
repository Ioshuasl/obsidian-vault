---
tipo: integracao
area: orius
produto: notas
central: tabinf
tags: [orius, notas, tabinf, validacao, regras]
status: revisado
---

# TABINF IBGE — regras de validacao

## Regras gerais de preenchimento

- Campo numerico com tamanho maior que o valor: completar com **zeros a esquerda**.
- Campo alfanumerico com tamanho maior que o valor: completar com **espacos a direita**.
- Campo numerico sem valor: preencher com **9** repetido no tamanho do campo.
  - Exemplo: data sem valor em campo de 8 posicoes -> `99999999`.

## Regras de consistencia entre arquivos

- O `TABINF.ZIP` deve conter `TABINF07.TXT`, `TABINF12.TXT` e `CONTROLE.SIS`.
- `TOTAL-DIV` no `TABINF12` deve refletir o total valido do `TABINF07`.
- `TOTAL-REPETIDOS` no `TABINF12` deve refletir as chaves repetidas do `TABINF07`.
- Chave usada para detectar repeticao no `TABINF07`:
  - `UF-PESQUISA`, `MUN-PESQUISA`, `DIST-PESQUISA`, `COD_CARTORIO`,
  - `ANO-PESQUISA`, `TRIM-PESQUISA`, `NUM-LIVRO`, `NUM-INICIAL-FOLHA`,
  - `NUM-FINAL-FOLHA`, `COMPL-FOLHA`.

## Regras de data e periodo

- Datas devem estar em `DDMMAAAA`.
- `TRIM-PESQUISA` deve ser `1`, `2`, `3` ou `4`.
- `DATA-ATO-NOTARIAL` deve ser coerente com o trimestre informado.

## Regra de folha

- Quando houver apenas folha inicial, repetir o valor em `NUM-FINAL-FOLHA`.
