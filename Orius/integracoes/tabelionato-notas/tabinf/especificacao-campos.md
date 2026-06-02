---
tipo: integracao
area: orius
produto: notas
central: tabinf
tags: [orius, notas, tabinf, campos, layout]
status: revisado
---

# TABINF IBGE — especificacao dos campos

## TABINF12.TXT (Resumo/Recibo)

| # | Campo | Tipo | Tam | Regra |
|---|---|---|---:|---|
| 1 | `UF-PESQUISA` | CHAR | 2 | Fornecido pelo IBGE |
| 2 | `MUN-PESQUISA` | CHAR | 5 | Fornecido pelo IBGE |
| 3 | `DIST-PESQUISA` | CHAR | 2 | Fornecido pelo IBGE |
| 4 | `COD_CARTORIO` | CHAR | 2 | Fornecido pelo IBGE |
| 5 | `ANO-PESQUISA` | CHAR | 4 | Ano da pesquisa |
| 6 | `TRIM-PESQUISA` | CHAR | 1 | `1`, `2`, `3` ou `4` |
| 7 | `TOTAL-DIV` | CHAR | 6 | Total valido do `TABINF07` |
| 8 | `TOTAL-REPETIDOS` | CHAR | 4 | Total de chaves repetidas |

## TABINF07.TXT (Divorcios Extrajudiciais)

### Campos de identificacao e ato (1..13)

| # | Campo | Tipo | Tam |
|---|---|---|---:|
| 1 | `UF-PESQUISA` | CHAR | 2 |
| 2 | `MUN-PESQUISA` | CHAR | 5 |
| 3 | `DIST-PESQUISA` | CHAR | 2 |
| 4 | `COD_CARTORIO` | CHAR | 2 |
| 5 | `ANO-PESQUISA` | CHAR | 4 |
| 6 | `TRIM-PESQUISA` | CHAR | 1 |
| 7 | `NUM-LIVRO` | CHAR | 18 |
| 8 | `NUM-INICIAL-FOLHA` | CHAR | 4 |
| 9 | `NUM-FINAL-FOLHA` | CHAR | 4 |
| 10 | `COMPL-FOLHA` | CHAR | 1 |
| 11 | `DATA-ABERT-ESCRIT` | CHAR | 8 |
| 12 | `DATA-ATO-NOTARIAL` | CHAR | 8 |
| 13 | `DATA-CASAMENTO` | CHAR | 8 |

### Campos de caracteristicas e pessoas (14..31)

| # | Campo | Tipo | Tam |
|---|---|---|---:|
| 14 | `REGIME-BENS` | CHAR | 1 |
| 15 | `NUM-FILHO-MAIOR` | CHAR | 2 |
| 16 | `NUM-FILHO-MENOR` | CHAR | 2 |
| 17 | `COD-RESP-FILHO` | CHAR | 1 |
| 18 | `COD-UF-RES-CONJ1` | CHAR | 2 |
| 19 | `COD-MUN-RES-CONJ1` | CHAR | 5 |
| 20 | `COD-PAIS-RES-CONJ1` | CHAR | 3 |
| 21 | `COD-UF-RES-CONJ2` | CHAR | 2 |
| 22 | `COD-MUN-RES-CONJ2` | CHAR | 5 |
| 23 | `COD-PAIS-RES-CONJ2` | CHAR | 3 |
| 24 | `COD-UF-NASC-CONJ1` | CHAR | 2 |
| 25 | `COD-PAIS-NASC-CONJ1` | CHAR | 3 |
| 26 | `COD-UF-NASC-CONJ2` | CHAR | 2 |
| 27 | `COD-PAIS-NASC-CONJ2` | CHAR | 3 |
| 28 | `DATA-NASC-CONJ1` | CHAR | 8 |
| 29 | `DATA-NASC-CONJ2` | CHAR | 8 |
| 30 | `SEXO-CONJ1` | CHAR | 1 |
| 31 | `SEXO-CONJ2` | CHAR | 1 |

## Nota de implementacao

No manual convertido, ha divergencia textual para `NUM-LIVRO` (12 vs 18). Para manter 121 bytes do `TABINF07`, adotar **18** conforme estrutura.
