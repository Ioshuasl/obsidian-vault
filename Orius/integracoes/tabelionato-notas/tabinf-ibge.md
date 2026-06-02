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
> **Documentação modular:** [[Orius/integracoes/tabelionato-notas/tabinf/00-indice-tabinf]]

# TABINF — IBGE (arquivo fixo)

Envio trimestral de dados de **Divórcios Extrajudiciais** do Tabelionato de Notas para o IBGE via arquivo compactado `TABINF.ZIP`.

Referência oficial:
- [IBGE_RCIVIL_LAYOUT_TABINF_31_05_2020.pdf](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1778068969246-IBGE_RCIVIL_LAYOUT_TABINF_31_05_2020.pdf)

## Acesso rápido

| Tema | Link |
|------|------|
| Índice da integração | [[Orius/integracoes/tabelionato-notas/tabinf/00-indice-tabinf]] |
| O que é e quando usar | [[Orius/integracoes/tabelionato-notas/tabinf/visao-geral-e-quando-usar]] |
| Especificação dos arquivos gerados | [[Orius/integracoes/tabelionato-notas/tabinf/especificacao-arquivos-gerados]] |
| Especificação dos campos | [[Orius/integracoes/tabelionato-notas/tabinf/especificacao-campos]] |
| Regras de validação | [[Orius/integracoes/tabelionato-notas/tabinf/regras-validacao]] |
| Tabelas de domínio | [[Orius/integracoes/tabelionato-notas/tabinf/tabelas-dominio]] |

## Entrega (resumo)

- ZIP obrigatório: `TABINF.ZIP`
- Conteúdo: `TABINF07.TXT`, `TABINF12.TXT`, `CONTROLE.SIS`
- Tamanho dos registros:
  - `TABINF07.TXT`: 121 bytes
  - `TABINF12.TXT`: 26 bytes
  - `CONTROLE.SIS`: 0 byte


