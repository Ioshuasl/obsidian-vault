---
tipo: indice
area: pessoal
projeto: tjdocs
tags: [pessoal, projeto, tjdocs, tjgo, api]
status: em-andamento
---

# Projeto — TJDocs (consumidor API)

Cliente/consumidor da API pública do **TJDocs** (Tribunal de Justiça de Goiás) para publicações institucionais.

## Visão rápida

| Item | Valor |
|------|-------|
| **API base** | `https://tjdocs-backend.tjgo.jus.br/v1` |
| **Autenticação** | Nenhuma nos endpoints que este projeto usa |
| **Domínio** | Documentos, ofícios, ofícios eletrônicos, provimentos |
| **Formato API** | JSON com `_links` (estilo HAL) — ver [[Pessoal/projetos/tjdocs/api/base-url-e-convencoes]] |

## Documentação

- [[Pessoal/projetos/tjdocs/visao-geral]] — objetivo, escopo, glossário
- [[Pessoal/projetos/tjdocs/api/00-indice-api]] — endpoints e recursos
- [[Pessoal/projetos/tjdocs/arquitetura]] — como o seu app consome a API (a preencher)

## Endpoints documentados

| Endpoint | Nota |
|----------|------|
| POST busca avançada | [[Pessoal/projetos/tjdocs/api/endpoints/consulta-busca-avancada-nova]] |
| GET documento + PDF | [[Pessoal/projetos/tjdocs/api/endpoints/documentos-por-id]] |

Índice completo: [[Pessoal/projetos/tjdocs/api/endpoints/00-indice-endpoints]]

## Recursos da API (publicação TJ)

| Tipo | Nota |
|------|------|
| Pastas | [[Pessoal/projetos/tjdocs/api/recursos/pastas]] |
| Documentos | [[Pessoal/projetos/tjdocs/api/recursos/documentos]] — via busca avançada |
| Ofícios | [[Pessoal/projetos/tjdocs/api/recursos/oficios]] |
| Ofícios eletrônicos | [[Pessoal/projetos/tjdocs/api/recursos/oficios-eletronicos]] |
| Provimentos | [[Pessoal/projetos/tjdocs/api/recursos/provimentos]] |

## Pendências

- [ ] Documentar próximos endpoints que você for consumir
- [ ] Confirmar slugs `oficio` / `oficio_circular` vs rótulo na resposta
- [ ] Documentar payloads de exemplo
- [ ] Definir stack do consumidor (n8n, Node, Python, etc.)
- [ ] Rate limit / boas práticas de uso (se houver na prática)

Voltar: [[Pessoal/projetos/00-indice-projetos]] · [[Pessoal/00-indice]]
