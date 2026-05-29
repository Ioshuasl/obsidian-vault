---
tipo: referencia
area: orius
produto: imoveis
tags: [orius, imoveis, dominio, software, mapeamento]
status: revisado
atualizado: 2026-05-29
---

# Mapa domínio de negócio ↔ software (RI)

Prefixo Firebird: **`R_*`** (130 tabelas em palmelo2). Inventário: [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/imoveis-tabelas]].

## Núcleo registral

| Conceito | Tabelas / módulos |
|----------|-------------------|
| Imóvel / matrícula | `R_IMOVEL`, `R_IMOVEL_*` (geo, logradouro, unidade, objeto, CNM…) |
| Protocolo / prenotação | `R_PROTOCOLO`, `R_LOG_PROTOCOLO`, `R_SELAR_PROTOCOLO` |
| Pedido de registro (workflow) | `R_PEDIDO`, `R_PEDIDO_ITEM`, checklist, distribuição |
| Pessoas | `R_PESSOA`, `R_PESSOA_VINCULO`, `R_PESSOA_INDICE` |
| Andamento / histórico | `R_ANDAMENTO`, `R_HISTORICO`, `R_HISTORICO_SISTEMA` |
| Certidão | `R_CERTIDAO_GRAVADA`, logs |
| Selo | `R_SELO`, `R_SELO_*` |

## Livros e busca

| Livro | Conceito | Tabelas |
|-------|----------|---------|
| 1 Protocolo | Prioridade, prazo 30d | `R_PROTOCOLO` |
| 2 Matrícula | Registro e averbação | `R_IMOVEL`, atos nos itens de pedido |
| 3 Auxiliar | Registro auxiliar | `R_TB_TIPO_REG_AUXILIAR`, tabelas auxiliares |
| 4 Indicador real | Busca por local | `R_IMOVEL_PESQUISA`, `R_INDEXACAO` |
| 5 Indicador pessoal | Busca por CPF | `R_PESSOA_INDICE`, `R_INDEXACAO_PESSOAL` |

## Fiscal e compliance

| Conceito | Tabelas |
|----------|---------|
| DOI | `R_DOI`, `R_DOI_ADQUIRENTE`, `R_DOI_ALIENANTE` |
| SEFAZ (DF e outros) | `R_SEFAZ_DF*` |

## Integrações ONR (legado)

| Módulo | Tabelas |
|--------|---------|
| Pedidos ONR / e-Protocolo | `R_ONR_PEDIDO*`, `R_ONR_EPROT_*`, `R_ONR_XML` |
| Penhora online / ofícios (via WSOficio) | Integração documentada em [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/00-indice-wsoficio]] |

## CNIB / indisponibilidade

Ofícios e mandados: `R_OFICIO*`, `R_ERI_*` (e-Registro de Imóveis / intimacao). Ver [[Orius/integracoes/registro-imoveis/cnib]].

## Máquina de estados (pedido/protocolo — simplificada)

```text
APRESENTADO → PRENOTADO → EM_QUALIFICACAO
  → DEVOLVIDO (exigências) → REAPRESENTADO
  → REGISTRADO | AVERBADO
  → CERTIDAO_EMITIDA
```

Validações críticas:

- Prazo **30 dias** do protocolo
- **Continuidade** proprietário × título
- Não registrar sem qualificação positiva ou decisão em dúvida
- DOI após atos de transmissão quando aplicável

## Relacionado

- [[fluxo-operacional-registro-imoveis]]
- [[Orius/empresa/produtos/registro-imoveis]]
- [[Orius/desenvolvimento/regras-de-negocio/00-indice-regras]] — filtrar produto **imoveis**
