---
tipo: regras-validacao
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, doi, validacao, cib]
status: revisado
---

> **Campo:** `cib` em [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-imovel]]

# Algoritmo CIB — dígito verificador

O Código CIB tem **7 caracteres alfanuméricos + 1 DV alfanumérico**. Base 32 Crockford (exclui I, i, L, l, O, o, U, u).

## Formato

- Máscara: `AAAAAAA-D` (hífen separa corpo e DV; ignorado na decodificação).
- Exemplo válido: `J7DNF01S` (DV calculado conforme regra abaixo → ex.: `J7DNF01S-Y`).

## Decodificação

- Aceita maiúsculas/minúsculas.
- `i`, `I`, `l`, `L` → `1`; `o`, `O` → `0`.
- `u`/`U` e caracteres especiais: **não aceitos**.

### Tabela encode/decode (resumo)

| Valor | 0–9 | 10–15 | 16–23 | 24–31 |
|-------|-----|-------|-------|-------|
| Decode | 0,O,o / 1,I,i,L,l / 2–9 | A/a–F/f | G/g–Q/q | R/r–Z/z |
| Encode | 0–9 | A–F | G–Q | R–Z |

## Cálculo do DV

### Caracteres exclusivamente numéricos

Algoritmo **Módulo 11** (mesmo do NIRF):

1. Multiplicar cada dígito pelos fatores **8, 7, 6, 5, 4, 3, 2** (esquerda → direita).
2. Somar produtos; dividir por 11.
3. DV = 11 − resto; se resto 0 ou 1 → DV = **0**.

### Caracteres com letras

1. Converter cada caractere para valor (tabela encode).
2. Multiplicar pelos fatores **4, 3, 9, 5, 7, 1, 8** (esquerda → direita).
3. Somar produtos; dividir por **31**.
4. **Resto** → caractere DV via tabela encode.

### Exemplo (A3N8Z4F)

| | A | 3 | N | 8 | Z | 4 | F |
|---|---|---|---|---|---|---|---|
| Valor | 10 | 3 | 21 | 8 | 31 | 4 | 15 |
| Fator | 4 | 3 | 9 | 5 | 7 | 1 | 8 |
| Produto | 40 | 9 | 189 | 40 | 217 | 4 | 120 |

Soma = 619 → 619 mod 31 = 30 → DV = **Y** → CIB: `A3N8Z4F-Y`.

Voltar: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
