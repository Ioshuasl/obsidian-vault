---
tipo: xml-schema
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, xmlPessoa, pessoa]
status: revisado
---

> **Raiz:** [[Orius/integracoes/tabelionato-notas/ccn/xml/estrutura-raiz]] · **Exemplo:** [[Orius/integracoes/tabelionato-notas/ccn/xml/exemplo-xml]]

# CCN XML — entidade `pessoa` (`xmlPessoa`)

A entidade `pessoa` agrega dados identificadores, biográficos, documentais, profissionais, relacionais, anexos e complementares.

## Obrigatórios

| Campo | Tipo | Observação |
|-------|------|------------|
| `cpf` | string | Identificador principal |
| `nome` | string | Nome completo |

Todos os demais campos têm `minOccurs="0"` no schema.

## Campos escalares

| Campo | Grupo | Descrição |
|-------|-------|-----------|
| `chaveRegistro` | Identificação | UUID/chave do registro no cartório |
| `dataRegistro` | Identificação | Data do cadastro |
| `cpf` | Identificação | CPF (obrigatório) |
| `nome` | Identificação | Nome (obrigatório) |
| `sexo` | Biográfico | Ex.: Masculino, Feminino |
| `dataNascimento` | Biográfico | Data ISO |
| `estadoCivil` | Biográfico | Ex.: Casado, Solteiro |
| `nacionalidade` | Biográfico | Texto livre (ex.: Brasileira) |
| `nacionalidadeTipo` | Biográfico | Enum — [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/tipo-nacionalidade]] |
| `ibgeCidadeNaturalidade` | Naturalidade | Código IBGE (7 dígitos) |
| `cidadeNaturalidade` | Naturalidade | Nome da cidade |
| `ufNaturalidade` | Naturalidade | UF |
| `mae` | Filiação | Nome da mãe |
| `pai` | Filiação | Nome do pai |
| `telefone` | Contato | Telefone fixo |
| `celular` | Contato | Celular |
| `email` | Contato | E-mail |
| `profissao` | Profissional | Profissão |
| `imagemFoto` | Imagem | Foto da pessoa (Base64) |
| `fotoVerificada` | Imagem | boolean |
| `fichaBloqueada` | Ficha | boolean |
| `politicamenteExposta` | Compliance | boolean |
| `investigadaAcusadaTerrorismo` | Compliance | boolean |

## Elementos complexos (filhos)

| Elemento | Tipo | Multiplicidade | Documentação |
|----------|------|----------------|--------------|
| `endereco` | `xmlEndereco` | 0..1 | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-endereco]] |
| `enderecoTrabalho` | `xmlEndereco` | 0..1 | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-endereco]] |
| `documento` | `xmlDocumento` | 0..1 | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-documento]] |
| `carteiraHabilitacao` | `xmlCarteiraHabilitacao` | 0..1 | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-carteira-habilitacao]] |
| `biometria` | `xmlBiometria` | 0..n | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-biometria]] |
| `conjuge` | `xmlConjuge` | 0..1 | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-conjuge]] |
| `ficha` | `xmlFicha` | 0..1 | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipos-anexos-complementares#xmlFicha]] |
| `cartorio` | `xmlCartorio` | 0..1 | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipos-anexos-complementares#xmlCartorio]] |
| `termoTitularidade` | `xmlTermoTitularidade` | 0..1 | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipos-anexos-complementares]] |
| `certidaoCasamento` | `xmlCertidaoCasamento` | 0..1 | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipos-anexos-complementares]] |
| `anexo` | `xmlAnexo` | 0..1 | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipos-anexos-complementares]] |

## Grupos de informação (visão funcional)

| Grupo | Elementos destacados |
|-------|----------------------|
| Filiação | `mae`, `pai` |
| Contato | `telefone`, `celular`, `email` |
| Endereço | `endereco`, `enderecoTrabalho` |
| Documentação | `documento`, `carteiraHabilitacao` |
| Biometria | `biometria` (lista) |
| Imagem | `imagemFoto`, `fotoVerificada` |
| Ficha cadastral | `ficha`, `fichaBloqueada` |
| Documentos adicionais | `anexo`, `termoTitularidade`, `certidaoCasamento` |
| Relações pessoais | `conjuge` |
| Verificações legais | `politicamenteExposta`, `investigadaAcusadaTerrorismo` |
| Cartório vinculado | `cartorio` |
