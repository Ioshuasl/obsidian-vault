---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-14, atendimento-eletronico]
codigo: TBD-14
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/dominio/00-indice-dominio]]

# [TBD-14] — AEExtensoesArquivos

Extensões permitidas para **anexos** enviados no cadastro de interação (**RAE-03**). Diferente dos demais TBD de atendimento eletrônico, os valores são **strings** (slug da extensão), não códigos numéricos.

## Valores

| `tipo` (slug) | Descrição no manual |
|---------------|---------------------|
| `pdf` | Conteúdo em base64 de um arquivo PDF |
| `csv` | Conteúdo em base64 de um arquivo CSV |
| `rtf` | Conteúdo em base64 de um arquivo RTF |
| `zip` | Conteúdo em base64 de um arquivo ZIP |
| `rar` | Conteúdo em base64 de um arquivo RAR |
| `7z` | Conteúdo em base64 de um arquivo 7z |
| `json` | Conteúdo em base64 de um arquivo JSON |

Use **minúsculas**, como no exemplo do manual (`"tipo": "pdf"`).

## Onde é usado

| Contexto | Campo | Obrigatório |
|----------|-------|-------------|
| [[RAE-03-cadastro-interacao]] | `arquivos[].tipo` no body | Sim, **se** houver item em `arquivos[]` |

Estrutura de cada item em `arquivos[]`:

| Campo | Tipo | Obrigatório | Regra |
|-------|------|-------------|-------|
| `nome` | string (250) | Sim | Nome **com extensão** (ex.: `exemplo.pdf`) |
| `tipo` | string (6) | Sim | Deve ser um slug desta tabela |
| `base64` | string | Sim | Conteúdo do arquivo codificado em Base64 |

O array `arquivos` no body é **opcional**; cada campo dentro do objeto é obrigatório quando o array é enviado.

**Download (RAE-02):** no detalhe, `interacoes[].arquivos[]` traz `nome` + `url` (não usa TBD-14 — anexos já publicados na plataforma).

## Integração Orius

| Prática | Detalhe |
|---------|---------|
| Alinhar `nome` e `tipo` | Se `nome` termina em `.pdf`, use `tipo: "pdf"` |
| PDF de exigência | Código `pdf` é o caso mais comum para documentos do cartório |
| Tamanho / payload | Base64 aumenta o volume; validar limites operacionais antes de lotes grandes |

Relacionado: [[TBD-13-aeacao]] (body da mesma requisição), [[TBD-12-aeorigem]] (quem aparece no histórico após o POST).

**Fonte:** `api-registro-imoveis/manual-api-acompanhamento-registral-pagamentos-v2.2.md` — `[TBD-14] - AEExtensoesArquivos` (pág. 99 do PDF v2.2)
