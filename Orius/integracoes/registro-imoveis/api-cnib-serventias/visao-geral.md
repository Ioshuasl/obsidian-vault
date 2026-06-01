---
tipo: integracao
area: orius
produto: imoveis
central: cnib
tags: [orius, imoveis, cnib, api, serventias]
manual: v2.0
status: revisado
fonte: cursor
criado: 2026-06-01
---

> **Índice:** [[Orius/integracoes/registro-imoveis/api-cnib-serventias/00-indice]]
> **Conceito CNIB:** [[Orius/integracoes/registro-imoveis/cnib]]
> **Central:** [[Orius/integracoes/centrais/cnib]]

# API SERVENTIAS — CNIB 2.0 (visão geral)

**Uma frase:** API REST da ONR para serventias (RI, RC, Notas) **consultarem**, **visualizarem** e **responderem** ordens de indisponibilidade de bens na CNIB 2.0.

Manuais de origem no repositório de automação: `automacoes e testes/cnib/cnib api v1.md` (detalhe) e `cnib api v2.md` (versão recomendada, nov/2025).

---

## Ambientes

| Ambiente | Base URL | Swagger |
|----------|----------|---------|
| STG | `https://stg-serventia-api.onr.org.br` | `/swagger` |
| Produção | `https://serventia-api.onr.org.br` | `/swagger` |

**Autenticação OAuth2** (host separado): `https://auth.id.onr.org.br/connect/token`

---

## Autenticação nas requisições

Todas as rotas abaixo (exceto o token) exigem:

```http
Authorization: Bearer {access_token}
Content-Type: application/json
```

Credenciais `client_id` / `client_secret`: portais CNIB → **Usuários → Acesso API**

| Ambiente | Portal |
|----------|--------|
| STG | https://stg-indisponibilidade.onr.org.br |
| Produção | https://indisponibilidade.onr.org.br |

---

## Mapa de endpoints (versão atual)

| Código | Método | Caminho | Uso |
|--------|--------|---------|-----|
| CNIB-01 | `POST` | `https://auth.id.onr.org.br/connect/token` | [[CNIB-01-autenticacao]] |
| CNIB-02 | `POST` | `/api/ordem/consultar` | [[CNIB-02-consultar]] |
| CNIB-03 | `POST` | `/api/v2/ordem/visualizar` | [[CNIB-03-visualizar-ordens]] |
| CNIB-04 | `POST` | `/api/ordem/responder` | [[CNIB-04-responder-ordem]] |
| CNIB-05 | `POST` | `/api/ordem/responder/lista` | [[CNIB-05-responder-lista]] |
| CNIB-06 | `POST` | `/api/documentos/tipos` | [[CNIB-06-documentos-tipos]] |

### Legado (evitar em código novo)

| Caminho | Substituído por |
|---------|-----------------|
| `POST /api/ordem/visualizar` | `POST /api/v2/ordem/visualizar` |

Diferenças: paginação explícita (máx. **500**/página vs. lotes de **1000** + `totalordensrestantes`), regras de `null` sem aspas, JSON de resposta padronizado. Detalhes em [[CNIB-03-visualizar-ordens#Endpoint legado v1]].

---

## Envelope de resposta comum

A maioria das rotas retorna:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `identifierRequest` | string (uuid) | ID da requisição |
| `success` | boolean | Indicador de sucesso |
| `message` | string | Mensagem legível |
| `status` | integer | Código HTTP lógico |
| `data` | object \| string | Payload ou mensagem quando vazio |
| `notifications` | array | Erros de validação (400) |

Ver [[dominio/envelope-resposta]].

---

## Domínios

| Tabela | Nota |
|--------|------|
| `tipo_matricula` | [[dominio/tipo-matricula]] |

---

## Atores

Registros de Imóveis, Registros Civis, Tabeliães de Notas (conforme manual ONR).

---

## Referências externas

- Wiki v2: [Integração Externa — API SERVENTIAS v1/v2](https://dev.azure.com/ONR-SAEC/ONR-CNIB/_wiki/wikis/ONR-CNIB/5487/Integração-Externa-Serventias-Extrajudiciais-(API-SERVENTIAS-Nova-Versão-v1-v2))
- Wiki v1: [Integração Externa — Serventias](https://dev.azure.com/ONR-SAEC/ONR-CNIB/_wiki/wikis/ONR-CNIB/808/Integração-Externa-Serventias-Extrajudiciais)
- Swagger produção: https://serventia-api.onr.org.br/swagger/index.html
