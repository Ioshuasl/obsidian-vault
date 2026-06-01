---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: destinacao
tabela: 9
tags: [orius, notas, doi, dominio, enum, destinacao]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-imovel]] · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 9 — destinacao

Campo JSON: `destinacao`. Define conjunto de campos obrigatórios do imóvel (urbano vs rural).

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "destinacao",
    "tabela": 9,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "destinacao": [
    { "codigo": "1", "descricao": "Urbano" },
    { "codigo": "3", "descricao": "Rural" }
  ]
}
```

| Código | Descrição |
|--------|-----------|
| `1` | Urbano |
| `3` | Rural |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
