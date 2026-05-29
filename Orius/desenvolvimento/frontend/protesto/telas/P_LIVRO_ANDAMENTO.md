---
tipo: frontend-tela
area: orius
produto: protesto
tabela: P_LIVRO_ANDAMENTO
status: implementado
---

# Frontend — P_LIVRO_ANDAMENTO

> API: [[Orius/desenvolvimento/api/protesto/rotas/P_LIVRO_ANDAMENTO]]
> Índice: [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]]
> Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_LIVRO_ANDAMENTO]]

## Escopo entregue

| Tela / fluxo | Operação API |
|--------------|--------------|
| Listagem paginada com filtros | INDEX |
| Detalhe do registro | SHOW |
| Formulário de inclusão | SAVE |
| Formulário de alteração | UPDATE |
| Confirmação e exclusão | DELETE |

## API consumida

`/administrativo/p_livro_andamento`

## Fluxos extras na UI

- **Proximo Numero Livro** — integração com `GET administrativo/p_livro_andamento/proximo-numero-livro/{id}`
- **Finalizar** — integração com `PUT administrativo/p_livro_andamento/finalizar/{id}`

## Plane

- Backend: `[Backend] - CRUD P_LIVRO_ANDAMENTO` (Done)
- Frontend: `[Frontend] - CRUD P_LIVRO_ANDAMENTO` (Done)
