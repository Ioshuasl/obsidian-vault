---
tipo: integracao
area: orius
produto: imoveis
portal: registrodeimoveis
tags: [orius, imoveis, edital, diario-registral, rib, api]
status: revisado
fonte: migracao-desktop
---

> **Produto:** [[Orius/empresa/produtos/registro-imoveis|Registro de Imóveis]] · **Índice:** [[Orius/integracoes/registro-imoveis/00-indice|Integrações RI]]
> **Portal:** api.registrodeimoveis.org.br · Relacionado: [[Orius/integracoes/registro-imoveis/rib-cobranca]]

---

# Edital eletrônico — API RIB


# O que é o Edital?

Nas serventias de registro de imóveis, o edital é um instrumento oficial de notificação e dar publicidade a atos referentes aos Registros Públicos. Ele é publicado no Diário Registral (o Diário do Registro de Imóveis Eletrônico) com o objetivo de dar ciência a pessoas envolvidas ou terceiros interessados sobre procedimentos que estão ocorrendo no cartório.

Esse recurso é muito utilizado para intimar legalmente indivíduos (como titulares de direitos, devedores ou confrontantes) em diversos tipos de procedimentos. Alguns exemplos de atos que exigem a publicação de editais incluem:

- Procedimentos de Alienação Fiduciária (intimação do devedor fiduciante).

- Processos de Usucapião Extrajudicial e Estremação Extrajudicial.

- Adjudicação Compulsória e Retificação Administrativa.

- Avisos referentes a Loteamentos, Cancelamento de Matrícula e Leilões de imóveis.

- Anexos e Plantas: Certos tipos de editais exigem o envio de anexos ou plantas, que devem obrigatoriamente conter a planta, croqui e a metragem. O sistema proíbe o anexo de dados sensíveis.

# Swagger da api

