---
tipo: xml-schema
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, cnh, xmlCarteiraHabilitacao]
status: revisado
---

> **Entidade:** [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]] · **Exemplo:** [[Orius/integracoes/tabelionato-notas/ccn/xml/exemplo-xml]]

# CCN XML — tipo `xmlCarteiraHabilitacao`

Carteira Nacional de Habilitação (CNH).

## Campos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `numeroCarteiraHabilitacao` | string | Número da CNH |
| `categoriaCarteiraHabilitacao` | string | Categoria (ex.: B, AB) |
| `dataPrimeiraHabilitacao` | string/date | Data da primeira habilitação |
| `dataExpiracaoHabilitacao` | string/date | Validade |
| `imagemDocumento` | base64Binary | Imagem da CNH (Base64) |

## Exemplo

```xml
<carteiraHabilitacao>
  <numeroCarteiraHabilitacao>98765432100</numeroCarteiraHabilitacao>
  <categoriaCarteiraHabilitacao>B</categoriaCarteiraHabilitacao>
  <dataPrimeiraHabilitacao>2005-01-10</dataPrimeiraHabilitacao>
  <dataExpiracaoHabilitacao>2030-01-10</dataExpiracaoHabilitacao>
  <imagemDocumento>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemDocumento>
</carteiraHabilitacao>
```
