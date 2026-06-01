---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: formaPagamento
tabela: 7
tags: [orius, notas, doi, dominio, enum, formaPagamento]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-operacoes-imobiliarias]] · **Validação:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-operacao-imobiliaria]] · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 7 — formaPagamento

Campo JSON: `formaPagamento`. Valor `"7"` (A prazo) exige campos adicionais — ver ficha de operações.

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "formaPagamento",
    "tabela": 7,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "formaPagamento": [
    { "codigo": "5", "descricao": "Quitado à vista" },
    { "codigo": "7", "descricao": "A prazo" },
    { "codigo": "9", "descricao": "Não se aplica" },
    { "codigo": "10", "descricao": "Quitado a prazo" },
    { "codigo": "11", "descricao": "Quitado sem informação da forma de pagamento" }
  ]
}
```

| Código | Descrição |
|--------|-----------|
| `5` | Quitado à vista |
| `7` | A prazo |
| `9` | Não se aplica |
| `10` | Quitado a prazo |
| `11` | Quitado sem informação da forma de pagamento |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
