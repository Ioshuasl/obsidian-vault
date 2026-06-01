---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: naturezaTitulo
tabela: 5
tags: [orius, notas, doi, dominio, enum, naturezaTitulo]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-iniciais]] · **Condição:** somente se `tipoServico` = `"2"` (Registro de Imóveis) · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 5 — naturezaTitulo

Campo JSON: `naturezaTitulo`.

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "naturezaTitulo",
    "tabela": 5,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "naturezaTitulo": [
    { "codigo": "1", "descricao": "Instrumento particular com força de escritura pública" },
    { "codigo": "2", "descricao": "Escritura Pública" },
    { "codigo": "3", "descricao": "Título Judicial" },
    { "codigo": "4", "descricao": "Contratos ou termos administrativos" },
    { "codigo": "5", "descricao": "Atos autênticos de países estrangeiros" }
  ]
}
```

| Código | Descrição |
|--------|-----------|
| `1` | Instrumento particular com força de escritura pública |
| `2` | Escritura Pública |
| `3` | Título Judicial |
| `4` | Contratos ou termos administrativos |
| `5` | Atos autênticos de países estrangeiros |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
