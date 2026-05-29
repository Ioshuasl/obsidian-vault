---
tipo: api-recurso
area: pessoal
projeto: tjdocs
recurso: documentos
tags: [pessoal, tjdocs, api, documentos]
status: revisado
---

# Documentos (publicações TJGO)

## Fluxo completo (listar → PDF)

| Passo | Endpoint | O que obter |
|-------|----------|-------------|
| 1 | [[Pessoal/projetos/tjdocs/api/endpoints/consulta-busca-avancada-nova\|POST busca-avancada-nova]] | `value[].id` (e metadados resumidos) |
| 2 | [[Pessoal/projetos/tjdocs/api/endpoints/documentos-por-id\|GET /documentos/{id}]] | **`urlUploadPdf`** (link do PDF) |

## GET `/documentos/{id}`

Base: `https://tjdocs-backend.tjgo.jus.br/documentos/{id}` (sem `/v1` no path; `/v1/documentos/{id}` também funciona).

Campo essencial: **`urlUploadPdf`**.

## GET `/v1/documentos` (listagem direta)

`GET /v1/documentos` retorna **405** — não usar.

## Relacionado

- [[Pessoal/projetos/tjdocs/api/tipos-documento]]
- [[Pessoal/projetos/tjdocs/api/00-indice-api]]
