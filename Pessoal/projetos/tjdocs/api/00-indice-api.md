---
tipo: indice
area: pessoal
projeto: tjdocs
tags: [pessoal, tjdocs, api]
---

# API TJDocs — índice

**Base:** `https://tjdocs-backend.tjgo.jus.br/v1`  
**Convenções:** [[Pessoal/projetos/tjdocs/api/base-url-e-convencoes]]  
**Endpoints (sua documentação):** [[Pessoal/projetos/tjdocs/api/endpoints/00-indice-endpoints]]

## Endpoints documentados

| Endpoint | Nota |
|----------|------|
| POST `/v1/consulta/busca-avancada-nova` | [[Pessoal/projetos/tjdocs/api/endpoints/consulta-busca-avancada-nova]] — listar documentos |
| GET `/documentos/{id}` | [[Pessoal/projetos/tjdocs/api/endpoints/documentos-por-id]] — detalhe + `urlUploadPdf` |

## Referências

- [[Pessoal/projetos/tjdocs/api/tipos-documento]] — slugs `tipoDocumento` no body
- [[Pessoal/projetos/tjdocs/api/recursos/pastas]] — árvore de pastas (GET, resposta pesada)

## Recursos por domínio

| Domínio | Nota |
|---------|------|
| Documentos | [[Pessoal/projetos/tjdocs/api/recursos/documentos]] |
| Ofícios | [[Pessoal/projetos/tjdocs/api/recursos/oficios]] |
| Ofícios eletrônicos | [[Pessoal/projetos/tjdocs/api/recursos/oficios-eletronicos]] |
| Provimentos | [[Pessoal/projetos/tjdocs/api/recursos/provimentos]] |

## Log de exploração

| Data | Ação | Resultado |
|------|------|-----------|
| 2026-05-29 | GET `/v1` | `_links.pastas` |
| 2026-05-29 | GET `/v1/pastas` | **200** — HAL `_embedded.pastas[]` (~13 MB) |
| 2026-05-29 | GET `/v1/documentos` | **405** |
| 2026-05-29 | POST `/consulta/busca-avancada-nova` | **200** — `value[]`; ~1023 itens (só tipo); ~278 (tipo+ano 2026/2025) |
| 2026-05-29 | GET `/documentos/922437` | **200** — detalhe + `urlUploadPdf`; `/v1/documentos/{id}` também OK |

Projeto: [[Pessoal/projetos/tjdocs/00-indice]]
