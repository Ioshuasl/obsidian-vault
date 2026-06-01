---
tipo: integracao
area: orius
produto: imoveis
central: cnib
tags: [orius, imoveis, cnib, onr, indisponibilidade]
status: revisado
fonte: cursor
atualizado: 2026-06-01
---

> **Produto:** [[Orius/empresa/produtos/registro-imoveis|Registro de Imóveis]]
> **Índice RI:** [[Orius/integracoes/registro-imoveis/00-indice|Integrações RI]]
> **Central:** [[Orius/integracoes/centrais/cnib|CNIB]]
> **API REST (endpoints):** [[Orius/integracoes/registro-imoveis/api-cnib-serventias/00-indice|API CNIB SERVENTIAS — índice]]

# CNIB — Indisponibilidade de bens

## O que é a indisponibilidade de bens?

- **Restrição jurídica** que impede o proprietário de alienar ou onerar patrimônio (ex.: imóvel) enquanto durar a ordem.
- **Finalidade:** efetividade do processo judicial — evitar dissipação de bens antes do cumprimento de decisão.

## O que é o CNIB?

A **Central Nacional de Indisponibilidade de Bens** é o sistema eletrônico da ONR que **centraliza e distribui** ordens de bloqueio às serventias em tempo real.

| Tipo | Sigla | Descrição |
|------|-------|-----------|
| Indisponibilidade genérica | **IA** | Bloqueio sobre qualquer bem da parte em todo o país |
| Indisponibilidade específica | **IE** | Bloqueio sobre bem determinado |

## Impacto no Registro de Imóveis

- **Fiscalização diária:** verificar novas ordens na abertura e no encerramento do expediente.
- **Bloqueio de transferências:** ao localizar bem do indisponibilizado, **responder** no sistema e impedir registro incompatível.
- **Matrícula:** anotar restrição e emitir exigências quando faltar dado para efetivar o bloqueio.

---

## Integração técnica (API SERVENTIAS)

| Recurso | Link |
|---------|------|
| **Documentação estruturada** | [[Orius/integracoes/registro-imoveis/api-cnib-serventias/00-indice]] |
| Visão geral (ambientes, auth, mapa) | [[Orius/integracoes/registro-imoveis/api-cnib-serventias/visao-geral]] |
| Swagger produção | https://serventia-api.onr.org.br/swagger/index.html |
| Swagger STG | https://stg-serventia-api.onr.org.br/swagger |

### Endpoints em uso (versão atual)

| Operação | Endpoint recomendado |
|----------|---------------------|
| Token | `POST https://auth.id.onr.org.br/connect/token` |
| Consultar parte | `POST /api/ordem/consultar` |
| Visualizar ordens | **`POST /api/v2/ordem/visualizar`** |
| Responder ordem | `POST /api/ordem/responder` |
| Responder lote | `POST /api/ordem/responder/lista` |
| Tipos auxiliares | `POST /api/documentos/tipos` |

> Legado: `POST /api/ordem/visualizar` — ver [[Orius/integracoes/registro-imoveis/api-cnib-serventias/CNIB-03-visualizar-ordens#Endpoint legado v1]].

### Manuais no repositório de automação

- `automacoes e testes/cnib/cnib api v1.md` — manual completo (jan/2025)
- `automacoes e testes/cnib/cnib api v2.md` — versão recomendada (nov/2025)

---

## Relacionado

- ONR SOAP (ofícios): [[Orius/integracoes/registro-imoveis/onr/00-indice-onr]]
- Protocolo eletrônico ONR: [[Orius/integracoes/registro-imoveis/onr-protocolo]]
