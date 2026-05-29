---
tipo: integracao
area: orius
produto: imoveis
central: onr
tags: [orius, imoveis, onr, protocolo, api]
status: revisado
fonte: migracao-desktop
---

> **Produto:** [[Orius/empresa/produtos/registro-imoveis|Registro de Imóveis]] · **Índice:** [[Orius/integracoes/registro-imoveis/00-indice|Integrações RI]]
> **Central:** [[Orius/integracoes/centrais/onr|ONR]] · Ver também [[Orius/integracoes/registro-imoveis/onr-mapa-estatisticas]]

---

# Protocolo eletrônico (ONR)


# Documentação API Protocolo

## Retorna a lista dos protocolos com paginação

endpoint

GET /v1/protocolo

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

query parameters

url fictícia de exemplo

```plaintext
https://api.exemplo.com/v1/protocolo?registrosPorPagina=0&numeroPagina=0&tipoSolicitacao=0&dataInicialProtocolo=2022-08-04&dataFinalProtocolo=2022-08-04&dataInicialStatus=2022-08-04&dataFinalStatus=2022-08-04&dataInicialCadastro=2022-08-04&dataFinalCadastro=2022-08-04&cns=string&documentoApresentante=string&documentoInteressado=string&protocolo=string
```

```json
{
  "registrosPorPagina": 0,
  "numeroPagina": 0,
  "tipoSolicitacao": 0,
  "dataInicialProtocolo": "2022-08-04",
  "dataFinalProtocolo": "2022-08-04",
  "dataInicialStatus": "2022-08-04",
  "dataFinalStatus": "2022-08-04",
  "dataInicialCadastro": "2022-08-04",
  "dataFinalCadastro": "2022-08-04",
  "cns": "string",
  "documentoApresentante": "string",
  "documentoInteressado": "string",
  "protocolo": "string"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| registrosPorPagina (query) | integer | não | Total de registros que deve retornar por página. Padrão é de 50 registros e pode ter no máximo 100 |
| numeroPagina (query) | integer | não | Número da página que deseja acessar |
| tipoSolicitacao (query) | integer | não | Identifica o tipo de solicitação (1 ? Registro / 2 ? Exame e cálculo) |
| dataInicialProtocolo (query) | string | não | Data inicial do protocolo que deseja filtrar |
| dataFinalProtocolo (query) | string | não | Data final do protocolo que deseja filtrar |
| dataInicialStatus (query) | string | não | Data inicial da situação do protocolo que deseja filtrar |
| dataFinalStatus (query) | string | não | Data final da situação do protocolo que deseja filtrar |
| dataInicialCadastro (query) | string | não | Data inicial do cadastro que deseja filtrar |
| dataFinalCadastro (query) | string | não | Data final do cadastro que deseja filtrar |
| cns (query) | string | não | Código CNS do cartório que deseja filtrar |
| documentoApresentante (query) | string | não | Número do documento (CPF ou CNPJ) do apresentante que deseja filtrar |
| documentoInteressado (query) | string | não | Número do documento (CPF ou CNPJ) do interessado que deseja filtrar |
| protocolo (query) | string | não | Número do protocolo que deseja filtrar |

resposta retornada (200/201)

```json
{
  "totalRegistros": 0,
  "totalPaginas": 0,
  "paginaAtual": 0,
  "dados": [
    {
      "protocolo": "string",
      "tipoSolicitacao": 0,
      "datas": {
        "protocolo": "2022-08-04",
        "previsaoEntrega": "2022-08-04"
      },
      "dataCadastro": "2022-08-04 10:00:00",
      "dataAtualizacao": "2022-08-04 10:00:00",
      "usarSenhaDetalhes": false,
      "usarSenhaArquivos": false,
      "status": {
        "codigo": "string",
        "dataStatus": "2022-08-04 10:00:00",
        "mensagem": "string"
      }
    }
  ]
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| totalRegistros | integer | não | Número total de registros encontrados |
| totalPaginas | integer | não | Número total de páginas disponíveis |
| paginaAtual | integer | não | Número da ágina atual |
| dados | array&lt;object&gt; | não | - |
| dados[].protocolo | string | não | Protocolo de identificação do título fornecido pelo cartório |
| dados[].tipoSolicitacao | integer | não | Identifica o tipo de solicitação (1 ? Registro / 2 ? Exame e cálculo) |
| dados[].datas | object | não | Dados das datas |
| dados[].datas.protocolo | string | não | Data do protocolo |
| dados[].datas.previsaoEntrega | string | não | Data prevista para entrega |
| dados[].dataCadastro | string | não | Data e hora de cadastro |
| dados[].dataAtualizacao | string | não | Data e hora da última atualização |
| dados[].usarSenhaDetalhes | boolean | não | Se deve usar senha para visualizar os detalhes |
| dados[].usarSenhaArquivos | boolean | não | Se deve usar senha para visualizar os anexos |
| dados[].status | object | não | Dados da situação disponível |
| dados[].status.codigo | string | não | Identificação do situação do andamento |
| dados[].status.dataStatus | string | não | Data e hora da situação no cartório |
| dados[].status.mensagem | string | não | Mensagem da situação, se necessário |

## Envio de um protocolo de forma online

endpoint

POST /v1/protocolo

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

body json

```json
{
  "protocolo": "string",
  "senha": "string",
  "tipoSolicitacao": 0,
  "datas": {
    "protocolo": "2022-08-04",
    "previsaoEntrega": "2022-08-04"
  },
  "valores": {
    "deposito": 0,
    "emolumentos": 0
  },
  "apresentante": {
    "nome": "string",
    "documento": "string",
    "email": "string",
    "telefone": {
      "ddd": 0,
      "numero": 0
    }
  },
  "interessado": {
    "nome": "string",
    "documento": "string",
    "email": "string",
    "telefone": {
      "ddd": 0,
      "numero": 0
    }
  },
  "status": {
    "status": 0,
    "data": "2023-04-24 11:50:00",
    "tipoDescricao": "string",
    "descricao": "string"
  },
  "cobranca": {
    "tipoCobranca": "string",
    "dataVencimento": "2022-08-04",
    "observacao": "string",
    "tipoPagamento": 0,
    "dadosPagador": {
      "nome": "string",
      "documento": "string",
      "email": "string",
      "telefone": {
        "ddd": 0,
        "numero": 0
      },
      "endereco": {
        "cep": "string",
        "tipoLogradouro": "string",
        "logradouro": "string",
        "numero": "string",
        "bairro": "string",
        "cidade": "string",
        "estado": "string"
      }
    },
    "servicos": [
      {
        "codigo": 0,
        "valor": 10000
      }
    ],
    "webhook": {
      "url": "string",
      "metodo": "string",
      "token": "string",
      "tipoToken": 0
    }
  }
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| protocolo | string | não | Protocolo de identificação do título fornecido pelo cartório |
| senha | string | não | Código verificador/ senha para consulta ao título |
| tipoSolicitacao | integer | não | Identifica o tipo de solicitação (1 ? Registro / 2 ? Exame e cálculo) |
| datas | object | não | Dados das datas |
| datas.protocolo | string | não | Data do protocolo |
| datas.previsaoEntrega | string | não | Data prevista para entrega |
| valores | object | não | Dados dos valores |
| valores.deposito | integer | não | Valor do depósito |
| valores.emolumentos | integer | não | Valor dos emolumentos |
| apresentante | object | não | Dados do apresentante |
| apresentante.nome | string | não | Nome completo do apresentante |
| apresentante.documento | string | não | Número do documento (CPF ou CNPJ) |
| apresentante.email | string | não | Endereço de e-mail |
| apresentante.telefone | object | não | Dados do apresentante |
| apresentante.telefone.ddd | integer | não | Número do DDD do telefone |
| apresentante.telefone.numero | integer | não | Número do telefone |
| interessado | object | não | Dados do interessado |
| interessado.nome | string | não | Nome completo do interessado |
| interessado.documento | string | não | Número do documento (CPF ou CNPJ) |
| interessado.email | string | não | Endereço de e-mail |
| interessado.telefone | object | não | Dados do apresentante |
| interessado.telefone.ddd | integer | não | Número do DDD do telefone |
| interessado.telefone.numero | integer | não | Número do telefone |
| status | object | não | Dados do interessado |
| status.status | integer | não | Código da situação |
| status.data | string | não | Data da situação |
| status.tipoDescricao | string | não | Tipo do conteúdo da descrição. |
| status.descricao | string | não | Descrição da situação. Se o campo tipoDescricao for preenchido com os valores pdf, csv, rtf, zip, rar,7z ou json, o conteúdo da descrição deve obrigatóriamente ser um base64. |
| cobranca | object | não | - |
| cobranca.tipoCobranca | string | sim | Tipo da cobrança que será gerada |
| cobranca.dataVencimento | string | sim | Data do vencimento da cobrança |
| cobranca.observacao | string | não | Observações para serem adicionadas na cobrança |
| cobranca.tipoPagamento | integer | não | Código do tipo de pagamento previamente cadastrado pelo cartório |
| cobranca.dadosPagador | object | sim | Dados do pagador |
| cobranca.dadosPagador.nome | string | sim | Nome do pagador |
| cobranca.dadosPagador.documento | string | sim | Número do documento (CPF/CNPJ) do pagador (somente número) |
| cobranca.dadosPagador.email | string | sim | Endereço de e-mail do pagador |
| cobranca.dadosPagador.telefone | object | não | Dados do telefone do pagador |
| cobranca.dadosPagador.telefone.ddd | integer | sim | Número do DDD |
| cobranca.dadosPagador.telefone.numero | integer | sim | Número do telefone |
| cobranca.dadosPagador.endereco | object | sim | Dados do endereço do pagador |
| cobranca.dadosPagador.endereco.cep | string | sim | CEP do endereço do pagador |
| cobranca.dadosPagador.endereco.tipoLogradouro | string | sim | Tipo do logradouro do endereço do pagador |
| cobranca.dadosPagador.endereco.logradouro | string | sim | Logradouro do endereço do pagador |
| cobranca.dadosPagador.endereco.numero | string | não | Número do imóvel do pagador |
| cobranca.dadosPagador.endereco.bairro | string | sim | Bairro do endereço do pagador |
| cobranca.dadosPagador.endereco.cidade | string | sim | Cidade do endereço do pagador |
| cobranca.dadosPagador.endereco.estado | string | sim | Sigla do estado do endereço do pagador |
| cobranca.servicos | array&lt;object&gt; | sim | Dados dos serviços |
| cobranca.servicos[].codigo | number | sim | O código localizador é um campo numérico. É importante enviar o número do protocolo e não o recibo de pré-pagamento. |
| cobranca.servicos[].valor | number | sim | Valor do serviço. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| cobranca.webhook | object | não | - |
| cobranca.webhook.url | string | sim | URL do webhook |
| cobranca.webhook.metodo | string | sim | Tipo do metodo de comunicação |
| cobranca.webhook.token | string | não | Token de autenticação para utilização no webhook |
| cobranca.webhook.tipoToken | number | não | Tipo do token da autenticação para utilização no webhook |

resposta retornada (200/201)

```json
{
  "hahs": "string",
  "protocolo": "string",
  "dataCadastro": "2022-08-04 10:00:00",
  "alertas": [
    {
      "campo": "string",
      "mensagem": "string"
    }
  ]
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hahs | string | não | Hash do protocolo |
| protocolo | string | não | Protocolo de identificação do título fornecido pelo cartório |
| dataCadastro | string | não | Data e hora do cadastro |
| alertas | array&lt;object&gt; | não | - |
| alertas[].campo | string | sim | Nome do campo que gerou o alerta |
| alertas[].mensagem | string | sim | Mensagem de descrição do alerta |

## Envio de cadastros de protocolos em lote

endpoint

POST /v1/protocolo/lote

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

body json

```json
[
  {
    "protocolo": "string",
    "senha": "string",
    "tipoSolicitacao": 0,
    "datas": {
      "protocolo": "2022-08-04",
      "previsaoEntrega": "2022-08-04"
    },
    "valores": {
      "deposito": 0,
      "emolumentos": 0
    },
    "apresentante": {
      "nome": "string",
      "documento": "string",
      "email": "string",
      "telefone": {
        "ddd": 0,
        "numero": 0
      }
    },
    "interessado": {
      "nome": "string",
      "documento": "string",
      "email": "string",
      "telefone": {
        "ddd": 0,
        "numero": 0
      }
    },
    "status": {
      "status": 0,
      "data": "2023-04-24 11:50:00",
      "tipoDescricao": "string",
      "descricao": "string"
    },
    "cobranca": {
      "tipoCobranca": "string",
      "dataVencimento": "2022-08-04",
      "observacao": "string",
      "tipoPagamento": 0,
      "dadosPagador": {
        "nome": "string",
        "documento": "string",
        "email": "string",
        "telefone": {
          "ddd": 0,
          "numero": 0
        },
        "endereco": {
          "cep": "string",
          "tipoLogradouro": "string",
          "logradouro": "string",
          "numero": "string",
          "bairro": "string",
          "cidade": "string",
          "estado": "string"
        }
      },
      "servicos": [
        {
          "codigo": 0,
          "valor": 10000
        }
      ],
      "webhook": {
        "url": "string",
        "metodo": "string",
        "token": "string",
        "tipoToken": 0
      }
    },
    "arquivos": [
      {
        "nome": "string",
        "url": "string"
      }
    ]
  }
]
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| - | - | não | - |

resposta retornada (200/201)

```json
{
  "hahs": "string",
  "dataCadastro": "2022-08-04 10:00:00",
  "alertas": [
    {
      "protocolo": "string",
      "campo": "string",
      "mensagem": "string"
    }
  ]
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hahs | string | não | Hash da fila de processamento |
| dataCadastro | string | não | Data e hora do cadastro na fila de processamento |
| alertas | array&lt;object&gt; | não | - |
| alertas[].protocolo | string | sim | Número do protocolo que gerou o alerta |
| alertas[].campo | string | sim | Nome do campo que gerou o alerta |
| alertas[].mensagem | string | sim | Mensagem de descrição do alerta |

## Retorna os datelhes básicos de um protocolo

endpoint

GET /v1/protocolo/{numeroProtocolo}

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

query parameters

Sem parameters definidos.

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| - | - | não | - |

resposta retornada (200/201)

```json
{
  "hash": "string",
  "protocolo": "string",
  "senha": "string",
  "tipoSolicitacao": 0,
  "dataCadastro": "2022-08-04 10:00:00",
  "dataAtualizacao": "2022-08-04 10:00:00",
  "status": {
    "status": 0,
    "data": "2023-04-24 11:50:00"
  },
  "hashCobranca": "string",
  "dataUltimaAtualizacaoSistema": "2022-08-04 10:00:00"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hash | string | não | Hash do protocolo |
| protocolo | string | não | Protocolo de identificação do título fornecido pelo cartório |
| senha | string | não | Código verificador/ senha para consulta ao título |
| tipoSolicitacao | integer | não | Identifica o tipo de solicitação (1 ? Registro / 2 ? Exame e cálculo) |
| dataCadastro | string | não | Data e hora de cadastro |
| dataAtualizacao | string | não | Data e hora da última atualização |
| status | object | não | Dados do interessado |
| status.status | integer | não | Código da situação |
| status.data | string | não | Data da situação |
| hashCobranca | string | não | Hash da cobrança |
| dataUltimaAtualizacaoSistema | string | não | Data do protocolo |

## Realiza a exclusão de um protocolo

endpoint

DELETE /v1/protocolo/{numeroProtocolo}

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

parameters

```json
{
  "numeroProtocolo": "string"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| numeroProtocolo (path) | string | sim | Número do protocolo que deseja excluir |

resposta retornada (200/201)

```json
{
  "descricao": "Success"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| descricao | string | não | Descrição do retorno HTTP quando não há schema de resposta. |

## Retorna os datelhes de um protocolo

endpoint

GET /v1/protocolo/{numeroProtocolo}/detalhes

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

query parameters

Sem parameters definidos.

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| - | - | não | - |

resposta retornada (200/201)

```json
{
  "hash": "string",
  "protocolo": "string",
  "senha": "string",
  "tipoSolicitacao": 0,
  "dataCadastro": "2022-08-04 10:00:00",
  "dataAtualizacao": "2022-08-04 10:00:00",
  "datas": {
    "protocolo": "2022-08-04",
    "previsaoEntrega": "2022-08-04"
  },
  "valores": {
    "deposito": 0,
    "emolumentos": 0
  },
  "apresentante": {
    "nome": "string",
    "documento": "string",
    "email": "string",
    "telefone": {
      "ddd": 0,
      "numero": 0
    }
  },
  "interessado": {
    "nome": "string",
    "documento": "string",
    "email": "string",
    "telefone": {
      "ddd": 0,
      "numero": 0
    }
  },
  "status": {
    "status": 0,
    "data": "2023-04-24 11:50:00",
    "tipoDescricao": "string",
    "descricao": "string"
  },
  "hashCobranca": "string",
  "arquivos": [
    {
      "hash": "string",
      "nome": "string"
    }
  ],
  "dataUltimaAtualizacaoSistema": "2022-08-04 10:00:00"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hash | string | não | Hash do protocolo |
| protocolo | string | não | Protocolo de identificação do título fornecido pelo cartório |
| senha | string | não | Código verificador/ senha para consulta ao título |
| tipoSolicitacao | integer | não | Identifica o tipo de solicitação (1 ? Registro / 2 ? Exame e cálculo) |
| dataCadastro | string | não | Data e hora de cadastro |
| dataAtualizacao | string | não | Data e hora da última atualização |
| datas | object | não | Dados das datas |
| datas.protocolo | string | não | Data do protocolo |
| datas.previsaoEntrega | string | não | Data prevista para entrega |
| valores | object | não | Dados dos valores |
| valores.deposito | integer | não | Valor do depósito |
| valores.emolumentos | integer | não | Valor dos emolumentos |
| apresentante | object | não | Dados do apresentante |
| apresentante.nome | string | não | Nome completo do apresentante |
| apresentante.documento | string | não | Número do documento (CPF ou CNPJ) |
| apresentante.email | string | não | Endereço de e-mail |
| apresentante.telefone | object | não | Dados do apresentante |
| apresentante.telefone.ddd | integer | não | Número do DDD do telefone |
| apresentante.telefone.numero | integer | não | Número do telefone |
| interessado | object | não | Dados do interessado |
| interessado.nome | string | não | Nome completo do interessado |
| interessado.documento | string | não | Número do documento (CPF ou CNPJ) |
| interessado.email | string | não | Endereço de e-mail |
| interessado.telefone | object | não | Dados do apresentante |
| interessado.telefone.ddd | integer | não | Número do DDD do telefone |
| interessado.telefone.numero | integer | não | Número do telefone |
| status | object | não | Dados do interessado |
| status.status | integer | não | Código da situação |
| status.data | string | não | Data da situação |
| status.tipoDescricao | string | não | Tipo do conteúdo da descrição. |
| status.descricao | string | não | Descrição da situação. Se o campo tipoDescricao for preenchido com os valores pdf, csv, rtf, zip, rar,7z ou json, o conteúdo estrá em branco e retornará na lista de arquivos. |
| hashCobranca | string | não | Hash da cobrança |
| arquivos | array&lt;object&gt; | não | - |
| arquivos[].hash | string | não | Hash de acesso ao arquivo |
| arquivos[].nome | string | não | Nome do arquivo |
| dataUltimaAtualizacaoSistema | string | não | Data e hora da última atualização recebida do cartório. A data e hora é independente do protocolo. |

## Realiza o download do anexo do protocolo

endpoint

GET /v1/protocolo/{numeroProtocolo}/download/{hashArquivo}

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

query parameters

Sem parameters definidos.

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| - | - | não | - |

resposta retornada (200/201)

```json
{
  "descricao": "Success"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| descricao | string | não | Descrição do retorno HTTP quando não há schema de resposta. |

## Gerar token de autenticação detalhes do protocolo

endpoint

POST /v1/protocolo/{numeroProtocolo}/token

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

body json

```json
{
  "senha": "string",
  "tipoSolicitacao": 0
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| senha | string | sim | Senha do protocolo |
| tipoSolicitacao | integer | sim | Identifica o tipo de solicitação (1 - Registro / 2 - Exame e cálculo) |

resposta retornada (200/201)

```json
{
  "access_token": "string",
  "expires_in": 0,
  "token_type": "Header"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| access_token | string | sim | Token de acesso em JWT |
| expires_in | integer | sim | Tempo de expiração do token |
| token_type | string | sim | Tipo do token de autenticação |

## Realiza a validação do token de autenticação dos detalhes do protocolo

endpoint

GET /v1/protocolo/{numeroProtocolo}/token/validacao

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

query parameters

Sem parameters definidos.

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| - | - | não | - |

resposta retornada (200/201)

```json
{
  "descricao": "Success"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| descricao | string | não | Descrição do retorno HTTP quando não há schema de resposta. |
