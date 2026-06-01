---
tipo: regras-validacao
area: orius
produto: notas
orgao: receita-federal
ficha: dados-iniciais
tags: [orius, notas, doi, validacao]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-iniciais]]

# Validação — Ficha Dados Iniciais

| Campo | Mensagem | Condição |
|-------|----------|----------|
| Tipo do Serviço | Obrigatório informar Tipo de Serviço | Quando não informado |
| Tipo do Ato | Obrigatório informar Tipo do Ato | Quando não informado |
| Data do Ato | Obrigatório informar Data do Ato | Quando não informada |
| Data do Ato | Data do Ato informada é maior que a data atual do sistema | Data futura |
| Folha | Obrigatório informar a Folha | Quando Folha/Ficha não informada |
| Tipo do Livro | Tipo do Livro deve estar preenchido quando Tipo de Serviço for Registro de Imóveis | RI sem tipoLivro |
| Natureza do Título | Natureza do Título deve estar preenchido quando Tipo de Serviço for Registro de Imóveis | RI sem naturezaTitulo |
| Consta DOI anterior? | Deve estar preenchido quando Tipo de Serviço for Registro de Imóveis | RI sem existeDoiAnterior |
| Número do livro | Obrigatório informar Número do livro | RTD sem numeroLivro |
| Matrícula | Matrícula deve estar preenchido quando RI, Lv.2-Matrícula e CNM não preenchido | Condição matrícula/CNM |
| Código Nacional de Matrícula | CNM deve estar preenchido quando RI, Lv.2-Matrícula e Matrícula não preenchida | Condição matrícula/CNM |
| Código Nacional de Matrícula | CNM com dígito verificador inválido | DV Mod 97 inválido |
| Averbação/Registro | Número de Registro/Averbação obrigatório quando RI e Lv.2-Matrícula | Sem numeroRegistroAverbacao |
| Transcrição | Transcrição obrigatória quando RI e Tipo do Livro = Transcrição | Sem transcricao |
| MNE | MNE com dígito verificador inválido | DV Mod 97 inválido |
| Motivo do Cancelamento | Obrigatório informar Motivo do Cancelamento | Declaração canceladora (não importável) |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
