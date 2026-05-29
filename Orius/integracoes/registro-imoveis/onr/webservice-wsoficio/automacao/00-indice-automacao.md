---
tipo: indice
area: orius
central: onr
protocolo: soap
tags: [orius, onr, n8n, automacao, proxy]
status: revisado
---

# WSOficio — automação (n8n / proxy)

Documentação dos fluxos HTTP (webhook n8n) que encapsulam operações SOAP.

> **Código:** `C:\Users\kenio\soap-ui test\scripts\` (pastas por método + `.js`/`.py`)
> **Workflows n8n:** `C:\Users\kenio\soap-ui test\workflows\`
> **Métodos SOAP:** [[../metodos/README]]

## Auth (obrigatório antes das demais)

[[auth-n8n]] — `LoginUsuarioCertificado` · gera tokens para o `Hash`

## Por operação SOAP

Notas em `por-metodo/` — **33** operações + [[auth-n8n]] (login).

| Módulo | Operações com doc de automação |
|--------|--------------------------------|
| Login | _(ver auth-n8n)_ |
| AT | [[por-metodo/ListTitulosAT]], [[por-metodo/GetTituloAT]], [[por-metodo/InsertTituloAT]], [[por-metodo/UpdateTituloAT]], [[por-metodo/DeleteTituloAT]], [[por-metodo/ListStatusAT]], [[por-metodo/GetStatusAT]], [[por-metodo/InsertStatusAT]], [[por-metodo/UpdateStatusAT]] |
| PO | [[por-metodo/ListPedidosPO]], [[por-metodo/GetPedidoPO]], [[por-metodo/ListVarasPO]], [[por-metodo/SetPrenotacaoPO]], [[por-metodo/SetCustasPO]], [[por-metodo/SetBaixaBoletoPO]], [[por-metodo/SetPenhoraAverbadoPO]], [[por-metodo/SetPenhoraExigenciaPO]], [[por-metodo/SetPedidoPessoaRespondidoPO]], [[por-metodo/SetPedidoPessoaDevolvidoPO]], [[por-metodo/SetPedidoMatriculaRespondidoPO]], [[por-metodo/SetPedidoMatriculaDevolvidoPO]], [[por-metodo/SetPedidoNegativaLotePO]], [[por-metodo/ListPedidosExportacaoPO]], [[por-metodo/SetPedidoFinalizarPrenotacaoVencida]] |
| OE | [[por-metodo/GetPedidoOE]], [[por-metodo/ListInstituicoesOE]], [[por-metodo/ListPedidosOE]], [[por-metodo/ListPedidosOE_V2]], [[por-metodo/SetPedidoRespondidoOE]], [[por-metodo/SetPedidoDevolvidoOE]], [[por-metodo/SetPedidoRetransmitidoOE]], [[por-metodo/SetPedidoNegativaLoteOE]], [[por-metodo/ListCartoriosRestransmitirOE]] |

Cada nota em `metodos/<domínio>/<Operacao>.md` tem seção **## Plane (gestão)** (`plane_work_item_id`, `AUTONR-n`) e, se concluída, `automacao/por-metodo/{Op}.md`.

Registro API: [[../../Meta/integracoes/plane/maps/autonr-work-items]] · scripts `sync-plane-registry`, `link-vault-plane`, `mark-plane-done`.

## Auditoria scripts × doc

[[../auditoria-implementacao]]

Voltar: [[../00-indice-wsoficio]] · [[../../00-indice-onr]]
