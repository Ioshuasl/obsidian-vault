---
tipo: automacao
area: orius
central: onr
protocolo: soap
operacao: GetStatusAT
tags: [orius, onr, n8n, proxy, GetStatusAT]
fonte_repositorio: C:/Users/kenio/soap-ui test/scripts/GetStatusAt/Get Status AT WebService ONR.md
status: revisado
plane_work_item_id: b6b7dbd3-5d75-43fe-82a9-80d69c18165e
plane_sequence_id: 7
plane_key: AUTONR-7
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/7
plane_automation_status: done
---> **Método SOAP:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/AT/GetStatusAT]]
> **Scripts locais:** `C:\Users\kenio\soap-ui test\scripts\GetStatusAt\`

## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-7** |
| Work item ID | `b6b7dbd3-5d75-43fe-82a9-80d69c18165e` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/7 |
| Automação | `done` |


# Get Status AT — WebService ONR (n8n)

Workflow n8n proxy para `GetStatusAT` (módulo 3.2 Acompanhamento de Títulos).

- **Workflow:** [[C:\Users\kenio\soap-ui test\workflows\n8n/gentle-juniper-bb6f8f0940a3/Get Status AT.workflow.ts]](C:\Users\kenio\soap-ui test\workflows\n8n/gentle-juniper-bb6f8f0940a3/Get%20Status%20AT.workflow.ts)
- **Método:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/AT/GetStatusAT]]
- **Scripts CLI:** [`getStatusAt.js`](getStatusAt.js) · [`getStatusAt.py`](getStatusAt.py)
- **Postman:** [`postman/onr-webservice-n8n.postman_collection.json`](../../postman/onr-webservice-n8n.postman_collection.json) (request **Get Status AT — Consultar**)

## Pré-requisito

Obter `hash` via workflow **Auth ONR** ou `npm run login`. Ver [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/hash]].

## Request (JSON snake_case)

| Campo | Tipo | Obrigatório | SOAP |
|-------|------|-------------|------|
| `hash` | string | sim | `Hash` |
| `id_status` | number | sim | `IDStatus` |
| `url_servico_onr` | string | sim | endpoint SOAP |

### Exemplo

```json
{
  "hash": "A1B2C3D4E5F6789012345678901234567890ABCDEF",
  "id_status": 5001,
  "url_servico_onr": "https://hml3-wsoficio.onr.org.br/acompanhamentotitulos.asmx"
}
```

## Response

```json
{
  "status_http": 200,
  "sucesso": true,
  "codigo_erro": 0,
  "mensagem_erro": "",
  "dados": {
    "id_tipo_status": 4,
    "data_status": "2025-06-01T10:00:00",
    "descricao_status": "Status de exemplo",
    "protocolo": "20250100001",
    "valor_deposito": 100.5,
    "valor_emolumentos": 50.25,
    "apresentante_nome": "Banco X",
    "apresentante_cpf_cnpj": "12345678901",
    "apresentante_email": "contato@banco.com",
    "modo_notificacao_status": "E",
    "apresentante_ddd_telefone": "11",
    "apresentante_numero_telefone": "999999999",
    "data_protocolo": "2025-01-15T08:30:00",
    "data_previsao_entrega": "2025-02-15T17:00:00",
    "natureza_titulo": "Prenotação",
    "interessado_nome": "Fulano",
    "interessado_cpf_cnpj": "98765432100",
    "codigo_verificador": "ABC123",
    "tipo_solicitacao": 1
  }
}
```

### HTTP status

| Situação | Código |
|----------|--------|
| Sucesso | 200 |
| Validação local / request inválido (10–12) | 400 |
| Hash inválido/usado/expirado (45–47) | 401 |
| Sem permissão (50) | 403 |
| Erro negócio ONR | 422 |
| Falha ONR / conexão | 502 |

## Webhook

- Path: `d7e8f9a0-b1c2-4d3e-9f0a-1b2c3d4e5f6a`
- URL teste: `https://<n8n>/webhook-test/d7e8f9a0-b1c2-4d3e-9f0a-1b2c3d4e5f6a`
- Basic Auth (mesmas credenciais do Auth ONR)

## Publicar

Workflow n8n ID: `I1P3ePLt6DHNEbyL`

```bash
npx --yes n8nac skills validate "workflows/n8n/gentle-juniper-bb6f8f0940a3/Get Status AT.workflow.ts"
npx --yes n8nac push "workflows/n8n/gentle-juniper-bb6f8f0940a3/Get Status AT.workflow.ts" --verify
```

Ative o workflow no n8n e use `n8n_webhook_mode=webhook` em produção (ou `webhook-test` + **Execute workflow** no editor).
