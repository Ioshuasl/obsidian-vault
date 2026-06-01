---
tipo: fluxo
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, api, protocolo, fluxo, fila, FFP-02]
codigo: FFP-02
manual: v2.2
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/00-indice]]
> **Envio:** [[FFP-01-fluxo-envio-protocolo]]
> **Polling da fila (cartório):** [[RFP-02-envio-lote]]

# [FFP-02] — Fluxo de processamento do protocolo

**Uma frase:** o que a plataforma RIB executa **em background** (RabbitMQ) após o envio em lote — cadastro ou atualização do protocolo/status, cobrança opcional e download de anexos — e como o cartório acompanha via **situação da fila** ([[dominio/TBD-04-acfila-situacao]]).

> Diagrama oficial manual v2.2, pág. 64 (“Função processamento do acompanhamento / RabbitMQ”). O cartório **não** consome RabbitMQ; usa `GET /v1/fila/processamento/protocolo/{hashFila}`.

---

## Atores

| Ator | Papel |
|------|--------|
| **Worker RIB** | Consome mensagens RabbitMQ |
| **API / BD** | Persiste protocolo, status, logs, fila |
| **Cartório** | Consulta `situacao` da fila até finalizar |

---

## Diagrama (manual)

```mermaid
flowchart TB
  START[Recebe solicitação via RabbitMQ]
  Q1{Existe fila pendente?}
  FIM[FIM]
  Q2[Atualiza fila: em processamento]
  P1[Inicia cadastramento + formata campos]
  Q3{Protocolo já existente?}
  N1[Cadastra protocolo]
  N2[Cadastra status]
  E1{Data nova solicitação mais nova que a gravada?}
  E2[Grava log na base]
  E3[Sobrescreve dados do protocolo]
  E4[Sobrescreve status]
  C1{Existe dados para cobrança?}
  C2[Finaliza processo cobrança]
  C3[Envia geração cobrança → RabbitMQ]
  C4{Enviou?}
  C5[Grava log erro]
  C6{Atingiu 3 tentativas?}
  C7[Notifica equipe suporte]
  A1{Existe arquivo anexado?}
  A2[Download do arquivo]
  A3{Erro download?}
  A4[Grava log]
  A5[Vincula arquivo ao protocolo e status]
  U1[Atualiza situação da fila]

  START --> Q1
  Q1 -->|Não| FIM
  Q1 -->|Sim| Q2 --> P1 --> Q3
  Q3 -->|Não| N1 --> N2
  Q3 -->|Sim| E1
  E1 -->|Não| E2 --> U1
  E1 -->|Sim| E3 --> E4
  N2 --> C1
  E4 --> C1
  C1 -->|Não| C2 --> A1
  C1 -->|Sim| C3 --> C4
  C4 -->|Sim| C2
  C4 -->|Não| C5 --> C6
  C6 -->|Não| C3
  C6 -->|Sim| C7 --> A1
  A1 -->|Não| U1
  A1 -->|Sim| A2 --> A3
  A3 -->|Sim| A4 --> U1
  A3 -->|Não| A5 --> U1
  U1 --> FIM
```

---

## Passos — lado plataforma

| Etapa | Comportamento |
|-------|----------------|
| Entrada | Mensagem na fila RabbitMQ (após [[FFP-01-fluxo-envio-protocolo]]) |
| Sem fila pendente | Encerra (`FIM`) |
| Em processamento | `situacao` = **1** ([[dominio/TBD-04-acfila-situacao]]) |
| Protocolo novo | Cadastra protocolo + status |
| Protocolo existente | Só atualiza se a **data da nova solicitação for mais recente**; senão apenas log |
| Atualização | Sobrescreve dados do protocolo e do status |
| Cobrança | Se houver dados: enfileira geração; até **3 tentativas**; falha persistente → suporte RIB |
| Anexo | Download da `url` enviada no lote; vincula ao protocolo/status; erro → log |
| Fim | Atualiza situação da fila: **2** sucesso, **3** alertas ou **4** erros |

---

## Passos — lado cartório (acompanhamento)

| `situacao` (TBD-04) | Ação |
|---------------------|------|
| 0 Pendente / 1 Em processamento | `GET /v1/fila/processamento/protocolo/{hashFila}` em intervalo (polling) |
| 2 Processado com sucesso | [[RFP-05-listagem-protocolos]] → [[RFP-06-detalhe-protocolo-v1]] ou [[RFP-07-detalhe-protocolo-v2]] |
| 3 Processado com alertas | Revisar `alertas` do POST + `historico` da fila |
| 4 Processado com erros | Tratar operacionalmente; possível reenvio de lote |

```mermaid
sequenceDiagram
  participant C as Cartório
  participant API as API RIB
  participant Q as RabbitMQ worker
  C->>API: POST /v1/protocolo/lote
  API-->>C: hashFila
  API->>Q: mensagem
  loop polling
    C->>API: GET fila/{hashFila}
    API-->>C: situacao, historico
  end
  Q->>Q: FFP-02 processamento
  Note over C: situacao 2/3/4 → consultar protocolos
```

---

## Mapeamento para APIs documentadas

| Trecho do diagrama | Nota / endpoint |
|------------------|-----------------|
| Geração de cobrança | [[RFC-01-geracao-cobranca]], objeto `cobranca` no lote ([[RFP-01-envio-online#Objeto cobranca]]), [[RFP-03-cobranca-automatizada]] |
| Download anexo | `arquivos[].url` em [[RFP-02-envio-lote]] |
| Situação do protocolo após sucesso | [[dominio/TBD-03-accodigo-status]] em `status` |
| Atualizar protocolo depois | Novos POSTs (regra de data) ou consulta RFP-05/06/07 |
| Excluir | [[RFP-04-exclusao-protocolo]] |
| Exigência (parte) | [[RAE-01-listagem-resposta-exigencia]] … (fora deste worker, mas no ciclo de vida do título) |

---

## Regras de negócio / observações Orius

| Tema | Detalhe |
|------|---------|
| **Idempotência / ordem** | Solicitações antigas (data menor) não sobrescrevem registro mais novo — apenas log |
| **3 tentativas cobrança** | Paralelo ao webhook RFC (3 tentativas de notificação ao cartório) — conceitos diferentes |
| **Envio online (RFP-01)** | Não passa por este diagrama de fila da mesma forma; processamento é imediato na resposta HTTP |
| **Homologação** | Validar tempos de fila e códigos `situacao` com lote real |

---

## Relacionado

- Anterior: [[FFP-01-fluxo-envio-protocolo]]
- [[dominio/TBD-04-acfila-situacao]]
- Manual: `[FFP-02]` — PDF pág. 64

---

## Histórico desta nota

| Data | Alteração |
|------|-----------|
| 2026-06-01 | Diagrama extraído do PDF v2.2; mapeamento RFP/RFC/RAE |
