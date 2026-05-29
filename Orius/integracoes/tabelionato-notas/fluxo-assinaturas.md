---
tipo: integracao
area: orius
produto: notas
central: e-notariado
modulo: assinaturas
tags: [orius, notas, e-notariado, assinaturas, api]
status: em-andamento
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-notas|Tabelionato de Notas]] · **Índice:** [[Orius/integracoes/tabelionato-notas/00-indice|Integrações Notas]]  
> **Negócio (e-Notariado):** [[Orius/empresa/produtos/notas/integracoes-centrais-notas#e-Notariado]]
> **Homologação (chaves):** [[Orius/integracoes/tabelionato-notas/ambiente-homologacao-api#Fluxo de Assinaturas (e-notariado)]]

# Fluxo de Assinaturas (e-notariado)

Módulo de **assinatura eletrônica** do e-notariado (ambiente distinto do CCN e da CENSEC).

## Ambientes

| Ambiente | Base URL |
|----------|----------|
| Homologação | `https://assinatura-hml.e-notariado.org.br/` |
| Produção | _(confirmar URL oficial do portal)_ |

## API Key

Gerar a chave no portal do módulo, no mesmo espírito do CCN/CENSEC (admin → criar chave de integração).

Valores de **homologação** compartilhados com CCN/CENSEC: [[Orius/integracoes/tabelionato-notas/ambiente-homologacao-api]]

## Relacionado

- [[Orius/integracoes/tabelionato-notas/ccn]] — CCN (pessoas)
- [[Orius/integracoes/tabelionato-notas/censec/visao-geral-e-api]] — CENSEC
