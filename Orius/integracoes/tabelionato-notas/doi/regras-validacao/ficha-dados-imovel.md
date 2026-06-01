---
tipo: regras-validacao
area: orius
produto: notas
orgao: receita-federal
ficha: dados-imovel
tags: [orius, notas, doi, validacao]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-imovel]] · **CIB:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/algoritmo-cib]]

# Validação — Ficha Dados do Imóvel

| Campo | Mensagem | Condição |
|-------|----------|----------|
| É imóvel público da união? | Obrigatório informar | Quando não informado |
| Município / UF | Obrigatório informar | Quando não informados |
| Inscrição Municipal | Obrigatório informar | Urbano sem inscrição |
| Área do Terreno (m²) | Deve estar preenchido quando "área não consta" não marcado | Exclusão mútua |
| Área do lote não consta? | Deve estar preenchido quando área não informada | Exclusão mútua |
| Área Construída (m²) | Deve estar preenchido quando indicador "não consta" não marcado | Urbano |
| Área Construída não consta? | Deve estar preenchido quando área construída não informada | Exclusão mútua |
| Tipo de Imóvel | Obrigatório informar | Quando não informado |
| Tipo / Nome de Logradouro | Obrigatório informar | Endereço incompleto |
| Número Imóvel | Obrigatório informar | Quando não informado |
| Bairro | Obrigatório informar | Quando não informado |
| CEP | Obrigatório informar | Quando não informado |
| RIP | Obrigatório quando imóvel público da União = Sim | Sem registroImobiliarioPatrimonial |
| CAT | Obrigatório quando imóvel público da União = Sim | Sem certidaoAutorizacaoTransferencia |
| Código Incra | Obrigatório informar | Rural sem codigoIncra |
| Denominação | Obrigatório informar | Rural |
| Localização | Obrigatório informar | Rural |
| Área Total (ha) | Obrigatório informar | Rural |
| CIB | CIB inválido / DV incorreto | Ver [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/algoritmo-cib]] |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
