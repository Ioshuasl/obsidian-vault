---
tipo: automacao
area: orius
central: onr
protocolo: soap
operacao: ListCartoriosRestransmitirOE
tags: [orius, onr, n8n, proxy, ListCartoriosRestransmitirOE]
fonte_repositorio: C:/Users/kenio/soap-ui test/scripts/ListCartoriosRestransmitirOe/List Cartorios Restransmitir OE WebService ONR.md
status: revisado
plane_work_item_id: 3ecb7bde-f8b7-4f12-b425-7f0c6dcff010
plane_sequence_id: 37
plane_key: AUTONR-37
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/37
plane_automation_status: done
---> **Método SOAP:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/OE/ListCartoriosRestransmitirOE]]
> **Scripts locais:** `C:\Users\kenio\soap-ui test\scripts\ListCartoriosRestransmitirOe\`

## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-37** |
| Work item ID | `3ecb7bde-f8b7-4f12-b425-7f0c6dcff010` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/37 |
| Automação | `done` |


# List Cartorios Restransmitir OE WebService ONR

Workflow n8n proxy para `ListCartoriosRestransmitirOE` (módulo 3.5 Ofícios Eletrônicos).

- **Workflow:** `C:\Users\kenio\soap-ui test\workflows\n8n/extensao-n8n-teste/List Cartorios Restransmitir OE.workflow.ts`
- **Método:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/OE/ListCartoriosRestransmitirOE]]
- **Endpoint ONR padrão:** `https://hml3-wsoficio.onr.org.br/oficios.asmx`
- **Webhook:** `POST /webhook/36f93de2-d160-453e-a11f-94d8f6dedebc`
- **Autenticação:** Basic Auth do n8n

## Request JSON

| Campo JSON | Campo SOAP | Obrigatório | Observação |
|------------|------------|-------------|------------|
| `hash` | `Hash` | sim | SHA-1 calculado com token do `LoginUsuarioCertificado`; 40 caracteres hexadecimais. |
| `url_servico_onr` | endpoint HTTP | não | Padrão: homologação `oficios.asmx`. |

Exemplo:

```json
{
  "hash": "0123456789ABCDEF0123456789ABCDEF01234567",
  "url_servico_onr": "https://hml3-wsoficio.onr.org.br/oficios.asmx"
}
```

## Ordem SOAP

O `ListCartoriosRestransmitirOE_WSReq` no WSDL local usa esta ordem:

1. `Hash`

## Response JSON

Envelope padrão:

```json
{
  "status_http": 200,
  "sucesso": true,
  "codigo_erro": 0,
  "mensagem_erro": "",
  "dados": {
    "cartorios": [
      {
        "id_cartorio": 123,
        "cartorio": "01º RI"
      }
    ]
  }
}
```

## Status HTTP

| Situação | HTTP |
|----------|------|
| Sucesso ONR | `200` |
| Validação local, request inválido ou hash não informado (`10`, `11`) | `400` |
| Hash inválido, expirado ou já usado (`45`, `46`, `47`) | `401` |
| Usuário sem perfil/cartório válido (`51`, `52`) | `403` |
| Cartórios não localizados (`53`) | `404` |
| Erro de sistema ONR (`0`) ou XML inválido | `502` |
| Falha temporária (`1`) | `503` |
| Demais erros de negócio | `422` |
