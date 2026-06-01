---
tipo: indice
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, imoveis, doi, receita-federal, json, mne]
---

# DOI — Declaração sobre Operações Imobiliárias (Receita Federal)

> **Produtos:** [[Orius/empresa/produtos/tabelionato-notas|Tabelionato de Notas]] · [[Orius/empresa/produtos/registro-imoveis|Registro de Imóveis]]  
> **Índices:** [[Orius/integracoes/tabelionato-notas/00-indice|Integrações Notas]] · [[Orius/integracoes/registro-imoveis/00-indice|Integrações RI]]  
> **Negócio:** [[Orius/empresa/produtos/notas/integracoes-centrais-notas#DOI]] · [[Orius/empresa/produtos/imoveis/doi-operacoes-imobiliarias]]  
> Relacionado: [[Orius/integracoes/centrais/onr|ONR]] (MNE/CNM), [[Orius/integracoes/tabelionato-notas/censec/ctp|CTP/CENSEC]]

Especificações técnicas para importação de declarações em lote via JSON no **DOI-Web** (Receita Federal).

## Quem transmite

A DOI é enviada pelos cartórios extrajudiciais que praticam atos com operação imobiliária. No Orius, os fluxos principais são:

| Produto Orius | `tipoServico` (JSON) | Atos típicos |
|---------------|----------------------|--------------|
| **Tabelionato de Notas** | `"1"` Notarial | Escrituras, procurações em causa própria com imóvel |
| **Registro de Imóveis** | `"2"` Registro de Imóveis | Registro, averbação de transmissão |
| RTD (quando aplicável) | `"3"` Registro de Títulos e Documentos | Registros para publicidade/conservação |

A mesma estrutura JSON e regras de validação valem para todos; variam os campos obrigatórios conforme `tipoServico` e `tipoAto` — ver [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-iniciais]] e [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoServico]].

> Documentação técnica centralizada nesta pasta (`tabelionato-notas/doi/`) por histórico de migração; aplica-se igualmente ao **Registro de Imóveis**.

## Visão geral e importação

[[Orius/integracoes/tabelionato-notas/doi/visao-geral-e-importacao]]

## Documentação técnica

| Tipo | Índice |
|------|--------|
| Estrutura dos campos JSON | [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]] |
| Tabelas de domínio (enums) | [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]] |
| Regras de validação | [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]] |
| Automação n8n (validador local) | [[Orius/integracoes/tabelionato-notas/doi/automacao/n8n-validate-json-gateway]] |

## Fontes

- Manual RFB — importação JSON (págs. 9–37): `automacoes e testes/doi/doi-importacao.pdf` → `doi-importacao.md`
- Nota legada consolidada: [[Orius/integracoes/tabelionato-notas/doi]] (redireciona para este índice)
- Schema: `doi.rfb.gov.br/api/layout doiweb.json`

## Regras transversais

- **Prazo:** até o último dia útil do mês subsequente ao ato.
- **Lote:** somente declarações **originais** (`tipoDeclaracao` = `0`); retificadoras e canceladoras não são importáveis.
- **Situação pós-importação:** declaração salva como **RASCUNHO**; passa por verificação de pendências.
- **Encoding:** UTF-8 · **Schema JSON:** 2020-12 · **Extensão:** `.json` ou `.zip` (zip com um único `.json`).

Voltar: [[Orius/integracoes/tabelionato-notas/00-indice]] · [[Orius/integracoes/registro-imoveis/00-indice]]
