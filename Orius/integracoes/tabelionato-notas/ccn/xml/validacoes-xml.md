---
tipo: xml-schema
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, validacao, xsd]
status: revisado
---

> **Índice XML:** [[Orius/integracoes/tabelionato-notas/ccn/xml/00-indice-xml]] · **Erros API:** [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-erros]]

# CCN XML — validações e restrições

Regras de schema XSD aplicáveis ao arquivo de importação.

## Cardinalidade

- Maioria dos elementos opcionais (`minOccurs="0"`)
- Apenas **`cpf`** e **`nome`** são obrigatórios em cada `pessoa`
- `biometria` e `pessoa` permitem múltiplas ocorrências (`maxOccurs="unbounded"`)

Ver [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa#Obrigatórios]].

## Tipagem

| Tipo XSD | Uso |
|----------|-----|
| `xs:string` | Textos (nome, endereço, CPF como string, etc.) |
| `xs:base64Binary` | Imagens e anexos |
| `xs:boolean` | Flags (`politicamenteExposta`, `fichaBloqueada`, `fotoVerificada`, …) |
| `xs:positiveInteger` | Ex.: `dedo` em biometria |

## Imagens

Todas as imagens (documentos, fotos, comprovantes, biometria, anexos) devem estar em **Base64** dentro do XML.

Campos típicos:

- `imagemDocumento`, `imagemFoto`, `imagemBiometria`
- `imagemComprovanteResidencia`, `imagensFicha`
- `imagemTermoTitularidade`, `imagemCertidaoCasamento`, `imagemAnexo`

## Encoding

Declaração recomendada:

```xml
<?xml version="1.0" encoding="ISO8859-1"?>
```

## Enumerações

Valores restritos devem corresponder exatamente aos enums documentados:

- [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/tipo-documento]]
- [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/tipo-nacionalidade]]
- [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/regime-bem]]

## Documento interno obrigatório (quando informado)

Se o bloco `documento` estiver presente, estes campos são obrigatórios no tipo `xmlDocumento`:

- `docIdentidade`, `orgaoEmissor`, `dataEmissao`

Ver [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-documento]].
