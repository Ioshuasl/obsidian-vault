---
name: react-avancado
description: "Desenvolvimento, revisao e refatoracao avancada de aplicacoes React com foco em componentes, hooks, estado, composicao, performance, acessibilidade, Server Components, testes, patterns e boas praticas modernas."
category: granular-workflow-bundle
risk: safe
source: personal
date_added: "2026-03-27"
---

# Skill: React Avancado

## Objetivo

Orientar tarefas React para produzir interfaces previsiveis, performaticas, acessiveis e faceis de manter.

Usar quando a tarefa envolver:

- criar, revisar ou refatorar componentes React
- organizar estado local, global, derivado, remoto ou de formulario
- revisar hooks, effects, contextos, providers e custom hooks
- aplicar patterns como composition, compound components, controlled/uncontrolled e headless UI
- aplicar arquitetura Container/Presentational, Controller Hooks e Service/Data Layer
- diagnosticar renders excessivos, bundles grandes, waterfalls ou lentidao de UI
- adaptar codigo a React moderno, Server Components ou frameworks baseados em React
- melhorar testabilidade, acessibilidade e arquitetura de frontend

Nao usar para:

- UI sem React, exceto pontos de integracao
- ajustes visuais puramente cosmeticos sem impacto estrutural
- copywriting, design visual ou branding sem mudanca tecnica
- criacao de persona de desenvolvedor React

## Principios obrigatorios

- Simplicidade antes de abstracao.
- Componentes com uma responsabilidade principal.
- Composicao antes de heranca.
- Props explicitas, pequenas e semanticamente claras.
- Estado minimo: nao duplicar o que pode ser derivado.
- Effects somente para sincronizar com sistemas externos.
- Memoizacao somente quando houver custo real, contrato de referencia ou medicao.
- Acessibilidade como parte da implementacao, nao ajuste posterior.
- Patterns devem resolver problema concreto, nao demonstrar sofisticacao.
- Testes devem validar comportamento observavel e contratos, nao detalhes internos.
- Respeitar padroes do projeto antes de introduzir nova arquitetura.

## Fluxo

1. Identificar objetivo da tela, fluxo ou componente.
2. Mapear dados, eventos, estados de UI e fronteiras externas.
3. Definir onde cada estado deve viver: local, derivado, compartilhado, server state ou URL.
4. Escolher o pattern mais simples que reduza acoplamento real.
5. Definir a camada correta para UI, orquestracao, logica de fluxo, servico e acesso a dados.
6. Implementar componentes pequenos, hooks coesos e JSX legivel.
7. Tratar loading, empty state, erro, permissao, retry e estados disabled quando relevantes.
8. Validar acessibilidade, comportamento, performance percebida e testes afetados.
9. Explicitar riscos quando nao for possivel medir ou testar.

## Conceitos essenciais

### Modelo mental

- Render deve ser puro: calcular UI a partir de props, state e contexto.
- Commit aplica mudancas no DOM; effects rodam depois para sincronizar com mundo externo.
- State representa memoria da UI; refs guardam valores mutaveis que nao exigem render.
- Props fluem de cima para baixo; eventos comunicam intencao de baixo para cima.
- Keys definem identidade em listas e afetam preservacao de estado.

### Estado

- Usar `useState` para estado local simples.
- Usar `useReducer` quando transicoes forem complexas ou baseadas em eventos.
- Usar Context para valores compartilhados de baixa frequencia ou dependencias de arvore.
- Usar bibliotecas de server state para cache, revalidacao e sincronizacao remota quando o projeto ja adotar.
- Manter estado de URL na rota/query string quando ele precisar ser compartilhavel, navegavel ou restauravel.
- Derivar dados no render quando possivel, em vez de armazenar copia.

### Effects

- Usar `useEffect` para sincronizar com API externa, subscription, timer, DOM externo ou biblioteca nao React.
- Remover effects usados apenas para calcular estado derivado.
- Declarar dependencias corretamente e evitar desabilitar lint sem justificativa.
- Implementar cleanup quando houver subscription, timer, request cancelavel ou recurso externo.
- Separar effects por responsabilidade.
- Evitar chains de effects para controlar fluxo de negocio interno.

### Performance

