---
tipo: integracao
area: orius
central: censec
produto: notas
status: revisado
---

# CENSEC

Central Eletrônica Notarial — integração do **Tabelionato de Notas**.

Visão de negócio (RCTO, CEP, CESDI, CNSIP): [[Orius/empresa/produtos/notas/integracoes-centrais-notas#CENSEC]] · [[Orius/empresa/produtos/notas/00-indice-notas-negocio]]

## Documentação técnica (vault)

- [[Orius/integracoes/tabelionato-notas/censec/visao-geral-e-api|Visão geral e API]]
- [[Orius/integracoes/tabelionato-notas/censec/00-indice-censec|Módulos: CEP, CESDI, RCTO, CTP]]
- [[Orius/integracoes/tabelionato-notas/censec/regras-validacao/00-indice-regras-validacao|Regras de validação]]
- [[Orius/integracoes/tabelionato-notas/censec/tabelas-dominio/00-indice-tabelas-dominio|Tabelas de domínio]]
- [[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway|Automação n8n — upload JSON]]

Código e Postman local: `C:\Users\kenio\soap-ui test\censec` · workflow: `...\workflows\n8n-censec\censec-upload-json.workflow.ts`

**Homologação (API Key, id cartório, CNS):** [[Orius/integracoes/tabelionato-notas/ambiente-homologacao-api#CENSEC — transmissão JSON]]

## Produto

[[Orius/empresa/produtos/tabelionato-notas]]

## Ambientes

- Homologação: `https://hml.censec.org.br`
- Produção: `https://censec.org.br`

## Tags

`#censec` `#cep` `#cesdi` `#rcto` `#ctp` `#quinzena`
