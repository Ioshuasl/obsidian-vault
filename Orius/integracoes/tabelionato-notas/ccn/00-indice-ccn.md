---
tipo: indice
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, integracao, e-notariado, xml, api]
---

# CCN — Cadastro de pessoas (e-notariado)

> **Produto:** [[Orius/empresa/produtos/tabelionato-notas|Tabelionato de Notas]] · **Índice:** [[Orius/integracoes/tabelionato-notas/00-indice|Integrações Notas]]  
> **Central:** [[Orius/integracoes/centrais/ccn|CCN]]

Central de Cadastro de Notários — importação de cadastros de **pessoas físicas** via **XML** e API REST do e-notariado.

## Visão geral e autenticação

[[Orius/integracoes/tabelionato-notas/ccn/visao-geral-e-autenticacao]]

## API REST (importação)

| Endpoint | Documentação |
|----------|--------------|
| Fluxo completo + headers | [[Orius/integracoes/tabelionato-notas/ccn/api/fluxo-importacao]] |
| `POST /api/uploads` | [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-uploads]] |
| `POST /api/imports` | [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-post]] |
| `GET /api/imports/{id}` | [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-get]] |
| `GET /api/imports/{id}/erros` | [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-imports-erros]] |

Índice: [[Orius/integracoes/tabelionato-notas/ccn/api/00-indice-endpoints]]

## Estrutura do arquivo XML

| Tema | Documentação |
|------|--------------|
| Raiz `pessoas` | [[Orius/integracoes/tabelionato-notas/ccn/xml/estrutura-raiz]] |
| Entidade `pessoa` (`xmlPessoa`) | [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]] |
| Endereço | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-endereco]] |
| Documento de identidade | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-documento]] |
| CNH | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-carteira-habilitacao]] |
| Biometria | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-biometria]] |
| Cônjuge | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-conjuge]] |
| Ficha, cartório e anexos | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipos-anexos-complementares]] |
| Enumerações | [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/00-indice-enumeracoes]] |
| Validações XSD | [[Orius/integracoes/tabelionato-notas/ccn/xml/validacoes-xml]] |
| Exemplo completo | [[Orius/integracoes/tabelionato-notas/ccn/xml/exemplo-xml]] |

Índice: [[Orius/integracoes/tabelionato-notas/ccn/xml/00-indice-xml]]

## Automação n8n

[[Orius/integracoes/tabelionato-notas/ccn/automacao/n8n-upload-xml-gateway]] — webhook `POST /ccn/uploads` → validação local → `POST /api/uploads` e-notariado.

## Referências externas

| Recurso | Link |
|---------|------|
| Swagger (HML) | https://pessoas-hml.e-notariado.org.br/swagger/index.html |
| Coleção Postman | [CCN.postman_collection.json](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1779686959070-CCN.postman_collection.json) |
| Exemplo XML | [CCN20251123-1.xml](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777905117317-CCN20251123-1.xml) |
| Pacote de exemplo | [CcnExample (1).zip](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777905121285-CcnExample%20(1).zip) |

Voltar: [[Orius/integracoes/tabelionato-notas/00-indice]]
