---
tipo: xml-schema
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, pessoas, raiz]
status: revisado
---

> **Índice XML:** [[Orius/integracoes/tabelionato-notas/ccn/xml/00-indice-xml]] · **Entidade:** [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]]

# CCN XML — elemento raiz `pessoas`

## Elemento raiz

| Elemento | Tipo XSD | Multiplicidade | Descrição |
|----------|----------|----------------|-----------|
| `pessoas` | `Pessoas` | 1..1 | Raiz do XML; encapsula uma ou mais `pessoa` |

## Tipo complexo `Pessoas`

- Composto por uma lista de elementos `pessoa`
- `pessoa`: tipo `xmlPessoa`, `maxOccurs="unbounded"` — várias pessoas no mesmo arquivo

## Declaração XML

```xml
<?xml version="1.0" encoding="ISO8859-1"?>
<pessoas>
  <pessoa>...</pessoa>
  <pessoa>...</pessoa>
</pessoas>
```

## Regras

- Um arquivo pode conter **múltiplas** pessoas (`pessoa` repetível)
- Cada `pessoa` é independente para fins de processamento na importação
- Campos obrigatórios ficam no nível de `pessoa`: ver [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]]
