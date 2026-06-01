---
tipo: xml-schema
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, conjuge, xmlConjuge]
status: revisado
---

> **Entidade:** [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]] · **Enum regime:** [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/regime-bem]]

# CCN XML — tipo `xmlConjuge`

Dados do cônjuge vinculado ao cadastro.

## Campos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `cpf` | string | CPF do cônjuge |
| `nome` | string | Nome do cônjuge |
| `regimeBem` | enum | [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/regime-bem]] |

## Exemplo

```xml
<conjuge>
  <cpf>98765432100</cpf>
  <nome>Maria de Souza Silva</nome>
  <regimeBem>Comunhao Parcial</regimeBem>
</conjuge>
```
