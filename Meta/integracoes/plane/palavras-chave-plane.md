---
tipo: referencia
area: meta
tags: [plane, palavras-chave, roteamento]
status: revisado
criado: 2026-05-29
---

# Palavras-chave → projeto Plane

O agente usa esta tabela **antes** de chamar a API. Em empate, perguntar ao usuário.

| Palavras-chave | Slug | Identificador | Nota vault |
|----------------|------|---------------|------------|
| DSAAS, demandas gerais, backlog software | `dsaas` | DSAAS | [[projetos/dsaas]] |
| MVP notas, MVPTN, tabelionato notas web, frontend notas | `mvptn` | MVPTN | [[projetos/mvptn]] |
| AUTONR, ONR, WSOficio, penhora online, ofício eletrônico, n8n ONR, webservice onr, hash onr | `autonr` | AUTONR | [[projetos/autonr]] |
| CENSEC upload, carga censec json (no contexto n8n) | `autonr` | AUTONR | [[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway]] |
| digitalizador, digitaliza, OCR documentos | `digitaliza` | DIGITALIZA | [[projetos/digitaliza]] |
| assinatura A3, certificado A3, assinatura digital | `assinatura` | ASSINATURA | [[projetos/assinatura]] |
| SAAS protesto, PROTESTO, sistema web protesto, MVP protesto, protesto web, frontend protesto, API protesto | `protesto` | PROTESTO | [[projetos/protesto]] |
| frontend CRUD protesto, tela protesto, [Frontend] protesto | `protesto` | PROTESTO | [[Orius/desenvolvimento/frontend/protesto/00-indice-frontend-protesto]] |
| PBO protesto, PBOTP (legado desktop) | `pbotp` | PBOTP | [[projetos/pbotp]] |
| CRA protesto, CENPROT, apontamento, título protesto (demanda web) | `protesto` | PROTESTO | [[Orius/integracoes/centrais/00-indice-centrais]] |
| PBO RTD, PBORTD, títulos e documentos web | `pbortd` | PBORTD | [[projetos/pbortd]] |
| backup, rotina backup | `backup` | BACKUP | [[projetos/backup]] |

## Por produto Orius (atalho)

| Produto vault | Projeto Plane preferido |
|---------------|-------------------------|
| [[Orius/empresa/produtos/registro-imoveis]] | `autonr` (integrações) · `dsaas` (features app) |
| [[Orius/empresa/produtos/tabelionato-notas]] | `mvptn` · `dsaas` |
| [[Orius/empresa/produtos/tabelionato-protesto]] | `protesto` (web SaaS) · `pbotp` (PBO legado) · `dsaas` |
| [[Orius/empresa/produtos/registro-titulos-documentos]] | `pbortd` · `dsaas` |

## Relacionado

- [[agente-plane]] · [[projetos/00-indice-projetos]]
