---
tipo: regras-validacao
area: orius
produto: notas
orgao: receita-federal
ficha: partes
tags: [orius, notas, doi, validacao]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-alienantes-adquirentes]]

# Validação — Ficha Alienantes e Adquirentes

Aplica-se igualmente aos arrays `alienantes` e `adquirentes`.

| Campo | Mensagem | Impeditivo? | Condição |
|-------|----------|-------------|----------|
| CPF/CNPJ | Deve estar preenchido quando identificado | Sim | indicadorNiIdentificado ≠ false |
| CPF/CNPJ | Número informado não é válido | Sim | DV inválido |
| CPF/CNPJ | Número já informado no conjunto | Sim | Duplicata no mesmo grupo |
| CPF/CNPJ | Informado em duplicidade para partes distintas | **Aviso** | Mesmo NI em alienante e adquirente |
| Motivo da Não Identificação | Obrigatório quando CPF/CNPJ não identificado | Sim | indicadorNiIdentificado = false |
| % de Participação | Obrigatório informar | Sim | Quando não marcado "não consta" |
| % de Participação | Valor inválido | Sim | Formato fora do esperado |
| % de Participação | Soma não pode ser menor que 100% | Sim | Soma < 100% sem "não consta" |
| % de Participação | Soma menor que 100% (com "não consta") | Aviso | Indicadores "não consta" marcados |
| Representante/Procurador? | Obrigatório informar Sim/Não | Sim | Campo não informado |
| CPF(s) representante(s) | Não informado(s) | Sim | indicadorRepresentante = true |
| CPF representante | CPF inválido | Sim | DV inválido |
| Possui Cônjuge? | Obrigatório informar | Sim | Campo não informado |
| Tem CPF? (cônjuge) | Obrigatório quando possui cônjuge | Sim | indicadorConjuge = true |
| CPF do Cônjuge | Obrigatório quando cônjuge tem CPF | Sim | Ambos indicadores true |
| É estrangeiro? | Obrigatório informar | Sim | Campo não informado |
| É espólio? | Obrigatório informar | Sim | Campo não informado |

## Participação — regra de soma

- Soma das participações de **alienantes**: ≥ 99% e ≤ 100% (manual: não inferior a 99% nem superior a 100%).
- Idem para **adquirentes**, calculado separadamente.
- Com `indicadorNaoConstaParticipacaoOperacao` = true, pode gerar **aviso** em vez de erro impeditivo.

Voltar: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
