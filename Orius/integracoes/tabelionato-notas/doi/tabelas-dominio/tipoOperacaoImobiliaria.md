---
tipo: tabelas-dominio
area: orius
produto: notas
orgao: receita-federal
campo: tipoOperacaoImobiliaria
tabela: 6
tags: [orius, notas, doi, dominio, enum, tipoOperacaoImobiliaria]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-operacoes-imobiliarias]] · **Validação:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-operacao-imobiliaria]] · **Índice:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Tabela 6 — tipoOperacaoImobiliaria

Campo JSON: `tipoOperacaoImobiliaria`. Código `"39"` exige `descricaoOutrasOperacoesImobiliarias`.

```json
{
  "escopo": {
    "orgao": "Receita Federal",
    "sistema": "DOI-Web",
    "campo": "tipoOperacaoImobiliaria",
    "tabela": 6,
    "fontes": ["doi/doi-importacao.pdf"]
  },
  "tipoOperacaoImobiliaria": [
    { "codigo": "11", "descricao": "Compra e Venda" },
    { "codigo": "13", "descricao": "Permuta" },
    { "codigo": "15", "descricao": "Adjudicação" },
    { "codigo": "19", "descricao": "Dação em Pagamento" },
    { "codigo": "21", "descricao": "Distrato de Negócio" },
    { "codigo": "31", "descricao": "Procuração em Causa Própria" },
    { "codigo": "33", "descricao": "Promessa de Compra e Venda" },
    { "codigo": "35", "descricao": "Promessa de Cessão de Direitos" },
    { "codigo": "37", "descricao": "Cessão de Direitos" },
    { "codigo": "39", "descricao": "Outras operações imobiliárias" },
    { "codigo": "41", "descricao": "Alienação por iniciativa particular ou leilão judicial" },
    { "codigo": "45", "descricao": "Incorporação e loteamento" },
    { "codigo": "47", "descricao": "Integralização/Subscrição de capital" },
    { "codigo": "55", "descricao": "Doação em adiantamento da legítima" },
    { "codigo": "56", "descricao": "Aforamento" },
    { "codigo": "57", "descricao": "Casamento em comunhão universal de bens" },
    { "codigo": "58", "descricao": "Cisão total ou parcial" },
    { "codigo": "59", "descricao": "Compra e venda de imóvel gravado por enfiteuse" },
    { "codigo": "60", "descricao": "Concessão de Direito Real de Uso (CDRU)" },
    { "codigo": "61", "descricao": "Concessão de Uso Especial para Fins de Moradia (CUEM)" },
    { "codigo": "62", "descricao": "Consolidação da Propriedade em Nome do Fiduciário" },
    { "codigo": "63", "descricao": "Desapropriação para fins de Reforma Agrária" },
    { "codigo": "64", "descricao": "Desapropriação, exceto para Reforma Agrária" },
    { "codigo": "65", "descricao": "Direito de laje" },
    { "codigo": "66", "descricao": "Direito de superfície" },
    { "codigo": "67", "descricao": "Doação, exceto em Adiantamento de Legítima" },
    { "codigo": "68", "descricao": "Incorporação" },
    { "codigo": "69", "descricao": "Inventário" },
    { "codigo": "70", "descricao": "Part. Separação/Divórcio/União Estável" },
    { "codigo": "71", "descricao": "Retorno de Capital Próprio na Extinção de Pessoa Jurídica" },
    { "codigo": "72", "descricao": "Retorno de Capital Próprio, exceto na Extinção de Pessoa Jurídica" },
    { "codigo": "73", "descricao": "Título de Domínio (TD)" },
    { "codigo": "74", "descricao": "Usucapião" }
  ]
}
```

| Código | Descrição |
|--------|-----------|
| `11` | Compra e Venda |
| `13` | Permuta |
| `15` | Adjudicação |
| `19` | Dação em Pagamento |
| `21` | Distrato de Negócio |
| `31` | Procuração em Causa Própria |
| `33` | Promessa de Compra e Venda |
| `35` | Promessa de Cessão de Direitos |
| `37` | Cessão de Direitos |
| `39` | Outras operações imobiliárias |
| `41` | Alienação por iniciativa particular ou leilão judicial |
| `45` | Incorporação e loteamento |
| `47` | Integralização/Subscrição de capital |
| `55` | Doação em adiantamento da legítima |
| `56` | Aforamento |
| `57` | Casamento em comunhão universal de bens |
| `58` | Cisão total ou parcial |
| `59` | Compra e venda de imóvel gravado por enfiteuse |
| `60` | Concessão de Direito Real de Uso (CDRU) |
| `61` | Concessão de Uso Especial para Fins de Moradia (CUEM) |
| `62` | Consolidação da Propriedade em Nome do Fiduciário |
| `63` | Desapropriação para fins de Reforma Agrária |
| `64` | Desapropriação, exceto para Reforma Agrária |
| `65` | Direito de laje |
| `66` | Direito de superfície |
| `67` | Doação, exceto em Adiantamento de Legítima |
| `68` | Incorporação |
| `69` | Inventário |
| `70` | Part. Separação/Divórcio/União Estável |
| `71` | Retorno de Capital Próprio na Extinção de Pessoa Jurídica |
| `72` | Retorno de Capital Próprio, exceto na Extinção de Pessoa Jurídica |
| `73` | Título de Domínio (TD) |
| `74` | Usucapião |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]
