---
tipo: integracao
area: orius
produto: notas
central: censec
tags: [orius, notas, censec, api, quinzena, json]
status: revisado
fonte: migracao-desktop
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-notas|Tabelionato de Notas]] · **Índice:** [[Orius/integracoes/tabelionato-notas/00-indice|Integrações Notas]]
> **Central:** [[Orius/integracoes/centrais/censec|CENSEC]] · **Módulos:** [[Orius/integracoes/tabelionato-notas/censec/00-indice-censec|índice CENSEC]]

---

# CENSEC — Visão geral e transmissão API

## Documentação complementar (vault)

| Tema | Nota |
|------|------|
| Regras de validação | [[Orius/integracoes/tabelionato-notas/censec/regras-validacao/00-indice-regras-validacao]] |
| Tabelas de domínio | [[Orius/integracoes/tabelionato-notas/censec/tabelas-dominio/00-indice-tabelas-dominio]] |
| Automação n8n | [[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway]] |
| Postman / exemplos | [[Orius/integracoes/tabelionato-notas/censec/artefatos/00-indice-artefatos]] |

Pasta de trabalho local: `C:\Users\kenio\soap-ui test\censec`

## Coleção postman

[Swagger UI](https://censec.org.br/swagger/index.html)

[Arquivo: CENSEC API.postman_collection.json](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1779687210530-CENSEC%20API.postman_collection.json)

# O que é censec

Imagine que cada cartório de notas do Brasil (aqueles onde você vai para registrar uma procuração, fazer uma escritura de um imóvel ou reconhecer uma união estável) fosse uma ilha isolada. Se você precisasse descobrir se uma pessoa que faleceu deixou um testamento, teria que ligar ou ir pessoalmente a milhares de cartórios pelo país inteiro para procurar.

A CENSEC (Central Eletrônica Notarial de Serviços Compartilhados) nasceu justamente para resolver esse problema. Ela funciona como uma grande ponte digital que interliga todos os cartórios de notas do Brasil em um único sistema seguro.

Para entender de forma simples, pense nela através de três pontos principais:

### 1. O "Google" dos Cartórios (Mas restrito e seguro)

A CENSEC não guarda os documentos completos (como a foto da escritura ou o texto exato do seu contrato), mas ela guarda o índice (o rastro) deles.

Se você faz uma escritura de compra e venda em Goiânia, o cartório avisa a CENSEC: "Olha, fulano comprou um imóvel de beltrano na data X". Se anos depois a Justiça ou um comprador precisar checar essa informação, basta consultar essa central para saber exatamente em qual cartório do país o documento físico original está guardado.

### 2. O que dá para encontrar lá dentro?

A plataforma é dividida em módulos especializados, mas para o cidadão comum, as funções mais importantes são:

- Buscar Testamentos: É o lugar oficial para descobrir se alguém deixou um testamento antes de morrer (essencial para dar andamento a inventários).

- Achar Procurações e Escrituras: Permite localizar onde foram feitas procurações públicas, divórcios, inventários extrajudiciais ou compras de imóveis.

### 3. Quem pode usar?

- O Cidadão Comum: Pode acessar o sistema (geralmente pagando uma taxa) para buscar se existe algum testamento em nome de um parente falecido, por exemplo.

- Autoridades (Juízes, Oficiais de Justiça, Fiscais): Têm acesso a uma área restrita para investigar bens, fraudes ou heranças, ajudando a combater crimes e agilizar processos judiciais.

---

> Em resumo: A CENSEC é o "cérebro eletrônico" que unifica os dados dos cartórios de notas do Brasil. Ela garante que um documento feito em qualquer canto do país possa ser localizado em poucos cliques, trazendo segurança jurídica e transparência para a sociedade.

### Obtenção da api-key

Para executar a API de transmissão dos atos à CENSEC, cada cartório deverá obter a chave de integração (x-api-key)

![image (14).png](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777898348779-image%20(14).png)

Aparecerá a denominação do cartório. Clique em Criar

![image.png](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777901435154-image.png)

Copie a chave de acesso e configure nos parametros do sistema

![image.png](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777901487976-image.png)

### Endpoint base

- Homologação:

  - https://hml.censec.org.br

- Produção:

  - https://censec.org.br

**Chaves, id do cartório e CNS de homologação:** [[Orius/integracoes/tabelionato-notas/ambiente-homologacao-api#CENSEC — transmissão JSON]]

### Transmissão do payload JSON

| | |
|---|---|
| **Método** | `POST` |
| **Path** | `/api/cargas/upload-json` |
| **Header** | `X-Api-Key` (chave do cartório) |
| **Body** | JSON com `cns`, `quinzena` e blocos por central |

Fluxo recomendado com validação prévia: [[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway]] (webhook n8n → mesma API).

### Exemplo do payload json completo

```json
{
    "Cns": 991018,
    "quinzena": {
        "anoReferencia": 2024,
        "mesReferencia": 7,
        "quinzenaReferencia": 1
    },
    "AtosCep": [
        {
            "tipoAtoCep": "Escritura",
            "naturezaEscritura": "CompraEVenda",
			"mne":"991018202407120000040147",
            "data": "2024-07-12",
            "livro": "22",
			"livroComplemento": "A",
            "folha": "109",
            "folhaComplemento": "B",
            "valor": 1250000.00,
			"existeBemEDireito": true,
			"dataContrato":"2024-06-15",
            "desconhecido": false,
			"BensEDireitos": [
                {
                    "descricaoPormenorizada": "Imóvel localizado na rua XXXXX",
					"valorBemEDireito":"1200000",
					"valorFiscal":"950000",
					"formaPagamento":"5",
					"prazoPagamento":"2"
                },
				{
                    "descricaoPormenorizada": "Garagem localizada na rua XXXXX",
					"valorBemEDireito":"50000",
					"valorFiscal":"45000",
					"formaPagamento":"2",
					"prazoPagamento":"1"
                }
            ],
            "partes": [
                {
                    "nome": "Lavínia Giovanna Ramos",
					"tipoDocumento": "Cpf",
                    "numeroDocumento": "69008897865",
					"identidade":"155555551",
					"orgaoEmissor":"SSP-SC",
					"qualidade": "Outorgante"
                },
				{
                    "nome": "Joana Oliveira",
					"tipoDocumento": "Cpf",
                    "numeroDocumento": "40228478162",
					"identidade":"122222221",
					"orgaoEmissor":"SSP-SP",
					"qualidade": "Outorgante"
                }
            ]
        },
        {
            "tipoAtoCep": "Escritura",
            "naturezaEscritura": "Rerratificacao",
            "data": "2024-07-05",
            "livro": "22",
			"livroComplemento": "cmpl",
            "folha": "125",
            "folhaComplemento": "cmpf",
            "valor": 4000,
            "desconhecido": false,
            "partes": [
                {
                    "nome": "Lavínia Giovanna Ramos",
                    "qualidade": "Outorgante",
                    "numeroDocumento": "69008897865",
                    "tipoDocumento": "Cpf"
                }
            ],
            "referentes": [
                {
                    "cns": 991000,
					"livro": 1,
                    "livroComplemento": null,
                    "folha": 1,
                    "folhaComplemento": null
                }
            ],
            "existeBemEDireito": false
        },
		{
            "TipoAtoCep": "RevogacaoDeProcuracao",
            "data": "2024-07-08",
            "livro": "22",
            "folha": "110",
            "dataValidade": "2024-12-30",
            "partes": [
                {
                    "nome": "Colégio Notarial do Brasil",
					"tipoDocumento": "Cnpj",
                    "numeroDocumento": "05334890000191",
					"qualidade": "Outorgante"
                },
                {
                    "nome": "Joana Oliveira",
					"tipoDocumento": "Cpf",
                    "numeroDocumento": "40228478162",
					"identidade":"122222221",
					"orgaoEmissor":"SSP-SP",
					"qualidade": "Outorgado"
                }
            ],
            "referentes": [
                {
                    "tipoAtoCep": "Procuracao",
					"cns": 991000,
					"livro": 1,
                    "livroComplemento": null,
                    "folha": 1,
                    "folhaComplemento": null
                }
            ],
            "existeBemEDireito": true
        },
        {
            "TipoAtoCep": "AtaNotarial",
            "data": "2024-07-08",
            "livro": "22",
			"livroComplemento": null,
            "folha": "111",
            "folhaComplemento": null,
            "valor": 870000,
            "partes": [
                {
                    "Nome": "Lavínia Giovanna Ramos",
                    "Qualidade": "Interveniente",
                    "identidade": "155555551",
                    "orgaoEmissor": "SSP/SC",
                    "numeroDocumento": "69008897865",
                    "tipoDocumento": "Cpf"
                },
                {
                    "nome": "Joana Oliveira",
                    "qualidade": "Outorgado",
                    "identidade": "12.222.222-1",
                    "orgaoEmissor": "SSP-SP",
                    "numeroDocumento": "40228478162",
                    "tipoDocumento": "Cpf"
                },
                {
                    "nome": "Fernando outorgante",
                    "qualidade": "Outorgante",
                    "identidade": "25.111.373-5",
                    "orgaoEmissor": "ssp/df",
                    "numeroDocumento": "03888261007",
                    "tipoDocumento": "Cpf"
                },
                {
                    "nome": "Fernando usufruario",
                    "qualidade": "Usufrutuario",
                    "identidade": "43.770.762-3",
                    "orgaoEmissor": "ssp",
                    "numeroDocumento": "63335673026",
                    "tipoDocumento": "Cpf"
                }
            ],
            "referentes": [],
            "existeBemEDireito": true,
            "BensEDireitos": [
                {
                    "descricaoPormenorizada": "primeiro bem",
                    "valorBemEDireito": 5000,
                    "valorFiscal": 12.3
                },
                {
                    "descricaoPormenorizada": "segundo bem",
                    "valorBemEDireito": 412.3,
                    "valorFiscal": 321
                }
            ]
        },
        {
            "tipoAtoCep": "AtaNotarialDeUsucapiao",
            "naturezaAtaNotarialDeUsucapiao": "EspecialFamiliar",
            "data": "2024-07-09",
            "livro": "22",
			"livroComplemento": "X",
            "folha": "111",
            "folhaComplemento": null,
            "valor": 312.32,
            "desconhecido": true,
            "partes": [
                {
                    "nome": "Lavínia Giovanna Ramos",
                    "qualidade": "Outorgado",
                    "numeroDocumento": "69008897865",
                    "tipoDocumento": "Cpf"
                }
            ],
            "referentes": [],
            "existeBemEDireito": true,
            "BensEDireitos": [
                {
                    "descricaoPormenorizada": "bem da ata notarial de usucapiao",
                    "valorBemEDireito": 3213.45,
                    "valorFiscal": 433.42
                }
            ]
        }
    ],
    "AtosCesdi": [
        {
            "tipoAtoCesdi": "Separacao",
            "data": "2024-07-09",
            "livro": "22",
			"livroComplemento": null,
            "folha": "112",
            "folhaComplemento": null,
            "dataCasamento": "2010-10-15",
            "regimeBens": "SeparacaoTotal",
            "quantidadeFilhosMaiores": 2,
            "quantidadeFilhosMenores": 0,
            "responsavel": "AmbosConjuges",
            "partes": [
                {
                    "nome": "Evelyn Giovana Silva",
                    "conjugeTipo": "Conjuge2",
                    "qualidade": "Separando",
                    "dataNascimento": "2001-10-15",
                    "LocalNascimentoPais": "BRASIL",
                    "localNascimentoUf": "DF",
                    "LocalResidenciaPais": "BRASIL",
                    "LocalResidenciaMunicipio": "BRASÍLIA",
                    "localResidenciaUf": "DF",
                    "sexo": "F",
                    "documentos": [
                        {
                            "documentoTipo": "Cpf",
                            "prioridade": "Primario",
                            "documento": "017.302.932-98"
                        }
                    ]
                },
                {
                    "nome": "Fernando Adventista",
                    "qualidade": "Advogado",
                    "documentos": [
                        {
                            "documentoTipo": "Cpf",
                            "prioridade": "Primario",
                            "documento": "05519922128"
                        }
                    ]
                },
                {
                    "nome": "Renato Eduardo Santos",
                    "conjugeTipo": "Conjuge1",
                    "qualidade": "Separando",
                    "dataNascimento": "2000-10-15",
                    "LocalNascimentoPais": "brasil",
                    "localNascimentoUf": "DF",
                    "LocalResidenciaPais": "brasil",
                    "LocalResidenciaMunicipio": "BRASÍLIA",
                    "localResidenciaUf": "DF",
                    "sexo": "M",
                    "documentos": [
                        {
                            "documentoTipo": "Cpf",
                            "prioridade": "Primario",
                            "documento": "663.589.580-97"
                        }
                    ]
                }
            ]
        },
        {
            "tipoAtoCesdi": "DivorcioDireto",
            "data": "2024-07-09",
            "livro": "22",
            "folha": "113",
            "livroComplemento": "teste",
            "folhaComplemento": "",
            "dataCasamento": "2004-10-15",
            "regimeBens": "SeparacaoTotal",
            "quantidadeFilhosMaiores": 2,
            "quantidadeFilhosMenores": 1,
            "responsavel": "AmbosConjuges",
            "partes": [
                {
                    "nome": "Fernando Adventista",
                    "qualidade": "Advogado",
                    "documentos": [
                        {
                            "documentoTipo": "Cpf",
                            "prioridade": "Primario",
                            "documento": "017.302.932-98"
                        },
                        {
                            "documentoTipo": "Rg",
                            "prioridade": "Secundario",
                            "documento": "39.908.977-9"
                        }
                    ]
                },
                {
                    "nome": "Giovanni Bernardo Dias API",
                    "conjugeTipo": "Conjuge2",
                    "qualidade": "Divorciando",
                    "dataNascimento": "2000-10-15T14:00:00.000Z",
                    "LocalNascimentoPais": "brasil",
                    "localNascimentoUf": "DF",
                    "LocalResidenciaPais": "brasil",
                    "LocalResidenciaMunicipio": "BRASÍLIA",
                    "localResidenciaUf": "DF",
                    "sexo": "M",
                    "documentos": [
                        {
                            "documentoTipo": "Cpf",
                            "prioridade": "Primario",
                            "documento": "318.731.487-20"
                        },
                        {
                            "documentoTipo": "Outros",
                            "prioridade": "Secundario",
                            "documento": "32.098.807-7",
                            "uf": null
                        }
                    ]
                },
                {
                    "nome": "Priscila Sandra da Mota",
                    "conjugeTipo": "Conjuge1",
                    "qualidade": "Divorciando",
                    "dataNascimento": "2000-10-15T14:00:00.000Z",
                    "LocalNascimentoPais": "BRASIL",
                    "localNascimentoUf": "DF",
                    "LocalResidenciaPais": "BRASIL",
                    "LocalResidenciaMunicipio": "BRASÍLIA",
                    "localResidenciaUf": "DF",
                    "sexo": "F",
                    "documentos": [
                        {
                            "documentoTipo": "Cpf",
                            "prioridade": "Primario",
                            "documento": "108.774.348-67"
                        },
                        {
                            "documentoTipo": "Rg",
                            "prioridade": "Secundario",
                            "documento": "41.395.133-9",
                            "uf": null
                        }
                    ]
                }
            ]
        }
    ],
    "Testamentos": [
        {
            "tipoTestamento": "Testamento",
            "cpf": "63138145922",
            "nome": "Lavínia Giovanna Ramos",
            "dataNascimento": "2001-02-15",
            "nomeMae": "Cristiane Rosa Marli da Paz",
            "nomePai": "Heitor Luís Joaquim Teixeira",
            "dataTestamento": "2024-07-07",
            "livro": "22",
            "folha": "114",
            "tipoDocumento": "Rg",
            "documento": "41.823.609-4",
            "observacao": "teste"
        },
        {
            "tipoTestamento": "Revogacao",
            "cpf": "63138145922",
            "nome": "Lavínia Giovanna Ramos",
            "dataNascimento": "2001-02-15",
            "nomeMae": "Sônia Fátima Brenda Santos",
            "nomePai": "Jorge Edson Enzo da Cruz",
            "dataTestamento": "2024-07-07",
            "livro": "22",
            "livroComplemento": null,
            "folha": "115",
            "folhaComplemento": null,
            "tipoDocumento": "Rg",
            "documento": "41.823.609-4",
            "documentoComplemento": null,
            "observacao": "teste",
            "revogacaoCartorioCns": 991000,
            "revogacaoUf": "DF",
            "revogacaoDataTestamento": "2000-02-15",
            "revogacaoLivro": "5",
            "revogacaoFolha": "10"
        }
    ]
}
```

Regras importantes sobre o cabeçalho:

- Cns: Refere-se ao Código Nacional de Serventias (CNS) do cartório que está transmitindo os atos.

- quinzena: Bloco que identifica a quinzena a que se referem as lavraturas.

- Regra Específica para CTP: Como a Central de Comunicação de Transações às Prefeituras (CTP) possui periodicidade mensal, você deve informar o campo quinzenaReferencia com o valor 1 ou  2

#### Resultado do Processamento

Ao enviar a requisição via API, o seu sistema receberá como resposta o retorno da execução individualizado para cada Central (CEP, CESDI, RCTO e CTP).

Como interpretar o retorno:

- Se o status retornado for "AguardandoValidacao", isso significa apenas que o arquivo foi importado com sucesso pela CENSEC.

- No entanto, o arquivo ainda passará por outras validações assíncronas do sistema.

- Para confirmar se o arquivo está realmente apto para o fechamento da quinzena, é necessário consultar o resultado final diretamente na tela do sistema da CENSEC.

Exemplo de Payload de Retorno (Resultado do Processamento):

```json
"cepResult": {
  "exception": null,
  "carga": {
    "id": "376787b3-1c7e-4c02-b79d-332d2e26b63f",
    "status": "AguardandoValidacao",
    "referencia": "C133825",
    "dataInclusao": "2024-07-17T19:21:33.7438459+00:00",
    "tipo": "ApiJson",
    "lote": {
      "dataFechamento": null,
      "encarregadoFechamentoId": null,
      "cartorioId": "ce268e6b-41f4-41aa-b943-08e37e475bbc"
    }
  }
}
```

### Coleção Postman

[Arquivo: CENSEC json (2).postman_collection](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777898425029-CENSEC%20json%20(2).postman_collection)

## Swagger

[Swagger UI](https://censec.org.br/swagger/index.html)

### Documentação das cargas do censec

[[Orius/integracoes/tabelionato-notas/censec/cep|CEP]]

[[Orius/integracoes/tabelionato-notas/censec/cesdi|CESDI]]

[[Orius/integracoes/tabelionato-notas/censec/rcto|RCTO]]

[[Orius/integracoes/tabelionato-notas/censec/ctp|CTP]]
