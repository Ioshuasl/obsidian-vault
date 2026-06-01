---
tipo: campos-json
area: orius
produto: notas
orgao: receita-federal
ficha: dados-imovel
tags: [orius, notas, doi, json]
status: revisado
---

> **Domínios:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/destinacao|destinacao]], [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoImovel|tipoImovel]]  
> **Validação CIB:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/algoritmo-cib]] · **Validação:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-dados-imovel]]

# Ficha: Dados do Imóvel

Identificação física e fiscal do imóvel.

| Campo | Tipo | Tam. | Obrigatório | Descrição / Regra |
| --- | --- | --- | --- | --- |
| **cib** | Alfanumérico | 8 | Sim | CIB (Cadastro Imobiliário Brasileiro). Obrigatório se imóvel possuir CIB. Substitui NIRF rural. DV: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/algoritmo-cib\|algoritmo CIB]]. |
| **destinacao** | Alfanumérico | — | Sim | `"1"` Urbano ou `"3"` Rural. |
| **indicadorImovelPublicoUniao** | Booleano | — | Sim | Imóvel da União? |
| **registroImobiliarioPatrimonial** | Alfanumérico | 13 | * | Obrigatório se `indicadorImovelPublicoUniao` = `true`. RIP. |
| **certidaoAutorizacaoTransferencia** | Alfanumérico | 11 | * | Obrigatório se `indicadorImovelPublicoUniao` = `true`. CAT. |
| **matricula** | Alfanumérico | 15 | * | Obrigatório se `transcricao` não informada. Formato: 7 dígitos (zeros à esquerda). |
| **transcricao** | Inteiro | 8 | * | Obrigatório se `matricula` não informada. |
| **inscricaoMunicipal** | Alfanumérico | 45 | Sim* | Obrigatório se Urbano. |
| **codigoIbge** | Numérico | 7 | Sim | Código IBGE do município (do imóvel ou sede se rural). |
| **areaImovel** | Numérico | 15.2 | Sim | m² (Urbano) ou ha (Rural). |
| **indicadorAreaLoteNaoConsta** | Booleano | — | Sim | Área do lote não consta nos documentos? |
| **areaConstruida** | Numérico | 16.4 | Sim* | m² (Urbano). |
| **indicadorAreaConstruidaNaoConsta** | Booleano | — | Sim | Área construída não consta? |
| **tipoImovel** | Alfanumérico | — | Sim | Conforme [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoImovel]]. |
| **tipoLogradouro** | Alfanumérico | 30 | Sim | Ex.: Rua, Avenida. |
| **nomeLogradouro** | Alfanumérico | 255 | Sim | Nome do logradouro. |
| **numeroImovel** | Alfanumérico | 10 | Sim | Número. |
| **complementoNumeroImovel** | Alfanumérico | 10 | Não | Ex.: Bloco, Apto. |
| **complementoEndereco** | Alfanumérico | 100 | Não | Ex.: Nome do condomínio. |
| **bairro** | Alfanumérico | 150 | Sim | Bairro. |
| **cep** | Alfanumérico | 8 | Sim | CEP. |
| **codigoIncra** | Alfanumérico | 13 | Sim* | Obrigatório se Rural. |
| **denominacao** | Alfanumérico | 200 | Sim* | Nome do imóvel rural (se houver). |
| **localizacao** | Alfanumérico | 200 | Sim* | Detalhes de localização rural. |
| **municipiosUF** | Alfanumérico | — | Sim* | Lista de códigos IBGE de outros municípios onde o imóvel se localiza (multi-município). Omitir se imóvel em um único município. |

## Campos por destinacao

### Urbano (`destinacao` = `"1"`)

Obrigatórios típicos: `inscricaoMunicipal`, endereço completo, `areaImovel` em m², `areaConstruida` (ou indicador de não consta).

### Rural (`destinacao` = `"3"`)

Obrigatórios típicos: `codigoIncra`, `denominacao`, `localizacao`, `areaImovel` em ha, `codigoIbge` da sede, `municipiosUF` se multi-município.

Voltar: [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]]
