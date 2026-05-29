---
tipo: frontend-tela
area: orius
produto: protesto
tabela: P_ANDAMENTO
status: implementado
---

# Frontend — P_ANDAMENTO

> API: [[Orius/desenvolvimento/api/protesto/rotas/P_ANDAMENTO]]
> Índice: [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]]
> Schema: [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/P_ANDAMENTO]]

## Escopo entregue

| Tela / fluxo | Operação API |
|--------------|--------------|
| Listagem paginada com filtros | INDEX |
| Detalhe do registro | SHOW |
| Formulário de inclusão | SAVE |
| Formulário de alteração | UPDATE |
| Confirmação e exclusão | DELETE |

## API consumida

`/administrativo/p_andamento`

## Fluxos extras na UI

- **All by Titulo (include ocorrencia)** — integração com `GET administrativo/p_andamento/titulo/316261`

## Plane

- Backend: `[Backend] - CRUD P_ANDAMENTO` (Done)
- Frontend: `[Frontend] - CRUD P_ANDAMENTO` (Done)
