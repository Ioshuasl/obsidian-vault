---
tipo: referencia
area: orius
produto: imoveis
tags: [orius, imoveis, doi, receita-federal, fiscal]
status: revisado
fonte: "Registro_de_Im_veis (1).md"
atualizado: 2026-05-29
---

# DOI — Declaração sobre Operações Imobiliárias

Comunicação dos cartórios à **Receita Federal** informando que houve operação com imóvel (aquisição ou alienação).

## Analogia

| Sistema | Papel |
|---------|--------|
| **Registro de Imóveis** | Garante **quem é o dono** e publicidade jurídica |
| **DOI** | Avisa a Receita para **fiscalização e cruzamento** de dados |

## Quando ocorre

Após atos como registro ou averbação de **transferência de propriedade** — o cartório transmite dados da operação (independente do valor).

Dados típicos: alienante, adquirente, CPF/CNPJ, imóvel, valor, data do ato.

## Objetivo para o Fisco

- Cruzar com **Imposto de Renda** e patrimônio
- Verificar **ganho de capital** na venda
- Detectar inconsistências e sonegação

## No software Orius

Tabelas dedicadas no legado:

- `R_DOI`, `R_DOI_ADQUIRENTE`, `R_DOI_ALIENANTE`, `R_DOI_COMPLEMENTO`

Transmissão atual: **DOIWeb** (Receita Federal).

## Relacionado

- [[fluxo-operacional-registro-imoveis]]
- [[mapa-dominio-software-imoveis]]
- [Receita Federal — DOI](https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/doi)
