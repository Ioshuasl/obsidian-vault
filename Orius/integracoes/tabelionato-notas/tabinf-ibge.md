---
tipo: integracao
area: orius
produto: notas
central: tabinf
tags: [orius, notas, tabinf, ibge, zip, layout]
status: revisado
fonte: migracao-desktop
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-notas|Tabelionato de Notas]] · **Índice:** [[Orius/integracoes/tabelionato-notas/00-indice|Integrações Notas]]
> **Central:** [[Orius/integracoes/centrais/tabinf-ibge|TABINF IBGE]]

---

# TABINF — IBGE (arquivo fixo)

[Arquivo: IBGE_RCIVIL_LAYOUT_TABINF_31_05_2020.pdf](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1778068969246-IBGE_RCIVIL_LAYOUT_TABINF_31_05_2020.pdf)

# Documentação de Integração – Tabelionato de Notas → IBGE

---

# Estrutura do Arquivo

## Formato de entrega

A integração é feita através de um arquivo compactado (.zip) contendo arquivos texto de largura fixa.

### Nome do arquivo compactado

```plaintext
TABINF.ZIP
```

Obrigatório

---

## Arquivos internos

| Arquivo | Descrição |
| --- | --- |
| TABINF07.TXT | Divórcios extrajudiciais |
| TABINF12.TXT | Resumo dos dados (recibo) |
| CONTROLE.SIS | Arquivo de controle (vazio) |

O arquivo CONTROLE.SIS deve ter 0 bytes

---

## Identificação do tabelionato

Todos os registros devem conter a chave:

```plaintext
UF + MUNICÍPIO + DISTRITO + CÓDIGO DO CARTÓRIO
```

Fornecida pelo IBGE

---

## Tamanho dos registros

| Arquivo | Tamanho fixo |
| --- | --- |
| TABINF07.TXT | 121 bytes |
| TABINF12.TXT | 26 bytes |
| CONTROLE.SIS | 0 bytes |

Obrigatório respeitar exatamente

---

## Regras gerais de preenchimento

- Numérico → zeros à esquerda

- Alfanumérico → espaços à direita

- Sem valor → preencher com 9

Padrão obrigatório

---

# Layout dos arquivos que compõem o .zip

[[Orius/integracoes/tabelionato-notas/tabinf-layout-tabinf12|Layout TABINF12]]


