---
tipo: indice
area: orius
produto: notas
central: censec
tags: [orius, notas, censec, n8n, validacao]
---

# CENSEC — módulos (Tabelionato de Notas)

A transmissão via API envia um **único payload JSON** com blocos por central: `AtosCep`, `AtosCesdi`, `Testamentos`, `declaracoes` (CTP).

## Documentos

| Módulo | Sigla | Bloco JSON | Conteúdo dos atos | Documentação |
|--------|-------|------------|-------------------|--------------|
| CEP | Central de Escrituras e Procurações | `atosCep` | Escrituras, procurações, atas | [[Orius/integracoes/tabelionato-notas/censec/cep]] |
| CESDI | Separações, Divórcios e Inventários | `atosCesdi` | Separação, divórcio, inventário extrajudicial | [[Orius/integracoes/tabelionato-notas/censec/cesdi]] |
| RCTO | Registro Central de Testamentos | `testamentos` | Testamento e revogação | [[Orius/integracoes/tabelionato-notas/censec/rcto]] |
| CTP | Comunicação às Prefeituras | `declaracoes` | Transações imobiliárias (ITBI) | [[Orius/integracoes/tabelionato-notas/censec/ctp]] |

## Visão geral (API, chave, quinzena, exemplo completo)

[[Orius/integracoes/tabelionato-notas/censec/visao-geral-e-api]]

## Validação e domínios

| Tipo | Índice |
|------|--------|
| Regras de validação (JSON) | [[Orius/integracoes/tabelionato-notas/censec/regras-validacao/00-indice-regras-validacao]] |
| Tabelas de domínio (enums) | [[Orius/integracoes/tabelionato-notas/censec/tabelas-dominio/00-indice-tabelas-dominio]] |

## Automação n8n

[[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway]] — webhook com validação local (CEP, CESDI, CTP) e upload para `POST /api/cargas/upload-json`.

Briefing: [[Orius/integracoes/tabelionato-notas/censec/00-briefing-documentacao-automacao]]

## Artefatos (Postman, exemplos)

[[Orius/integracoes/tabelionato-notas/censec/artefatos/00-indice-artefatos]]

Pasta local: `C:\Users\kenio\soap-ui test\censec`

## Regras transversais

- **Quinzena:** `anoReferencia`, `mesReferencia`, `quinzenaReferencia` (1 ou 2).
- **CTP:** periodicidade mensal — usar `quinzenaReferencia` 1 ou 2 conforme doc.
- **Status `AguardandoValidacao`:** importou na API; validação assíncrona — conferir no portal CENSEC antes de fechar quinzena.
- **RCTO:** ainda sem validador no gateway n8n; revisar payload manualmente.

## Links

- Central: [[Orius/integracoes/centrais/censec]]
- Índice Notas: [[Orius/integracoes/tabelionato-notas/00-indice]]
