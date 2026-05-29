---
tipo: integracao
area: orius
central: cenprot
produto: protesto
status: revisado
fonte: "Protesto_de_T_tulos (1).md"
atualizado: 2026-05-29
---

# CENPROT — Central Nacional de Serviços Eletrônicos dos Tabeliães de Protesto

**Hub nacional** que integra os cartórios de protesto do Brasil para serviços eletrônicos padronizados.

## Em uma frase

Infraestrutura digital para **consultas**, **envio de títulos**, **certidões**, **instrumentos de protesto** e **cancelamentos** de forma centralizada — sem o cidadão ou a empresa precisarem localizar cartório por cartório.

## Antes × depois da centralização

| Sem CENPROT | Com CENPROT |
|-------------|-------------|
| Informações dispersas por cartório | Camada nacional de integração |
| Consulta manual em cada comarca | Consulta pela central (ex.: por CPF/CNPJ) |
| Procedimentos presenciais repetidos | Envio e cancelamento eletrônicos padronizados |

```text
Empresa → CENPROT → Cartório competente
Pessoa  → Consulta na central → identifica tabelionato e status
```

## Serviços típicos

- Troca eletrônica de informações entre cartórios
- Envio de títulos para protesto pela internet
- Consulta de existência de protestos
- Emissão de **certidões** e instrumentos digitais
- **Cancelamento** eletrônico de protestos (quando aplicável)

## Relevância para cartórios

- Padronização de serviços eletrônicos
- Atendimento online
- Comunicação entre tabelionatos e estados
- Redução de procedimentos manuais
- Adesão **obrigatória** dos cartórios de protesto (determinação CNJ)

## Exemplo prático

Morador de Goiânia consulta se há protesto em seu CPF: a central informa **se existe** protesto e **em qual cartório**; depois pode solicitar certidão ou tratar cancelamento conforme o caso — sem visitar vários tabelionatos.

## No sistema Orius

Tabelas: `P_REG_CENPROT`, `P_SEQUENCIA_CENPROT` — campos em `P_TITULO` (ex.: situação/chave CENPROT). Ver [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]].

## Domínio de negócio

- [[Orius/empresa/produtos/protesto/conceito-protesto-de-titulos]]
- [[Orius/empresa/produtos/protesto/fluxo-operacional-protesto]]

Diferença CRA × CENPROT: [[Orius/integracoes/centrais/cra]] (lote apresentante ↔ cartório) vs CENPROT (ecossistema nacional de serviços aos cartórios e usuários).

## Produto

[[Orius/empresa/produtos/tabelionato-protesto]]

## Referências externas

- [Portal CNJ — normas e centrais](https://www.cnj.jus.br/)
- Material de estudo interno: `Protesto_de_T_tulos (1).md`
