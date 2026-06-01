---
tipo: indice
area: orius
produto: imoveis
tags: [orius, imoveis, integracao]
---

# Integrações — Registro de Imóveis

**Domínio de negócio (o que é RI):** [[Orius/empresa/produtos/imoveis/00-indice-imoveis-negocio]] · Produto: [[Orius/empresa/produtos/registro-imoveis]]

Documentação técnica migrada de `Desktop/integracoes/registro-imoveis`.

## Mapa

```mermaid
flowchart TB
  subgraph produto [Produto]
    RI[[registro-imoveis]]
  end
  subgraph onr [ONR]
    CNIB[CNIB indisponibilidade]
    PROT[Protocolo eletrônico]
    MAPA[Mapa estatísticas DOI]
    POL[Mapa API polígonos]
  end
  subgraph rib [RIB - registrodeimoveis.org.br]
    COB[Cobrança]
    ED[Edital eletrônico]
  end
  RI --> CNIB
  RI --> PROT
  RI --> MAPA
  RI --> POL
  RI --> COB
  RI --> ED
  CNIB --> ONRhub[[ONR]]
  PROT --> ONRhub
  MAPA --> ONRhub
  POL --> ONRhub
  COB -. mesmo swagger .-> ED
```

## ONR — WebService SOAP (WSOficio)

**Hub:** [[Orius/integracoes/registro-imoveis/onr/00-indice-onr|ONR — índice completo]]

| Doc | Link |
|-----|------|
| Visão geral + Hash | [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/visao-geral]] |
| 81 métodos SOAP | [[Orius/integracoes/registro-imoveis/onr/webservice-wsoficio/00-indice-wsoficio]] |

Código/scripts: `C:\Users\kenio\soap-ui test`

## Por integração (REST)

| Integração | Palavras-chave | Documentação | Central / portal |
|------------|----------------|--------------|------------------|
| **CNIB** | CNIB, indisponibilidade, IA, IE | [[Orius/integracoes/registro-imoveis/cnib]] | [[Orius/integracoes/centrais/cnib]] |
| **Protocolo ONR** | protocolo, exame e cálculo, registro eletrônico | [[Orius/integracoes/registro-imoveis/onr-protocolo]] | [[Orius/integracoes/centrais/onr]] |
| **Mapa / estatísticas ONR** | mapa ONR, estatísticas, extrato, DOI, DOIWEB, hash | [[Orius/integracoes/registro-imoveis/onr-mapa-estatisticas]] · [[Orius/integracoes/registro-imoveis/onr-mapa-estatisticas-guia|guia]] | [[Orius/integracoes/centrais/onr]] |
| **Mapa / API polígonos (SIG-RI)** | polígono, shapefile, SIG-RI, SIGEF, IERI-e, georreferenciamento | [[Orius/integracoes/registro-imoveis/onr-mapa-api-poligonos]] | [[Orius/integracoes/centrais/onr]] |
| **Cobrança RIB** | cobrança, pagamento, hash | [[Orius/integracoes/registro-imoveis/rib-cobranca]] | registrodeimoveis.org.br |
| **Edital RIB** | edital, diário registral, JWT | [[Orius/integracoes/registro-imoveis/rib-edital]] | api.registrodeimoveis.org.br |

## URLs de referência

| Serviço | Base / Swagger |
|---------|----------------|
| CNIB 2.0 | https://serventia-api.onr.org.br/swagger |
| Mapa ONR — estatísticas | https://mapa.onr.org.br/api-estatisticas |
| Mapa ONR — polígonos | https://www.mapa.onr.org.br/sistemas/api/v1/poligonos/ |
| RIB (cobrança + edital) | https://www.registrodeimoveis.org.br/swagger |

## Relacionado

- Produto: [[Orius/empresa/produtos/registro-imoveis]]
- Palavras-chave: [[Orius/integracoes/palavras-chave-orius]]
- Notas (compartilha ONR): [[Orius/integracoes/tabelionato-notas/00-indice]]

Voltar: [[Orius/integracoes/00-indice-integracoes]] · [[Orius/00-indice]]
