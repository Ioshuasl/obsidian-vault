---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: tipoServico
tabela: 2
tags: [orius, notas, doi, dominio, enum, tipoServico]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-iniciais]] · **Validação:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-dados-iniciais]] · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 2 — tipoServico

Campo JSON: `tipoServico`. Tipo do serviço realizado pela serventia na operação imobiliária (não confundir com a atribuição cartorial).

Principais transmitentes no Orius: **Tabelionato de Notas** (`"1"`) e **Registro de Imóveis** (`"2"`).

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "tipoServico",
    "tabela": 2,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "tipoServico": [
    { "codigo": "1", "descricao": "Notarial" },
    { "codigo": "2", "descricao": "Registro de Imóveis" },
    { "codigo": "3", "descricao": "Registro de Títulos e Documentos" }
  ]
}
```

| Código | Descrição |
|--------|-----------|
| `1` | Notarial |
| `2` | Registro de Imóveis |
| `3` | Registro de Títulos e Documentos |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
