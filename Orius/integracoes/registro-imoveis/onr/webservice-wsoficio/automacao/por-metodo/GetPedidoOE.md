---
tipo: automacao
area: orius
central: onr
protocolo: soap
operacao: GetPedidoOE
tags: [orius, onr, n8n, proxy, GetPedidoOE]
fonte_repositorio: C:/Users/kenio/soap-ui test/scripts/GetPedidoOe/Get Pedido OE WebService ONR.md
status: revisado
plane_work_item_id: b516005a-5771-4e4e-a945-f1ff8095975f
plane_sequence_id: 29
plane_key: AUTONR-29
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/29
plane_automation_status: done
---> **Método SOAP:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/OE/GetPedidoOE]]
> **Scripts locais:** `C:\Users\kenio\soap-ui test\scripts\GetPedidoOe\`

## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-29** |
| Work item ID | `b516005a-5771-4e4e-a945-f1ff8095975f` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/29 |
| Automação | `done` |


# Get Pedido OE WebService ONR

Workflow n8n proxy para `GetPedidoOE` (módulo 3.5 Ofícios Eletrônicos).

- **Workflow:** `C:\Users\kenio\soap-ui test\workflows\n8n/extensao-n8n-teste/Get Pedido OE.workflow.ts`
- **Método:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/OE/GetPedidoOE]]
- **Endpoint ONR padrão:** `https://hml3-wsoficio.onr.org.br/oficios.asmx`
- **Webhook:** `POST /webhook/2f3a4b5c-6d7e-4f8a-9b0c-1d2e3f4a5b6c`
- **Autenticação:** Basic Auth do n8n

## Request JSON

| Campo JSON | Campo SOAP | Obrigatório | Observação |
|------------|------------|-------------|------------|
| `hash` | `Hash` | sim | SHA-1 calculado com token do `LoginUsuarioCertificado`; 40 caracteres hexadecimais. |
| `id_pedido` | `IDPedido` | sim | Pedido obtido em `ListPedidosOE` ou `ListPedidosOE_V2`. |
| `url_servico_onr` | endpoint HTTP | não | Padrão: homologação `oficios.asmx`. |

Exemplo:

```json
{
  "hash": "0123456789ABCDEF0123456789ABCDEF01234567",
  "id_pedido": 12345,
  "url_servico_onr": "https://hml3-wsoficio.onr.org.br/oficios.asmx"
}
```

## Ordem SOAP

O `GetPedidoOE_WSReq` no WSDL local usa esta ordem:

1. `Hash`
2. `IDPedido`

## Response JSON

Envelope padrão:

```json
{
  "status_http": 200,
  "sucesso": true,
  "codigo_erro": 0,
  "mensagem_erro": "",
  "dados": {
    "id_pedido": 12345,
    "id_status": 1,
    "id_instituicao": 10,
    "instituicao": "Instituição solicitante",
    "protocolo": "OE-0001",
    "numero_oficio": "123/2026"
  }
}
```

`dados` também inclui os demais campos do WSDL em snake_case: usuário, tipo de pesquisa/certidão, datas, resposta, pessoa pesquisada, imóvel/endereço e pactuantes.

## Status HTTP

| Situação | HTTP |
|----------|------|
| Sucesso ONR | `200` |
| Validação local ou campos inválidos ONR (`10`, `11`, `12`) | `400` |
| Hash inválido, expirado ou já usado (`45`, `46`, `47`) | `401` |
| Pedido não localizado/dados indisponíveis (`51`) | `404` |
| Sem permissão para o pedido (`56`) | `403` |
| Erro de sistema ONR (`0`) ou XML inválido | `502` |
| Falha temporária (`1`) | `503` |
| Demais erros de negócio | `422` |
