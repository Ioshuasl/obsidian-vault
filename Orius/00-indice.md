# Orius — índice

Empresa de **automação cartorária**. Você atua como desenvolvedor na migração **Delphi 10 (legado) → sistema web**, com mais dois colaboradores no time do novo sistema.

## Árvore de pastas

```
Orius/
├── 00-indice.md                    ← você está aqui
├── empresa/
│   ├── sobre-orius.md
│   └── produtos/
│       ├── 00-indice-produtos.md
│       ├── tabelionato-notas.md
│       ├── tabelionato-protesto.md
│       ├── registro-civil.md
│       ├── registro-imoveis.md
│       ├── registro-titulos-documentos.md
│       ├── caixa.md
│       └── nota-fiscal.md
├── desenvolvimento/
│   ├── 00-indice-dev.md
│   ├── banco-de-dados/               ← Firebird 4, ~504 tabelas
│   │   ├── 00-briefing-documentacao-firebird.md
│   │   ├── 00-indice-banco-dados.md
│   │   ├── templates/_template-tabela.md
│   │   ├── compartilhado/
│   │   └── produtos/{notas,imoveis,...}/
│   ├── legado-delphi-10.md
│   ├── sistema-web-novo.md
│   ├── regras-de-negocio/
│   │   ├── 00-indice-regras.md
│   │   └── _template-regra.md
│   └── refatoracao/
│       ├── 00-indice-refatoracao.md
│       └── migracao-delphi-para-web.md
├── integracoes/
│   ├── 00-indice-integracoes.md
│   ├── centrais/
│   │   ├── 00-indice-centrais.md
│   │   └── _template-central.md
│   └── padroes-e-contratos.md
├── equipe/
│   └── projeto-web-equipe.md
└── conhecimento/
    ├── decisoes/                   ← ADRs, escolhas técnicas
    │   └── _template-decisao.md
    ├── runbooks/                   ← como resolver X em produção
    └── glossario-cartorio.md
```

## Produtos (links)

| Produto | Nota |
|---------|------|
| Tabelionato de notas | [[Orius/empresa/produtos/tabelionato-notas]] |
| Tabelionato de protesto | [[Orius/empresa/produtos/tabelionato-protesto]] |
| Registro civil | [[Orius/empresa/produtos/registro-civil]] |
| Registro de imóveis | [[Orius/empresa/produtos/registro-imoveis]] |
| RTD (títulos e documentos) | [[Orius/empresa/produtos/registro-titulos-documentos]] |
| Caixa | [[Orius/empresa/produtos/caixa]] |
| Nota fiscal | [[Orius/empresa/produtos/nota-fiscal]] |

## Focos atuais (prioridade de documentação)

1. **Regras de negócio** — o que mais dificulta a informatização cartorária
2. **Integrações com centrais** — contratos, fluxos, erros comuns
3. **Modelo de dados Firebird** — [[Orius/desenvolvimento/banco-de-dados/00-briefing-documentacao-firebird|briefing ~504 tabelas]]
4. **Refatoração** — mapeamento legado Delphi ↔ módulos web

## Palavras-chave (Cursor / IA)

[[Orius/integracoes/palavras-chave-orius]] — Notas, Imóveis, CNIB, ONR, Protesto, Civil, etc.

## Integrações por produto

- [[Orius/integracoes/tabelionato-notas/00-indice|Tabelionato de Notas]]
- [[Orius/integracoes/registro-imoveis/00-indice|Registro de Imóveis]]

## Seções

- [[Orius/empresa/sobre-orius]]
- [[Orius/desenvolvimento/00-indice-dev]]
- [[Orius/integracoes/00-indice-integracoes]]
- [[Orius/equipe/projeto-web-equipe]]
- [[Orius/conhecimento/glossario-cartorio]]

## Tags sugeridas

`#orius` `#legado` `#web` `#integracao` `#regra-negocio` `#produto/notas` (etc.)
