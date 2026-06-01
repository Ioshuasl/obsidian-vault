---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: regimeBens
tabela: 11
tags: [orius, notas, doi, dominio, enum, regimeBens]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-alienantes-adquirentes]] · **Condição:** quando `indicadorConjuge` = `true` · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 11 — regimeBens

Campo JSON: `regimeBens`. Regime de bens no casamento.

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "regimeBens",
    "tabela": 11,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "regimeBens": [
    { "codigo": "1", "descricao": "Separação de Bens" },
    { "codigo": "2", "descricao": "Comunhão Parcial de Bens" },
    { "codigo": "3", "descricao": "Comunhão Universal de Bens" },
    { "codigo": "4", "descricao": "Participação Final nos Aquestos" }
  ]
}
```

| Código | Descrição |
|--------|-----------|
| `1` | Separação de Bens |
| `2` | Comunhão Parcial de Bens |
| `3` | Comunhão Universal de Bens |
| `4` | Participação Final nos Aquestos |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
