---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: tipoAto
tabela: 3
tags: [orius, notas, doi, dominio, enum, tipoAto]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-iniciais]] · **Relacionado:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoServico]] · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 3 — tipoAto

Campo JSON: `tipoAto`. Opções válidas variam conforme `tipoServico`.

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "tipoAto",
    "tabela": 3,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "tipoAto": [
    { "codigo": "1", "descricao": "Escritura", "tipoServico": "1" },
    { "codigo": "2", "descricao": "Procuração", "tipoServico": "1" },
    { "codigo": "3", "descricao": "Averbação", "tipoServico": "2" },
    { "codigo": "4", "descricao": "Registro", "tipoServico": "2" },
    { "codigo": "5", "descricao": "Registros para fins de publicidade", "tipoServico": "3" },
    { "codigo": "6", "descricao": "Registro para fins de conservação", "tipoServico": "3" }
  ]
}
```

| Código | Descrição | tipoServico |
|--------|-----------|-------------|
| `1` | Escritura | `1` Notarial |
| `2` | Procuração | `1` Notarial |
| `3` | Averbação | `2` Registro de Imóveis |
| `4` | Registro | `2` Registro de Imóveis |
| `5` | Registros para fins de publicidade | `3` RTD |
| `6` | Registro para fins de conservação | `3` RTD |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
