---
tipo: api-rota
area: orius
produto: protesto
tabela: P_ARQUIVO_TITULO
status: implementado
fonte: postman
---

# API — P_ARQUIVO_TITULO

> Produto: [[Orius/empresa/produtos/tabelionato-protesto]] · Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_ARQUIVO_TITULO]]
> Índice: [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]

## Prefixo

`/administrativo/p_arquivo_titulo`

## Endpoints

| Operação | Método | Request Postman | Path |
|----------|--------|-----------------|------|
| **INDEX** | GET | All | `administrativo/p_arquivo_titulo` |
| **SHOW** | GET | Get | `administrativo/p_arquivo_titulo/{id}` |
| **SAVE** | POST | Create | `administrativo/p_arquivo_titulo` |
| **UPDATE** | PUT | Update | `administrativo/p_arquivo_titulo/{id}` |
| **DELETE** | DELETE | Delete | `administrativo/p_arquivo_titulo/{id}` |

### Rotas extras

- **Get Texto** — `GET` `administrativo/p_arquivo_titulo/{id}/texto`
- **Get Texto Importado** — `GET` `administrativo/p_arquivo_titulo/{id}/texto_importado`

## Plane

Card: `[Backend] - CRUD P_ARQUIVO_TITULO` (projeto PROTESTO).
