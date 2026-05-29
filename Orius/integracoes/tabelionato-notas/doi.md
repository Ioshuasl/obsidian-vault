---
tipo: integracao
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, doi, receita-federal, json, mne]
status: revisado
fonte: migracao-desktop
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-notas|Tabelionato de Notas]] · **Índice:** [[Orius/integracoes/tabelionato-notas/00-indice|Integrações Notas]]  
> **Negócio (o que é DOI):** [[Orius/empresa/produtos/notas/integracoes-centrais-notas#DOI]] · RI: [[Orius/empresa/produtos/imoveis/doi-operacoes-imobiliarias]]  
> Relacionado: [[Orius/integracoes/centrais/onr|ONR]] (MNE), escrituras com imóvel

---

# DOI — Declaração sobre Operações Imobiliárias (Receita Federal)

> Este documento contém as especificações técnicas, layouts, dicionário de dados e regras de validação para a importação de arquivos da DOI via sistema web, conforme manual da Receita Federal.

## 1. Visão Geral

A DOI deve ser elaborada mediante acesso ao sistema DOI-Web. O sistema permite a importação de declarações em lote via arquivo JSON.

Prazo: Até o último dia útil do mês subsequente ao ato.

Formato do Arquivo: .json (ou .zip contendo um único .json).

Encoding: UTF-8 (Recomendado pelo padrão JSON).

Schema JSON: Versão 2020-12.

## 2. Estrutura Básica do JSON

O arquivo deve seguir o formato genérico abaixo, contendo um array de objetos declaracoes .

```json
{
  "declaracoes": [
    { ... },
    { ... }
  ]
}

```

## 3. Dicionário de Dados (Campos e Tipos)

### 3.1. Ficha: Dados Iniciais

Dados referentes ao ato notarial ou registral .

| Campo | Tipo | Tam. | Obrigatório | Descrição / Regra |
| --- | --- | --- | --- | --- |
| **tipoDeclaracao** | Alfanumérico | - | Sim | Deve ser "0" (Original). Retificadoras/Canceladoras não são importadas via lote. |
| **tipoServico** | Alfanumérico | - | Sim | Conforme Tabela de Domínio (Ver seção 4). |
| **dataLavraturaRegistroAverbacao** | Data | - | Sim | Formato: `YYYY-MM-DD`. |
| **tipoAto** | Alfanumérico | - | Sim | Conforme Tabela de Domínio. Varia segundo o `tipoServico`. |
| **tipoLivro** | Alfanumérico | - | Sim* | *Obrigatório se `tipoServico` for "Registro de Imóveis". Conforme domínio. |
| **numeroLivro** | Alfanumérico | 7 | Opcional* | Se `tipoServico`="Notarial", deve começar com número. Se "Registro de Imóveis", incluir apenas se `tipoLivro`="Transcrição". |
| **folha** | Alfanumérico | 7 | Sim | Páginas/Folhas (ex: início-fim). |
| **matriculaNotarialEletronica** | Alfanumérico | 24 | Não | MNE. Formato: `CCCCCC.AAAA.MM.DD.NNNNNNNN-DD` (sem traços/pontos). Validado por Mod 97 Base 10 (ISO 7064). |
| **matricula** | Alfanumérico | 15 | Opcional* | Obrigatório se `tipoServico`="Registro de Imóveis" e `tipoLivro`="Matrícula" (salvo se CNM preenchido). |
| **transcricao** | Inteiro | 8 | Opcional* | Obrigatório se `tipoLivro`="Transcrição das Transmissões". |
| **codigoNacionalMatricula** | Alfanumérico | - | Opcional* | CNM. Formato: `CCCCCC.L.NNNNNNN-DD` (sem pontos/traços). Validado por Mod 97 Base 10. |
| **numeroRegistroAverbacao** | Alfanumérico | 7 | Sim* | Obrigatório se `tipoServico`="Registro de Imóveis" e `tipoLivro`="Matrícula". |
| **naturezaTitulo** | Alfanumérico | - | Sim* | Obrigatório se `tipoServico`="Registro de Imóveis". Conforme domínio. |
| **numeroRegistro** | Alfanumérico | 30 | Sim* | Obrigatório se `tipoServico`="Registro de Títulos e Documentos". |
| **existeDoiAnterior** | Booleano | - | Sim* | Obrigatório se `tipoServico`="Registro de Imóveis". (`true`/`false`) . |

### 3.2. Ficha: Operações Imobiliárias

Detalhes da transação financeira e contratual .

| Campo | Tipo | Tam. | Obrigatório | Descrição / Regra |
| --- | --- | --- | --- | --- |
| **dataNegocioJuridico** | Data | - | Sim | Data da celebração. Formato: `YYYY-MM-DD`. |
| **tipoOperacaoImobiliaria** | Alfanumérico | - | Sim | Conforme Tabela de Domínio. |
| **descricaoOutrasOperacoesImobiliarias** | Alfanumérico | 30 | Não* | Obrigatório apenas se `tipoOperacaoImobiliaria` for "Outras". |
| **valorOperacaoImobiliaria** | Monetário | 20.2 | Sim* | Valor da operação. Obrigatório se `indicadorNaoConstaValorOperacaoImobiliaria` for falso ou não enviado. |
| **indicadorNaoConstaValorOperacaoImobiliaria** | Booleano | - | * | Enviar `true` se o valor não constar nos documentos. Se `true`, não enviar o campo `valorOperacaoImobiliaria`. |
| **valorBaseCalculoItbiItcmd** | Monetário | 20.2 | Sim* | Valor base ITBI/ITCMD. |
| **indicadorNaoConstaValorBaseCalculoItbiItcmd** | Booleano | - | * | Enviar `true` se o valor base não constar. |
| **formaPagamento** | Alfanumérico | - | Sim | Conforme Tabela de Domínio. |
| **indicadorAlienacaoFiduciaria** | Booleano | - | * | Obrigatório se `formaPagamento` for "A prazo". |
| **mesAnoUltimaParcela** | Data | - | * | Obrigatório se `formaPagamento` for "A prazo". Formato: `YYYY-MM-DD`. |
| **valorPagoAteDataAto** | Monetário | 20.2 | * | Obrigatório se `formaPagamento` for "A prazo". |
| **indicadorPermutaBens** | Booleano | - | Sim | Houve permuta?. |
| **indicadorPagamentoDinheiro** | Booleano | - | Sim | Houve pagamento em espécie?. |
| **valorPagoMoedaCorrenteDataAto** | Monetário | 20.2 | Sim* | Obrigatório se `indicadorPagamentoDinheiro` for `true`. |
| **tipoParteTransacionada** | Alfanumérico | - | Sim | Medida da parte (percentual ou física). Conforme domínio. |
| **valorParteTransacionada** | Alfanumérico | 20.2 | Sim | Quantidade de metros/hectares ou o percentual. |

### 3.3. Ficha: Dados do Imóvel

Identificação física e fiscal do imóvel .

| Campo | Tipo | Tam. | Obrigatório | Descrição / Regra |
| --- | --- | --- | --- | --- |
| **cib** | Alfanumérico | 8 | Sim | Cadastro Imobiliário Brasileiro. Obrigatório se o imóvel possuir CIB (substitui Nirf rural). Possui validação de DV específica. |
| **destinacao** | Alfanumérico | - | Sim | "1" (Urbano) ou "3" (Rural). |
| **indicadorImovelPublicoUniao** | Booleano | - | Sim | Imóvel da União?. |
| **registroImobiliarioPatrimonial** | Alfanumérico | 13 | * | Obrigatório se `indicadorImovelPublicoUniao`=`true`. Número RIP. |
| **certidaoAutorizacaoTransferencia** | Alfanumérico | 11 | * | Obrigatório se `indicadorImovelPublicoUniao`=`true`. Número CAT. |
| **matricula** | Alfanumérico | 15 | * | Obrigatório se `transcricao` não for informada. (Formato: 9999999) . |
| **transcricao** | Inteiro | 8 | * | Obrigatório se `matricula` não for informada. |
| **inscricaoMunicipal** | Alfanumérico | 45 | Sim* | Obrigatório se Urbano. |
| **codigoIbge** | Numérico | 7 | Sim | Código do município (do imóvel ou da sede se rural). |
| **areaImovel** | Numérico | 15.2 | Sim | Área em m² (Urbano) ou ha (Rural). |
| **indicadorAreaLoteNaoConsta** | Booleano | - | Sim | Se área não consta. |
| **areaConstruida** | Numérico | 16.4 | Sim* | Área construída em m² (Urbano). |
| **indicadorAreaConstruidaNaoConsta** | Booleano | - | Sim | Se área construída não consta. |
| **tipoImovel** | Alfanumérico | - | Sim | Conforme Tabela de Domínio. |
| **tipoLogradouro** | Alfanumérico | 30 | Sim | Ex: Rua, Avenida. |
| **nomeLogradouro** | Alfanumérico | 255 | Sim | Endereço. |
| **numeroImovel** | Alfanumérico | 10 | Sim | Número. |
| **complementoNumeroImovel** | Alfanumérico | 10 | Não | Ex: Bloco, Apto. |
| **complementoEndereco** | Alfanumérico | 100 | Não | Ex: Nome do condomínio. |
| **bairro** | Alfanumérico | 150 | Sim | Bairro. |
| **cep** | Alfanumérico | 8 | Sim | CEP. |
| **codigoIncra** | Alfanumérico | 13 | Sim* | Obrigatório se Rural. |
| **denominacao** | Alfanumérico | 200 | Sim* | Nome do imóvel rural (se houver). |
| **localizacao** | Alfanumérico | 200 | Sim* | Detalhes de localização rural. |
| **municipiosUF** | Alfanumérico | - | Sim* | Lista de outros municípios onde o imóvel se localiza (se multi-município). |

### 3.4. Ficha: Alienantes e Adquirentes

Estrutura idêntica para ambos os grupos .

| Campo | Tipo | Descrição / Regra |
| --- | --- | --- |
| **indicadorNiIdentificado** | Booleano | Se CPF/CNPJ consta no documento. |
| **motivoNaoIdentificacaoNi** | Alfanumérico | Código do motivo (se `indicadorNiIdentificado`=`false`). |
| **ni** | Alfanumérico | CPF (11) ou CNPJ (14). Validado por DV. |
| **participacao** | Numérico (7.4) | Percentual de participação (Soma deve ser &gt;= 99% e &lt;= 100%). |
| **indicadorNaoConstaParticipacaoOperacao** | Booleano | Se percentual não consta. |
| **indicadorEstrangeiro** | Booleano | É estrangeiro?. |
| **indicadorEspolio** | Booleano | É espólio?. |
| **cpfInventariante** | Alfanumérico | Obrigatório se `indicadorEspolio`=`true`. |
| **indicadorConjuge** | Booleano | Possui cônjuge?. |
| **indicadorConjugeParticipa** | Booleano | Cônjuge participa da operação? (Se `true`, cônjuge entra como parte) . |
| **regimeBens** | Alfanumérico | Obrigatório se possui cônjuge. Conforme domínio. |
| **indicadorCpfConjugeIdentificado** | Booleano | CPF do cônjuge consta?. |
| **cpfConjuge** | Alfanumérico | CPF do cônjuge. |
| **indicadorRepresentante** | Booleano | Há procurador/representante?. |
| **representantes** | Lista (JSON) | Lista de objetos com dados dos representantes (CPF/CNPJ). |

---

## 4. Tabelas de Domínio (Enums)

Use estes códigos para preencher os campos correspondentes.

Tabela 1 - Tipo da declaração (tipoDeclaracao)

- 0: Original

- 1: Retificadora (Não importável em lote)

- 3: Canceladora (Não importável em lote)

Tabela 2 - Tipo do serviço (tipoServico)

- 1: Notarial

- 2: Registro de Imóveis

- 3: Registro de Títulos e Documentos

Tabela 3 - Tipo do ato (tipoAto)

- 1: Escritura

- 2: Procuração

- 3: Averbação

- 4: Registro

- 5: Registros para fins de publicidade

- 6: Registro para fins de conservação

Tabela 4 - Tipo do livro (tipoLivro)

- 1: Lv.2-Registro Geral (matrícula)

- 2: Transcrição das Transmissões

Tabela 5 - Natureza do título (naturezaTitulo)

- 1: Instrumento particular com força de escritura pública

- 2: Escritura Pública

- 3: Título Judicial

- 4: Contratos ou termos administrativos

- 5: Atos autênticos de países estrangeiros

Tabela 6 - Tipo da operação imobiliária (tipoOperacaoImobiliaria)

- Principais: 11 (Compra e Venda), 13 (Permuta), 55 (Doação adiantamento legítima), 67 (Doação), 69 (Inventário).

- Ver lista completa na fonte para códigos de 11 a 74.

Tabela 7 - Forma de Pagamento (formaPagamento)

- 5: Quitado à vista

- 10: Quitado a prazo

- 11: Quitado sem informação da forma de pagamento

- 7: A prazo

- 9: Não se aplica

Tabela 8 - Medida da parte transacionada (tipoParteTransacionada)

- 1: % (Percentual)

- 2: ha/m² (Área) (Note: No PDF original a tabela chama tipoDeclaracao erroneamente, mas no contexto do campo é a medida).

Tabela 9 - Destinação (destinacao)

- 1: Urbano

- 3: Rural

Tabela 10 - Motivo da não identificação do NI (motivoNaoIdentificacaoNi)

- 1: Sem CPF/CNPJ - Decisão Judicial

- 2: Não consta no documento

Tabela 11 - Regime de bens (regimeBens)

- 1: Separação de Bens

- 2: Comunhão Parcial de Bens

- 3: Comunhão Universal de Bens

- 4: Participação Final nos Aquestos

Tabela 12 - Tipo do imóvel (tipoImovel)

- Exemplos: 15 (Loja), 65 (Apartamento), 67 (Casa), 69 (Fazenda/Sítio), 71 (Terreno).

---

## 5. Regras de Validação e Erros Comuns

O sistema realiza três tipos de validação:

1. Estrutural (JSON): Erros de sitaxe (vírgulas, chaves) ou tipos de dados (string em campo numérico) rejeitam o arquivo todo .

2. Individual (Inaptidão): Declarações com erro de lógica (ex: soma de participação < 100%, datas futuras) são rejeitadas individualmente, mas não impedem o arquivo se houver outras corretas .

3. Pendências/Avisos: Duplicidade suspeita ou inconsistências leves. Permitem importação, mas geram alertas.

### Validações Lógicas Críticas (Exemplos)

- Datas: dataNegocioJuridico não pode ser maior que dataAtual nem maior que dataAto.

- Participação: A soma das participações dos alienantes (ou adquirentes) não pode ser inferior a 99% nem superior a 100%, exceto se marcado "Não consta".

- Duplicidade: O sistema checa duplicidade baseada na combinação de: CNS, Data Ato, Livro, Folha, Tipo Operação, Data Negócio, Valor, CIB e NIs das partes.

---

## 6. Algoritmo de Validação do CIB

O Código CIB (Cadastro Imobiliário Brasileiro) usa um dígito verificador (DV) complexo .

Formato: AAAAAAA-D (7 caracteres + DV).

### Regras de Decodificação (Base 32 Crockford Modificada):

- Ignora-se o hífen.

- Exclusões: I, i, L, l, O, o, U, u.

- Tratamento Especial: i, I, l, L = 1; o, O = 0.

- Letras u, U não são aceitas.

### Cálculo do DV:

4. Se todos os caracteres forem numéricos: Usa-se Módulo 11 (Pesos: 8, 7, 6, 5, 4, 3, 2). Se resto 0 ou 1, DV = 0. Senão, DV = 11 - resto.

5. Se houver letras:

- Converte-se cada caractere para valor numérico conforme tabela de Encode/Decode  (Ex: A=10, B=11... Z=31).

- Pesos posicionais: 4, 3, 9, 5, 7, 1, 8.

- Soma-se os produtos.

- Divide-se a soma por 31.

- O Resto da divisão é convertido de volta para caractere (Encode) para obter o DV .

```json
{
  "declaracoes": [
    {
      "adquirentes": [
        {
          "indicadorEspolio": false,
          "indicadorEstrangeiro": false,
          "indicadorNaoConstaParticipacaoOperacao": false,
          "indicadorNiIdentificado": true,
          "ni": "12345678901",
          "participacao": 50.0,
          "indicadorConjuge": true,
          "indicadorConjugeParticipa": true,
          "indicadorCpfConjugeIdentificado": true,
          "cpfConjuge": "10987654321",
          "regimeBens": "2",
          "indicadorRepresentante": false,
          "representantes": []
        }
      ],
      "alienantes": [
        {
          "indicadorEspolio": false,
          "indicadorEstrangeiro": false,
          "indicadorNaoConstaParticipacaoOperacao": false,
          "indicadorNiIdentificado": true,
          "ni": "98765432100",
          "participacao": 100.0,
          "indicadorConjuge": false,
          "indicadorRepresentante": false,
          "representantes": []
        }
      ],
      "dataLavraturaRegistroAverbacao": "2025-08-15",
      "dataNegocioJuridico": "2025-08-10",
      "destinacao": "1",
      "formaPagamento": "5",
      "indicadorImovelPublicoUniao": false,
      "indicadorPagamentoDinheiro": true,
      "indicadorPermutaBens": false,
      "tipoDeclaracao": "0",
      "tipoOperacaoImobiliaria": "11",
      "tipoParteTransacionada": "1",
      "tipoServico": "1",
      "valorParteTransacionada": 100.0,
      "bairro": "Centro",
      "cep": "01001000",
      "codigoIbge": "3550308",
      "codigoNacionalMatricula": "123456L00000001AA",
      "nomeLogradouro": "Rua das Flores",
      "numeroImovel": "123",
      "complementoEndereco": "Apto 202",
      "tipoLogradouro": "Rua",
      "tipoImovel": "67",
      "numeroRegistro": "20250910001",
      "matricula": "1234567",
      "numeroLivro": "987",
      "folha": "10-12",
      "tipoAto": "1",
      "tipoLivro": "1",
      "naturezaTitulo": "2",
      "valorOperacaoImobiliaria": 450000.00,
      "valorBaseCalculoItbiItcmd": 450000.00,
      "valorPagoMoedaCorrenteDataAto": 450000.00,
      "existeDoiAnterior": false,
      "indicadorAlienacaoFiduciaria": false,
      "registroImobiliarioPatrimonial": "1234567890123"
    }
  ]
}

```
