---
tipo: xml-schema
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, xmlEndereco, endereco]
status: revisado
---

> **Entidade:** [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]] · **Exemplo:** [[Orius/integracoes/tabelionato-notas/ccn/xml/exemplo-xml]]

# CCN XML — tipo `xmlEndereco`

Dados de localização residencial ou profissional. Usado em `endereco` e `enderecoTrabalho`.

## Campos

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `ibgeCidade` | string | Não | Código IBGE do município |
| `cep` | string | Não | CEP |
| `bairro` | string | Não | Bairro |
| `cidade` | string | Não | Nome do município |
| `uf` | string | Não | UF |
| `complemento` | string | Não | Complemento |
| `endereco` | string | Não | Logradouro |
| `numero` | string | Não | Número |
| `imagemComprovanteResidencia` | base64Binary | Não | Comprovante de endereço (Base64); pode haver múltiplas imagens conforme schema |

## Principais usos

- **`endereco`** — residência do cadastrado
- **`enderecoTrabalho`** — endereço profissional (mesma estrutura)

## Exemplo

```xml
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
```

## Imagens

Comprovantes devem estar em **Base64** dentro do XML — ver [[Orius/integracoes/tabelionato-notas/ccn/xml/validacoes-xml#Imagens]].
