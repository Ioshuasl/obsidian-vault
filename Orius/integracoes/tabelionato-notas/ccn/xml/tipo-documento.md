---
tipo: xml-schema
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, xmlDocumento, rg]
status: revisado
---

> **Entidade:** [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]] · **Enum `tipo`:** [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/tipo-documento]]

# CCN XML — tipo `xmlDocumento`

Documento de identidade civil ou equivalente.

## Campos

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `tipo` | enum | Não | [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/tipo-documento]] |
| `docIdentidade` | string | **Sim** | Número do documento |
| `orgaoEmissor` | string | **Sim** | Órgão emissor |
| `ufOrgaoEmissor` | string | Não | UF do emissor |
| `dataEmissao` | string/date | **Sim** | Data de emissão |
| `imagemDocumento` | base64Binary | Não | Imagem do documento (Base64) |

## Valores de `tipo`

RG · Carteira Profissional · Passaporte · Carteira de Reservista · RNE

Detalhes: [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/tipo-documento]]

## Exemplo

```xml
<documento>
  <tipo>RG</tipo>
  <docIdentidade>12345678-9</docIdentidade>
  <orgaoEmissor>SSP</orgaoEmissor>
  <ufOrgaoEmissor>SP</ufOrgaoEmissor>
  <dataEmissao>2003-08-15</dataEmissao>
  <imagemDocumento>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemDocumento>
</documento>
```
