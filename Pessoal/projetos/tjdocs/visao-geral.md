---
tipo: documentacao
area: pessoal
projeto: tjdocs
tags: [pessoal, tjdocs, tjgo, publicacao]
---

# TJDocs — visão geral

## O que é o TJDocs (contexto)

Sistema do **Tribunal de Justiça do Estado de Goiás (TJGO)** para **publicar** material oficial na web, incluindo:

- **Documentos**
- **Ofícios**
- **Ofícios eletrônicos**
- **Provimentos**

A API backend expõe esses conteúdos para consulta/consumo por outros sistemas.

## Este projeto (seu consumidor)

**Objetivo:** construir um projeto pessoal que **consome** a API em:

`https://tjdocs-backend.tjgo.jus.br/v1`

**Premissa informada:** os endpoints que você vai usar **não exigem autenticação**.

## O que NÃO é

- Não é integração Orius/cartório
- Não é o sistema interno de publicação do TJ — apenas **leitura/consumo** via API pública (no escopo que você definir)

## Glossário

| Termo | Significado |
|-------|-------------|
| TJDocs | Plataforma de documentos/publicações do TJGO |
| Ofício | Comunicação oficial do tribunal |
| Ofício eletrônico | Modalidade eletrônica do ofício |
| Provimento | Ato normativo / administrativo de organização do tribunal |
| Pasta | Agrupamento lógico na API (`/v1/pastas`) |

## Links

- API: [[Pessoal/projetos/tjdocs/api/00-indice-api]]
- Índice do projeto: [[Pessoal/projetos/tjdocs/00-indice]]
