---
name: ux-writing-saas
description: "Cria, revisa e padroniza textos de UI/UX para SaaS, sistemas e softwares: labels, botoes, menus, empty states, erros, confirmacoes, onboarding, tooltips, tabelas, formularios e fluxos de produto."
risk: safe
source: personal
date_added: "2026-02-27"
---

# Skill: UX Writing para SaaS e Sistemas

## Objetivo

Produzir textos de interface claros, consistentes e acionaveis para produtos digitais.

Usar quando a tarefa envolver:

- textos de botoes, links, menus, abas e navegacao
- formularios, labels, placeholders, hints e validacoes
- mensagens de erro, sucesso, alerta, loading e empty state
- onboarding, tooltips, modais, dialogs e confirmacoes
- tabelas, filtros, busca, dashboards e paineis administrativos
- revisao de tom, clareza, consistencia ou friccao em fluxos de software

Nao usar para:

- copy de landing page, email marketing ou anuncios
- textos institucionais extensos
- storytelling de marca
- criacao de persona de copywriter

## Principios obrigatorios

- Clareza antes de persuasao.
- Acao antes de adorno.
- Consistencia antes de criatividade.
- Contexto antes de explicacao longa.
- Texto util no momento certo, no menor tamanho possivel.
- Uma decisao por mensagem.
- Linguagem do usuario, nao jargao interno da empresa.
- Promessas somente quando forem verdadeiras e verificaveis.
- Erros devem explicar o problema e indicar proximo passo.
- CTAs devem descrever a acao ou resultado esperado.

## Fluxo

1. Identificar o produto, usuario, tela, fluxo e objetivo da interface.
2. Mapear o estado da UI: inicial, preenchido, loading, vazio, erro, sucesso ou permissao negada.
3. Definir a acao principal e as acoes secundarias.
4. Escolher o nivel de detalhe adequado ao risco da tarefa.
5. Escrever texto curto, direto e consistente com padroes existentes.
6. Revisar ambiguidade, excesso de palavras, tom inadequado e risco de erro do usuario.
7. Entregar alternativas somente quando ajudarem decisao ou teste.

## Padroes por elemento

### Botoes e CTAs

- Usar verbo de acao claro: `Salvar`, `Criar projeto`, `Enviar convite`.
- Evitar genericos quando houver contexto melhor: `Confirmar`, `Continuar`, `Ok`.
- Indicar consequencia quando a acao for destrutiva: `Excluir usuario`, `Cancelar assinatura`.
- Manter labels curtos e escaneaveis.

### Formularios

- Labels devem nomear o dado pedido, nao explicar a regra.
- Placeholders nao substituem labels.
- Hints explicam formato, restricao ou impacto quando necessario.
- Validacoes devem dizer o que corrigir.
- Evitar culpar o usuario.

### Mensagens de erro

- Dizer o que aconteceu.
- Dizer como resolver ou qual alternativa existe.
- Evitar codigos tecnicos sem traducao.
- Manter detalhes tecnicos em area expansivel, log ou suporte quando necessario.

### Empty states

- Explicar o estado atual.
- Orientar a primeira acao util.
- Nao tratar vazio esperado como erro.
- Incluir CTA quando houver uma acao clara.

### Loading e processamento

- Usar texto especifico quando a espera puder gerar ansiedade: `Importando clientes`.
- Evitar prometer tempo exato sem garantia.
- Informar quando o usuario pode sair da tela ou aguardar.

### Modais e confirmacoes

- Titulo deve declarar a decisao.
- Corpo deve explicar consequencia, nao repetir o botao.
- Acao primaria deve refletir a escolha principal.
- Acao secundaria deve permitir retorno seguro.

### Tabelas, filtros e dashboards

- Cabecalhos devem ser curtos e consistentes.
- Filtros devem usar a linguagem do dado filtrado.
- Estados sem resultado devem diferenciar "nao ha dados" de "nenhum resultado para este filtro".
- Metricas devem ter unidade, periodo e criterio claros.

### Onboarding e ajuda contextual

- Mostrar ajuda perto da decisao.
- Priorizar tarefa atual, nao explicar todo o produto.
- Remover ajuda quando a interface ja for autoexplicativa.
- Tooltips devem complementar, nao esconder informacao essencial.

## Tom e voz

- Ser direto, calmo e profissional.
- Usar linguagem simples, sem infantilizar.
- Evitar humor em erro, falha, perda de dados, cobranca ou seguranca.
- Preferir segunda pessoa ou forma impessoal conforme padrao do produto.
- Manter capitalizacao, pontuacao e termos consistentes.

## Criterios de qualidade

Antes de concluir, validar:

- o usuario entende o que aconteceu
- o usuario sabe qual acao tomar
- o texto cabe no componente provavel
- labels e CTAs sao consistentes no fluxo
- estados de erro, vazio, sucesso e loading foram considerados quando relevantes
- nao ha promessa, garantia ou dado inventado
- nao ha jargao interno sem necessidade

## Anti-padroes

Evitar:

- textos longos dentro de componentes pequenos
- CTAs genericos em acoes importantes
- mensagens como `Algo deu errado` sem proximo passo
- placeholders usados como unica instrucao
- excesso de tom promocional dentro do produto
- explicar feature em vez de orientar tarefa
- usar o mesmo texto para estados diferentes
- esconder consequencias de acoes destrutivas

## Saida esperada

Ao aplicar esta skill, entregar conforme o pedido:

- textos finais por componente ou estado
- alternativas curtas quando houver decisao de tom, risco ou teste
- observacoes objetivas sobre consistencia, friccao ou risco de interpretacao
- recomendacao de padrao reutilizavel quando o mesmo caso aparecer no produto
