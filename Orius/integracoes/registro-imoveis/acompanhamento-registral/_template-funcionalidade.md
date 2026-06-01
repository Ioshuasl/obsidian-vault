---
tipo: integracao
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, api, acompanhamento-registral, TEMPLATE]
codigo: XXX-00
manual: v2.2
status: rascunho
---

> **Índice:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/00-indice]]
> **Visão geral:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/visao-geral]]
> **Autenticação:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFG-01-autenticacao]]

# [XXX-00] — Título curto da funcionalidade

**Uma frase:** o que o cartório consegue fazer com esta API.

---

## Endpoints

| Método | Caminho | Descrição |
|--------|---------|-----------|
| | | |

**Base:** produção `https://api.registrodeimoveis.org.br` · homologação `https://testes-api.registrodeimoveis.org.br`

---

## Pré-requisitos

- [ ] Token JWT ([[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFG-01-autenticacao|RFG-01]])
- [ ] Credenciais em [[env]]
- [ ] Domínios: <!-- links [[dominio/TBD-xx]] -->

---

## Request

### Headers

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| `Authorization` | Sim | `Bearer {access_token}` |

### Body / query / path

<!-- tabela de campos ou exemplo JSON -->

```json
{
}
```

---

## Response

### Sucesso

```json
{
}
```

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| | | | |

### Erros

Padrão RIB: `codigo`, `descricao`, `campos` — ver [[Orius/integracoes/registro-imoveis/acompanhamento-registral/visao-geral#Formato das respostas]].

| Situação | Observação |
|----------|------------|
| | |

---

## Regras de negócio / observações Orius

- 

---

## Relacionado

- Fluxo: <!-- FFP-xx -->
- Depende de: <!-- RFP-xx, RFC-xx -->
- Manual bruto (repo): `api-registro-imoveis/manual-api-acompanhamento-registral-pagamentos-v2.2.md` — seção `[XXX-00]`

---

## Histórico desta nota

| Data | Alteração |
|------|-----------|
| | Criação a partir do manual v2.2 |
