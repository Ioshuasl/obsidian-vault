---
tipo: runbook
area: orius
produto: notas
central: censec
tags: [orius, notas, censec, n8n, upload-json]
status: revisado
tem-n8n: true
operacao: CENSEC_UploadJSON
plane_work_item_id: d89dd33c-66b0-49e1-a85b-871ac2cfd7b4
plane_sequence_id: 13
plane_key: AUTONR-13
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/13
plane_automation_status: done
---

## Plane

**AUTONR-13** — CENSEC Upload JSON Gateway

# Como usar

## 1. Endpoint

```
POST https://api-n8n.gbrqne.easypanel.host/webhook/censec/cargas/upload-json
```

## 2. Autenticação

| Tipo | Onde |
|------|------|
| **Basic Auth** | Usuário e senha do webhook n8n |
| **Header `X-Api-Key`** | Chave do cartório na CENSEC (`NOME\|token`) |
| **Header `Content-Type`** | `application/json` |

## 3. Corpo da requisição (exemplo)

```json
{
  "cns": 995936,
  "quinzena": {
    "anoReferencia": 2026,
    "quinzenaReferencia": 1,
    "mesReferencia": "Maio"
  },
  "atosCep": [
    {
      "tipoAtoCep": "Escritura",
      "naturezaEscritura": "CompraEVenda",
      "livro": "1500",
      "folha": "12",
      "data": "2026-05-02",
      "valor": 500000,
      "partes": [
        {
          "nome": "Joao da Silva",
          "qualidade": "Outorgante",
          "tipoDocumento": "Cpf",
          "numeroDocumento": "52998224725",
          "estrangeiro": false
        }
      ]
    }
  ],
  "declaracoes": []
}
```

Envie só os blocos que tiver dados: `atosCep`, `atosCesdi`, `declaracoes`, `testamentos`.

Payload completo: `automacoes e testes/censec/exemplo-censec-json.json`

## 4. Resposta esperada

**Sucesso (HTTP 200)**

```json
{
  "success": true,
  "message": "Carga JSON enviada para a CENSEC.",
  "censec": { }
}
```

**Erro de validação local (HTTP 400)** — JSON não foi enviado à CENSEC

```json
{
  "success": false,
  "message": "Payload rejeitado pela validacao local antes do envio para a CENSEC.",
  "errors": [
    {
      "central": "CEP",
      "path": "atosCep[0].partes[0].numeroDocumento",
      "code": "cpf_invalid",
      "message": "CPF invalido."
    }
  ]
}
```

**Erro da CENSEC (HTTP 4xx/5xx)**

```json
{
  "success": false,
  "message": "...",
  "error": {
    "code": "...",
    "message": "...",
    "source": "CENSEC"
  }
}
```

---

Mais detalhes: [[Orius/integracoes/tabelionato-notas/censec/visao-geral-e-api]] · [[Orius/integracoes/tabelionato-notas/censec/00-indice-censec]]
