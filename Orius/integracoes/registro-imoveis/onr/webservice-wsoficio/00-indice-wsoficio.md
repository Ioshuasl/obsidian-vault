---
tipo: indice
area: orius
central: onr
protocolo: soap
produto: imoveis
tags: [orius, onr, wsoficio, indice]
fonte_repositorio: C:\Users\kenio\soap-ui test\webservice-onr\list-metodos.md
status: revisado
---

> **Fonte da verdade:** este vault (Obsidian). **Código/WSDL:** `C:\Users\kenio\soap-ui test`
> **Central:** [[Orius/integracoes/centrais/onr|ONR]] · **Hub:** [[../../00-indice-onr]]

# Índice WSOficio — métodos SOAP

- [[hash]] · [[tabelas-dominio/00-indice-dominios]] · [[auditoria-implementacao]] · [[automacao/00-indice-automacao|Automação n8n]]
- **Métodos por domínio:** [[metodos/README]] — pastas `AT`, `PO`, `OE`, `AC`, `IN`, …
# Métodos a serem referenciados — WSOficio

Extraído de `especificacao_wsoficio_dev.md` (seções **“Métodos a serem referenciados”**).

Total: **81 métodos** em **10 módulos**.

**WSDL locais no repositório:** `C:\Users\kenio\soap-ui test\webservice-onr\wsdl\certidoes.wsdl`, `C:\Users\kenio\soap-ui test\webservice-onr\wsdl\comunicacaoprefeituras.wsdl` (serviço homologação `ComunicacaoMunicipios.asmx`).

**Autenticação:** parâmetro `Hash` em cada operação (exceto login) — ver [[hash|Hash de autenticação]].

---

## 3.1 Login

**WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/login.asmx?wsdl`

| # | Método |
|---|--------|
| 1 | [[metodos/LoginUsuarioCertificado]] |

---

## 3.2 Acompanhamento de Títulos

**WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/acompanhamentotitulos.asmx?wsdl`

| # | Método |
|---|--------|
| 1 | [[metodos/ListTitulosAT]] |
| 2 | [[metodos/ListStatusAT]] |
| 3 | [[metodos/GetTituloAT]] |
| 4 | [[metodos/GetStatusAT]] |
| 5 | [[metodos/InsertTituloAT]] |
| 6 | [[metodos/UpdateTituloAT]] |
| 7 | [[metodos/DeleteTituloAT]] |
| 8 | [[metodos/InsertStatusAT]] |
| 9 | [[metodos/UpdateStatusAT]] |

---

## 3.3 Penhora Online

**WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/penhoraonline.asmx?wsdl`

| # | Método |
|---|--------|
| 1 | [[metodos/ListPedidosPO]] |
| 2 | [[metodos/ListVarasPO]] |
| 3 | [[metodos/GetPedidoPO]] |
| 4 | [[metodos/ListBoletosPO]] |
| 5 | [[metodos/SetBaixaBoletoPO]] |
| 6 | [[metodos/SetPrenotacaoPO]] |
| 7 | [[metodos/SetCustasPO]] |
| 8 | [[metodos/SetPenhoraAverbadoPO]] |
| 9 | [[metodos/SetPenhoraExigenciaPO]] |
| 10 | [[metodos/SetPedidoPessoaRespondidoPO]] |
| 11 | [[metodos/SetPedidoPessoaDevolvidoPO]] |
| 12 | [[metodos/SetPedidoMatriculaRespondidoPO]] |
| 13 | [[metodos/SetPedidoMatriculaDevolvidoPO]] |
| 14 | [[metodos/SetPedidoNegativaLotePO]] |
| 15 | [[metodos/ListPedidosExportacaoPO]] |
| 16 | [[metodos/SetPedidoFinalizarPrenotacaoVencida]] |

---

## 3.4 Envio e Controle de Arquivos — Banco de Dados Light (Indicador Pessoal / BD Light)

> **Serviço desativado via webservice (31/07/2023)**  
> O envio do **Indicador Pessoal** (Banco de Dados Light) pelo WSOficio foi descontinuado pela ONR em **31/07/2023**.  
> Em homologação/produção as operações deste capítulo tendem a falhar com **CODIGOERRO 404** e mensagem:  
> *«O envio do Indicador Pessoal via WS foi desativado em 31/07/2023.»*  
> Os métodos abaixo permanecem na especificação e no repositório apenas como **referência histórica**; os scripts em `C:\Users\kenio\soap-ui test\scripts\*Bdl*` não devem ser usados para integração ativa.

**WSDL (homologação — legado):** `https://hml3-wsoficio.onr.org.br/bdlight.asmx?wsdl`  
**WSDL local:** `C:\Users\kenio\soap-ui test\webservice-onr\wsdl\bdlight.wsdl`

