---
tipo: integracao
area: orius
produto: notas
central: tabinf
tags: [orius, notas, tabinf, ibge, visao-geral]
status: revisado
---

# TABINF IBGE — visao geral e quando usar

O TABINF e o layout de envio do IBGE para dados de **Divorcios Extrajudiciais** de tabelionatos informatizados, sem digitacao manual no processo de apuracao.

## Quando usar

Use esta integracao quando:
- o cartorio de Notas possui sistema proprio;
- precisa prestar informacoes trimestrais ao IBGE;
- deve gerar arquivos de largura fixa e entregar no padrao oficial.

## Fluxo de envio

1. Gerar `TABINF07.TXT` (detalhe dos divorcios).
2. Gerar `TABINF12.TXT` (resumo/recibo).
3. Criar `CONTROLE.SIS` vazio.
4. Compactar em `TABINF.ZIP`.
5. Encaminhar para a unidade do IBGE (homologacao/processamento).

## Referencias

- Nota principal: [[Orius/integracoes/tabelionato-notas/tabinf-ibge]]
- Regras: [[Orius/integracoes/tabelionato-notas/tabinf/regras-validacao]]