- Corrigir modelagem de estado e limites de render antes de memoizar.
- Usar `memo`, `useMemo` e `useCallback` apenas quando houver componente caro, dependencia referencial ou medicao.
- Considerar React Compiler quando o projeto suportar, reduzindo memoizacao manual desnecessaria.
- Usar code splitting, lazy loading e Suspense quando reduzirem custo inicial.
- Virtualizar listas grandes.
- Evitar recriar objetos/funcoes somente quando isso causar render ou effect indevido.
- Medir com React DevTools Profiler ou metricas do app antes de complexidade extra.

### Server Components e fronteiras client/server

- Usar Server Components para renderizar dados e UI sem interatividade no servidor quando o framework suportar.
- Marcar componentes client somente quando precisarem de state, effects, handlers ou APIs do navegador.
- Manter dados sensiveis, queries privadas e segredos no servidor.
- Evitar passar objetos nao serializaveis por fronteiras client/server.
- Usar Server Actions/Functions somente quando o framework e a versao suportarem claramente.
- Separar concerns: server para dados e composicao inicial; client para interacao.

### Acessibilidade

- Usar HTML semantico antes de ARIA.
- Garantir labels, nomes acessiveis, foco visivel e navegacao por teclado.
- Tratar dialogs, menus, comboboxes e tooltips com patterns acessiveis.
- Preservar feedback para loading, erro e sucesso.
- Nao depender apenas de cor para transmitir estado.

## Patterns recomendados

### Composition pattern

- Usar `children`, slots e componentes pequenos para montar UI flexivel.
- Preferir composicao quando a variacao for estrutural ou visual.
- Evitar props booleanas demais para controlar muitos layouts.

### Custom hooks

- Extrair hook quando houver comportamento reutilizavel ou logica complexa.
- Nomear hooks pelo comportamento: `useInvoiceFilters`, `useAutosave`.
- Hooks nao devem esconder efeitos colaterais inesperados.
- Retornar API pequena e estavel.

### Compound components

- Usar quando componentes filhos precisam compartilhar contexto e formar uma API declarativa.
- Manter composicao previsivel e validacoes claras.
- Evitar para casos simples em que props resolvem melhor.

### Controlled e uncontrolled

- Controlled quando o valor precisa ser governado pelo pai, validado externamente ou sincronizado.
- Uncontrolled quando o estado local basta e reduz complexidade.
- Evitar misturar os dois contratos no mesmo componente sem regra explicita.

### Container/presenter

- Usar quando separar dados/comportamento de apresentacao reduzir acoplamento.
- Evitar criar camada artificial para componentes simples.

### Headless components

- Usar quando o comportamento precisa ser reutilizado com liberdade visual.
- Garantir acessibilidade e contrato de estado/eventos.
- Evitar se uma composicao simples resolver.

### Provider pattern

- Usar para dependencias ou contexto compartilhado de arvore.
- Dividir providers para reduzir renders e acoplamento.
- Nao colocar todo estado global em Context por conveniencia.

## Arquitetura de SaaS

Preferir este desenho quando o produto tiver formularios, dialogs, fluxos de cadastro, tabelas, pagamentos, pedidos ou operacoes de dominio:

`Component -> Controller Hook -> Service -> Data/API`

### Container / Smart Component

- Usar como orquestrador de tela ou fluxo.
- Concentrar composicao de secoes, estado de tela, abertura de dialogs e decisao de fluxo.
- Chamar hooks de dominio e repassar props para filhos.
- Evitar misturar JSX extenso, regra de negocio profunda e chamadas diretas de API no mesmo componente.
- Extrair secoes quando o container crescer, mantendo nele apenas a coordenacao.

### Presentational / Controlled Components

- Receber dados, estado de loading, callbacks e objetos de formulario por props.
- Renderizar UI e disparar intencoes como `onSave`, `onClose`, `onChange`, `onSelect`.
- Evitar buscar dados, abrir dialogs globais ou chamar services diretamente.
- Manter contrato claro entre valor controlado, evento e estado visual.

### Controller Hook Pattern

- Usar custom hooks para centralizar operacoes de dominio, estado local relacionado e adaptacao de services.
- Expor API pequena e nomeada pelo caso de uso: `savePedido`, `listItens`, `updateItem`.
- Encapsular resposta global, tratamento de erro e transformacoes de dados quando fizer sentido.
- Evitar hooks que retornam muitos estados desconexos ou escondem fluxos complexos demais.
- Manter regra de workflow muito ramificada visivel no container ou extrair para maquina/objeto de fluxo.

### Service / Data Layer

