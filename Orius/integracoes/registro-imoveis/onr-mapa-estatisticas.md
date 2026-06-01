---
tipo: integracao
area: orius
produto: imoveis
central: onr
tags: [orius, imoveis, onr, mapa, estatisticas, doi, hub]
status: revisado
criado: 2026-06-01
fonte: cursor
---

> **Produto:** [[Orius/empresa/produtos/registro-imoveis|Registro de Imóveis]] · **Índice:** [[Orius/integracoes/registro-imoveis/00-indice|Integrações RI]]
> **Central:** [[Orius/integracoes/centrais/onr|ONR]]
> **Outra API do Mapa:** [[Orius/integracoes/registro-imoveis/onr-mapa-api-poligonos|polígonos / SIG-RI]] — não confundir

---

# Mapa e Estatísticas ONR — hub

Integração REST para envio de **DOI** (formato extratos ou DOIWEB) ao Mapa do Registro de Imóveis e ao painel de estatísticas do ONR.

**Base URL (produção):** `https://mapa.onr.org.br/api-estatisticas`

## Documentação (vault)

| Documento | Uso |
|-----------|-----|
| [[Orius/integracoes/registro-imoveis/onr-mapa-estatisticas-guia|Guia para leigos]] | Fluxo completo: chave, token, hash, 3 endpoints, exemplos |
| [[Orius/integracoes/registro-imoveis/onr-mapa-estatisticas-referencia-api|Referência API]] | Endpoints, bodies e respostas (formato resumido) |
| [[Orius/integracoes/registro-imoveis/onr-mapa-estatisticas.postman-collection.json|Postman collection]] | Coleção para testes manuais |

## Fluxo em uma linha

Intranet (Chave API Estatísticas) → `POST /auth` (token) → `hash = SHA1(token+chave)` → `POST /enviar-arquivo` → `GET /consultar-arquivo/{uuid}`

## Repositório de automação

Arquivos espelho e PDF convertido: `c:\Users\kenio\automacoes e testes\mapa-onr\`

| Arquivo | Conteúdo |
|---------|----------|
| `guia-api-mapa-estatisticas-para-leigos.md` | Espelho do guia |
| `Mapa_e_Estat_sticas_ONR.md` | Espelho da referência |
| `mapa-onr.postman-collection.json` | Espelho Postman |
| `documentacao-api-mapa-estatisticas.md` | PDF oficial convertido (validações seção 6) |

## Ver também

- [[Orius/integracoes/registro-imoveis/onr/00-indice-onr]] · [[Orius/integracoes/centrais/onr]]
