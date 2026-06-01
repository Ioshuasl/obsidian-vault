---
tipo: xml-schema
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, biometria, xmlBiometria]
status: revisado
---

> **Entidade:** [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]] · **Exemplo:** [[Orius/integracoes/tabelionato-notas/ccn/xml/exemplo-xml]]

# CCN XML — tipo `xmlBiometria`

Impressão digital ou biometria associada ao cadastro.

## Cardinalidade

- `maxOccurs="unbounded"` — **múltiplas** ocorrências de `biometria` por pessoa

## Campos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `dedo` | positiveInteger | Identificador do dedo |
| `imagemBiometria` | base64Binary | Imagem biométrica (Base64) |

## Exemplo

```xml
<biometria>
  <dedo>1</dedo>
  <imagemBiometria>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagemBiometria>
</biometria>
```

## Tipagem

`dedo` usa `xs:positiveInteger` — ver [[Orius/integracoes/tabelionato-notas/ccn/xml/validacoes-xml#Tipagem]].
