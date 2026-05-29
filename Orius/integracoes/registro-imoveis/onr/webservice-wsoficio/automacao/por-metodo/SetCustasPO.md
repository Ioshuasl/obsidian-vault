---
tipo: automacao
area: orius
central: onr
protocolo: soap
operacao: SetCustasPO
tags: [orius, onr, n8n, proxy, SetCustasPO]
fonte_repositorio: C:/Users/kenio/soap-ui test/scripts/SetCustasPo/Set Custas PO WebService ONR.md
status: revisado
plane_work_item_id: 392c3bfd-77d0-42ca-a762-7b8680df9a0c
plane_sequence_id: 18
plane_key: AUTONR-18
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/18
plane_automation_status: done
---> **Método SOAP:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/PO/SetCustasPO]]
> **Scripts locais:** `C:\Users\kenio\soap-ui test\scripts\SetCustasPo\`

## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-18** |
| Work item ID | `392c3bfd-77d0-42ca-a762-7b8680df9a0c` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/18 |
| Automação | `done` |


# Set Custas PO — WebService ONR (n8n)

Workflow n8n proxy para `SetCustasPO` (módulo 3.3 Penhora Online).

- **Workflow:** [[C:\Users\kenio\soap-ui test\workflows\n8n/extensao-n8n-teste/Set Custas PO.workflow.ts]](C:\Users\kenio\soap-ui test\workflows\n8n/extensao-n8n-teste/Set%20Custas%20PO.workflow.ts)
- **Método:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/PO/SetCustasPO]]
- **Scripts CLI:** [`setCustasPo.js`](setCustasPo.js) · [`setCustasPo.py`](setCustasPo.py)
- **Postman:** [`postman/onr-webservice-n8n.postman_collection.json`](../../postman/onr-webservice-n8n.postman_collection.json) (request **Set Custas PO — Informar**)

## Pré-requisito

Obter `hash` via workflow **Auth ONR** ou `npm run login`. Ver [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/hash]].

O pedido deve ser de Penhora (`IDTipoPedido=3`) e já estar prenotado.

## Request (JSON snake_case)

| Campo | Tipo | Obrigatório | SOAP |
|-------|------|-------------|------|
| `hash` | string | sim | `Hash` |
| `id_pedido` | number | sim | `IDPedido` |
| `valor_custas` | number | sim | `ValorCustas` |
| `url_servico_onr` | string | sim | endpoint SOAP |

### Exemplo

```json
{
  "hash": "A1B2C3D4E5F6789012345678901234567890ABCDEF",
  "id_pedido": 18014709,
  "valor_custas": 50.0,
  "url_servico_onr": "https://hml3-wsoficio.onr.org.br/penhoraonline.asmx"
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
    "id_pedido": 18014709,
    "valor_custas": 50,
    "custas_informadas": true
  }
}
```

### HTTP status

| Situação | Código |
|----------|--------|
| Sucesso | 200 |
| Validação local / request inválido (10–13) | 400 |
| Hash inválido/usado/expirado (45–47) | 401 |
| Sem permissão (52, 58) | 403 |
| Pedido/cartório não encontrado (51, 57) | 404 |
| Regra de negócio ONR (53–56, 59) | 422 |
| Falha ONR / conexão | 502 |

## Webhook

- Path: `d8e9f0a1-b2c3-4d5e-8f90-a1b2c3d4e5f6`
- URL teste: `https://<n8n>/webhook-test/d8e9f0a1-b2c3-4d5e-8f90-a1b2c3d4e5f6`
- Basic Auth (mesmas credenciais do Auth ONR)

## Publicar

```bash
npx --yes n8nac skills validate "workflows/n8n/extensao-n8n-teste/Set Custas PO.workflow.ts"
npx --yes n8nac push "workflows/n8n/extensao-n8n-teste/Set Custas PO.workflow.ts" --verify
```

Ative o workflow no n8n e use `n8n_webhook_mode=webhook` em produção (ou `webhook-test` + **Execute workflow** no editor).
