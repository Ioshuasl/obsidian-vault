---
tipo: referencia
area: orius
produto: protesto
tags: [orius, protesto, dominio, software, mapeamento]
status: revisado
atualizado: 2026-05-29
---

# Mapa domínio de negócio ↔ software

Referência rápida para **backlog, modelagem e telas** do SaaS Protesto. Tabelas Firebird com prefixo `P_*` — detalhes de colunas em [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]].

## Núcleo do título

| Conceito de negócio | Tabelas / módulos | API (se existir) |
|---------------------|-------------------|------------------|
| Título apresentado | `P_TITULO` | `p_titulo` |
| Devedor / apresentante / vínculos | `P_PESSOA`, `P_PESSOA_VINCULO` | `p_pessoa`, `p_pessoa_vinculo` |
| Banco apresentante | `P_BANCO` | `p_banco` |
| Espécie do título | `P_ESPECIE` | `p_especie` |
| Situação / ocorrência do título | `P_OCORRENCIAS`, `P_OCORRENCIA_ANDAMENTO` | `p_ocorrencias`, `p_ocorrencia_andamento` |
| Andamento processual | `P_ANDAMENTO`, `P_HISTORICO` | `p_andamento` |
| Livro de registro | `P_LIVRO_NATUREZA`, `P_LIVRO_ANDAMENTO` | `p_livro_*` |

## Certidões, cancelamento, custas

| Conceito | Tabelas | API |
|----------|---------|-----|
| Certidão (positiva/negativa/Serasa) | `P_CERTIDAO` | `p_certidao` |
| Motivos de cancelamento | `P_MOTIVOS_CANCELAMENTO` | `p_motivos_cancelamento` |
| Motivos gerais | `P_MOTIVOS` | `p_motivos` |
| Custas cancelamento / demais custas | `P_CUSTAS_CANCELAMENTO`, `P_DEMAIS_CUSTAS` | _pendente API_ |
| Proteção ao crédito | `P_PROTECAO_CREDITO` | _pendente_ |

## Arquivos e layouts (CRA / importação)

| Conceito | Tabelas | Observação |
|----------|---------|------------|
| Remessa Febraban / CRA | `P_FEBRABAN`, `P_FEBRABAN_CABECALHO`, `P_FEBRABAN_DETALHE`, `P_FEBRABAN_RODAPE` | Lote apresentante |
| Layout configurável | `P_LAYOUT`, `P_LAYOUT_*`, `P_ARQUIVO_TITULO` | Parsing de arquivos |
| Registro CENPROT | `P_REG_CENPROT`, `P_SEQUENCIA_CENPROT` | Integração nacional |

## Cadastros auxiliares

| Conceito | Tabelas |
|----------|---------|
| Templates de documento | `P_TEMPLATE` |
| Irregularidades | `P_IRREGULARIDADES` |
| Indisponibilidade | `P_INDISPONIBILIDADE`, `P_INDISP_VINCULO` |
| Instituição de protesto | `P_INST_PROTESTO` |
| Parcelamento / nota | `P_PARCELAMENTO`, `P_NOTA_TITULO` |

## Máquina de estados (simplificada)

Estados reais dependem de `P_OCORRENCIAS` / parametrização do cartório. Referência de desenho:

```text
CADASTRO → APONTADO → INTIMADO → (tríduo) → PROTESTADO | ELIDIDO | DESISTIDO | SUSTADO
PROTESTADO → (quitação) → CANCELADO
```

Validações críticas no código:

- Não **protestar** antes do fim do **tríduo** sem exceção legal.
- **Sustação** bloqueia lavratura até liberação.
- **Cancelamento** exige documentação e motivo.
- **Livro aberto** (`P_LIVRO_ANDAMENTO`) — regras de um livro por natureza (ver Postman).

## Integrações externas

| Integração | Quando no fluxo | Doc |
|------------|-----------------|-----|
| **CRA** | Entrada/saída de lotes | [[Orius/integracoes/centrais/cra]] |
| **CENPROT** | Consulta nacional, envio, certidão digital, cancelamento eletrônico | [[Orius/integracoes/centrais/cenprot]] |
| **Serasa** | Certidões/remessas específicas | [[Orius/integracoes/centrais/serasa]] _(se existir)_ |

## Relacionado

- [[fluxo-operacional-protesto]]
- [[Orius/desenvolvimento/api/protesto/00-indice-api-protesto]]
- [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]]
