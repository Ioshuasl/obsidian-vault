---
tipo: automacao
area: orius
central: onr
protocolo: soap
operacao: SetPedidoPessoaRespondidoPO
tags: [orius, onr, n8n, proxy, SetPedidoPessoaRespondidoPO]
fonte_repositorio: C:/Users/kenio/soap-ui test/scripts/SetPedidoPessoaRespondidoPo/Set Pedido Pessoa Respondido PO WebService ONR.md
status: revisado
plane_work_item_id: 73ab2666-fbd1-462a-9fd9-9b8d29b57fa9
plane_sequence_id: 22
plane_key: AUTONR-22
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/22
plane_automation_status: done
---> **Método SOAP:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/PO/SetPedidoPessoaRespondidoPO]]
> **Scripts locais:** `C:\Users\kenio\soap-ui test\scripts\SetPedidoPessoaRespondidoPo\`

## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-22** |
| Work item ID | `73ab2666-fbd1-462a-9fd9-9b8d29b57fa9` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/22 |
| Automação | `done` |


# Set Pedido Pessoa Respondido PO — WebService ONR (n8n)

Workflow n8n proxy para `SetPedidoPessoaRespondidoPO` (módulo 3.3 Penhora Online).

- **Workflow:** [[C:\Users\kenio\soap-ui test\workflows\n8n/extensao-n8n-teste/Set Pedido Pessoa Respondido PO.workflow.ts]](C:\Users\kenio\soap-ui test\workflows\n8n/extensao-n8n-teste/Set%20Pedido%20Pessoa%20Respondido%20PO.workflow.ts)
- **Método:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/PO/SetPedidoPessoaRespondidoPO]]
- **Scripts CLI:** [`setPedidoPessoaRespondidoPo.js`](setPedidoPessoaRespondidoPo.js) · [`setPedidoPessoaRespondidoPo.py`](setPedidoPessoaRespondidoPo.py)
- **Postman:** [`postman/onr-webservice-n8n.postman_collection.json`](../../postman/onr-webservice-n8n.postman_collection.json) (request **Set Pedido Pessoa Respondido PO — Responder**)

## Pré-requisito

Obter `hash` via workflow **Auth ONR** ou `npm run login`. Ver [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/hash]].

O pedido deve ser do tipo **Certidão por Pessoa** (`IDTipoPedido=2`) e deve ter ao menos um anexo com matrícula e URL pública.

## Request (JSON snake_case)

| Campo | Tipo | Obrigatório | SOAP |
|-------|------|-------------|------|
| `hash` | string | sim | `Hash` |
| `id_pedido` | number | sim | `IDPedido` |
| `resposta` | string | sim | `Resposta` |
| `negativa` | boolean | sim | `Negativa` |
| `anexos[].matricula` | string | sim | `Anexos[].Matricula` |
| `anexos[].url_arquivo` | string | sim | `Anexos[].URLArquivo` |
| `url_servico_onr` | string | sim | endpoint SOAP |

### Exemplo

```json
{
  "hash": "A1B2C3D4E5F6789012345678901234567890ABCDEF",
  "id_pedido": 18014709,
  "resposta": "Certidão emitida conforme solicitado.",
  "negativa": false,
  "anexos": [
    {
      "matricula": "12345",
      "url_arquivo": "https://example.com/certidao.p7s"
    }
  ],
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
    "negativa": false,
    "quantidade_anexos": 1,
    "respondido": true
  }
}
```

### HTTP status

| Situação | Código |
|----------|--------|
| Sucesso | 200 |
| Validação local / request inválido (10–14, 54, 55, 501) | 400 |
| Hash inválido/usado/expirado (45–47) | 401 |
| Sem permissão (52) | 403 |
| Pedido/arquivo não encontrado (51, 102) | 404 |
| Regra de negócio ONR (53, 60, 101, 103–105, 502) | 422 |
| Falha ONR / conexão | 502 |

## Webhook

- Path: `e9f0a1b2-c3d4-4e5f-9a0b-c1d2e3f4a5b7`
- URL teste: `https://<n8n>/webhook-test/e9f0a1b2-c3d4-4e5f-9a0b-c1d2e3f4a5b7`
- Basic Auth (mesmas credenciais do Auth ONR)

## Publicar

```bash
npx --yes n8nac skills validate "workflows/n8n/extensao-n8n-teste/Set Pedido Pessoa Respondido PO.workflow.ts"
npx --yes n8nac push "workflows/n8n/extensao-n8n-teste/Set Pedido Pessoa Respondido PO.workflow.ts" --verify
```

Ative o workflow no n8n e use `n8n_webhook_mode=webhook` em produção (ou `webhook-test` + **Execute workflow** no editor).
