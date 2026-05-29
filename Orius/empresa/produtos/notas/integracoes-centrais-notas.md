---
tipo: referencia
area: orius
produto: notas
tags: [orius, notas, integracao, doi, censec, ccn, enotariado]
status: revisado
fonte: "Tabelionato_de_Notas.md"
atualizado: 2026-05-29
---

# Integrações — visão de negócio (Notas)

Resumo do **porquê** cada central existe. Implementação (API, URLs, n8n): [[Orius/integracoes/tabelionato-notas/00-indice]].

## DOI (Receita Federal)

**Declaração sobre Operações Imobiliárias** — o cartório informa a Receita quando há alienação/aquisição de imóvel em escritura (ou ato equivalente).

| Pergunta | Resposta |
|----------|----------|
| Quem envia? | O **cartório**, não o cidadão |
| Quando no fluxo imobiliário? | Após escritura em **Notas**, antes ou em paralelo ao **RI** |
| Para quê? | Cruzamento IR, ganho de capital, patrimônio, combate à sonegação |

Fluxo: compra e venda → escritura (Notas) → **DOI** → registro (RI).

- Doc técnico Notas: [[Orius/integracoes/tabelionato-notas/doi]]
- Mesmo conceito no RI: [[Orius/empresa/produtos/imoveis/doi-operacoes-imobiliarias]]

## CENSEC

**Central Notarial de Serviços Eletrônicos Compartilhados** — índice nacional de **existência** de atos notariais (em geral **não** o texto integral), para consulta entre cartórios e autoridades.

| Módulo | Busca típica |
|--------|--------------|
| **RCTO** | Testamento (ex.: após falecimento) |
| **CESDI** | Separação, divórcio, inventário extrajudicial |
| **CEP** | Escrituras e procurações |
| **CNSIP** | Sinal público de tabeliões |

Objetivos: antifraudes, localizar atos, atender Judiciário com rapidez.

- Índice técnico: [[Orius/integracoes/tabelionato-notas/censec/00-indice-censec]]
- Central: [[Orius/integracoes/centrais/censec]]
- Automação n8n: [[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway]]

## CCN

**Cadastro Único de Clientes do Notariado** — base nacional de identificação (dados, foto, biometria, ficha) compartilhada entre tabelionatos, módulo do **e-Notariado**.

- Reduz fraude de identidade e apoia lavagem de dinheiro (KYC)
- Obrigatória por regulamentação CNJ (transmissão periódica)
- Habilita certificados digitais notarizados

- Doc técnico: [[Orius/integracoes/tabelionato-notas/ccn]]
- Central: [[Orius/integracoes/centrais/ccn]]

## e-Notariado

**Cartório digital nacional** (Colégio Notarial / CNJ): escrituras e procurações online, reconhecimento eletrônico, videoconferência, certificados do sistema.

### Fluxo de assinaturas (resumo)

```text
Sistema do cartório → e-Notariado → identificação → videoconferência
→ assinaturas das partes → assinatura do tabelião → documento final
```

- Doc técnico: [[Orius/integracoes/tabelionato-notas/fluxo-assinaturas]]
- Homologação API: [[Orius/integracoes/tabelionato-notas/ambiente-homologacao-api]]

## Outras integrações documentadas

| Integração | Doc |
|------------|-----|
| TABINF / IBGE | [[Orius/integracoes/tabelionato-notas/tabinf-ibge]] |

## Relacionado

- [[conceito-tabelionato-de-notas]]
- [[00-indice-notas-negocio]]
