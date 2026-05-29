---
tipo: referencia
area: orius
produto: imoveis
tags: [orius, imoveis, onr, ri-digital, srei]
status: revisado
fonte: "Registro_de_Im_veis (1).md"
atualizado: 2026-05-29
---

# ONR e RI Digital — visão de negócio

Infraestrutura **nacional** que conecta cartórios de Registro de Imóveis para o **Sistema de Registro Eletrônico de Imóveis (SREI)**.

## Analogia

Cada cartório = agência local. **ONR** = rede que padroniza e interliga. **RI Digital** = canal onde cliente e banco acessam serviços online.

## ONR (Operador Nacional)

**Operador Nacional do Sistema de Registro Eletrônico de Imóveis**

| Função | Detalhe |
|--------|---------|
| Coordenação | Padrões tecnológicos nacionais |
| Conectividade | Cartórios integrados entre si |
| Serviços digitais | Habilita atendimento remoto em escala nacional |

Cartórios continuam **independentes**; a ONR administra a **camada comum**.

## RI Digital (plataforma)

Portal/sistema onde **cidadãos, bancos, construtoras, advogados e órgãos** solicitam serviços sem ir ao balcão.

Serviços típicos:

- Certidões e consulta de matrícula
- Protocolo eletrônico de títulos
- Envio de escrituras para registro
- Acompanhamento de protocolos
- Pesquisa de bens
- Integração com bancos e poder público

## Exemplo prático

Banco em Goiânia financia imóvel em Manaus:

1. Assinatura digital dos documentos
2. Envio pelo **RI Digital**
3. RI de Manaus recebe, qualifica e registra
4. Retorno eletrônico ao banco

Tudo na infraestrutura coordenada pela **ONR**.

## Benefícios para o cartório

- Padronização nacional
- Menos papel e mais segurança
- Atendimento remoto
- Integração com bancos, prefeituras, CNIB
- Adequação ao **SREI**

## Documentação técnica Orius

A integração **SOAP WSOficio** (Penhora Online, AT, PO, OE, e-Protocolo, etc.) e APIs REST estão em:

- [[Orius/integracoes/registro-imoveis/onr/00-indice-onr]]
- [[Orius/integracoes/centrais/onr]]
- Plane automações: [[Meta/integracoes/plane/projetos/autonr]]

> WSOficio cobre **módulos específicos** (ofícios, penhora, acompanhamento de títulos); RI Digital/ONR cobre o **protocolo e serviços eletrônicos gerais** — são camadas complementares no ecossistema imobiliário.

## Resumo em uma frase

> A **ONR** administra a rede nacional dos cartórios de RI; o **RI Digital** é a plataforma para registros, consultas e certidões online em todo o Brasil.

## Relacionado

- [[00-indice-imoveis-negocio]]
- [[Orius/integracoes/registro-imoveis/00-indice]]
