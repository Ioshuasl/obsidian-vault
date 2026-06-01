---
tipo: runbook
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, imoveis, doi, n8n, validacao]
status: revisado
tem-n8n: true
operacao: DOI_ValidateJSON
plane_work_item_id: 79f5102a-457e-4be0-93eb-a8ac46c404f8
plane_sequence_id: 87
plane_key: AUTONR-87
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/87
plane_automation_status: pending
---

## Plane

**AUTONR-87** — DOI Validate JSON

# Como usar

Validação **local** do payload DOI-Web — não envia dados à Receita Federal.

## 1. Endpoint

```
POST https://api-n8n.gbrqne.easypanel.host/webhook/doi/validate-json
```

## 2. Autenticação

| Tipo | Onde |
|------|------|
| **Nenhuma** | Webhook sem Basic Auth |
| **Header `Content-Type`** | `application/json` |

## 3. Corpo da requisição (exemplo)

```json
{
  "declaracoes": [
    {
      "tipoDeclaracao": "0",
      "tipoServico": "1",
      "dataLavraturaRegistroAverbacao": "2025-08-15",
      "tipoAto": "1",
      "folha": "10-12",
      "dataNegocioJuridico": "2025-08-10",
      "tipoOperacaoImobiliaria": "11",
      "valorOperacaoImobiliaria": 450000,
      "valorBaseCalculoItbiItcmd": 450000,
      "formaPagamento": "5",
      "destinacao": "1",
      "cib": "J7DNF01S",
      "codigoIbge": "3550308",
      "areaImovel": 250,
      "areaConstruida": 180,
      "tipoImovel": "67",
      "tipoLogradouro": "Rua",
      "nomeLogradouro": "Rua das Flores",
      "numeroImovel": "123",
      "cep": "01001000",
      "alienantes": [
        {
          "indicadorNiIdentificado": true,
          "ni": "11144477735",
          "participacao": 100
        }
      ],
      "adquirentes": [
        {
          "indicadorNiIdentificado": true,
          "ni": "52998224725",
          "participacao": 100
        }
      ]
    }
  ]
}
```

Payload completo: `automacoes e testes/scripts/doi/exemplo-doi-valido.json`

## 4. Resposta esperada

**Sucesso (HTTP 200)**

```json
{
  "success": true,
  "valid": true,
  "message": "Payload DOI valido na validacao local (sem envio ao DOI-Web).",
  "declarationCount": 1,
  "errorCount": 0,
  "warningCount": 0,
  "errors": [],
  "warnings": []
}
```

**Erro de validação (HTTP 400)**

```json
{
  "success": false,
  "valid": false,
  "message": "Payload DOI rejeitado pela validacao local.",
  "declarationCount": 1,
  "errorCount": 1,
  "errors": [
    {
      "sistema": "DOI",
      "path": "declaracoes[0].alienantes[0].ni",
      "code": "ni_invalid",
      "message": "NI deve ser CPF (11 digitos) ou CNPJ (14 digitos) valido."
    }
  ]
}
```

---

Mais detalhes: [[Orius/integracoes/tabelionato-notas/doi/00-indice-doi]] · [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
