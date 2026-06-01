---
tipo: indice
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, api, acompanhamento-registral, pagamentos]
manual: v2.2
---

> **Produto:** [[Orius/empresa/produtos/registro-imoveis|Registro de Imóveis]] · **Índice RI:** [[Orius/integracoes/registro-imoveis/00-indice|Integrações RI]]
> **Portal:** [registrodeimoveis.org.br](https://www.registrodeimoveis.org.br) · **Manual oficial:** v2.2 (dez/2025)

# API Acompanhamento Registral + Pagamentos (RIB)

Documentação **Orius** por código de funcionalidade, extraída do manual CORI-BR. A conversão integral do PDF fica no repositório de automações (fonte bruta, não editar à mão).

| Doc | Conteúdo |
|-----|----------|
| Visão geral (URLs, Swagger, auth global) | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/visao-geral]] |
| Template para novas notas | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/_template-funcionalidade]] |
| Tabelas de domínio (TBD) | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/00-indice-dominio]] |

**Credenciais:** [[env]] (seção RIB — quando cadastrada). **Outras APIs no mesmo Swagger:** [[Orius/integracoes/registro-imoveis/rib-cobranca]], [[Orius/integracoes/registro-imoveis/rib-edital]].

---

## Gerais

| Código | Descrição | Nota | Status |
|--------|-----------|------|--------|
| **RFG-01** | Autenticação (token JWT) | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFG-01-autenticacao]] | documentado |

---

## Acompanhamento registral (protocolo)

| Código | Descrição | Nota | Status |
|--------|-----------|------|--------|
| **RFP-01** | Envio online (sem anexo) | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFP-01-envio-online]] | documentado |
| **RFP-02** | Envio em lote (com anexos, background) | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFP-02-envio-lote]] | documentado |
| **RFP-03** | Cobrança automatizada no protocolo | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFP-03-cobranca-automatizada]] | documentado |
| **RFP-04** | Exclusão do protocolo | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFP-04-exclusao-protocolo]] | documentado |
| **RFP-05** | Listagem dos protocolos integrados | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFP-05-listagem-protocolos]] | documentado |
| **RFP-06** | Detalhamento do protocolo — V1 | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFP-06-detalhe-protocolo-v1]] | documentado |
| **RFP-07** | Detalhamento do protocolo — V2 | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFP-07-detalhe-protocolo-v2]] | documentado |

**Fluxos (comportamento, não endpoint isolado):**

| Código | Descrição | Nota | Status |
|--------|-----------|------|--------|
| **FFP-01** | Fluxo do envio do protocolo | — | pendente |
| **FFP-02** | Fluxo de processamento do protocolo | — | pendente |

---

## Cobrança e pagamentos

| Código | Descrição | Nota | Status |
|--------|-----------|------|--------|
| **RFC-01** | Geração de cobrança | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFC-01-geracao-cobranca]] | documentado |
| **RFC-02** | Listagem das cobranças | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFC-02-listagem-cobrancas]] · [[Orius/integracoes/registro-imoveis/rib-cobranca|legado]] | documentado |
| **RFC-03** | Detalhes da cobrança | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFC-03-detalhe-cobranca]] | documentado |
| **RFC-04** | Cancelamento da cobrança | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFC-04-cancelamento-cobranca]] | documentado |
| **RFC-05** | Listagem dos tipos de pagamento | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFC-05-listagem-tipos-pagamento]] | documentado |
| **RFC-06** | Devolução de valores pagos no PIX | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFC-06-devolucao-pix]] | documentado |
| **RFC-07** | Atualização do protocolo vinculado ao pagamento | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/RFC-07-atualizacao-protocolo-pagamento]] | documentado |

---

## Atendimento eletrônico (exigências)

| Código | Descrição | Nota | Status |
|--------|-----------|------|--------|
| **RAE-01** | Listagem da resposta de exigência | — | pendente |
| **RAE-02** | Detalhes da resposta de exigência | — | pendente |
| **RAE-03** | Cadastramento de interação | — | pendente |

---

## Tabelas de domínio

Hub: [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/00-indice-dominio]]

| Código | Nome | Nota | Status |
|--------|------|------|--------|
| **TBD-01** | StatusCobranca | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-01-status-cobranca]] | documentado |
| **TBD-02** | ACTipoSolicitacao | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-02-actipo-solicitacao]] | documentado |
| **TBD-03** | ACCodigoStatus | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-03-accodigo-status]] | documentado |
| **TBD-04** | ACFilaSituacao | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-04-acfila-situacao]] | documentado |
| **TBD-05** | StatusTipoPagamento | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-05-status-tipo-pagamento]] | documentado |
| **TBD-06** | ACTipoDescricao | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-06-actipo-descricao]] | documentado |
| **TBD-07** | AETipoAtendimento | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-07-aetipo-atendimento]] | documentado |
| **TBD-08** | AESituacao | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-08-aesituacao]] | documentado |
| **TBD-09** | AEAtendimentoPrioritario | [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/TBD-09-aeatendimento-prioritario]] | documentado |
| TBD-10 … TBD-14 | Demais enums AE | — | pendente |

---

## Ordem sugerida de documentação

1. RFG-01 + domínios usados em protocolo (TBD-02, TBD-03, TBD-04, …)
2. RFP-01, RFP-02 → RFP-05, RFP-06/07 → RFP-03, RFP-04
3. RFC-01 … RFC-07
4. RAE-01 … RAE-03
5. FFP-01, FFP-02

---

## Fonte no repositório

| Artefato | Caminho (repo `automacoes e testes`) |
|----------|--------------------------------------|
| Manual convertido (PDF → MD) | `api-registro-imoveis/manual-api-acompanhamento-registral-pagamentos-v2.2.md` |
| PDF original | `api-registro-imoveis/Manual de integração da API do Acompanhamento Registral + Pagamentos v2.2.pdf` |

Voltar: [[Orius/integracoes/registro-imoveis/00-indice]]
