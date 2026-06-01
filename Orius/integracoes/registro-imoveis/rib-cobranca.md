---
tipo: integracao
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, cobranca, rib, api, pagamento]
status: revisado
fonte: migracao-desktop
---

> **Produto:** [[Orius/empresa/produtos/registro-imoveis|Registro de Imóveis]] · **Índice:** [[Orius/integracoes/registro-imoveis/00-indice|Integrações RI]]
> **Documentação canônica (manual v2.2):** [[Orius/integracoes/registro-imoveis/api-registro-imoveis/RFC-01-geracao-cobranca|RFC-01]] · [[Orius/integracoes/registro-imoveis/api-registro-imoveis/RFC-02-listagem-cobrancas|RFC-02]] · [[Orius/integracoes/registro-imoveis/api-registro-imoveis/00-indice|hub API RI]]
> **Portal:** registrodeimoveis.org.br · Relacionado: [[Orius/integracoes/registro-imoveis/rib-edital]]
>
> Esta nota é **legado** (migração desktop). Preferir as notas RFC acima para integração nova.

---

# Cobrança — API RIB


# Swagger

[Swagger - Registro de Im�veis do Brasil](https://www.registrodeimoveis.org.br/swagger/index.html)

# Coleção Postman

[Arquivo: API - Registro de Imóveis do Brasil.postman_collection.json](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1778153862926-API%20-%20Registro%20de%20Im%C3%83%C2%B3veis%20do%20Brasil.postman_collection.json)

---

# Documentação API Cobrança

## Retorna a lista das cobranças já geradas

endpoint

GET /v1/cobranca

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

query parameters

url fictícia de exemplo

```plaintext
https://api.exemplo.com/v1/cobranca?registrosPorPagina=0&numeroPagina=0&tipoCobranca=string&status=0&pagadorDocumento=string&pagadorEmail=string&dataInicialGeracao=string&dataFinalGeracao=string&dataInicialStatus=string&dataFinalStatus=string&dataInicialPagamento=string&dataFinalPagamento=string
```

```json
{
  "registrosPorPagina": 0,
  "numeroPagina": 0,
  "tipoCobranca": "string",
  "status": 0,
  "pagadorDocumento": "string",
  "pagadorEmail": "string",
  "dataInicialGeracao": "string",
  "dataFinalGeracao": "string",
  "dataInicialStatus": "string",
  "dataFinalStatus": "string",
  "dataInicialPagamento": "string",
  "dataFinalPagamento": "string"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| registrosPorPagina (query) | integer | não | Total de registros que deve retornar por página. Padrão é de 50 registros e pode ter no máximo 100 |
| numeroPagina (query) | integer | não | Número da página que deseja acessar |
| tipoCobranca (query) | string | não | Tipo da cobrança que deseja filtrar |
| status (query) | integer | não | situação da cobrança que deseja filtrar |
| pagadorDocumento (query) | string | não | Número do documento (CPF ou CNPJ) do pagador da cobrança que deseja filtrar |
| pagadorEmail (query) | string | não | Endereço de e-mail do pagador da cobrança que deseja filtrar |
| dataInicialGeracao (query) | string | não | Data inicial da geração da cobrança que deseja filtrar |
| dataFinalGeracao (query) | string | não | Data inicial da geração da cobrança que deseja filtrar |
| dataInicialStatus (query) | string | não | Data inicial da situação da cobrança que deseja filtrar. Só poderá ser usado em conjunto com a situação |
| dataFinalStatus (query) | string | não | Data inicial da situação da cobrança que deseja filtrar. Só poderá ser usado em conjunto com a situação |
| dataInicialPagamento (query) | string | não | Data inicial do pagamento da cobrança que deseja filtrar. |
| dataFinalPagamento (query) | string | não | Data inicial do pagamento da cobrança que deseja filtrar. |

resposta retornada (200/201)

```json
{
  "totalRegistros": 0,
  "totalPaginas": 0,
  "paginaAtual": 0,
  "cobrancas": [
    {
      "hash": "string",
      "status": 0,
      "dataStatus": "2022-08-04",
      "url": "string",
      "valorTotal": 10000,
      "valorDevolucao": 10000,
      "pagamentoVinculado": {
        "hash": "string",
        "status": 0,
        "dataStatus": "2022-08-04",
        "url": "string",
        "valorTotal": 10000,
        "valorDevolucao": 10000
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
| cobrancas | array&lt;object&gt; | não | - |
| cobrancas[].hash | string | não | Hash da cobrança |
| cobrancas[].status | integer | não | Situação atual da cobrança |
| cobrancas[].dataStatus | string | não | Data da situação da cobrança |
| cobrancas[].url | string | não | URL de acesso a cobrança |
| cobrancas[].valorTotal | number | não | Valor total da cobrança. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| cobrancas[].valorDevolucao | number | não | Valor total das devoluções. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| cobrancas[].pagamentoVinculado | object | não | - |
| cobrancas[].pagamentoVinculado.hash | string | não | Hash da cobrança |
| cobrancas[].pagamentoVinculado.status | integer | não | Situação atual da cobrança |
| cobrancas[].pagamentoVinculado.dataStatus | string | não | Data da situação da cobrança |
| cobrancas[].pagamentoVinculado.url | string | não | URL de acesso a cobrança |
| cobrancas[].pagamentoVinculado.valorTotal | number | não | Valor total da cobrança. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| cobrancas[].pagamentoVinculado.valorDevolucao | number | não | Valor total das devoluções. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |

## Geração de cobrança

endpoint

POST /v1/cobranca

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

body json

```json
{
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
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| tipoCobranca | string | sim | Tipo da cobrança que será gerada |
| dataVencimento | string | sim | Data do vencimento da cobrança |
| observacao | string | não | Observações para serem adicionadas na cobrança |
| tipoPagamento | integer | não | Código do tipo de pagamento previamente cadastrado pelo cartório |
| dadosPagador | object | sim | Dados do pagador |
| dadosPagador.nome | string | sim | Nome do pagador |
| dadosPagador.documento | string | sim | Número do documento (CPF/CNPJ) do pagador (somente número) |
| dadosPagador.email | string | sim | Endereço de e-mail do pagador |
| dadosPagador.telefone | object | não | Dados do telefone do pagador |
| dadosPagador.telefone.ddd | integer | sim | Número do DDD |
| dadosPagador.telefone.numero | integer | sim | Número do telefone |
| dadosPagador.endereco | object | sim | Dados do endereço do pagador |
| dadosPagador.endereco.cep | string | sim | CEP do endereço do pagador |
| dadosPagador.endereco.tipoLogradouro | string | sim | Tipo do logradouro do endereço do pagador |
| dadosPagador.endereco.logradouro | string | sim | Logradouro do endereço do pagador |
| dadosPagador.endereco.numero | string | não | Número do imóvel do pagador |
| dadosPagador.endereco.bairro | string | sim | Bairro do endereço do pagador |
| dadosPagador.endereco.cidade | string | sim | Cidade do endereço do pagador |
| dadosPagador.endereco.estado | string | sim | Sigla do estado do endereço do pagador |
| servicos | array&lt;object&gt; | sim | Dados dos serviços |
| servicos[].codigo | number | sim | O código localizador é um campo numérico. É importante enviar o número do protocolo e não o recibo de pré-pagamento. |
| servicos[].valor | number | sim | Valor do serviço. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| webhook | object | não | - |
| webhook.url | string | sim | URL do webhook |
| webhook.metodo | string | sim | Tipo do metodo de comunicação |
| webhook.token | string | não | Token de autenticação para utilização no webhook |
| webhook.tipoToken | number | não | Tipo do token da autenticação para utilização no webhook |

resposta retornada (200/201)

```json
{
  "hash": "string",
  "status": 0,
  "dataStatus": "2022-08-04",
  "url": "string",
  "valorTotal": 10000,
  "qrcode": "string"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hash | string | não | Hash da cobrança |
| status | integer | não | Situação atual da cobrança |
| dataStatus | string | não | Data da situação da cobrança |
| url | string | não | URL de acesso a cobrança |
| valorTotal | number | não | Valor total da cobrança. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| qrcode | string | não | Imagem para pagamento via QRCode |

## Cadastramento de cobrança

endpoint

POST /v1/cobranca/cadastrar

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

body json

```json
{
  "editais": [
    "string"
  ],
  "valor": 10000,
  "url": "string",
  "dataGeracao": "2022-08-04 14:41:00",
  "dataVencimento": "2022-08-04",
  "descricao": "string",
  "numeroPagamento": "string",
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
  }
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| editais | array&lt;string&gt; | sim | Id dos editais vínculados ao pagamento |
| valor | number | sim | Valor total da cobrança. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| url | string | sim | URL do acesso ao pagamento. URL do boleto ou outros. |
| dataGeracao | string | sim | Data da geração da cobrança |
| dataVencimento | string | sim | Data do vencimento da cobrança |
| descricao | string | não | Informações adicionais sobre a cobrança |
| numeroPagamento | string | sim | Número da cobrança. Recomendado adicionar o nosso número com o boleto ou o número interno do sistema. |
| dadosPagador | object | sim | Dados do pagador |
| dadosPagador.nome | string | sim | Nome do pagador |
| dadosPagador.documento | string | sim | Número do documento (CPF/CNPJ) do pagador (somente número) |
| dadosPagador.email | string | sim | Endereço de e-mail do pagador |
| dadosPagador.telefone | object | não | Dados do telefone do pagador |
| dadosPagador.telefone.ddd | integer | sim | Número do DDD |
| dadosPagador.telefone.numero | integer | sim | Número do telefone |
| dadosPagador.endereco | object | não | Dados do endereço do pagador |
| dadosPagador.endereco.cep | string | sim | CEP do endereço do pagador |
| dadosPagador.endereco.tipoLogradouro | string | sim | Tipo do logradouro do endereço do pagador |
| dadosPagador.endereco.logradouro | string | sim | Logradouro do endereço do pagador |
| dadosPagador.endereco.numero | string | não | Número do imóvel do pagador |
| dadosPagador.endereco.bairro | string | sim | Bairro do endereço do pagador |
| dadosPagador.endereco.cidade | string | sim | Cidade do endereço do pagador |
| dadosPagador.endereco.estado | string | sim | Sigla do estado do endereço do pagador |

resposta retornada (200/201)

```json
{
  "hash": "string",
  "url": "string",
  "descricao": "string"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hash | string | não | Hash da cobrança |
| url | string | não | URL de acesso a cobrança |
| descricao | string | não | Descrição do retorno |

## Retorna a lista dos tipos de pagamentos para disponíveis

endpoint

GET /v1/cobranca/tipo/pagamento

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

query parameters

url fictícia de exemplo

```plaintext
https://api.exemplo.com/v1/cobranca/tipo/pagamento?registrosPorPagina=0&numeroPagina=0&status=0&descricao=string
```

```json
{
  "registrosPorPagina": 0,
  "numeroPagina": 0,
  "status": 0,
  "descricao": "string"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| registrosPorPagina (query) | integer | não | Total de registros que deve retornar por página. Padrão é de 50 registros e pode ter no máximo 100 |
| numeroPagina (query) | integer | não | Número da página que deseja acessar |
| status (query) | integer | não | Situação do tipo de pagamento para filtrar (0 = Inativo e 1 = Ativo) |
| descricao (query) | string | não | Descrição do tipo de pagamento para filtrar |

resposta retornada (200/201)

```json
{
  "totalRegistros": 0,
  "totalPaginas": 0,
  "paginaAtual": 0,
  "dados": [
    {
      "id": 0,
      "descricao": "string",
      "dataCadastro": "2022-08-04",
      "dataAtualizacao": "2022-08-04",
      "status": 0
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
| dados[].id | integer | não | Id do tipo de pagamento que é utilizado para definir na solicitação de cobrança no campo tipoPagamento |
| dados[].descricao | string | não | Descrição do tipo de pagamento que será exibido ao usuário |
| dados[].dataCadastro | string | não | Data de cadastramento |
| dados[].dataAtualizacao | string | não | Data da última atualização |
| dados[].status | integer | não | Situação do tipo de pagamento |

## Retorna os detalhes da cobrança já geradas

endpoint

GET /v1/cobranca/{hashCobranca}

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
  "status": 0,
  "dataStatus": "2022-08-04",
  "dataGeracao": "2022-08-04",
  "url": "string",
  "valorTotal": 10000,
  "valorDevolucao": 10000,
  "tipoCobranca": "string",
  "dataVencimento": "2022-08-04",
  "observacao": "string",
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
  "devolucoes": [
    {
      "hash": "string",
      "status": 0,
      "valor": 10000,
      "dataCadastro": "2026-01-01T00:00:00Z",
      "dataAtualizacao": "2026-01-01T00:00:00Z"
    }
  ],
  "pagamentoVinculado": {
    "hash": "string",
    "status": 0,
    "dataStatus": "2022-08-04",
    "dataGeracao": "2022-08-04",
    "url": "string",
    "valorTotal": 10000,
    "valorDevolucao": 10000,
    "tipoCobranca": "string",
    "dataVencimento": "2022-08-04",
    "observacao": "string",
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
    "devolucoes": [
      {
        "hash": "string",
        "status": 0,
        "valor": 10000,
        "dataCadastro": "2026-01-01T00:00:00Z",
        "dataAtualizacao": "2026-01-01T00:00:00Z"
      }
    ]
  }
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hash | string | não | Hash da cobrança |
| status | integer | não | Situação atual da cobrança |
| dataStatus | string | não | Data da situação da cobrança |
| dataGeracao | string | não | Data da geração da cobrança |
| url | string | não | URL de acesso a cobrança |
| valorTotal | number | não | Valor total da cobrança. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| valorDevolucao | number | não | Valor total das devoluções. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| tipoCobranca | string | sim | Tipo da cobrança que será gerada |
| dataVencimento | string | sim | Data do vencimento da cobrança |
| observacao | string | não | Observações para serem adicionadas na cobrança |
| dadosPagador | object | sim | Dados do pagador |
| dadosPagador.nome | string | sim | Nome do pagador |
| dadosPagador.documento | string | sim | Número do documento (CPF/CNPJ) do pagador (somente número) |
| dadosPagador.email | string | sim | Endereço de e-mail do pagador |
| dadosPagador.telefone | object | não | Dados do telefone do pagador |
| dadosPagador.telefone.ddd | integer | sim | Número do DDD |
| dadosPagador.telefone.numero | integer | sim | Número do telefone |
| dadosPagador.endereco | object | sim | Dados do endereço do pagador |
| dadosPagador.endereco.cep | string | sim | CEP do endereço do pagador |
| dadosPagador.endereco.tipoLogradouro | string | sim | Tipo do logradouro do endereço do pagador |
| dadosPagador.endereco.logradouro | string | sim | Logradouro do endereço do pagador |
| dadosPagador.endereco.bairro | string | sim | Bairro do endereço do pagador |
| dadosPagador.endereco.cidade | string | sim | Cidade do endereço do pagador |
| dadosPagador.endereco.estado | string | sim | Sigla do estado do endereço do pagador |
| servicos | array&lt;object&gt; | sim | Dados dos serviços |
| servicos[].codigo | number | sim | O código localizador é um campo numérico. É importante enviar o número do protocolo e não o recibo de pré-pagamento. |
| servicos[].valor | number | sim | Valor do serviço. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| devolucoes | array&lt;object&gt; | não | Dados das devoluções |
| devolucoes[].hash | string | não | Hash da devolução |
| devolucoes[].status | integer | não | Situação da devolução |
| devolucoes[].valor | number | sim | Valor do serviço. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| devolucoes[].dataCadastro | string | não | Data da solicitação da devolução |
| devolucoes[].dataAtualizacao | string | não | Data da última atualização |
| pagamentoVinculado | object | não | - |
| pagamentoVinculado.hash | string | não | Hash da cobrança |
| pagamentoVinculado.status | integer | não | Situação atual da cobrança |
| pagamentoVinculado.dataStatus | string | não | Data da situação da cobrança |
| pagamentoVinculado.dataGeracao | string | não | Data da geração da cobrança |
| pagamentoVinculado.url | string | não | URL de acesso a cobrança |
| pagamentoVinculado.valorTotal | number | não | Valor total da cobrança. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| pagamentoVinculado.valorDevolucao | number | não | Valor total das devoluções. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| pagamentoVinculado.tipoCobranca | string | sim | Tipo da cobrança que será gerada |
| pagamentoVinculado.dataVencimento | string | sim | Data do vencimento da cobrança |
| pagamentoVinculado.observacao | string | não | Observações para serem adicionadas na cobrança |
| pagamentoVinculado.dadosPagador | object | sim | Dados do pagador |
| pagamentoVinculado.dadosPagador.nome | string | sim | Nome do pagador |
| pagamentoVinculado.dadosPagador.documento | string | sim | Número do documento (CPF/CNPJ) do pagador (somente número) |
| pagamentoVinculado.dadosPagador.email | string | sim | Endereço de e-mail do pagador |
| pagamentoVinculado.dadosPagador.telefone | object | não | Dados do telefone do pagador |
| pagamentoVinculado.dadosPagador.telefone.ddd | integer | sim | Número do DDD |
| pagamentoVinculado.dadosPagador.telefone.numero | integer | sim | Número do telefone |
| pagamentoVinculado.dadosPagador.endereco | object | sim | Dados do endereço do pagador |
| pagamentoVinculado.dadosPagador.endereco.cep | string | sim | CEP do endereço do pagador |
| pagamentoVinculado.dadosPagador.endereco.tipoLogradouro | string | sim | Tipo do logradouro do endereço do pagador |
| pagamentoVinculado.dadosPagador.endereco.logradouro | string | sim | Logradouro do endereço do pagador |
| pagamentoVinculado.dadosPagador.endereco.bairro | string | sim | Bairro do endereço do pagador |
| pagamentoVinculado.dadosPagador.endereco.cidade | string | sim | Cidade do endereço do pagador |
| pagamentoVinculado.dadosPagador.endereco.estado | string | sim | Sigla do estado do endereço do pagador |
| pagamentoVinculado.servicos | array&lt;object&gt; | sim | Dados dos serviços |
| pagamentoVinculado.servicos[].codigo | number | sim | O código localizador é um campo numérico. É importante enviar o número do protocolo e não o recibo de pré-pagamento. |
| pagamentoVinculado.servicos[].valor | number | sim | Valor do serviço. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| pagamentoVinculado.devolucoes | array&lt;object&gt; | não | Dados das devoluções |
| pagamentoVinculado.devolucoes[].hash | string | não | Hash da devolução |
| pagamentoVinculado.devolucoes[].status | integer | não | Situação da devolução |
| pagamentoVinculado.devolucoes[].valor | number | sim | Valor do serviço. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| pagamentoVinculado.devolucoes[].dataCadastro | string | não | Data da solicitação da devolução |
| pagamentoVinculado.devolucoes[].dataAtualizacao | string | não | Data da última atualização |

## Realiza o cancelamento de uma cobrança

endpoint

PATCH /v1/cobranca/{hashCobranca}

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

parameters

```json
{
  "hashCobranca": "string"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hashCobranca (path) | string | sim | Hash da cobrança que deseja consultar os detalhes |

resposta retornada (200/201)

```json
{
  "hash": "string",
  "status": 0,
  "dataStatus": "2022-08-04",
  "valorTotal": 10000
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hash | string | não | Hash da cobrança |
| status | integer | não | Situação atual da cobrança |
| dataStatus | string | não | Data da situação da cobrança |
| valorTotal | number | não | Valor total da cobrança. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |

## Realiza a devolução de valores da cobrança PIX

endpoint

PUT /v1/cobranca/{hashCobranca}/pix/devolucao

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

body json

```json
{
  "valor": 10000
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| valor | number | não | Valor total que deseja devolver. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000). O limite do valor, será o valor da cobrança. |

resposta retornada (200/201)

```json
{
  "hash": "string",
  "status": 0,
  "dataStatus": "2022-08-04",
  "valorTotal": 10000,
  "valorTotalDevolvido": 10000
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hash | string | não | Hash da cobrança |
| status | integer | não | Situação atual da cobrança |
| dataStatus | string | não | Data da situação da cobrança |
| valorTotal | number | não | Valor total da cobrança. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |
| valorTotalDevolvido | number | não | Valor total devolvido da cobrança. O valor deverá ser informado em formato numérico. (Exemplo R$100,00 deverá ser informado 100000) |

## Realiza a atualização do número de protocolo

endpoint

PATCH /v1/cobranca/{hashCobranca}/protocolo

lembrete se precisa estar autenticado

Sim (requer token/autenticação)

parameters

```json
{
  "hashCobranca": "string"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hashCobranca (path) | string | sim | Hash da cobrança que deseja atualizar |

resposta retornada (200/201)

```json
{
  "hash": "string",
  "mensagem": "string"
}
```

| campo | tipo de dado | obrigatório | descrição |
| --- | --- | --- | --- |
| hash | string | não | Hash da cobrança |
| mensagem | string | não | Mensagem de retorno da atualização |
