---
tipo: integracao
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, api, atendimento-eletronico, exigencia, RAE-01]
codigo: RAE-01
manual: v2.2
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/00-indice]]
> **Autenticação:** [[RFG-01-autenticacao]]
> **Detalhe:** [[RAE-02-detalhes-resposta-exigencia]] · **Registrar interação:** [[RAE-03-cadastro-interacao]]

# [RAE-01] — Listagem da resposta de exigência

**Uma frase:** o cartório **lista atendimentos eletrônicos** (incluindo respostas de exigência do acompanhamento registral) com paginação e filtros, para importar no sistema interno — o histórico completo fica em [[RAE-02-detalhes-resposta-exigencia]] (`GET /v1/atendimento/eletronico/{id}`).

---

## Pré-requisitos

- [x] Token JWT — [[RFG-01-autenticacao]]
- [ ] Credenciais em [[env]]
- [ ] Domínios de filtro/resposta: [[dominio/TBD-07-aetipo-atendimento]], [[dominio/TBD-08-aesituacao]]

---

## Endpoint

| Método | Caminho | Descrição |
|--------|---------|-----------|
| `GET` | `/v1/atendimento/eletronico` | Listagem paginada |

**Produção:** `https://api.registrodeimoveis.org.br/v1/atendimento/eletronico`  
**Homologação:** `https://testes-api.registrodeimoveis.org.br/v1/atendimento/eletronico`

---

## Request

### Headers

| Campo | Obrigatório |
|-------|-------------|
| `Authorization` | Sim — `Bearer {access_token}` |

### Query (todos opcionais)

| Parâmetro | Tipo | Tam. | Descrição |
|-----------|------|------|-----------|
| `registrosPorPagina` | int | 3 | Padrão **50**, máximo **100** |
| `numeroPagina` | int | — | Número da página |
| `tipoAtendimento` | int | 3 | [[dominio/TBD-07-aetipo-atendimento]] — ex.: `91` = resposta de exigência |
| `status` | int | 3 | [[dominio/TBD-08-aesituacao]] |
| `dataInicialCadastro` | date | 10 | Início do cadastro |
| `dataFinalCadastro` | date | 10 | Fim do cadastro |
| `dataInicialAtualizacao` | date | 10 | Início da última atualização |
| `dataFinalAtualizacao` | date | 10 | Fim da última atualização |
| `documento` | string | 19 | CPF ou CNPJ do solicitante |
| `protocolo` | string | 150 | Protocolo informado na plataforma |

**Exemplo (exigências recentes):**

```http
GET /v1/atendimento/eletronico?tipoAtendimento=91&registrosPorPagina=50&numeroPagina=1
Authorization: Bearer …
```

---

## Response

### Sucesso

```json
{
  "totalRegistros": 0,
  "totalPaginas": 0,
  "paginaAtual": 1,
  "dados": [
    {
      "id": 12345,
      "idCartorio": 999,
      "protocolo": "2024/000123",
      "tipoAtendimento": 91,
      "tipoAtendimentoDescricao": "Resposta de exigência",
      "status": 1,
      "statusDescricao": "Em aberto",
      "dataCadastro": "2024-08-04 10:00:00",
      "dataAtualizacao": "2024-08-05 14:30:00",
      "usuarioNome": "Fulano de Tal",
      "usuarioCpf": "00000000000",
      "usuarioEmail": "cliente@exemplo.com"
    }
  ]
}
```

### Raiz

| Campo | Obrig. | Descrição |
|-------|--------|-----------|
| `totalRegistros` | Sim | Total encontrado |
| `totalPaginas` | Sim | Total de páginas |
| `paginaAtual` | Sim | Página retornada |
| `dados` | Sim | Lista resumida de atendimentos |

> O manual descreve `dados` como “tipos de cobranças” — **erro de cópia** do bloco RFC; o array contém **atendimentos eletrônicos**.

### Item `dados[]`

| Campo | Tam. | Obrig. | Descrição |
|-------|------|--------|-----------|
| `id` | 11 | Sim | ID interno — usar em [[RAE-02-detalhes-resposta-exigencia]] e [[RAE-03-cadastro-interacao]] |
| `idCartorio` | 10 | Sim | Cartório de destino |
| `protocolo` | 150 | Não | Protocolo na plataforma |
| `tipoAtendimento` | 3 | Sim | [[dominio/TBD-07-aetipo-atendimento]] |
| `tipoAtendimentoDescricao` | 150 | Sim | Texto legível do tipo |
| `status` | 3 | Sim | [[dominio/TBD-08-aesituacao]] |
| `statusDescricao` | 150 | Sim | Texto legível da situação |
| `dataCadastro` | 19 | Sim | Data/hora de cadastro |
| `dataAtualizacao` | 19 | Sim | Última atualização |
| `usuarioNome` | 200 | Sim | Solicitante |
| `usuarioCpf` | 20 | Sim | CPF/CNPJ do solicitante |
| `usuarioEmail` | 200 | Sim | E-mail do solicitante |

Esta listagem **não** traz `interacoes`, anexos nem campos de contato estendidos — apenas no detalhe (RAE-02).

### Erros

Padrão RIB: `codigo`, `descricao`, `campos` — ver [[visao-geral#Formato das respostas]].

```json
{
  "codigo": "0",
  "descricao": "string",
  "campos": {}
}
```

---

## Regras de negócio / observações Orius

- Fluxo típico: **RAE-01** (descobrir `id`) → **RAE-02** (mensagens e PDFs) → **RAE-03** (confirmar recebimento / em análise).
- Para foco em exigências do acompanhamento registral, filtrar `tipoAtendimento=91` ([[dominio/TBD-07-aetipo-atendimento]]).
- Cruzar `protocolo` com protocolos importados via RFP ([[RFP-05-listagem-protocolos]], [[RFP-06-detalhe-protocolo-v1]], [[RFP-07-detalhe-protocolo-v2]]) quando o número coincidir.
- Implementar paginação até `paginaAtual` = `totalPaginas`.

---

## Relacionado

- Próximo passo: [[RAE-02-detalhes-resposta-exigencia]]
- Domínios: [[dominio/00-indice-dominio]]
- Manual bruto: `api-registro-imoveis/manual-api-api-registro-imoveis-pagamentos-v2.2.md` — `[RAE-01]` (PDF v2.2, pág. 85)

---

## Histórico desta nota

| Data | Alteração |
|------|-----------|
| 2026-06-01 | Criação a partir do manual v2.2 |
