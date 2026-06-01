---
tipo: referencia
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, dominio, TBD-06, protocolo, descricao]
codigo: TBD-06
manual: v2.2
status: documentado
---

> **Índice domínio:** [[Orius/integracoes/registro-imoveis/acompanhamento-registral/dominio/00-indice-dominio]]

# [TBD-06] — ACTipoDescricao

Formato do conteúdo do campo **`descricao`** em objetos de **situação** do protocolo. Os valores são **strings** (slug), não códigos numéricos.

## Valores

| Valor (`tipoDescricao`) | Significado |
|-------------------------|-------------|
| `texto` | Texto puro |
| `html` | Texto com tags HTML |
| `pdf` | Arquivo PDF em **Base64** |
| `csv` | Arquivo CSV em **Base64** |
| `rtf` | Arquivo RTF em **Base64** |
| `zip` | Arquivo ZIP em **Base64** |
| `rar` | Arquivo RAR em **Base64** |
| `7z` | Arquivo 7z em **Base64** |
| `json` | Arquivo JSON em **Base64** |

## Onde é usado

| Nota / API | Campo |
|------------|-------|
| [[RFP-01-envio-online]] | `status.tipoDescricao` (envio) |
| [[RFP-02-envio-lote]] | `status.tipoDescricao` |
| [[RFP-06-detalhe-protocolo-v1]] | `status.tipoDescricao` (detalhe) |
| [[RFP-07-detalhe-protocolo-v2]] | `listaStatus[].tipoDescricao` |

Relacionado ao código de situação: [[TBD-03-accodigo-status]] em `status.status` / `listaStatus[].status`.

## Integração — como interpretar `descricao`

| `tipoDescricao` | Tratamento no sistema do cartório |
|-----------------|-----------------------------------|
| `texto`, `html` | Exibir direto (HTML com sanitização) |
| `pdf`, `csv`, `rtf`, `zip`, `rar`, `7z`, `json` | Decodificar Base64 → arquivo → visualizar ou salvar |

**Tipo no JSON:** `string` (tamanho 20 no manual).

**Manual bruto:** seção `[TBD-06] - ACTipoDescricao`
