---
tipo: produto
area: orius
produto: imoveis
tags: [orius, imoveis, registro]
---

# Registro de imóveis

Serventia de **Registro de Imóveis**: matrícula, registro, averbação, protocolo, certidões, DOI e integrações nacionais (ONR, CNIB, RI Digital).

## Entender o domínio (leia primeiro)

| Nota | Para quê |
|------|----------|
| **[[Orius/empresa/produtos/imoveis/00-indice-imoveis-negocio]]** | Índice de negócio |
| [[Orius/empresa/produtos/imoveis/conceito-registro-de-imoveis]] | O que é RI; escritura × registro |
| [[Orius/empresa/produtos/imoveis/fluxo-operacional-registro-imoveis]] | Protocolo → qualificação → matrícula |
| [[Orius/empresa/produtos/imoveis/livros-oficiais-registro-imoveis]] | Livros 1 a 5 |
| [[Orius/empresa/produtos/imoveis/tipos-de-atos-registrais]] | CV, garantias, averbações |
| [[Orius/empresa/produtos/imoveis/onr-ri-digital-negocio]] | ONR e RI Digital |
| [[Orius/empresa/produtos/imoveis/mapa-dominio-software-imoveis]] | Negócio ↔ `R_*` |

> Fonte didática: `Registro_de_Im_veis (1).md` (estudo interno, 2026-05-29).

## Integrações documentadas

**Índice:** [[Orius/integracoes/registro-imoveis/00-indice]] · **ONR hub:** [[Orius/integracoes/registro-imoveis/onr/00-indice-onr]]

### WSOficio (SOAP)

| Doc | Link |
|-----|------|
| Índice métodos | [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/00-indice-wsoficio]] |
| Visão geral / Hash | [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/visao-geral]] |

Scripts/código: `C:\Users\kenio\soap-ui test`

### REST e outras

| Integração | Doc |
|------------|-----|
| CNIB | [[Orius/integracoes/registro-imoveis/cnib]] |
| Protocolo ONR | [[Orius/integracoes/registro-imoveis/onr-protocolo]] |
| Mapa / estatísticas ONR | [[Orius/integracoes/registro-imoveis/onr-mapa-estatisticas]] |
| Cobrança (RIB) | [[Orius/integracoes/registro-imoveis/rib-cobranca]] |
| Edital eletrônico (RIB) | [[Orius/integracoes/registro-imoveis/rib-edital]] |

Centrais: [[Orius/integracoes/centrais/cnib]], [[Orius/integracoes/centrais/onr]]

## Banco de dados

[[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/imoveis-tabelas]] — 130 tabelas `R_*`

## Regras de negócio

[[Orius/desenvolvimento/regras-de-negocio/00-indice-regras]] — filtrar por produto **imoveis**.

## Legado vs web

| Aspecto | Delphi legado | Sistema web |
|---------|---------------|-------------|
| | | _(preencher)_ |
