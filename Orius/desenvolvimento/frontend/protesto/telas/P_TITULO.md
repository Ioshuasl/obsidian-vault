---
tipo: frontend-tela
area: orius
produto: protesto
tabela: P_TITULO
status: implementado
---

# Frontend — P_TITULO

> API: [[Orius/desenvolvimento/api/protesto/rotas/P_TITULO]]
> Índice: [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]]
> Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_TITULO]]

## Escopo entregue

| Tela / fluxo | Operação API |
|--------------|--------------|
| Listagem paginada com filtros | INDEX |
| Detalhe do registro | SHOW |
| Formulário de inclusão | SAVE |
| Formulário de alteração | UPDATE |
| Confirmação e exclusão | DELETE |

## API consumida

`/administrativo/p_titulo`

## Fluxos extras na UI

- **Selos** — integração com `GET administrativo/p_titulo/{id}/selos`

## Plane

- Backend: `[Backend] - CRUD P_TITULO` (Done)
- Frontend: `[Frontend] - CRUD P_TITULO` (Done)
