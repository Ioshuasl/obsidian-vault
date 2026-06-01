---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: motivoNaoIdentificacaoNi
tabela: 10
tags: [orius, notas, doi, dominio, enum, motivoNaoIdentificacaoNi]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-alienantes-adquirentes]] · **Condição:** quando `indicadorNiIdentificado` = `false` · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 10 — motivoNaoIdentificacaoNi

Campo JSON: `motivoNaoIdentificacaoNi`. Motivo da ausência de CPF/CNPJ da parte.

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "motivoNaoIdentificacaoNi",
    "tabela": 10,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "motivoNaoIdentificacaoNi": [
    { "codigo": "1", "descricao": "Sem CPF/CNPJ — Decisão Judicial" },
    { "codigo": "2", "descricao": "Não consta no documento" }
  ]
}
```

| Código | Descrição |
|--------|-----------|
| `1` | Sem CPF/CNPJ — Decisão Judicial |
| `2` | Não consta no documento |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
