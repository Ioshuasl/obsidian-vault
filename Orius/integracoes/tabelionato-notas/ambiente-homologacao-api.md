---
tipo: credenciais
area: orius
produto: notas
ambiente: homologacao
tags: [orius, notas, homologacao, api-key, ccn, censec, e-notariado, credenciais]
status: revisado
atualizado: 2026-05-29
---

# Integração por API — ambiente de homologação

Dados fornecidos para **testes de integração por API** no ambiente de homologação (Orius / cartório de testes).

> **Atenção:** esta nota contém **chaves de API**. Mantenha o cofre privado (OneDrive pessoal). Não commitar em repositório público nem compartilhar fora da equipe.

> **Índice Notas:** [[Orius/integracoes/tabelionato-notas/00-indice]]

## Dados comuns

| Campo | Valor |
|-------|-------|
| **CNS (homologação)** | `995936` |

Usar este CNS no payload JSON da CENSEC (`cns`) e onde a integração exigir identificação do cartório de teste.

---

## CCN — Cadastro de pessoas

| Campo | Valor |
|-------|-------|
| **Módulo** | CCN (e-notariado) |
| **URL base** | `https://pessoas-hml.e-notariado.org.br/` |
| **Swagger** | https://pessoas-hml.e-notariado.org.br/swagger/index.html |
| **API Key** (`X-Api-Key`) | Ver bloco abaixo |
| **Id do cartório** (`X-Subscription`) | `d2efe9cc-23f9-4bd2-06c0-08ddf76de010` |

```
ORIUS TECNOLOGIA  GOIANIAGO|6e4aef5e74f09a4ebf029655e893c93812ecbf62179d6458911582e20a96c021
```

**Headers nas requisições:**

| Header | Uso |
|--------|-----|
| `X-Api-Key` | Chave completa (nome do app + `|` + token) |
| `X-Subscription` | Id do cartório — obrigatório em `POST /api/imports` |

Documentação técnica: [[Orius/integracoes/tabelionato-notas/ccn]] · Central: [[Orius/integracoes/centrais/ccn]]

---

## CENSEC — transmissão JSON

| Campo | Valor |
|-------|-------|
| **Sistema** | CENSEC |
| **URL base** | `https://hml.censec.org.br/` |
| **Swagger (HML)** | https://hml.censec.org.br/swagger/index.html |
| **Upload JSON** | `POST https://hml.censec.org.br/api/cargas/upload-json` |
| **API Key** (`X-Api-Key`) | Ver bloco abaixo |
| **Id do cartório** | `2d25345a-8b82-4f93-5757-08ddfb6856c0` |

```
ORIUS TECNOLOGIA   GOIANIAGO|2612740d82dfcc4a8a41e6ba22944c7a16090bc6c194d2099375aad63765f401
```

No body JSON, usar **`cns`: `995936`** (CNS de homologação acima).

Documentação: [[Orius/integracoes/tabelionato-notas/censec/visao-geral-e-api]] · Automação n8n: [[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway]] · Central: [[Orius/integracoes/centrais/censec]]

---

## Fluxo de Assinaturas (e-notariado)

| Campo | Valor |
|-------|-------|
| **Módulo** | Fluxo de Assinaturas |
| **URL base** | `https://assinatura-hml.e-notariado.org.br/` |
| **API Key** | Gerar no portal conforme documentação oficial do módulo (mesmo fluxo de criação de chave do e-notariado) |

Documentação: [[Orius/integracoes/tabelionato-notas/fluxo-assinaturas]]

---

## Checklist rápido (dev / Postman / n8n)

| Integração | Base HML | Header principal | Id cartório |
|------------|----------|------------------|-------------|
| CCN | `pessoas-hml.e-notariado.org.br` | `X-Api-Key` + `X-Subscription` | `d2efe9cc-23f9-4bd2-06c0-08ddf76de010` |
| CENSEC | `hml.censec.org.br` | `X-Api-Key` | `2d25345a-8b82-4f93-5757-08ddfb6856c0` |
| Assinaturas | `assinatura-hml.e-notariado.org.br` | _(gerar chave)_ | — |

Produção: usar URLs e chaves do cartório real — **não** reutilizar estes valores.
