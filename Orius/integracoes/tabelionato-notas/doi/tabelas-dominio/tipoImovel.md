---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: tipoImovel
tabela: 12
tags: [orius, notas, doi, dominio, enum, tipoImovel]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-imovel]] · **Validação:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-dados-imovel]] · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 12 — tipoImovel

Campo JSON: `tipoImovel`.

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "tipoImovel",
    "tabela": 12,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "tipoImovel": [
    { "codigo": "15", "descricao": "Loja" },
    { "codigo": "31", "descricao": "Galpão" },
    { "codigo": "65", "descricao": "Apartamento" },
    { "codigo": "67", "descricao": "Casa" },
    { "codigo": "69", "descricao": "Fazenda/Sítio/Chácara" },
    { "codigo": "71", "descricao": "Terreno/Fração" },
    { "codigo": "89", "descricao": "Outros" },
    { "codigo": "90", "descricao": "Sala" },
    { "codigo": "91", "descricao": "Conjunto de salas" },
    { "codigo": "92", "descricao": "Sobreloja" },
    { "codigo": "93", "descricao": "Vaga de Garagem" },
    { "codigo": "94", "descricao": "Laje" },
    { "codigo": "95", "descricao": "Estacionamento" },
    { "codigo": "96", "descricao": "Barraco" }
  ]
}
```

| Código | Descrição |
|--------|-----------|
| `15` | Loja |
| `31` | Galpão |
| `65` | Apartamento |
| `67` | Casa |
| `69` | Fazenda/Sítio/Chácara |
| `71` | Terreno/Fração |
| `89` | Outros |
| `90` | Sala |
| `91` | Conjunto de salas |
| `92` | Sobreloja |
| `93` | Vaga de Garagem |
| `94` | Laje |
| `95` | Estacionamento |
| `96` | Barraco |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
