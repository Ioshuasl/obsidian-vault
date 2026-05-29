---
tipo: frontend-tela
area: orius
produto: protesto
tabela: P_ARQUIVO_TITULO
status: implementado
---

# Frontend — P_ARQUIVO_TITULO

> API: [[Orius/desenvolvimento/api/protesto/rotas/P_ARQUIVO_TITULO]]
> Índice: [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]]
> Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_ARQUIVO_TITULO]]

## Escopo entregue

| Tela / fluxo | Operação API |
|--------------|--------------|
| Listagem paginada com filtros | INDEX |
| Detalhe do registro | SHOW |
| Formulário de inclusão | SAVE |
| Formulário de alteração | UPDATE |
| Confirmação e exclusão | DELETE |

## API consumida

`/administrativo/p_arquivo_titulo`

## Fluxos extras na UI

- **Get Texto** — integração com `GET administrativo/p_arquivo_titulo/{id}/texto`
- **Get Texto Importado** — integração com `GET administrativo/p_arquivo_titulo/{id}/texto_importado`

## Plane

- Backend: `[Backend] - CRUD P_ARQUIVO_TITULO` (Done)
- Frontend: `[Frontend] - CRUD P_ARQUIVO_TITULO` (Done)
