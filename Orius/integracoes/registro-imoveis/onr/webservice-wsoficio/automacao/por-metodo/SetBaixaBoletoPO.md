---
tipo: automacao
area: orius
central: onr
protocolo: soap
operacao: SetBaixaBoletoPO
tags: [orius, onr, n8n, proxy, SetBaixaBoletoPO]
fonte_repositorio: C:/Users/kenio/soap-ui test/scripts/SetBaixaBoletoPo/Set Baixa Boleto PO WebService ONR.md
status: revisado
plane_work_item_id: e9411da7-57c8-4a12-9329-f266022cd872
plane_sequence_id: 19
plane_key: AUTONR-19
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/19
plane_automation_status: done
---> **Método SOAP:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/PO/SetBaixaBoletoPO]]
> **Scripts locais:** `C:\Users\kenio\soap-ui test\scripts\SetBaixaBoletoPo\`

## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-19** |
| Work item ID | `e9411da7-57c8-4a12-9329-f266022cd872` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/19 |
| Automação | `done` |


# Set Baixa Boleto PO — WebService ONR (n8n)

Workflow n8n proxy para `SetBaixaBoletoPO` (módulo 3.3 Penhora Online).

- **Workflow:** [[C:\Users\kenio\soap-ui test\workflows\n8n/extensao-n8n-teste/Set Baixa Boleto PO.workflow.ts]](C:\Users\kenio\soap-ui test\workflows\n8n/extensao-n8n-teste/Set%20Baixa%20Boleto%20PO.workflow.ts)
- **Método:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/PO/SetBaixaBoletoPO]]
- **Scripts CLI:** [`setBaixaBoletoPo.js`](setBaixaBoletoPo.js) · [`setBaixaBoletoPo.py`](setBaixaBoletoPo.py)
- **Postman:** [`postman/onr-webservice-n8n.postman_collection.json`](../../postman/onr-webservice-n8n.postman_collection.json) (request **Set Baixa Boleto PO — Baixar**)

## Pré-requisito

Obter `hash` via workflow **Auth ONR** ou `npm run login`. Ver [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/hash]].

O `id_boleto` vem de `ListBoletosPO`.

## Request (JSON snake_case)

| Campo | Tipo | Obrigatório | SOAP |
|-------|------|-------------|------|
| `hash` | string | sim | `Hash` |
| `id_boleto` | number | sim | `IDBoleto` |
| `url_servico_onr` | string | sim | endpoint SOAP |

### Exemplo

```json
{
  "hash": "A1B2C3D4E5F6789012345678901234567890ABCDEF",
  "id_boleto": 184569,
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
    "id_boleto": 184569,
    "baixa_efetuada": true
  }
}
```

### HTTP status

| Situação | Código |
|----------|--------|
| Sucesso | 200 |
| Validação local / request inválido (10–12) | 400 |
| Hash inválido/usado/expirado (45–47) | 401 |
| Boleto não localizado / dados indisponíveis (51) | 404 |
| Baixa não efetuada / já efetuada (52, 501) | 422 |
| Falha ONR / conexão | 502 |

## Webhook

- Path: `c7d8e9f0-a1b2-4c3d-8e9f-0a1b2c3d4e5f`
- URL teste: `https://<n8n>/webhook-test/c7d8e9f0-a1b2-4c3d-8e9f-0a1b2c3d4e5f`
- Basic Auth (mesmas credenciais do Auth ONR)

## Publicar

```bash
npx --yes n8nac skills validate "workflows/n8n/extensao-n8n-teste/Set Baixa Boleto PO.workflow.ts"
npx --yes n8nac push "workflows/n8n/extensao-n8n-teste/Set Baixa Boleto PO.workflow.ts" --verify
```

Ative o workflow no n8n e use `n8n_webhook_mode=webhook` em produção (ou `webhook-test` + **Execute workflow** no editor).
