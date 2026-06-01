---
tipo: xml-exemplo
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, exemplo]
status: revisado
---

> **Estrutura:** [[Orius/integracoes/tabelionato-notas/ccn/xml/00-indice-xml]] · **Upload:** [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-uploads]]

# CCN — exemplo de XML (pessoa física)

Trecho representativo com os principais grupos de campos. Arquivo completo para download: [CCN20251123-1.xml](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777905117317-CCN20251123-1.xml)

```xml
<?xml version="1.0" encoding="ISO8859-1"?>
<pessoas>
  <pessoa>
    <chaveRegistro>123e4567-e89b-12d3-a456-426614174000</chaveRegistro>
    <dataRegistro>2025-09-15</dataRegistro>
    <estadoCivil>Casado</estadoCivil>
    <ibgeCidadeNaturalidade>3550308</ibgeCidadeNaturalidade>
    <nacionalidade>Brasileira</nacionalidade>
    <nacionalidadeTipo>Brasileiro Nato</nacionalidadeTipo>
    <ufNaturalidade>SP</ufNaturalidade>
    <cidadeNaturalidade>São Paulo</cidadeNaturalidade>
    <cpf>12345678901</cpf>
    <nome>João da Silva</nome>
    <sexo>Masculino</sexo>
    <mae>Maria da Silva</mae>
    <pai>José da Silva</pai>
    <telefone>1130000000</telefone>
    <celular>11990000000</celular>
    <profissao>Engenheiro Civil</profissao>
    <dataNascimento>1985-06-20</dataNascimento>
    <email>joao.silva@email.com</email>

    <endereco>
      <ibgeCidade>3550308</ibgeCidade>
      <cep>01001000</cep>
      <bairro>Centro</bairro>
      <cidade>São Paulo</cidade>
      <uf>SP</uf>
      <complemento>Apto 101</complemento>
      <endereco>Rua da Consolação</endereco>
      <numero>123</numero>
      <imagemComprovanteResidencia>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemComprovanteResidencia>
    </endereco>

    <documento>
      <tipo>RG</tipo>
      <docIdentidade>12345678-9</docIdentidade>
      <orgaoEmissor>SSP</orgaoEmissor>
      <ufOrgaoEmissor>SP</ufOrgaoEmissor>
      <dataEmissao>2003-08-15</dataEmissao>
      <imagemDocumento>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemDocumento>
    </documento>

    <carteiraHabilitacao>
      <numeroCarteiraHabilitacao>98765432100</numeroCarteiraHabilitacao>
      <categoriaCarteiraHabilitacao>B</categoriaCarteiraHabilitacao>
      <dataPrimeiraHabilitacao>2005-01-10</dataPrimeiraHabilitacao>
      <dataExpiracaoHabilitacao>2030-01-10</dataExpiracaoHabilitacao>
      <imagemDocumento>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemDocumento>
    </carteiraHabilitacao>

    <biometria>
      <dedo>1</dedo>
      <imagemBiometria>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemBiometria>
    </biometria>

    <ficha>
      <dataFicha>2025-01-01</dataFicha>
      <numeroFicha>FCH123456</numeroFicha>
      <imagensFicha>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagensFicha>
    </ficha>

    <imagemFoto>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemFoto>

    <cartorio>
      <cdCnj>123456789</cdCnj>
      <nome>Cartório do 1º Ofício de Notas</nome>
      <cidade>São Paulo</cidade>
    </cartorio>

    <termoTitularidade>
      <imagemTermoTitularidade>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemTermoTitularidade>
    </termoTitularidade>

    <certidaoCasamento>
      <imagemCertidaoCasamento>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemCertidaoCasamento>
    </certidaoCasamento>

    <anexo>
      <imagemAnexo>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemAnexo>
    </anexo>

    <enderecoTrabalho>
      <ibgeCidade>3550308</ibgeCidade>
      <cep>04567000</cep>
      <bairro>Brooklin</bairro>
      <cidade>São Paulo</cidade>
      <uf>SP</uf>
      <complemento>Conj. 203</complemento>
      <endereco>Av. Berrini</endereco>
      <numero>789</numero>
    </enderecoTrabalho>

    <politicamenteExposta>false</politicamenteExposta>
    <investigadaAcusadaTerrorismo>false</investigadaAcusadaTerrorismo>

    <conjuge>
      <cpf>98765432100</cpf>
      <nome>Maria de Souza Silva</nome>
      <regimeBem>Comunhao Parcial</regimeBem>
    </conjuge>

    <fichaBloqueada>false</fichaBloqueada>
    <fotoVerificada>true</fotoVerificada>
  </pessoa>
</pessoas>
```

## Mapa para fichas técnicas

| Bloco no exemplo | Ficha |
|------------------|-------|
| `pessoas` / `pessoa` | [[Orius/integracoes/tabelionato-notas/ccn/xml/estrutura-raiz]] · [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]] |
| `endereco`, `enderecoTrabalho` | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-endereco]] |
| `documento` | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-documento]] |
| `carteiraHabilitacao` | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-carteira-habilitacao]] |
| `biometria` | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-biometria]] |
| `conjuge` | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-conjuge]] |
| `ficha`, `cartorio`, anexos | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipos-anexos-complementares]] |
