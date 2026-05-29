---
tipo: referencia
area: orius
produto: notas
tags: [orius, notas, dominio, software, mapeamento]
status: revisado
atualizado: 2026-05-29
---

# Mapa domínio de negócio ↔ software (Notas)

Prefixo Firebird: **`T_*`** (57 tabelas). Inventário: [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/notas-tabelas]].

## Núcleo do ato protocolar

| Conceito | Tabelas |
|----------|---------|
| Ato / minuta | `T_ATO`, `T_MINUTA`, `T_ATO_TIPO` |
| Partes e vínculos | `T_ATO_VINCULOPARTE`, `T_PESSOA`, `T_PESSOA_REPRESENTANTE` |
| Imóvel no ato | `T_ATO_PARTEIMOVEL`, `T_IMOVEL`, `T_IMOVEL_UNIDADE` |
| Andamento | `T_ATO_ANDAMENTO`, `T_ATO_HISTORICO`, `T_ATENDIMENTO` |
| Livros | `T_LIVRO_NATUREZA`, `T_LIVRO_ANDAMENTO`, `T_LIVRO_FLSRESERVADA` |
| Averbação (notas) | `T_AVERBACAO` |
| Certidão | `T_CERTIDAO_GRAVADA`, `T_DADOS_CERTIDAO` |

## Balcão (extraprotocolar)

| Conceito | Tabelas |
|----------|---------|
| Pedido de serviço | `T_SERVICO_PEDIDO`, `T_SERVICO_ITEMPEDIDO`, `T_SERVICO_TIPO` |
| Ficha / cartão | `T_PESSOA_CARTAO` |
| Biometria | `T_BIOMETRIA_PESSOA`, `T_IMAGEM_BIOMETRIA_SERVICO` |
| Mensalista (firma frequente) | `T_MENSALISTA`, `T_MENSALISTA_AUTORIZACAO` |
| Etiquetas / impressão | `T_SERVICO_ETIQUETA*`, `T_IMPRESSAO_*` |

## Integrações

| Central | Tabelas / módulo |
|---------|------------------|
| CCN | `T_CCNREGISTROS` + API e-Notariado |
| CENSEC | `T_CENSEC`, domínios `T_CENSEC_*` |
| DOI | fluxo em ato com imóvel — ver integração |
| ONR (complemento) | `T_COMPLEMENTO_ONR` |
| Procurações (registro aux.) | `T_REGISTRO_PROCURACAO` |

Docs: [[integracoes-centrais-notas]] · [[Orius/integracoes/tabelionato-notas/00-indice]].

## Máquina de estados (ato — simplificada)

```text
ATENDIMENTO → MINUTA → REVISAO_PARTES → ASSINATURA
→ LAVRADO → TRASLADO_EMITIDO
→ (opcional) TRANSMISSAO_CENSEC / DOI / CCN
```

Atos eletrônicos acrescentam estados de **envio e-Notariado**, **videoconferência**, **assinatura pendente por parte**.

## Relacionado

- [[fluxo-ato-notarial]]
- [[Orius/empresa/produtos/tabelionato-notas]]
- [[Orius/desenvolvimento/regras-de-negocio/00-indice-regras]] — filtrar **notas**
