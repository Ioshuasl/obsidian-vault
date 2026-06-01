---
tipo: integracao
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, e-notariado, api-key, ambiente]
status: revisado
fonte: migracao-desktop
---

> **Índice CCN:** [[Orius/integracoes/tabelionato-notas/ccn/00-indice-ccn]] · **Central:** [[Orius/integracoes/centrais/ccn]]

# CCN — visão geral e autenticação

A API de identificação de pessoas está documentada no [Swagger (homologação)](https://pessoas-hml.e-notariado.org.br/swagger/index.html). A importação de cadastros em lote está na seção **Imports**.

## Ambientes

As URLs de homologação e produção são **diferentes** — a aplicação deve tratar cada ambiente explicitamente.

| Ambiente | Base URL |
|----------|----------|
| Homologação | `https://pessoas-hml.e-notariado.org.br` |
| Produção | `https://pessoas.e-notariado.org.br` |

**Chaves e ids de homologação (Orius):** [[Orius/integracoes/tabelionato-notas/ambiente-homologacao-api#CCN — Cadastro de pessoas]]

## Geração da chave de API

Se for o caso de importação manual do XML no CCN, consulte o procedimento no portal CNB Online.

1. Acesse o módulo **CCN** no menu CNB Online.

![Tela CCN no menu](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777904811317-image.png)

2. Efetue o aceite do termo de adesão antes de gerar as chaves de integração; caso contrário, o sistema pode exibir erro.

3. Clique no nome do usuário e selecione **Admin**.

![Menu Admin](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777904831232-image.png)

4. O sistema exibirá a tela de criação de chave de API.

**Ações disponíveis:**

| Ação | Uso |
|------|-----|
| **Importar** | Importar cadastros de pessoas do sistema do cartório para o CCN |
| **Exportar** | Consultar CPFs diretamente do sistema do cartório |

![Tela de ações Importar/Exportar](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777904879756-image.png)

5. Para a chave de importação: selecione **Importar** → **Criar Chave**.

![Criar chave — passo 1](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777904980777-image.png)

![Criar chave — passo 2](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777905000569-image.png)

6. Copie a **chave de acesso** e o **id do cartório** e configure nos parâmetros do sistema.

## Headers de integração

| Header | Quando | Formato |
|--------|--------|---------|
| `X-Api-Key` | Upload e criação da importação | `your-app\|(ID-DO-CARTORIO)` |
| `X-Subscription` | Criação da importação | UUID do cartório (subscription) |

Detalhes por etapa: [[Orius/integracoes/tabelionato-notas/ccn/api/fluxo-importacao]]

## Próximo passo

Fluxo da API: [[Orius/integracoes/tabelionato-notas/ccn/api/fluxo-importacao]] · Estrutura XML: [[Orius/integracoes/tabelionato-notas/ccn/xml/00-indice-xml]]