| # | Método |
|---|--------|
| 1 | [[metodos/ListArquivosXMLBDL]] |
| 2 | [[metodos/GetArquivoXMLBDL]] |
| 3 | [[metodos/ImportarArquivoBDL]] |
| 4 | [[metodos/SetBDLightAtualizado]] |

---

## 3.5 Ofícios

**WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/oficios.asmx?wsdl`

| # | Método |
|---|--------|
| 1 | [[metodos/ListInstituicoesOE]] |
| 2 | [[metodos/GetPedidoOE]] |
| 3 | [[metodos/ListPedidosOE]] |
| 4 | [[metodos/ListPedidosOE_V2]] |
| 5 | [[metodos/SetPedidoRespondidoOE]] |
| 6 | [[metodos/SetPedidoDevolvidoOE]] |
| 7 | [[metodos/SetPedidoNegativaLoteOE]] |
| 8 | [[metodos/SetPedidoRetransmitidoOE]] |
| 9 | [[metodos/ListCartoriosRestransmitirOE]] |

---

## 3.6 Certidões a Emitir

**WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/Certidoes.asmx?wsdl`  
**WSDL local:** `C:\Users\kenio\soap-ui test\webservice-onr\wsdl\certidoes.wsdl`

| # | Método |
|---|--------|
| 1 | [[metodos/ObterXMLSolicitacoes_v4]] |
| 2 | [[metodos/ObterXMLSolicitacoes_v5]] |
| 3 | [[metodos/ObterXMLSolicitacoes_v6]] |
| 4 | [[metodos/DevolverCertidao]] |
| 5 | [[metodos/EnviarAnexoCertidao]] |
| 6 | [[metodos/EnviarAnexoCertidao_DocID]] |
| 7 | [[metodos/EnviarAnexosListCertidao_DocID]] |
| 8 | [[metodos/FinalizarRespostaCertidao]] |
| 9 | [[metodos/EnviarAnexoCertidao_DocID_V2]] |
| 10 | [[metodos/EnviarAnexosListCertidao_DocID_V2]] |
| 11 | [[metodos/InformarCustasCertidao]] |

---

## 3.9 Matrícula Online / Rel. VM

**WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/matriculaonline.asmx?wsdl`

| # | Método |
|---|--------|
| 1 | [[metodos/ObterXMLSolicitacoes]] |
| 2 | [[metodos/ObterXMLSolicitacoesV2]] |

---

## 3.10 E-Protocolo

**WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/eprotocolo.asmx?wsdl`

| # | Método |
|---|--------|
| 1 | [[metodos/GetExtratoXMLAC]] |
| 2 | [[metodos/ListPedidosAC]] |
| 3 | [[metodos/ListAnexosAC]] |
| 4 | [[metodos/ListBoletosAC]] |
| 5 | [[metodos/SetBaixaBoletoAC]] |
| 6 | [[metodos/GetPedidoAC_V3]] |
| 7 | [[metodos/AlterarPedidoAC]] |
| 8 | [[metodos/SetPrenotacaoAC]] |
| 9 | [[metodos/SetCustasAC]] |
| 10 | [[metodos/SetPrenotacaoExameCalculoAC]] |
| 11 | [[metodos/SetContratoAverbadoAC]] |
| 12 | [[metodos/SetContratoExigenciaAC]] |
| 13 | [[metodos/SetContratoDevolvidoAC]] |
| 14 | [[metodos/ListDocumentosRepositorioAC]] |
| 15 | [[metodos/ContratoXMLtoPDF]] |

---

## 3.11 Intimações

**WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/intimacoes.asmx?wsdl`

| # | Método |
|---|--------|
| 1 | [[metodos/ImportarPrenotacaoIN]] |
| 2 | [[metodos/ListPedidosIN]] |
| 3 | [[metodos/ListMensagensPedidoIN]] |
| 4 | [[metodos/AdicionarMensagemIN]] |
| 5 | [[metodos/GetDetalhesIN_V2]] |
| 6 | [[metodos/GetDetalhesIN_V3]] |
| 7 | [[metodos/GetMensagemIN]] |
| 8 | [[metodos/GetEmolumentosIN]] |
| 9 | [[metodos/AdicionarEmolumentoIN]] |
| 10 | [[metodos/ExcluirEmolumentoIN]] |
| 11 | [[metodos/ListPagamentosIN]] |
| 12 | [[metodos/ListStatusIN]] |

---

## 3.12 Comunicação Prefeituras (CTP)

**WSDL (homologação):** `https://hml3-wsoficio.onr.org.br/ComunicacaoMunicipios.asmx?wsdl`  
**WSDL local:** `C:\Users\kenio\soap-ui test\webservice-onr\wsdl\comunicacaoprefeituras.wsdl` (serviço `ComunicacaoMunicipios` na spec)

Integração CTP: importação de arquivos (URL assinada de upload) e consulta de status do processo.

| # | Método |
|---|--------|
| 1 | [[metodos/ImportacaoArquivos]] |
| 2 | [[metodos/AtualizarStatusProcesso]] |

---

## Lista consolidada (alfabética)

```
AdicionarEmolumentoIN
AdicionarMensagemIN
AlterarPedidoAC
AtualizarStatusProcesso
ContratoXMLtoPDF
DeleteTituloAT
DevolverCertidao
EnviarAnexoCertidao
EnviarAnexoCertidao_DocID
EnviarAnexoCertidao_DocID_V2
EnviarAnexosListCertidao_DocID
EnviarAnexosListCertidao_DocID_V2
ExcluirEmolumentoIN
FinalizarRespostaCertidao
GetArquivoXMLBDL
GetDetalhesIN_V2
GetDetalhesIN_V3
GetEmolumentosIN
GetExtratoXMLAC
GetMensagemIN
GetPedidoAC_V3
GetPedidoOE
GetPedidoPO
GetStatusAT
GetTituloAT
ImportacaoArquivos
ImportarArquivoBDL
ImportarPrenotacaoIN
InformarCustasCertidao
InsertStatusAT
InsertTituloAT
ListAnexosAC
ListArquivosXMLBDL
ListBoletosAC
ListBoletosPO
ListCartoriosRestransmitirOE
ListDocumentosRepositorioAC
ListInstituicoesOE
ListMensagensPedidoIN
ListPagamentosIN
ListPedidosAC
ListPedidosExportacaoPO
ListPedidosIN
ListPedidosOE
ListPedidosOE_V2
ListPedidosPO
ListStatusAT
ListStatusIN
ListTitulosAT
ListVarasPO
LoginUsuarioCertificado
ObterXMLSolicitacoes
ObterXMLSolicitacoes_v4
ObterXMLSolicitacoes_v5
ObterXMLSolicitacoes_v6
ObterXMLSolicitacoesV2
SetBaixaBoletoAC
SetBaixaBoletoPO
SetBDLightAtualizado
SetContratoAverbadoAC
SetContratoDevolvidoAC
SetContratoExigenciaAC
SetCustasAC
SetCustasPO
SetPedidoDevolvidoOE
SetPedidoFinalizarPrenotacaoVencida
SetPedidoMatriculaDevolvidoPO
SetPedidoMatriculaRespondidoPO
SetPedidoNegativaLoteOE
SetPedidoNegativaLotePO
SetPedidoPessoaDevolvidoPO
SetPedidoPessoaRespondidoPO
SetPedidoRespondidoOE
SetPedidoRetransmitidoOE
SetPenhoraAverbadoPO
SetPenhoraExigenciaPO
SetPrenotacaoAC
SetPrenotacaoExameCalculoAC
SetPrenotacaoPO
UpdateStatusAT
UpdateTituloAT
```

---

## Módulos documentados sem lista “a serem referenciados”

Estes capítulos existem na especificação, mas **não** trazem a seção *Métodos a serem referenciados* (ou estão em desenvolvimento):

| Capítulo | Observação |
|----------|------------|
| 3.4 BD Light (Indicador Pessoal) | Spec e scripts no repo; **WS desativado em 31/07/2023** (erro 404) |
| 3.7 Consulta CPF/CNPJ | Em desenvolvimento |
| 3.8 Consulta Eletrônica / Rel. CE | Em desenvolvimento |
