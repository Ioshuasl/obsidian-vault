---
tipo: automacao
area: orius
central: onr
protocolo: soap
operacao: ListInstituicoesOE
tags: [orius, onr, n8n, proxy, ListInstituicoesOE]
fonte_repositorio: C:/Users/kenio/soap-ui test/scripts/ListInstituicoesOe/List Instituicoes OE WebService ONR.md
status: revisado
plane_work_item_id: 4f697516-69f6-4d53-a59b-260b0c0fa5c2
plane_sequence_id: 30
plane_key: AUTONR-30
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/30
plane_automation_status: done
---> **Método SOAP:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/OE/ListInstituicoesOE]]
> **Scripts locais:** `C:\Users\kenio\soap-ui test\scripts\ListInstituicoesOe\`

## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-30** |
| Work item ID | `4f697516-69f6-4d53-a59b-260b0c0fa5c2` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/30 |
| Automação | `done` |


# List Instituicoes OE WebService ONR

Workflow n8n proxy para `ListInstituicoesOE` (módulo 3.5 Ofícios Eletrônicos).

- **Workflow:** `C:\Users\kenio\soap-ui test\workflows\n8n/extensao-n8n-teste/List Instituicoes OE.workflow.ts`
- **Método:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/OE/ListInstituicoesOE]]
- **Endpoint ONR padrão:** `https://hml3-wsoficio.onr.org.br/oficios.asmx`
- **Webhook:** `POST /webhook/91f0d4c2-7a6b-4e5f-9c81-2d3e4f5a6b7c`
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

O `ListInstituicoesOE_WSReq` no WSDL local usa esta ordem:

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
    "instituicoes": [
      {
        "id_instituicao": 123,
        "instituicao": "Instituição solicitante"
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
| Instituições não localizadas/indisponíveis (`51`) | `404` |
| Erro de sistema ONR (`0`) ou XML inválido | `502` |
| Falha temporária (`1`) | `503` |
| Demais erros de negócio | `422` |
