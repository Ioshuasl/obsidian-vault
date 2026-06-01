---
tipo: integracao
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, imoveis, doi, importacao, json]
status: revisado
---

> **Índice DOI:** [[Orius/integracoes/tabelionato-notas/doi/00-indice-doi]] · **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]]

# DOI — Visão geral e importação

## Quem envia a DOI

Cartórios extrajudiciais que praticam atos com operação imobiliária transmitem a declaração à Receita Federal via **DOI-Web**. No ecossistema Orius:

- **Tabelionato de Notas** — escrituras e demais atos notariais (`tipoServico` = `"1"`).
- **Registro de Imóveis** — registros e averbações de transmissão (`tipoServico` = `"2"`).

O layout JSON, domínios e validações são **os mesmos**; mudam os campos obrigatórios por serventia (livro, matrícula, MNE, CNM, etc.).

## Acesso e prazo

A DOI deve ser elaborada via **DOI-Web**. O sistema permite importação em lote por arquivo JSON.

- **Prazo:** até o último dia útil do mês subsequente ao ato.
- **Formato:** `.json` ou `.zip` contendo um único `.json`.
- **Encoding:** UTF-8 (recomendado).
- **Schema JSON:** versão 2020-12.

## Fluxo de importação em lote

1. O arquivo passa por validação **estrutural** (JSON válido).
2. Cada declaração passa por validação **individual** (campos, domínios, regras de preenchimento).
3. Declarações aptas passam por **verificação de pendências** (duplicidade, avisos).
4. Declarações importadas com sucesso ficam com situação **RASCUNHO**.

Declarações com erro de validação impeditivo são rejeitadas **individualmente** — outras declarações válidas no mesmo arquivo podem ser importadas.

## Orientações gerais ao schema

- Possuir o formato `{ "declaracoes": [ {...}, {...} ] }`.
- Conter todos os campos previstos quando obrigatórios.
- Não incluir campos estranhos ao esquema.
- Omitir atributos sem conteúdo.
- Respeitar tamanhos mínimo e máximo.
- Enviar dados válidos conforme o tipo (integer, data `YYYY-MM-DD`, etc.).

## Links

- [[Orius/integracoes/tabelionato-notas/doi/campos-json/estrutura-basica|Estrutura básica do JSON]]
- [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/visao-geral-validacao|Tipos de validação]]
- [[Orius/integracoes/tabelionato-notas/doi/campos-json/exemplo-json|Exemplo de payload]]
