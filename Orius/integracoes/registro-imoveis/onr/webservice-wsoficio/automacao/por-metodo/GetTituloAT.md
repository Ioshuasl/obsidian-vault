---
tipo: automacao
area: orius
central: onr
protocolo: soap
operacao: GetTituloAT
tags: [orius, onr, n8n, proxy, GetTituloAT]
fonte_repositorio: C:/Users/kenio/soap-ui test/scripts/GetTituloAt/Get Titulo AT WebService ONR.md
status: revisado
plane_work_item_id: 69861a52-b972-4c52-b8e9-9d2a6a663393
plane_sequence_id: 6
plane_key: AUTONR-6
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/6
plane_automation_status: done
---> **Método SOAP:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/AT/GetTituloAT]]
> **Scripts locais:** `C:\Users\kenio\soap-ui test\scripts\GetTituloAt\`

## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-6** |
| Work item ID | `69861a52-b972-4c52-b8e9-9d2a6a663393` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/6 |
| Automação | `done` |


# Get Titulo AT — WebService ONR (n8n)

Workflow n8n proxy para `GetTituloAT` (módulo 3.2 Acompanhamento de Títulos).

- **Workflow:** [[C:\Users\kenio\soap-ui test\workflows\n8n/gentle-juniper-bb6f8f0940a3/Get Titulo AT.workflow.ts]](C:\Users\kenio\soap-ui test\workflows\n8n/gentle-juniper-bb6f8f0940a3/Get%20Titulo%20AT.workflow.ts)
- **Método:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/AT/GetTituloAT]]
- **Scripts CLI:** [`getTituloAt.js`](getTituloAt.js) · [`getTituloAt.py`](getTituloAt.py)
- **Postman:** [`postman/onr-webservice-n8n.postman_collection.json`](../../postman/onr-webservice-n8n.postman_collection.json) (request **Get Titulo AT — Consultar**)

## Pré-requisito

Obter `hash` via workflow **Auth ONR** ou `npm run login`. Ver [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/hash]].

## Request (JSON snake_case)

| Campo | Tipo | Obrigatório | SOAP |
|-------|------|-------------|------|
| `hash` | string | sim | `Hash` |
| `id_titulo` | number | sim | `IDTitulo` |
| `url_servico_onr` | string | sim | endpoint SOAP |

### Exemplo

```json
{
  "hash": "A1B2C3D4E5F6789012345678901234567890ABCDEF",
  "id_titulo": 18151720,
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
    "id_cartorio": 1,
    "protocolo": "20250100001",
    "valor_deposito": 100.5,
    "valor_emolumentos": 50.0,
    "apresentante_nome": "Banco X",
    "apresentante_cpf_cnpj": "00000000000191",
    "apresentante_email": "contato@banco.com",
    "modo_notificacao_status": "E",
    "apresentante_ddd_telefone": "11",
    "apresentante_numero_telefone": "999999999",
    "data_protocolo": "2025-01-15",
    "data_previsao_entrega": "2025-02-15",
    "natureza_titulo": "Registro",
    "interessado_nome": "Fulano",
    "interessado_cpf_cnpj": "12345678901",
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
| Erro negócio ONR (ex.: 30) | 422 |
| Falha ONR / conexão | 502 |

## Webhook

- Path: `c8d9e0f1-a2b3-4c5d-8e9f-0a1b2c3d4e5f`
- URL teste: `https://<n8n>/webhook-test/c8d9e0f1-a2b3-4c5d-8e9f-0a1b2c3d4e5f`
- Basic Auth (mesmas credenciais do Auth ONR)

## Publicar

Workflow n8n ID: `kE8NSdNR0Ek5ds4v`

```bash
npx --yes n8nac skills validate "workflows/n8n/gentle-juniper-bb6f8f0940a3/Get Titulo AT.workflow.ts"
npx --yes n8nac push "workflows/n8n/gentle-juniper-bb6f8f0940a3/Get Titulo AT.workflow.ts" --verify
```
