---
tipo: xml-schema
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, ficha, cartorio, anexo]
status: revisado
---

> **Entidade:** [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]] · **Exemplo:** [[Orius/integracoes/tabelionato-notas/ccn/xml/exemplo-xml]]

# CCN XML — tipos anexos e complementares

Tipos auxiliares com imagens em Base64 e metadados cadastrais.

## `xmlFicha`

Ficha cadastral do cartório.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `dataFicha` | string/date | Data da ficha |
| `numeroFicha` | string | Identificador da ficha |
| `imagensFicha` | base64Binary | Imagem(ns) da ficha |

Relacionado ao flag `fichaBloqueada` em [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]].

## `xmlCartorio`

Cartório vinculado ao cadastro.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `cdCnj` | string | Código CNJ do cartório |
| `nome` | string | Denominação |
| `cidade` | string | Município |

## `xmlTermoTitularidade`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `imagemTermoTitularidade` | base64Binary | Termo de titularidade (Base64) |

## `xmlCertidaoCasamento`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `imagemCertidaoCasamento` | base64Binary | Certidão de casamento (Base64) |

## `xmlAnexo`

Documento genérico adicional.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `imagemAnexo` | base64Binary | Anexo (Base64) |

## Exemplos (trechos)

```xml
<ficha>
  <dataFicha>2025-01-01</dataFicha>
  <numeroFicha>FCH123456</numeroFicha>
  <imagensFicha>iVBORw0KGgoAAAANSUhEUgAAAAUA</imagensFicha>
</ficha>

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
```

Todas as imagens seguem a regra global de Base64: [[Orius/integracoes/tabelionato-notas/ccn/xml/validacoes-xml#Imagens]].
