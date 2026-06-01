---
tipo: integracao
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, api, protocolo, consulta, RFP-05]
codigo: RFP-05
manual: v2.2
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/00-indice]]
> **Detalhe completo:** [[RFP-06-detalhe-protocolo-v1]] · [[RFP-07-detalhe-protocolo-v2]] (pendente)
> **Autenticação:** [[RFG-01-autenticacao]]

# [RFP-05] — Listagem dos protocolos integrados

**Uma frase:** consultar **todos os protocolos** já cadastrados no RIB com **paginação e filtros**, retornando apenas **dados resumidos** — o detalhamento completo fica em RFP-06 ou RFP-07.

---

## Endpoint

| Método | Caminho | Descrição |
|--------|---------|-----------|
| `GET` | `/v1/protocolo` | Listagem paginada de protocolos |

**Produção:** `https://api.registrodeimoveis.org.br/v1/protocolo`  
**Homologação:** `https://testes-api.registrodeimoveis.org.br/v1/protocolo`

---

## Pré-requisitos

- [x] Token JWT — [[RFG-01-autenticacao]]
- [ ] Para detalhes, anexos ou cobrança: usar `protocolo` retornado em [[RFP-06-detalhe-protocolo-v1]] ou V2

---

## Request

### Headers

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| `Authorization` | Sim | `Bearer {access_token}` |

### Query (todos opcionais)

| Parâmetro | Tipo | Tam. | Descrição |
|-----------|------|------|-----------|
| `registrosPorPagina` | int | 3 | Padrão **50**, máximo **100** |
| `numeroPagina` | int | — | Número da página |
| `tipoSolicitacao` | int | 1 | [[dominio/TBD-02-actipo-solicitacao|ACTipoSolicitacao]] |
| `dataInicialProtocolo` | date | 10 | Filtro data do protocolo (início) |
| `dataFinalProtocolo` | date | 10 | Filtro data do protocolo (fim) |
| `dataInicialStatus` | date | 10 | Filtro data da situação (início) |
| `dataFinalStatus` | date | 10 | Filtro data da situação (fim) |
| `dataInicialCadastro` | date | 10 | Filtro data de cadastro no RIB (início) |
| `dataFinalCadastro` | date | 10 | Filtro data de cadastro no RIB (fim) |
| `cns` | string | 6 | CNS do cartório |
| `documentoApresentante` | string | 14 | CPF/CNPJ do apresentante |
| `documentoInteressado` | string | 14 | CPF/CNPJ do interessado |
| `protocolo` | string | 30 | Número do protocolo no cartório |

> O texto introdutório do manual menciona “máximo 50 por página”; a tabela de query permite até **100** em `registrosPorPagina` — validar em homologação qual limite a API aplica de fato.

**Exemplo:**

```http
GET /v1/protocolo?registrosPorPagina=50&numeroPagina=1&tipoSolicitacao=1&protocolo=2024%2F123456
Authorization: Bearer …
```

---

## Response

### Sucesso

```json
{
  "totalRegistros": 0,
  "totalPaginas": 0,
  "paginaAtual": 0,
  "dados": [
    {
      "protocolo": "2024/123456",
      "codigoSecundario": "string",
      "tipoSolicitacao": 1,
      "datas": {
        "protocolo": "2024-08-04",
        "previsaoEntrega": "2024-08-20"
      },
      "dataCadastro": "2024-08-04 10:00:00",
      "dataAtualizacao": "2024-08-04 11:00:00",
      "usarSenhaDetalhes": true,
      "usarSenhaArquivos": true,
      "status": {
        "codigo": "4",
        "dataStatus": "2024-08-04 10:00:00",
        "mensagem": "string"
      }
    }
  ]
}
```

### Raiz

| Campo | Obrig. | Descrição |
|-------|--------|-----------|
| `totalRegistros` | Sim | Total encontrado |
| `totalPaginas` | Sim | Total de páginas |
| `paginaAtual` | Sim | Página atual |
| `dados` | Sim | Lista resumida de protocolos |

### Item `dados[]`

| Campo | Tipo | Tam. | Descrição |
|-------|------|------|-----------|
| `protocolo` | string | 40* | Número do protocolo no cartório (*manual PDF; JSON de exemplo usa o número) |
| `codigoSecundario` | string | 50 | Código auxiliar |
| `tipoSolicitacao` | int | 1 | [[dominio/TBD-02-actipo-solicitacao]] |
| `datas` | object | — | `protocolo`, `previsaoEntrega` (dates) |
| `dataCadastro` | datetime | 19 | Cadastro no RIB |
| `dataAtualizacao` | datetime | 19 | Última atualização (v2.2) |
| `usarSenhaDetalhes` | boolean | — | Se `true`, detalhe exige token de protocolo ([[RFP-06-detalhe-protocolo-v1#Token de visualização]]) |
| `usarSenhaArquivos` | boolean | — | Se `true`, download exige token de protocolo |
| `status` | object | — | Situação resumida |

### Objeto `status` (listagem)

| Campo | Descrição |
|-------|-----------|
| `codigo` | Situação — [[dominio/TBD-03-accodigo-status]] (retorno como string no JSON de exemplo) |
| `dataStatus` | Data/hora da situação |
| `mensagem` | Mensagem opcional |

### Erro

Padrão: `codigo`, `descricao`, `campos` — [[visao-geral#Formato das respostas]].

---

## Fluxo

```mermaid
flowchart LR
  A[GET /v1/protocolo] --> B{dados[]}
  B --> C[usarSenhaDetalhes?]
  C -->|Sim| D[POST .../token + senha]
  C -->|Não| E[GET .../detalhes]
  D --> E
  E --> F[hashCobranca / arquivos]
```

---

## Regras de negócio

| Regra | Detalhe |
|-------|---------|
| **Somente resumo** | Sem `hashCobranca`, anexos completos ou valores — usar RFP-06/07 |
| **Senha** | Flags `usarSenhaDetalhes` / `usarSenhaArquivos` orientam o fluxo de token |
| **Após lote** | Após RFP-02 processar fila, listar por `dataInicialCadastro` ou `protocolo` |
| **Exclusão** | Protocolo excluído (RFP-04) não deve aparecer |

---

## Relacionado

| Código | Relação |
|--------|---------|
| [[RFP-06-detalhe-protocolo-v1]] | Detalhe API V1 |
| RFP-07 | Detalhe API V2 (pendente) |
| [[RFP-01-envio-online]] / [[RFP-02-envio-lote]] | Cadastro |
| [[RFP-04-exclusao-protocolo]] | Remove da listagem |

**Manual bruto:** `[RFP-05]` (págs. 38–40 do PDF v2.2)

---

## Histórico desta nota

| Data | Alteração |
|------|-----------|
| 2026-06-01 | Extraído do manual v2.2 |
