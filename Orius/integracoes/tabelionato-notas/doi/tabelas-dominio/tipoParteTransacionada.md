---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: tipoParteTransacionada
tabela: 8
tags: [orius, notas, doi, dominio, enum, tipoParteTransacionada]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-operacoes-imobiliarias]] · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 8 — tipoParteTransacionada

Campo JSON: `tipoParteTransacionada`. Medida da parte do imóvel transacionada (% ou área).

> No manual PDF o rótulo da tabela 8 aparece erroneamente como `tipoDeclaracao`.

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "tipoParteTransacionada",
    "tabela": 8,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "tipoParteTransacionada": [
    { "codigo": "1", "descricao": "% (Percentual)" },
    { "codigo": "2", "descricao": "ha/m² (Área)" }
  ]
}
```

| Código | Descrição |
|--------|-----------|
| `1` | % (Percentual) |
| `2` | ha/m² (Área) |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
