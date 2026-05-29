---
tipo: referencia
area: orius
produto: notas
tags: [orius, notas, protocolar, escritura, procuracao]
status: revisado
fonte: "Tabelionato_de_Notas.md"
atualizado: 2026-05-29
---

# Atos protocolares (atos notariais)

Documentos **permanentes** nos **livros** do cartório. Mesmo que o cliente perca a via, o **original** permanece na serventia.

## Tipos principais

| Ato | Uso |
|-----|-----|
| **Escritura pública** | CV, doação, inventário, divórcio/unão estável, partilha |
| **Procuração pública** | Outorgante concede poderes ao outorgado |
| **Testamento público** | Disposição de bens após morte |
| **Ata notarial** | Prova oficial de fato (mensagens, site, estado de imóvel, reunião) |

## Partes comuns

| Papel | Função |
|-------|--------|
| **Outorgante** | Quem dá (ex.: poderes na procuração) |
| **Outorgado** | Quem recebe |
| **Interveniente** | Quem deve concordar (ex.: banco credor) |
| **Cônjuge** | Assina conforme regime de bens |
| **Testemunhas** | Quando exigido pelo ato |

## Livros por espécie

Organização típica:

- Livro de **Escrituras**
- Livro de **Procurações**
- Livro de **Testamentos**
- Livro de **Atas Notariais**

**No software:** `T_LIVRO_NATUREZA`, `T_LIVRO_ANDAMENTO`, `T_LIVRO_FLSRESERVADA`, tipo de ato `T_ATO_TIPO`.

## Livro, traslado e certidão

| Peça | O que é |
|------|---------|
| **Livro** | Original arquivado no cartório |
| **Traslado** | Primeira cópia oficial na hora da lavratura |
| **Certidão** | Nova cópia posterior, se o cliente perdeu o traslado |

## Páginas acrescidas

Folhas extras em atos volumosos (inventário grande) — custo adicional (papel de segurança, selos).

## Integrações após lavratura

| Central | O quê |
|---------|--------|
| **DOI** | Escrituras com imóvel → Receita Federal |
| **CENSEC** | Índice nacional de existência de atos (CEP, CESDI, RCTO…) |
| **CCN** | Cadastro nacional de clientes |
| **e-Notariado** | Atos e assinaturas eletrônicos |

Visão de negócio: [[integracoes-centrais-notas]] · técnico: [[Orius/integracoes/tabelionato-notas/00-indice]].

## Relacionado

- [[fluxo-ato-notarial]]
- [[conceito-tabelionato-de-notas]]