[Swagger - Registro de Im�veis do Brasil](https://www.registrodeimoveis.org.br/swagger/index.html)

## Coleção Postman

[Arquivo: API - Registro de Imóveis do Brasil.postman_collection.json](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1780062803776-API%20-%20Registro%20de%20Im%C3%83%C2%B3veis%20do%20Brasil.postman_collection.json)

# Endpoints da api

### Autenticação (Token)

O processo utiliza o padrão JWT para liberar o acesso aos demais serviços da API.

- Método e Endpoint: POST /v1/auth/token.

- Parâmetros de Envio (Body):

    - client_id: Código identificador do cliente (obrigatório).

    - client_secret: Chave secreta do cliente (obrigatório).

    - grant_type: Tipo de autenticação, podendo ser client_credentials ou password (obrigatório).

    - username / password: Necessários apenas se o grant_type for password.

Exemplo de JSON de Envio:

```json
{
  "client_id": "seu_codigo",
  "client_secret": "sua_chave_secreta",
  "grant_type": "client_credentials"
}
```

- Resposta de Sucesso:

    - access_token: O token JWT gerado para as próximas requisições.

    - expires_in: Tempo em segundos para a expiração do token.

    - token_type: Tipo do token, que será sempre Bearer.

Exemplo de Resposta JSON:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

---

Nota Importante: Após gerar o token, ele deve ser enviado no Header de todas as outras chamadas utilizando a chave Authorization com o prefixo Bearer.

### Validação do Token de Autenticação

Este endpoint serve especificamente para validar o token de acesso gerado na etapa de autenticação.

- Método e Endpoint: GET /v1/auth/validacao.

- Parâmetros de Envio (Header):

    - Authorization: Token JWT gerado na API de token da autenticação (obrigatório).

- Exemplo de Envio:

Como o método é GET, não há corpo de envio (Body JSON). O envio é feito exclusivamente via cabeçalho (Header) da requisição:

```plaintext
Authorization: Bearer seu_token_jwt_aqui
```

- Resposta de Sucesso:

O manual não detalha um modelo de payload de resposta (Body JSON) para o cenário de sucesso nesta rota, indicando que uma resposta bem-sucedida confirmará a validade sem exigir a devolução de dados adicionais.

- Exemplo de Resposta JSON (Em caso de erro):

Caso haja alguma falha na validação do token (ex: token expirado ou malformado), a API retornará a seguinte estrutura de erro:

```json
{
  "codigo": 0,
  "descricao": "string",
  "campos": {}
}
```

### Listagem dos Tipos de Editais

Esta funcionalidade retorna todos os tipos de editais permitidos para cadastramento, detalhando valores, quantidade de publicações e exigências de anexos.

- Método: GET

- Endpoint: /v1/edital/tipo

> Lembrete de Autenticação: Esta requisição exige obrigatoriamente o envio do token JWT no cabeçalho (Header) da requisição, utilizando a chave Authorization com o prefixo Bearer.

---

### Parâmetros de URL (Query Params)

Para realizar a paginação, utilize os seguintes parâmetros opcionais:

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `registrosPorPagina` | Int | Total de registros por página (Padrão: 50, Máximo: 100). |
| `numeroPagina` | Int | Número da página que deseja acessar. |

---

### Exemplo de Resposta JSON (Sucesso)

```json
{
  "totalRegistros": 1,
  "totalPaginas": 1,
  "paginaAtual": 1,
  "dados": [
    {
      "id": 1,
      "descricaoResumida": "Alienação Fiduciária",
      "descricao": "Alienação Fiduciária - Devedor Fiduciante",
      "permiteAnexo": 1,
      "anexoObrigatorio": 0,
      "extensoesPermitidas": "pdf,jpg,png",
      "numeroPublicacoes": 3,
      "diasPublicacoes": 1,
      "tipoDiasPublicacoes": 0,
      "diasTerminoPrazoEdital": 15,
      "valorPublicacao": 36000,
      "textoPadrao": "Texto base do edital...",
      "tipoEdital": "SIMPLES"
    }
  ]
}
```

---

### Detalhamento dos Campos da Resposta

#### 1. Estrutura de Paginação

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `totalRegistros` | Int | Número total de registros encontrados no sistema. |
| `totalPaginas` | Int | Número total de páginas disponíveis para consulta. |
| `paginaAtual` | Int | Número da página retornada na requisição atual. |
| `dados` | Array | Lista contendo os objetos com os tipos de editais. |

#### 2. Objeto de Dados (Array dados)

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | Int | Identificador único do tipo de edital (usado no cadastro). |
| `descricaoResumida` | String | Nome curto ou simplificado do tipo de edital. |
| `descricao` | String | Descrição detalhada do edital. |
| `permiteAnexo` | Int | Indica se o edital aceita anexos (0: Não, 1: Sim). |
| `anexoObrigatorio` | Int | Indica se o anexo é obrigatório (0: Não, 1: Sim). |
| `extensoesPermitidas` | String | Formatos de arquivo aceitos (se vazio, permite qualquer um). |
| `numeroPublicacoes` | Int | Quantidade de publicações que serão geradas para este tipo. |
| `diasPublicacoes` | Int | Intervalo de dias entre cada publicação. |
| `tipoDiasPublicacoes` | Int | Tipo da contagem (0: Dias úteis, 1: Dias corridos). |
| `diasTerminoPrazoEdital` | Int | Prazo de término do edital em dias. |
| `valorPublicacao` | Int | Valor total (formato numérico, ex: 10000 para R$ 100,00). |
| `textoPadrao` | String | Conteúdo base sugerido para o corpo do edital. |
| `tipoEdital` | String | Categoria do edital (`SIMPLES` ou `LEILAO_IMOVEL`). |

### Listagem de Editais

- Método: GET

- Endpoint: /v1/edital

> Requisito de Autenticação: A requisição deve incluir obrigatoriamente o token JWT no cabeçalho (Header): Authorization: Bearer seu_token.

---

### Exemplo de Requisição (URL com Filtros)

```bash
GET https://api.registrodeimoveis.org.br/v1/edital?registrosPorPagina=10&numeroPagina=1&status=1
```

### Parâmetros de Pesquisa (Query Params)

Todos os parâmetros são opcionais.

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `registrosPorPagina` | Int | Quantidade de itens por página (Padrão: 50, Máximo: 100). |
| `numeroPagina` | Int | Número da página que deseja acessar. |
| `tipoEdital` | Int | Filtra pelo código numérico do tipo de edital. |
| `dataInicialPublicacao` | Date | Data inicial da publicação para filtro. |
| `dataFinalPublicacao` | Date | Data final da publicação para filtro. |
| `dataInicialCadastro` | Date | Data inicial do cadastro para filtro. |
| `dataFinalCadastro` | Date | Data final do cadastro para filtro. |
| `documentointimado` | String | CPF/CNPJ (apenas números) do intimado. |
| `documentoCredor` | String | CNPJ (apenas números) do credor. |
| `cns` | String | Código CNS do cartório. |
| `numeroMatricula` | String | Número da matrícula do imóvel. |
| `uuid` | String | Hash UUID do edital. |
| `numeroEdital` | String | Número do edital. |
| `status` | String | Situação do edital (Ver Domínio EStatus). |

---

### Exemplo de Resposta JSON (Sucesso)

```json
{
  "totalRegistros": 1,
  "totalPaginas": 1,
  "paginaAtual": 1,
  "dados": [
    {
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "cnm": "1234567890123456789",
      "numeroEdital": 123,
      "tipoEdital": 1,
      "descricaoTipo": "Usucapião Extrajudicial",
      "numeroPublicacao": 1,
      "paginas": 3,
      "status": 1,
      "descricaoStatus": "Publicado",
      "dataStatus": "2026-03-20 10:24:01",
      "dataPublicacao": "2026-03-22",
      "numeroEdicao": 105,
      "anoEdicao": 2026,
      "dataCadastro": "2026-03-20 10:00:00",
      "dataAtualizacao": "2026-03-20 10:15:00",
      "urlPagamento": "https://api.registrodeimoveis.org.br/pagamento/123",
      "urlRecibo": "https://api.registrodeimoveis.org.br/recibo/123",
      "editaisVinculados": [
        "1234", "1235"
      ],
      "motivoRejeicao": "Faltou assinar o documento anexo",
      "retificacao": [
        {
          "editalRejeitado": 1234,
          "editalRetificador": 123,
          "uuidRetificador": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p"
        }
      ]
    }
  ]
}
```

---

### Tabelas Detalhadas da Resposta

#### 1. Campos de Paginação (Raiz)

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `totalRegistros` | Int | Número total de registros encontrados. |
| `totalPaginas` | Int | Número total de páginas disponíveis. |
| `paginaAtual` | Int | Número da página atual. |
| `dados` | Array | Lista com os dados dos editais encontrados. |

#### 2. Campos do Array dados (Completo)

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `uuid` | String | Hash UUID identificador único do edital. |
| `cnm` | String | Número CNM da matrícula (se houver). |
| `numeroEdital` | Int | Número oficial de registro do edital no sistema. |
| `tipoEdital` | Int | Identificador do tipo do edital. |
| `descricaoTipo` | String | Descrição por extenso do tipo do edital. |
| `numeroPublicacao` | Int | Número (sequência) da publicação do edital. |
| `paginas` | Int | Número de páginas geradas no documento do edital. |
| `status` | Int | Código numérico da situação atual (Ver EStatus). |
| `descricaoStatus` | String | Descrição textual da situação do edital. |
| `dataStatus` | DateTime | Data e hora em que a situação atual foi definida. |
| `dataPublicacao` | DateTime | Data em que o edital foi ou será publicado. |
| `numeroEdicao` | Int | Número da edição do jornal/diário onde foi publicado. |
| `anoEdicao` | Int | Ano da edição do jornal/diário. |
| `dataCadastro` | DateTime | Data e hora de criação do edital no sistema. |
| `dataAtualizacao` | DateTime | Data e hora da última modificação do registro. |
| `urlPagamento` | String | URL de acesso para realizar o pagamento (se pendente). |
| `urlRecibo` | String | URL de acesso ao recibo/nota (se pago). |
| `editaisVinculados` | Array | Lista com identificadores de editais vinculados. |
| `motivoRejeicao` | String | Texto explicativo em caso de rejeição pelo jornalista. |
| `retificacao` | Array | Objeto contendo os dados de retificação do edital. |

#### 3. Campos do Array retificacao

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `editalRejeitado` | Int | ID numérico do edital original que sofreu rejeição. |
| `editalRetificador` | Int | ID numérico do novo edital criado para corrigir o rejeitado. |
| `uuidRetificador` | String | Hash UUID do grupo retificador. |

### Tabelas de Domínio Auxiliares

#### 1. Situação do Edital (EStatus)

Utilizada principalmente no campo status da resposta para identificar em que etapa do processo o edital se encontra.

| Código | Descrição |
| --- | --- |
| **0** | Todos |
| **1** | Publicado |
| **2** | Rejeitado |
| **3** | Aguardando Publicação |
| **4** | Aguardando Pagamento |
| **5** | Inativo |

#### 2. Definição do Tipo de Edital (ETipoEdital)

Classifica a natureza do edital cadastrado.

| Código | Descrição |
| --- | --- |
| **SIMPLES** | Editais de cadastramento simplificado |
| **LEILAO_IMOVEL** | Editais de leilão de imóveis |

#### 3. Configurações de Anexo (EPermiteAnexo e EAnexoObrigatorio)

Indicam as regras de arquivos anexos configuradas para aquele tipo de edital.

| Tabela | Código | Descrição |
| --- | --- | --- |
| **EPermiteAnexo** | 0 | Não permite |
| **EPermiteAnexo** | 1 | Permite |
| **EAnexoObrigatorio** | 0 | Não obrigatório |
| **EAnexoObrigatorio** | 1 | Obrigatório |

#### 4. Contagem de Prazos (ETipoDiasPublicacoes)

Define como os intervalos entre as publicações são calculados.

| Código | Descrição |
| --- | --- |
| **0** | Dias úteis |
| **1** | Dias corridos |

## Cadastro de um edital simples

### 1. Método e Endpoint

- Método: POST

- Endpoint: /v1/edital

- Descrição: API de cadastramento do edital simples.

### 2. Autenticação

- Lembrete: Para utilizar a funcionalidade de cadastramento, é obrigatório realizar a autenticação.

- Deve ser enviado um Token JWT, gerado na API de token da autenticação, através do header da requisição no campo Authorization.

### 3. Exemplo de Body JSON

Abaixo está o modelo de JSON de requisição para o cadastramento:

```json
{
  "tipoEdital": 0,
  "numeroMatricula": "string",
  "cnm": "stringstringstrings",
  "numeroProtocolo": "string",
  "anexo": "string",
  "numeroAto": "string",
  "textoEdital": "string",
  "intimados": [
    {
      "documentoDesconhecido": false,
      "documento": "stringstrin",
      "nome": "string",
      "endereco": {
        "cep": "string",
        "tipoLogradouro": "string",
        "logradouro": "string",
        "numero": "string",
        "bairro": "string",
        "cidade": "string",
        "estado": "st"
      }
    }
  ],
  "primeiroRequerente": {
    "documento": "string",
    "nome": "string"
  },
  "dadosServentia": {
    "nomeOficial": "string",
    "cns": 0,
    "denominacao": "string",
    "endereco": {
      "cep": "string",
      "tipoLogradouro": "string",
      "logradouro": "string",
      "numero": "string",
      "bairro": "string",
      "cidade": "string",
      "estado": "st"
    }
  },
  "dadosContrato": {
    "nomeCredor": "string",
    "numero": "string",
    "dataContrato": "2022-08-04",
    "dataAssinaturaContrato": "2022-08-04",
    "dataPosicionamentoDivida": "2022-08-04",
    "valorDivida": 10000,
    "cidadeAssinatura": "string",
    "estadoAssinatura": "st"
  },
  "imovel": {
    "cep": "string",
    "tipoLogradouro": "string",
    "logradouro": "string",
    "numero": "string",
    "bairro": "string",
    "cidade": "string",
    "estado": "SE"
  },
  "cobranca": {
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
        "numero": "string",
        "bairro": "string",
        "cidade": "string",
        "estado": "st"
      }
    }
  },
  "webhook": {
    "url": "string",
    "metodo": "string"
  }
}
```

### 4. Tabelas Detalhadas dos Campos do Body JSON

Campos Principais do Endpoint POST /v1/edital

| Campo | Tipo | Tamanho | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| `tipoEdital` | Int | 10 | Sim | Código do tipo do edital. |
| `numeroMatricula` | String | 7 | Não | Número da matrícula. |
| `cnm` | String | 19 | Não | Número do CNM. |
| `numeroProtocolo` | String | 20 | Não | Número do protocolo/prenotação de referência do edital. |
| `anexo` | String | 4.294.967.295 | Não | Código base64 do anexo para cadastramento no edital. |
| `numeroAto` | String | 30 | Não | Número do ato. |
| `textoEdital` | String | 10000 | Não | Texto do edital (Será utilizado quando não existir o texto padrão do edital). |
| `intimados` | Array | - | Sim | Dados dos intimados. |
| `primeiroRequerente` | Object | - | Não | Dados do primeiro requerente. |
| `dadosServentia` | Object | - | Sim | Dados da serventia. |
| `dadosContrato` | Object | - | Não | Dados do contrato. |
| `imovel` | Object | - | Não | Dados do endereço do imóvel do edital. |
| `cobranca` | Object | - | Não | Define os dados para a geração da cobrança do edital. |
| `webhook` | Object | - | Não | Dados de webhook para notificação. |

---

Detalhes dos Objetos e Arrays Aninhados:

Array: intimados

| Campo | Tipo | Tamanho | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| `documentoDesconhecido` | Boolean | - | Não | Informa se o documento do intimado é desconhecido, caso seja true, não é necessário informar o documento. |
| `documento` | String | 14 | Sim | Número do documento do intimado CPF ou CNPJ, informar somente os números. |
| `nome` | String | 50 | Não | Nome completo do intimado ou razão social. A API irá realizar a consulta do documento para buscar as informações do nome. |
| `endereco` | Object | - | Não | Dados do endereço do intimado. |

Objeto: primeiroRequerente

| Campo | Tipo | Tamanho | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| `documento` | String | 200 | Sim | Documento do primeiro requerente. |
| `nome` | Number* | - | Sim | Nome do primeiro requerente. <i>(Nota: Tabela indica tipo Number, porém no exemplo do JSON é retornado como String)</i>. |

Objeto: dadosServentia

| Campo | Tipo | Tamanho | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| `nomeOficial` | String | 200 | Não | Nome do oficial. |
| `cns` | Number | - | Sim | Código CNS. |
| `denominacao` | String | 200 | Não | Denominação da serventia. |
| `endereco` | Object | - | Não | Dados do endereço do intimado (serventia). |

Objeto: dadosContrato

| Campo | Tipo | Tamanho | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| `nomeCredor` | String | 400 | Sim | Nome do credor. |
| `numero` | String | 30 | Sim | Número do contrato. |
| `dataContrato` | Date | 10 | Sim | Data do contrato. |
| `dataAssinaturaContrato` | Date | 10 | Sim | Data da assinatura do contrato. |
| `dataPosicionamentoDivida` | Date | 10 | Sim | Data do posicionamento da divida. |
| `valorDivida` | Number | - | Sim | Valor da dívida (Exemplo R$100,00 deverá ser informado 100000). |
| `cidadeAssinatura` | String | 150 | Sim | Cidade onde foi assinado o contrato. |
| `estadoAssinatura` | String | 2 | Sim | Sigla do estado onde foi assinado o contrato. |

Objeto: cobranca

| Campo | Tipo | Tamanho | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| `observacao` | String | 30 | Não | Observações para serem adicionadas na cobrança. |
| `dadosPagador` | Object | - | Sim | Dados do pagador. |

Objeto: cobranca/dadosPagador

| Campo | Tipo | Tamanho | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| `nome` | String | 60 | Sim | Nome do pagador. |
| `documento` | String | 14 | Sim | Número do documento (CPF/CNPJ) do pagador (somente número). |
| `email` | String | 150 | Sim | Endereço de e-mail do pagador. |
| `telefone` | Object | - | Não | Dados do telefone do pagador. |
| `endereco` | Object | - | Sim | Dados do endereço do pagador. |

Objeto: cobranca/dadosPagador/telefone

| Campo | Tipo | Tamanho | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| `ddd` | Number | 3 | Não | Número do DDD do telefone. |
| `numero` | Number | 10 | Não | Número do telefone. |

Objeto: webhook

| Campo | Tipo | Tamanho | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| `url` | String | - | Sim | URL do webhook. |
| `metodo` | String | - | Sim | Tipo do método de comunicação (Tabela de domínio: WebHookMetodo). |

Objeto padrão de endereco (Aplicado a intimados, dadosServentia, imovel e cobranca/dadosPagador)

| Campo | Tipo | Tamanho | Obrigatório | Descrição |
| --- | --- | --- | --- | --- |
| `cep` | String | 8 | Sim | CEP do endereço. |
| `tipoLogradouro` | String | 16 | Sim | Tipo do logradouro do endereço. |
| `logradouro` | String | 150 | Sim | Logradouro do endereço. |
| `numero` | String | 10 | Não | Número do imóvel. |
| `bairro` | String | 100 | Sim | Bairro do endereço. |
| `cidade` | String | 100 | Sim | Cidade do endereço. |
| `estado` | String | 2 | Sim | Sigla do estado do endereço. |

Aqui está a documentação corrigida e completa do endpoint de geração de edital de leilão, sem emojis e incluindo os campos do preposto:

---

# Geração de Edital de Leilão

## Método e Endpoint

```markup
POST /v1/edital/leilao
```

---

## Autenticação

Este endpoint exige autenticação via token JWT.

Enviar no header:

```markup
Authorization: Bearer {seu_token_jwt}
```

O token deve ser obtido previamente via:

```markup
POST /v1/auth/token
```

---

## Exemplo de Body JSON

```json
{
  "tipoEdital": 1,
  "sumario": {
    "publicacao": {
      "numeroPublicacao": "PUB123",
      "objeto": "Leilão de imóvel",
      "descricao": "Descrição do edital"
    },
    "foro": {
      "local": "Goiânia",
      "dataPorExtenso": "01 de Janeiro de 2026",
      "texto": "Texto do foro"
    },
    "titulo": "EDITAL DE LEILÃO",
    "subtitulo": "Subtítulo",
    "subtitulo2": "Subtítulo 2",
    "texto": "Texto completo do sumário"
  },
  "leilao": {
    "modalidade": "online",
    "modoDisputa": "aberto",
    "tipo": "1º e 2º leilão",
    "linkDisputa": "https://leilao.com",
    "leiloes": [
      {
        "data": "2026-01-10",
        "hora": "10:00"
      }
    ],
    "leiloeiro": {
      "documento": "12345678901",
      "nome": "Leiloeiro Oficial",
      "numeroInscricao": "12345",
      "numeroTelefone": "62999999999",
      "email": "leiloeiro@email.com"
    },
    "preposto": {
      "documento": "12345678901",
      "nome": "Preposto",
      "numeroInscricao": "54321",
      "numeroTelefone": "62988888888",
      "email": "preposto@email.com"
    }
  },
  "intimados": [
    {
      "documentoDesconhecido": false,
      "documento": "12345678901",
      "nome": "João da Silva"
    }
  ],
  "imoveis": [
    {
      "numeroLote": "1",
      "idImovel": "IMOVEL123",
      "numeroMatricula": "123456",
      "tipoImovel": "Casa",
      "condicoes": "À vista",
      "cns": "123456",
      "leiloes": [
        {
          "valor": 500000
        }
      ],
      "consideracoes": "Sem dívidas",
      "endereco": {
        "cep": "74000000",
        "tipoLogradouro": "Rua",
        "logradouro": "Rua Exemplo",
        "numero": "100",
        "bairro": "Centro",
        "cidade": "Goiânia",
        "estado": "GO"
      }
    }
  ],
  "dadosCredor": {
    "documento": "12345678000199",
    "nome": "Banco XYZ",
    "cidade": "Goiânia",
    "estado": "GO"
  },
  "informacoesGerais": {
    "titulo": "Informações importantes",
    "texto": "Texto com informações gerais"
  },
  "cobranca": {
    "observacao": "Cobrança do edital",
    "dadosPagador": {
      "nome": "João da Silva",
      "documento": "12345678901",
      "email": "joao@email.com",
      "endereco": {
        "cep": "74000000",
        "tipoLogradouro": "Rua",
        "logradouro": "Rua Pagador",
        "numero": "10",
        "bairro": "Centro",
        "cidade": "Goiânia",
        "estado": "GO"
      }
    }
  },
  "webhook": {
    "url": "https://seusistema.com/webhook",
    "metodo": "POST"
  }
}
```

---

## Tabela de Campos do Body

### Campos principais

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| tipoEdital | Int | Sim | Código do tipo de edital |
| sumario | Object | Sim | Dados do sumário |
| leilao | Object | Sim | Dados do leilão |
| intimados | Array | Sim | Lista de intimados |
| imoveis | Array | Sim | Lista de imóveis |
| dadosCredor | Object | Sim | Dados do credor |
| informacoesGerais | Object | Sim | Informações gerais |
| cobranca | Object | Não | Dados de cobrança |
| webhook | Object | Não | Configuração de webhook |

---

### sumario

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| publicacao | Object | Sim |
| foro | Object | Não |
| titulo | String | Não |
| subtitulo | String | Não |
| subtitulo2 | String | Não |
| texto | String | Não |

---

### sumario.publicacao

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| numeroPublicacao | String | Sim |
| objeto | String | Sim |
| descricao | String | Não |

---

### sumario.foro

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| local | String | Não |
| dataPorExtenso | String | Não |
| texto | String | Não |

---

### leilao

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| modalidade | String | Sim | Modalidade (tabela LModalidade) |
| modoDisputa | String | Sim | Modo de disputa (tabela LDisputa) |
| tipo | String | Sim | Tipo do leilão |
| linkDisputa | String | Não | URL do leilão |
| leiloes | Array | Sim | Datas dos leilões |
| leiloeiro | Object | Sim | Dados do leiloeiro |
| preposto | Object | Não | Dados do preposto |

---

### leilao.leiloes[]

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| data | Date | Sim |
| hora | Time | Sim |

---

### leilao.leiloeiro

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| documento | String | Sim |
| nome | String | Sim |
| numeroInscricao | String | Sim |
| numeroTelefone | String | Sim |
| email | String | Sim |
| endereco | Object | Não |

---

### leilao.preposto

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| documento | String | Não |
| nome | String | Não |
| numeroInscricao | String | Não |
| numeroTelefone | String | Não |
| email | String | Não |
| endereco | Object | Não |

---

### leilao.preposto.endereco

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| cep | String | Não |
| tipoLogradouro | String | Não |
| logradouro | String | Não |
| numero | String | Não |
| bairro | String | Não |
| cidade | String | Não |
| estado | String | Não |

---

### intimados[]

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| documentoDesconhecido | Boolean | Não |
| documento | String | Sim |
| nome | String | Sim |

---

### imoveis[]

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| numeroLote | String | Sim |
| idImovel | String | Sim |
| numeroMatricula | String | Sim |
| tipoImovel | String | Sim |
| condicoes | String | Sim |
| cns | String | Sim |
| leiloes | Array | Não |
| consideracoes | String | Não |
| endereco | Object | Sim |

---

### imoveis.leiloes[]

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| valor | Number | Sim |

---

### imoveis.endereco

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| cep | String | Sim |
| tipoLogradouro | String | Sim |
| logradouro | String | Sim |
| numero | String | Sim |
| bairro | String | Sim |
| cidade | String | Sim |
| estado | String | Sim |

---

### dadosCredor

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| documento | String | Sim |
| nome | String | Sim |
| cidade | String | Sim |
| estado | String | Sim |

---

### informacoesGerais

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| titulo | String | Sim |
| texto | String | Sim |

---

### cobranca

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| observacao | String | Não |
| dadosPagador | Object | Sim |

---

### webhook

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| url | String | Sim |
| metodo | String | Sim |

---

# Detalhes de Edital Simples

## Método e Endpoint

GET /v1/edital/:numeroEdital

## Autenticação

É necessário enviar token JWT no header:

```plaintext
Authorization: Bearer {token}
```

---

## Exemplo de resposta JSON

```json
{
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "cnm": "string",
  "numeroEdital": 12345,
  "tipoEdital": 1,
  "descricaoTipo": "string",
  "numeroMatricula": "string",
  "numeroPublicacao": 1,
  "paginas": 2,
  "status": 1,
  "descricaoStatus": "string",
  "dataPublicacao": "2022-08-04",
  "numeroEdicao": 10,
  "anoEdicao": 2022,
  "dataCadastro": "2022-08-04 10:00:00",
  "urlPagamento": "string",
  "urlRecibo": "string",
  "editaisVinculados": ["123"],
  "numeroProtocolo": "string",
  "anexo": "base64",
  "numeroAto": "string",
  "intimados": [
    {
      "documento": "12345678900",
      "nome": "string",
      "endereco": {
        "cep": "string",
        "tipoLogradouro": "string",
        "logradouro": "string",
        "numero": "string",
        "bairro": "string",
        "cidade": "string",
        "estado": "GO"
      }
    }
  ],
  "primeiroRequerente": {
    "documento": "string",
    "nome": "string"
  },
  "dadosServentia": {
    "nomeOficial": "string",
    "cns": 123,
    "denominacao": "string",
    "endereco": {
      "cep": "string",
      "tipoLogradouro": "string",
      "logradouro": "string",
      "numero": "string",
      "bairro": "string",
      "cidade": "string",
      "estado": "GO"
    }
  },
  "dadosContrato": {
    "nomeCredor": "string",
    "numero": "string",
    "dataContrato": "2022-08-04",
    "dataAssinaturaContrato": "2022-08-04",
    "dataPosicionamentoDivida": "2022-08-04",
    "valorDivida": 100000,
    "cidadeAssinatura": "string",
    "estadoAssinatura": "GO"
  },
  "imovel": {
    "cep": "string",
    "tipoLogradouro": "string",
    "logradouro": "string",
    "numero": "string",
    "bairro": "string",
    "cidade": "string",
    "estado": "GO"
  },
  "motivoRejeicao": "string",
  "editaisRetificador": [
    {
      "editalRejeitado": 1,
      "editalRetificador": 2,
      "uuidRetificador": "uuid"
    }
  ]
}
```

---

## Tabela de campos da resposta

### Campos principais

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| uuid | String | Sim | Identificador único do edital |
| cnm | String | Sim | Número CNM |
| numeroEdital | Int | Sim | Número do edital |
| tipoEdital | Int | Sim | Código do tipo |
| descricaoTipo | String | Sim | Descrição do tipo |
| numeroMatricula | String | Não | Matrícula do imóvel |
| numeroPublicacao | Int | Não | Número da publicação |
| paginas | Int | Não | Quantidade de páginas |
| status | Int | Sim | Situação do edital |
| descricaoStatus | String | Sim | Descrição do status |
| dataPublicacao | Date | Não | Data da publicação |
| numeroEdicao | Int | Não | Número da edição |
| anoEdicao | Int | Não | Ano da edição |
| dataCadastro | DateTime | Sim | Data de cadastro |
| urlPagamento | String | Não | URL para pagamento |
| urlRecibo | String | Não | URL do recibo |
| editaisVinculados | Array | Não | Editais relacionados |
| numeroProtocolo | String | Não | Protocolo |
| anexo | String | Não | Arquivo em base64 |
| numeroAto | String | Não | Número do ato |
| motivoRejeicao | String | Não | Motivo da rejeição |

---

### Intimados

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| documento | String | Sim | CPF/CNPJ |
| nome | String | Sim | Nome/Razão social |
| endereco | Object | Não | Endereço |

---

### Endereço (padrão)

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| cep | String | Sim |
| tipoLogradouro | String | Sim |
| logradouro | String | Sim |
| numero | String | Não |
| bairro | String | Sim |
| cidade | String | Sim |
| estado | String | Sim |

---

### Dados da Serventia

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| nomeOficial | String | Sim |
| cns | Number | Sim |
| denominacao | String | Sim |
| endereco | Object | Não |

---

### Dados do Contrato

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| nomeCredor | String | Sim |
| numero | String | Sim |
| dataContrato | Date | Sim |
| dataAssinaturaContrato | Date | Sim |
| dataPosicionamentoDivida | Date | Sim |
| valorDivida | Number | Sim |
| cidadeAssinatura | String | Sim |
| estadoAssinatura | String | Sim |

---

### Imóvel

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| cep | String | Sim |
| tipoLogradouro | String | Sim |
| logradouro | String | Sim |
| numero | String | Não |
| bairro | String | Sim |
| cidade | String | Sim |
| estado | String | Sim |

---

### Retificação

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| editalRejeitado | Int | Sim |
| editalRetificador | Int | Sim |
| uuidRetificador | String | Sim |

---

# Detalhes de Edital de Leilão

## Método e Endpoint

GET /v1/edital/leilao/:numeroEdital

## Autenticação

É necessário enviar token JWT no header:

```plaintext
Authorization: Bearer {token}
```

---

## Exemplo de resposta JSON

```json
{
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "numeroEdital": 12345,
  "tipoEdital": 2,
  "descricaoTipo": "Leilão",
  "status": 1,
  "descricaoStatus": "string",
  "dataStatus": "2022-08-04 10:24:01",
  "dataCadastro": "2022-08-04 10:00:00",
  "dataAtualizacao": "2022-08-04 10:00:00",
  "urlPagamento": "string",
  "urlRecibo": "string",

  "sumario": {
    "publicacao": {
      "numeroPublicacao": "string",
      "objeto": "string",
      "descricao": "string"
    },
    "foro": {
      "local": "string",
      "dataPorExtenso": "string",
      "texto": "string"
    },
    "titulo": "string",
    "subtitulo": "string",
    "subtitulo2": "string",
    "texto": "string"
  },

  "leilao": {
    "modalidade": "online",
    "modoDisputa": "aberto",
    "tipo": "string",
    "linkDisputa": "string",
    "leiloes": [
      {
        "data": "2022-08-04",
        "hora": "10:22"
      }
    ],
    "leiloeiro": {
      "documento": "12345678901",
      "nome": "string",
      "numeroInscricao": "string",
      "numeroTelefone": "string",
      "email": "string",
      "endereco": {
        "cep": "string",
        "tipoLogradouro": "string",
        "logradouro": "string",
        "numero": "string",
        "bairro": "string",
        "cidade": "string",
        "estado": "GO"
      }
    },
    "preposto": {
      "documento": "12345678901",
      "nome": "string",
      "numeroInscricao": "string",
      "numeroTelefone": "string",
      "email": "string",
      "endereco": {
        "cep": "string",
        "tipoLogradouro": "string",
        "logradouro": "string",
        "numero": "string",
        "bairro": "string",
        "cidade": "string",
        "estado": "GO"
      }
    }
  },

  "intimados": [
    {
      "documento": "12345678900",
      "nome": "string"
    }
  ],

  "imoveis": [
    {
      "numeroLote": "string",
      "idImovel": "string",
      "numeroMatricula": "string",
      "tipoImovel": "string",
      "condicoes": "string",
      "cns": "string",
      "leiloes": [
        {
          "valor": 100000
        }
      ],
      "consideracoes": "string",
      "endereco": {
        "cep": "string",
        "tipoLogradouro": "string",
        "logradouro": "string",
        "numero": "string",
        "unidade": "string",
        "lote": "string",
        "quadra": "string",
        "torre": "string",
        "bloco": "string",
        "nomeLoteamento": "string",
        "nomeCondominio": "string",
        "complemento": "string",
        "bairro": "string",
        "cidade": "string",
        "estado": "GO",
        "vagas": ["string"]
      }
    }
  ],

  "dadosCredor": {
    "documento": "string",
    "nome": "string",
    "cidade": "string",
    "estado": "GO"
  },

  "informacoesGerais": {
    "titulo": "string",
    "texto": "string"
  },

  "motivoRejeicao": "string",

  "editaisRetificador": [
    {
      "editalRejeitado": 1,
      "editalRetificador": 2,
      "uuidRetificador": "uuid"
    }
  ]
}
```

---

# Tabela detalhada dos campos

## Campos principais

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| uuid | String | Sim | Identificador único do edital |
| numeroEdital | Int | Sim | Número do edital |
| tipoEdital | Int | Sim | Tipo do edital |
| descricaoTipo | String | Sim | Descrição do tipo |
| status | Int | Sim | Situação do edital |
| descricaoStatus | String | Sim | Descrição da situação |
| dataStatus | DateTime | Sim | Data do status |
| dataCadastro | DateTime | Sim | Data de cadastro |
| dataAtualizacao | DateTime | Sim | Última atualização |
| urlPagamento | String | Não | URL de pagamento |
| urlRecibo | String | Não | URL do recibo |
| motivoRejeicao | String | Não | Motivo da rejeição |

---

## Sumário

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| publicacao | Object | Sim | Dados da publicação |
| foro | Object | Não | Dados do foro |
| titulo | String | Não | Título |
| subtitulo | String | Não | Subtítulo |
| subtitulo2 | String | Não | Subtítulo adicional |
| texto | String | Não | Texto do sumário |

### publicacao

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| numeroPublicacao | String | Sim |
| objeto | String | Sim |
| descricao | String | Não |

---

## Leilão

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| modalidade | String | Sim |
| modoDisputa | String | Sim |
| tipo | String | Sim |
| linkDisputa | String | Não |
| leiloes | Array | Sim |
| leiloeiro | Object | Sim |
| preposto | Object | Sim |

### Leilões (datas)

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| data | Date | Sim |
| hora | Time | Sim |

---

## Leiloeiro / Preposto

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| documento | String | Não |
| nome | String | Não |
| numeroInscricao | String | Não |
| numeroTelefone | String | Não |
| email | String | Não |
| endereco | Object | Não |

---

## Intimados

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| documento | String | Sim |
| nome | String | Sim |

---

## Imóveis

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| numeroLote | String | Sim |
| idImovel | String | Sim |
| numeroMatricula | String | Sim |
| tipoImovel | String | Sim |
| condicoes | String | Sim |
| cns | String | Sim |
| leiloes | Array | Não |
| consideracoes | String | Não |
| endereco | Object | Sim |

### Valores do leilão

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| valor | Number | Sim |

---

## Endereço do imóvel

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| cep | String | Sim |
| tipoLogradouro | String | Sim |
| logradouro | String | Sim |
| numero | String | Sim |
| unidade | String | Não |
| lote | String | Não |
| quadra | String | Não |
| torre | String | Não |
| bloco | String | Não |
| nomeLoteamento | String | Não |
| nomeCondominio | String | Não |
| complemento | String | Não |
| bairro | String | Sim |
| cidade | String | Sim |
| estado | String | Sim |
| vagas | Array | Não |

---

## Dados do Credor

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| documento | String | Sim |
| nome | String | Sim |
| cidade | String | Sim |
| estado | String | Sim |

---

## Informações Gerais

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| titulo | String | Sim |
| texto | String | Sim |

---

## Retificação

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| editalRejeitado | Int | Sim |
| editalRetificador | Int | Sim |
| uuidRetificador | String | Sim |

---

Aqui está a documentação padronizada em Markdown, limpa e pronta para uso:

---

# Cancelamento de Edital Simples

## Método e Endpoint

```markup
DELETE /v1/edital/{numeroEdital}
```

## Autenticação

Requer autenticação via JWT no header:

```markup
Authorization: Bearer {token}
```

## Path Params

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| numeroEdital | String | Sim | Número do edital |

---

## Resposta de Sucesso

Status: 200 OK

Body: vazio

```json
{}
```

> A requisição retorna 200 sem conteúdo quando o cancelamento é realizado com sucesso.

---

## Resposta de Erro

```json
{
  "codigo": 0,
  "descricao": "string",
  "campos": {}
}
```

### Campos da Resposta de Erro

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| codigo | String | Não | Código interno do erro |
| descricao | String | Sim | Descrição do erro |
| campos | Object | Não | Campos que apresentaram erro na requisição |

---

# Cancelamento de Edital de Leilão

## Método e Endpoint

```markup
DELETE /v1/edital/leilao/{numeroEdital}
```

## Autenticação

Requer autenticação via JWT no header:

```markup
Authorization: Bearer {token}
```

## Path Params

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| numeroEdital | String | Sim | Número do edital |

---

## Resposta de Sucesso

Status: 200 OK

Body: vazio

```json
{}
```

> A requisição retorna 200 sem conteúdo quando o cancelamento é realizado com sucesso.

---

## Resposta de Erro

```json
{
  "codigo": 0,
  "descricao": "string",
  "campos": {}
}
```

### Campos da Resposta de Erro

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| codigo | String | Não | Código interno do erro |
| descricao | String | Sim | Descrição do erro |
| campos | Object | Não | Campos que apresentaram erro na requisição |

---

# Atualização de Cobrança de Edital

## Método e Endpoint

```markup
PATCH /v1/edital/cobranca/:numeroDocumento
```

## Autenticação

É necessário estar autenticado com token JWT, enviado no header:

```markup
Authorization: Bearer {token}
```

---

## Query URL

| Parâmetro | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| numeroDocumento | String | Sim | Número do documento da cobrança (nosso número) que será atualizada |

---

## Exemplo de Body JSON

```json
{
  "cnsServentia": "string",
  "valorPago": 0,
  "pago": 1,
  "dataPagamento": "0000-00-00"
}
```

---

## Tabela de Campos do Body JSON

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| cnsServentia | String | Sim | Código CNS da serventia |
| valorPago | Number | Sim | Valor pago referente à cobrança |
| pago | Number | Sim | Indica se a cobrança foi paga (0 = Não, 1 = Sim) |
| dataPagamento | String | Sim | Data em que o pagamento foi realizado (formato YYYY-MM-DD) |

---

## Exemplo de Resposta JSON (Sucesso)

```json
{
  "mensagem": "string",
  "status": "200"
}
```

---

## Tabela de Campos da Resposta JSON

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| mensagem | String | Sim | Mensagem descritiva do resultado |
| status | String | Sim | Status da operação |

---