- Services representam casos de uso ou operacoes de dominio.
- Data/API representa acesso remoto, cliente HTTP, endpoint, serializacao e detalhes externos.
- Componentes nao devem instanciar API diretamente.
- Services podem usar wrappers de erro, validacao e resposta padronizada.
- Data layer nao deve conhecer UI, toast, dialog ou formulario.

### Workflow Orchestrator

- Usar quando uma tela conduz passos condicionais por tipo, permissao, status ou decisao do usuario.
- Manter transicoes explicitas: estado atual, evento, condicao e proxima acao.
- Para poucos ramos, um container com funcoes nomeadas pode bastar.
- Para muitos ramos, preferir tabela de transicao, reducer ou state machine formal.
- Evitar if/else profundo espalhado entre handlers, dialogs e callbacks.

### Composition de UI

- Usar compound components de bibliotecas como shadcn/Radix quando melhorarem legibilidade.
- Manter `Card`, `Form`, `FormField`, `Item`, `Dialog` e similares como estrutura de UI, nao como local de regra de negocio.
- Preservar acessibilidade esperada desses componentes ao compor dialogs, menus e formularios.

## Boas praticas

### Componentes

- Manter componentes focados, legiveis e testaveis.
- Separar regra de negocio complexa do JSX.
- Usar containers para orquestracao e filhos controlados para apresentacao.
- Evitar props ambiguas como `data`, `config` ou `options` sem contrato claro.
- Usar nomes de eventos orientados a intencao: `onSubmit`, `onConfirm`, `onSelectionChange`.
- Preservar identidade com `key` estavel em listas.

### Hooks

- Chamar hooks somente no topo de componentes ou outros hooks.
- Manter dependencias de effects e callbacks corretas.
- Evitar custom hooks que misturam fetch, UI, DOM e regra de negocio sem separacao.
- Usar hooks como controllers de caso de uso quando isso reduzir duplicacao entre telas.
- Usar refs para valores mutaveis que nao devem disparar render.

### Estado e dados

- Colocar estado no menor ancestral comum necessario.
- Evitar estado global para conveniencia local.
- Diferenciar server state de client state.
- Tratar optimistic update, rollback e erro quando houver mutacao remota.
- Manter formularios previsiveis e validar nas fronteiras corretas.

### Testes

- Testar comportamento visivel, interacao e acessibilidade basica.
- Preferir queries por role, label e texto acessivel.
- Mockar fronteiras externas, nao detalhes internos de componentes.
- Cobrir loading, erro, vazio e sucesso em fluxos criticos.

## Praticas que nao devem ser seguidas

- Usar `useEffect` para calcular estado derivado simples.
- Desabilitar `exhaustive-deps` sem explicar a invariavel.
- Memoizar tudo por reflexo com `useMemo`, `useCallback` ou `memo`.
- Criar Context global para qualquer dado compartilhado.
- Passar props booleanas em excesso para controlar variantes complexas.
- Fazer componentes gigantes que buscam dados, validam regra, renderizam layout e manipulam DOM.
- Chamar service ou data/API diretamente de componente presentational.
- Colocar toast, dialog ou regra visual dentro da camada data/API.
- Esconder workflow complexo dentro de hook sem API clara.
- Duplicar estado entre props, local state, store e URL.
- Usar index como key em listas reordenaveis ou mutaveis.
- Colocar segredo, token ou query sensivel em componente client.
- Ignorar estados de loading, vazio, erro e permissao.
- Quebrar acessibilidade com divs clicaveis sem semantica, foco ou teclado.
- Introduzir biblioteca de estado ou UI sem ganho claro.

## Validacao minima

Antes de concluir, verificar:

- responsabilidades dos componentes estao claras
- containers, presentational components, hooks, services e data/API respeitam suas fronteiras
- estado esta no lugar correto e sem duplicacao desnecessaria
- effects sincronizam apenas com sistemas externos ou tem justificativa clara
- patterns usados reduzem acoplamento ou complexidade real
- UI cobre loading, erro, vazio e sucesso quando aplicavel
- acessibilidade basica foi considerada
- performance foi medida ou o risco foi explicitado
- testes ou validacao manual cobrem o fluxo principal

## Saida esperada

Ao aplicar esta skill, entregar conforme o caso:

- implementacao, revisao ou plano tecnico objetivo
- justificativa curta para patterns e trade-offs escolhidos
- apontamento de anti-padroes encontrados
- comandos de validacao executados ou recomendados
- riscos residuais quando faltarem testes, metricas ou contexto
