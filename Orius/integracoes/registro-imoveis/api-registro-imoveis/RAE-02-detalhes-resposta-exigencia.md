---
tipo: integracao
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, rib, api, atendimento-eletronico, exigencia, RAE-02]
codigo: RAE-02
manual: v2.2
status: documentado
---

> **Índice:** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/00-indice]]
> **Autenticação:** [[RFG-01-autenticacao]]
> **Listagem:** [[RAE-01-listagem-resposta-exigencia]] · **Registrar interação:** [[RAE-03-cadastro-interacao]]

# [RAE-02] — Detalhes da resposta de exigência

**Uma frase:** o cartório obtém o **detalhamento completo** de um atendimento eletrônico — dados do solicitante, situação, histórico de **interações** e **URLs de anexos** — para importar a resposta de exigência no sistema interno.

---

## Pré-requisitos

- [x] Token JWT — [[RFG-01-autenticacao]]
- [x] `id` do atendimento (de [[RAE-01-listagem-resposta-exigencia]])

---

## Endpoint

| Método | Caminho | Descrição |
|--------|---------|-----------|
| `GET` | `/v1/atendimento/eletronico/{id}` | Detalhe do atendimento |

**Produção:** `https://api.registrodeimoveis.org.br/v1/atendimento/eletronico/{id}`  
**Homologação:** `https://testes-api.registrodeimoveis.org.br/v1/atendimento/eletronico/{id}`

---

## Request

### Headers

| Campo | Obrigatório |
|-------|-------------|
| `Authorization` | Sim — `Bearer {access_token}` |

### Path

| Parâmetro | Tipo | Tam. | Obrigatório | Descrição |
|-----------|------|------|-------------|-----------|
| `id` | int | 11 | Sim | Código interno do atendimento |

```http
GET /v1/atendimento/eletronico/12345
Authorization: Bearer …
```

---

## Response

### Sucesso (estrutura)

Inclui todos os campos da listagem ([[RAE-01-listagem-resposta-exigencia]]) **mais** campos de cartório/contato e o array `interacoes`.

```json
{
  "id": 12345,
  "idCartorio": 999,
  "protocolo": "2024/000123",
  "tipoAtendimento": 91,
  "tipoAtendimentoDescricao": "Resposta de exigência",
  "status": 7,
  "statusDescricao": "Respondido pela Serventia",
  "dataCadastro": "2024-08-04 10:00:00",
  "dataAtualizacao": "2024-08-05 14:30:00",
  "usuarioNome": "Fulano de Tal",
  "usuarioCpf": "00000000000",
  "usuarioEmail": "cliente@exemplo.com",
  "denominacao": "1º Registro de Imóveis de Exemplo",
  "data": "2024-08-04 11:00:00",
  "setor": "string",
  "atendenteNome": "string",
  "usuarioCidade": "string",
  "usuarioEstado": "SP",
  "usuarioCelular": "string",
  "atendimentoPrioritario": 0,
  "formaAtendimento": 2,
  "destinoContato": 2,
  "classificado": 1,
  "idSetorFaleConosco": 0,
  "observacoes": "string",
  "idUsuario": 0,
  "idUsuarioEncaminhamento": 0,
  "interacoes": [
    {
      "id": 1001,
      "data": "2024-08-04 12:00:00",
      "origem": 0,
      "origemDescricao": "0 = Parte",
      "idCartorio": 999,
      "mensagem": "Texto da exigência ou resposta",
      "arquivos": [
        {
          "nome": "documento.pdf",
          "url": "https://…"
        }
      ]
    }
  ]
}
```

### Campos adicionais (além da listagem)

| Campo | Tam. | Obrig. | Domínio / nota |
|-------|------|--------|----------------|
| `denominacao` | 150 | Sim | Nome do cartório |
| `data` | 19 | Não | Data/hora do atendimento |
| `setor` | 100 | Não | Setor responsável |
| `atendenteNome` | 200 | Não | Atendente |
| `usuarioCidade` | 100 | Não | Cidade do solicitante |
| `usuarioEstado` | 2 | Não | UF |
| `usuarioCelular` | 50 | Não | Celular |
| `atendimentoPrioritario` | 1 | Não | [[dominio/TBD-09-aeatendimento-prioritario]] |
| `formaAtendimento` | 1 | Não | [[dominio/TBD-10-aeforma-atendimento]] |
| `destinoContato` | 3 | Não | [[dominio/TBD-11-aetipo-contato]] — `2` = serventia |
| `classificado` | 1 | Não | Se foi classificado/encaminhado |
| `idSetorFaleConosco` | 11 | Não | Setor fale conosco |
| `observacoes` | — | Não | Observações (manual: até 16777215) |
| `idUsuario` | 10 | Não | ID do usuário |
| `idUsuarioEncaminhamento` | 10 | Não | Usuário do encaminhamento |
| `interacoes` | array | Sim | Histórico — ver abaixo |

### Objeto `interacoes[]`

| Campo | Tam. | Obrig. | Descrição |
|-------|------|--------|-----------|
| `id` | 10 | Sim | ID da interação |
| `data` | 19 | Sim | Data/hora |
| `origem` | 4 | Sim | [[dominio/TBD-12-aeorigem]] |
| `origemDescricao` | 100 | Sim | Texto legível (ex.: `"0 = Parte"`) |
| `idCartorio` | 10 | Sim | Cartório da interação |
| `mensagem` | 65535 | Sim | Conteúdo |
| `arquivos` | array | Não | Anexos publicados |

### Objeto `interacoes[].arquivos[]`

| Campo | Obrig. | Descrição |
|-------|--------|-----------|
| `nome` | Sim | Nome do arquivo (250) |
| `url` | Sim | URL para **download** (GET autenticado conforme política RIB) |

> Anexos no detalhe usam **URL**, não Base64. O envio em Base64 é só em [[RAE-03-cadastro-interacao]] ([[dominio/TBD-14-aeextensoes-arquivos]]).

### Erros

```json
{
  "codigo": "0",
  "descricao": "string",
  "campos": {}
}
```

---

## Regras de negócio / observações Orius

- Ordenar `interacoes` por `data` para montar a linha do tempo da exigência.
- `origem = 0` ([[dominio/TBD-12-aeorigem]]) = mensagem da **parte**; `origem = 1` = **cartório**.
- Baixar cada `arquivos[].url` e persistir no sistema interno vinculado ao protocolo.
- `destinoContato = 2` confirma atendimento direcionado à serventia.
- Após importar, usar [[RAE-03-cadastro-interacao]] para registrar “recebido / em análise” na plataforma.

---

## Relacionado

- Anterior: [[RAE-01-listagem-resposta-exigencia]]
- Seguinte: [[RAE-03-cadastro-interacao]]
- Domínios AE: [[dominio/TBD-07-aetipo-atendimento]] … [[dominio/TBD-12-aeorigem]]
- Manual bruto: `[RAE-02]` (PDF v2.2, pág. 87)

---

## Histórico desta nota

| Data | Alteração |
|------|-----------|
| 2026-06-01 | Criação a partir do manual v2.2 |
