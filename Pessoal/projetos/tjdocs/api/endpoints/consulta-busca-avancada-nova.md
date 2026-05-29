---
tipo: api-endpoint
area: pessoal
projeto: tjdocs
metodo: POST
path: /consulta/busca-avancada-nova
tags: [pessoal, tjdocs, api, busca, documentos, oficio, provimento]
status: revisado
testado: 2026-05-29
---

# POST /consulta/busca-avancada-nova

Listagem de **documentos** por busca avançada (filtros por tipo e, opcionalmente, ano).

> **Produto:** [[Pessoal/projetos/tjdocs/00-indice|TJDocs]] · **API:** [[Pessoal/projetos/tjdocs/api/00-indice-api]]

## Requisição

| | |
|---|---|
| **URL** | `https://tjdocs-backend.tjgo.jus.br/v1/consulta/busca-avancada-nova` |
| **Método** | `POST` |
| **Auth** | Não |
| **Content-Type** | `application/json` |

## Body (JSON)

### Filtro só por tipo de documento

```json
{
  "tipoDocumento": [
    "oficio",
    "oficio_circular",
    "provimento"
  ]
}
```

### Filtro por ano + tipo

```json
{
  "ano": [
    "2026",
    "2025"
  ],
  "tipoDocumento": [
    "oficio",
    "oficio_circular",
    "provimento"
  ]
}
```

### Campos do body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `tipoDocumento` | `string[]` | sim (uso atual) | Slugs do tipo — ver tabela abaixo |
| `ano` | `string[]` | não | Anos (ex.: `"2026"`, `"2025"`) para restringir resultados |

### Valores conhecidos de `tipoDocumento` (request)

| Slug no body | Uso no projeto |
|--------------|----------------|
| `oficio` | Ofícios |
| `oficio_circular` | Ofícios circulares |
| `provimento` | Provimentos |

> Na **resposta**, `tipoDocumento` vem com rótulo legível (ex.: `"Provimento"`, possivelmente `"Ofício"`) — não confundir com o slug do request.

## cURL

Só por tipo:

```bash
curl -s -X POST "https://tjdocs-backend.tjgo.jus.br/v1/consulta/busca-avancada-nova" \
  -H "Content-Type: application/json" \
  -d "{\"tipoDocumento\":[\"oficio\",\"oficio_circular\",\"provimento\"]}"
```

Tipo + anos:

```bash
curl -s -X POST "https://tjdocs-backend.tjgo.jus.br/v1/consulta/busca-avancada-nova" \
  -H "Content-Type: application/json" \
  -d "{\"ano\":[\"2026\",\"2025\"],\"tipoDocumento\":[\"oficio\",\"oficio_circular\",\"provimento\"]}"
```

PowerShell:

```powershell
$uri = "https://tjdocs-backend.tjgo.jus.br/v1/consulta/busca-avancada-nova"
$body = @{
  ano = @("2026", "2025")
  tipoDocumento = @("oficio", "oficio_circular", "provimento")
} | ConvertTo-Json

Invoke-RestMethod -Uri $uri -Method POST -Body $body -ContentType "application/json; charset=utf-8"
```

## Resposta

| | |
|---|---|
| **HTTP** | `200` |
| **Formato** | JSON com array `value` (lista de documentos) |

### Testes (2026-05-29)

| Body | Qtd. itens em `value` (aprox.) |
|------|-------------------------------|
| Só `tipoDocumento` | **1023** |
| `ano` + `tipoDocumento` | **278** |

### Estrutura de cada item em `value[]`

| Campo | Tipo | Exemplo / notas |
|-------|------|-----------------|
| `id` | number | `922437` — id do documento |
| `fonte` | string | `"documento"` |
| `texto` | string | Título exibido — ex. `"Provimento nº 193-2026"` |
| `tipoDocumento` | string | Rótulo — ex. `"Provimento"` |
| `ano` | string | `"2026"` |
| `numero` | string | `"193"` |
| `ementa` | string | Texto da ementa |
| `local` | string | Caminho lógico — ex. `"//Corregedoria Geral da Justiça/Provimentos/2026"` |
| `documentoPastaId` | number | Id da pasta no TJDocs |
| `dataCadastro` | string | `"12/05/2026 14:41:33"` |
| `dataAlteracao` | string | ISO — ex. `"2026-05-12T14:41:33.806032"` |
| `situacao` | string | ex. `"Vigente"` |
| `exaurido` | boolean | |
| `dataExaurido` | string \| null | |
| `highlight` | string \| null | |
| `vinculosAplicados` | string \| null | JSON serializado em string |
| `vinculosRecebidos` | string \| null | |
| `lei` | string | |
| `diario` | string \| null | |

### Exemplo de item (resposta real, truncado)

```json
{
  "fonte": "documento",
  "texto": "Provimento nº 193-2026",
  "id": 922437,
  "highlight": null,
  "dataCadastro": "12/05/2026 14:41:33",
  "local": "//Corregedoria Geral da Justiça/Provimentos/2026",
  "documentoPastaId": 19311,
  "ementa": "Altera do Código de Normas e Procedimentos do Foro Judicial – CNPF.",
  "vinculosAplicados": "[{\"tipo\":\"Altera e Revoga\",\"nome\":\"Provimento nº 183-2026\",\"id\":895411}]",
  "vinculosRecebidos": null,
  "exaurido": false,
  "dataExaurido": null,
  "ano": "2026",
  "numero": "193",
  "lei": "",
  "situacao": "Vigente",
  "tipoDocumento": "Provimento",
  "diario": null,
  "dataAlteracao": "2026-05-12T14:41:33.806032"
}
```

## Observações para o consumidor

- Resposta pode ser **grande** sem filtro de `ano` — preferir filtrar ano no body quando possível.
- `vinculosAplicados` / `vinculosRecebidos` vêm como **string JSON**; fazer `JSON.parse` se precisar estruturar.
- Não há paginação documentada nesta nota — confirmar se a API limita ou pagina em outros parâmetros.

## Próximo passo (detalhe + PDF)

Com o `id` de cada item em `value[]`:

→ [[Pessoal/projetos/tjdocs/api/endpoints/documentos-por-id|GET /documentos/{id}]] (campo **`urlUploadPdf`**)

## Relacionado

- [[Pessoal/projetos/tjdocs/api/recursos/documentos]]
- [[Pessoal/projetos/tjdocs/api/recursos/oficios]]
- [[Pessoal/projetos/tjdocs/api/recursos/provimentos]]
- [[Pessoal/projetos/tjdocs/api/tipos-documento]]
