---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: tipoLivro
tabela: 4
tags: [orius, notas, doi, dominio, enum, tipoLivro]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-iniciais]] · **Condição:** somente se `tipoServico` = `"2"` (Registro de Imóveis) · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 4 — tipoLivro

Campo JSON: `tipoLivro`.

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "tipoLivro",
    "tabela": 4,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "tipoLivro": [
    { "codigo": "1", "descricao": "Lv.2-Registro Geral (matrícula)" },
    { "codigo": "2", "descricao": "Transcrição das Transmissões" }
  ]
}
```

| Código | Descrição |
|--------|-----------|
| `1` | Lv.2-Registro Geral (matrícula) |
| `2` | Transcrição das Transmissões |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
