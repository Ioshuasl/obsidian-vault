---
tipo: automacao
area: orius
central: onr
protocolo: soap
operacao: ListTitulosAT
tags: [orius, onr, n8n, proxy, ListTitulosAT]
fonte_repositorio: C:/Users/kenio/soap-ui test/scripts/ListTitulosAt/List Titulos AT WebService ONR.md
status: revisado
plane_work_item_id: 2e64c38f-cdee-4bab-8ae6-1f4c8e9b612f
plane_sequence_id: 4
plane_key: AUTONR-4
plane_url: http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/4
plane_automation_status: done
---> **Método SOAP:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/AT/ListTitulosAT]]
> **Scripts locais:** `C:\Users\kenio\soap-ui test\scripts\ListTitulosAt\`

## Plane (gestão)

| Campo | Valor |
|-------|-------|
| Card | **AUTONR-4** |
| Work item ID | `2e64c38f-cdee-4bab-8ae6-1f4c8e9b612f` |
| URL | http://192.168.1.100:8090/saas/projects/1c5d97b3-edfc-49e1-b0ba-da037b09bb84/issues/4 |
| Automação | `done` |


# List Titulos AT — WebService ONR (n8n)

Workflow n8n proxy para `ListTitulosAT` (módulo 3.2 Acompanhamento de Títulos).

- **Workflow:** [[C:\Users\kenio\soap-ui test\workflows\n8n/gentle-juniper-bb6f8f0940a3/List Titulos AT.workflow.ts]](C:\Users\kenio\soap-ui test\workflows\n8n/gentle-juniper-bb6f8f0940a3/List%20Titulos%20AT.workflow.ts)
- **Método:** [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/metodos/AT/ListTitulosAT]]
- **Script CLI:** [`listTitulos.js`](listTitulos.js)
- **Postman:** [`postman/onr-webservice-n8n.postman_collection.json`](../../postman/onr-webservice-n8n.postman_collection.json) (pasta **3.2 Acompanhamento**). Sync: `npm run postman:sync` — ver [`postman/README.md`](../../postman/README.md).

## Pré-requisito

Obter `hash` via workflow **Auth ONR** ou `npm run login` + cálculo SHA-1 (`ONR_SERVENTIA_CHAVE` + token). Ver [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/hash]].

## Request (JSON snake_case)

| Campo | Tipo | Obrigatório | SOAP |
|-------|------|-------------|------|
| `hash` | string | sim | `Hash` |
| `max_registros_por_pagina` | number | sim (mín. 10) | `MaxRowPerPage` |
| `numero_pagina` | number | sim (mín. 1) | `PageNumber` |
| `data_protocolo_inicio` | string | sim | `DataProtocoloInicio` |
| `data_protocolo_final` | string | sim | `DataProtocoloFinal` |
| `id_tipo_status` | number | sim | `IDTipoStatus` (`-1` = todos) |
| `exportado` | number | sim | `Exportado` |
| `protocolo` | string | não | `Protocolo` |
| `apresentante` | string | não | `Apresentante` |
| `url_servico_onr` | string | sim | endpoint SOAP |

### Exemplo

```json
{
  "hash": "A1B2C3D4E5F6789012345678901234567890ABCDEF",
  "max_registros_por_pagina": 50,
  "numero_pagina": 1,
  "data_protocolo_inicio": "2025-01-01",
  "data_protocolo_final": "2026-12-31",
  "id_tipo_status": -1,
  "exportado": -1,
  "protocolo": "",
  "apresentante": "",
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
    "quantidade_registros": 10,
    "quantidade_paginas": 1,
    "titulos": [
      {
        "id_titulo": 1,
        "apresentante": "Banco X",
        "protocolo": "20250100001",
        "data_ultimo_status": "2025-06-01T10:00:00",
        "id_status": 1,
        "id_tipo_status": 2
      }
    ]
  }
}
```

### HTTP status

| Situação | Código |
|----------|--------|
| Sucesso | 200 |
| Validação local / request inválido | 400 |
| Hash inválido/usado/expirado (45–47) | 401 |
| Erro negócio ONR | 422 |
| Falha ONR / conexão | 502 |

## Webhook

- Path: `f8e2a1b0-9c3d-4e5f-a6b7-8d9e0f1a2b3c`
- URL teste: `https://<n8n>/webhook-test/f8e2a1b0-9c3d-4e5f-a6b7-8d9e0f1a2b3c`
- Basic Auth (mesmas credenciais do Auth ONR)

## Publicar

```bash
npx --yes n8nac push "workflows/n8n/gentle-juniper-bb6f8f0940a3/List Titulos AT.workflow.ts" --verify
```
