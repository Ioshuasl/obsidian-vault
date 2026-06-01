---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: tipoDeclaracao
tabela: 1
tags: [orius, notas, doi, dominio, enum, tipoDeclaracao]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-iniciais]] · **Validação:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/declaracao-inapta]] · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 1 — tipoDeclaracao

Campo JSON: `tipoDeclaracao`. Usar **somente o código** (string).

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "tipoDeclaracao",
    "tabela": 1,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "tipoDeclaracao": [
    { "codigo": "0", "descricao": "Original", "importavelEmLote": true },
    { "codigo": "1", "descricao": "Retificadora", "importavelEmLote": false },
    { "codigo": "3", "descricao": "Canceladora", "importavelEmLote": false }
  ]
}
```

| Código | Descrição | Importável em lote |
|--------|-----------|-------------------|
| `0` | Original | Sim |
| `1` | Retificadora | Não |
| `3` | Canceladora | Não |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
