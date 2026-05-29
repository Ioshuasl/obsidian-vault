---
name: typescript-avancado
description: "Desenvolvimento, revisao e refatoracao avancada em TypeScript com foco em tipagem forte, modelagem de dominio, contratos, validacao runtime, generics, unions, narrowing, seguranca, performance, tsconfig e manutencao."
category: granular-workflow-bundle
risk: safe
source: personal
date_added: "2026-03-12"
---

# Skill: TypeScript Avancado

## Objetivo

Orientar tarefas TypeScript para produzir codigo seguro, legivel, tipado com precisao e facil de evoluir.

Usar quando a tarefa envolver:

- implementar, revisar ou refatorar codigo TypeScript
- modelar dominio, DTOs, APIs, estados, eventos ou erros
- reduzir `any`, casts, `null`, `undefined` e estados invalidos
- criar generics, utility types, discriminated unions ou type guards
- validar dados externos em runtime
- ajustar `tsconfig`, lint, build ou compatibilidade com runtime/framework
- melhorar seguranca, performance, testabilidade e manutencao

Nao usar para:

- JavaScript sem objetivo de tipagem ou migracao para TypeScript
- discussao puramente teorica sem aplicacao no codigo
- mascarar erro de compilacao com cast
- criacao de persona de TypeScript

## Principios obrigatorios

- Tipos devem representar contratos reais, nao apenas satisfazer o compilador.
- Preferir `unknown` a `any` em fronteiras inseguras.
- Usar `any` somente de forma localizada, justificada e contida.
- Validar runtime tudo que vem de fora do processo: HTTP, storage, banco, fila, arquivo, env e usuario.
- Modelar estados impossiveis como impossiveis com unions, literais e discriminantes.
- Usar narrowing, type guards e exhaustive checks para reduzir ambiguidade.
- Evitar casts com `as` quando o tipo pode ser inferido, validado ou modelado corretamente.
- Preferir codigo explicito e legivel a tipos excessivamente espertos.
- Manter funcoes pequenas, responsabilidades claras e dependencias explicitas.
- Considerar runtime, bundler, framework e `tsconfig` antes de escolher recurso.

## Fluxo

1. Identificar objetivo funcional, runtime, framework, versao de TS e contratos afetados quando disponivel.
2. Mapear entradas, saidas, estados validos, estados invalidos e erros esperados.
3. Separar o que o compilador garante do que precisa de validacao runtime.
4. Escolher a modelagem mais simples: type, interface, union, generic, branded type ou schema.
5. Implementar com inferencia forte, narrowing claro e minimo de casts.
6. Validar com typecheck, testes, lint ou execucao focal conforme risco.
7. Explicitar riscos quando houver `any`, cast, contrato externo ou validacao incompleta.

## Conceitos essenciais

### Sistema de tipos

- TypeScript e estrutural: compatibilidade depende da forma, nao do nome do tipo.
- Tipos desaparecem em runtime; validacao de dados externos precisa de codigo.
- Inferencia deve ser aproveitada, mas contratos publicos devem ser explicitos quando melhorarem legibilidade.
- `never` indica impossibilidade e ajuda em exhaustiveness checks.
- `unknown` obriga narrowing antes do uso.
- `any` desliga seguranca de tipos e deve ficar isolado.

### Narrowing

- Usar `typeof`, `instanceof`, `in`, checagem de igualdade e predicates para estreitar tipos.
- Preferir discriminated unions para estados e variantes de dominio.
- Usar `switch` com checagem exhaustiva quando todas as variantes precisam ser tratadas.
- Evitar narrowing baseado em truthiness quando `0`, `""` ou `false` forem valores validos.

### Null e undefined

- Tratar `null` e `undefined` como estados distintos quando a semantica diferir.
- Evitar optional chaining que esconda erro de contrato.
- Preferir early return, guard clauses e defaults explicitos.
- Usar `NonNullable` com criterio; nao como atalho para ignorar ausencia real.

### Tipos de dominio

- Usar aliases e branded types para IDs, dinheiro, unidades, datas e outros valores que nao devem ser misturados.
- Usar enums com cuidado; preferir union de literais quando isso for mais simples e interoperavel.
- Modelar erros de dominio como unions quando fizer sentido tratar cada caso.
- Separar tipos de dominio, DTOs e modelos de UI quando eles tiverem ciclos de vida diferentes.

### Generics

- Usar generics quando o tipo varia mantendo relacao entre entrada e saida.
- Nomear generics por papel quando houver mais de um: `TInput`, `TResult`, `TError`.
- Restringir generics com `extends` quando a funcao exige shape minimo.
- Evitar generics que apenas deslocam complexidade para o chamador.

### Utility types

- Usar `Pick`, `Omit`, `Partial`, `Required`, `Readonly`, `Record`, `Extract`, `Exclude`, `ReturnType`, `Awaited` e similares quando reduzirem duplicacao.
- Evitar cadeias profundas de utility types que escondem o contrato final.
- Preferir tipo nomeado quando o shape for importante para leitura.

### Runtime validation

- Validar payloads externos com schemas, parsers ou guards confiaveis.
- Converter DTO externo para tipo interno validado na fronteira.
- Nao espalhar validacao parcial por todo o codigo.
- Retornar erro claro quando parsing falhar.

### Async e erros

- Tipar resultados de operacoes assicronas e erros esperados.
- Tratar promises rejeitadas.
- Evitar `catch` que engole erro sem log, retorno ou recuperacao.
- Considerar `Result`/`Either` quando erro esperado fizer parte do fluxo de dominio.

## Boas praticas

### Configuracao

- Preferir `strict: true` em projetos novos ou por migracao gradual em legados.
- Avaliar `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride` e `useUnknownInCatchVariables` quando o projeto suportar.
- Manter `tsconfig` alinhado ao runtime, module system, bundler e framework.
- Evitar relaxar flags globais para resolver erro local.

### Modelagem

- Usar discriminated unions para estados de UI, workflows, responses e erros conhecidos.
- Usar `satisfies` para validar shape preservando inferencia literal quando adequado.
- Usar `as const` para literais estaveis e mapas de configuracao.
- Preferir tipos imutaveis ou `readonly` quando mutacao for risco.
- Separar contrato publico de detalhes internos.

### Codigo

- Preferir inferencia local e anotacao explicita em fronteiras publicas.
- Usar guard clauses para reduzir nesting.
- Manter funcoes coesas e com um motivo claro para mudar.
- Encapsular transformacoes complexas em funcoes puras testaveis.
- Evitar acoplamento entre tipo de API externa e modelo interno.

### Interoperabilidade

- Isolar bibliotecas mal tipadas em adapters.
- Escrever wrappers tipados para APIs dinamicas.
- Tratar JSON como `unknown` ate validar.
- Tipar variaveis de ambiente como entrada insegura.
- Evitar expor tipos gerados externamente diretamente em toda a aplicacao sem camada de adaptacao.

## Patterns recomendados

### Discriminated Union

- Usar para estados como `idle`, `loading`, `success`, `error`.
- Incluir campo discriminante estavel: `status`, `type`, `kind`.
- Fazer switch exhaustivo com fallback `never`.

### Result Pattern

- Usar para operacoes com falha esperada.
- Modelar sucesso e erro como union.
- Evitar exceptions para controle de fluxo previsivel quando o projeto preferir retorno tipado.

### Schema at the boundary

- Validar dados na fronteira e trabalhar internamente com tipo seguro.
- Evitar validar o mesmo payload em varios pontos.
- Centralizar parsing, normalizacao e mensagens de erro.

### Branded Types

- Usar para evitar misturar `UserId`, `OrderId`, `MoneyCents`, `ISODate`.
- Manter criacao da brand em funcao validada.
- Evitar brand quando alias simples basta.

### Type-safe map

- Usar `Record<Union, Value>` para garantir cobertura de todas as chaves.
- Combinar com `satisfies` quando quiser preservar literais.
- Evitar objeto solto com string arbitraria quando as chaves sao conhecidas.

### Adapter Layer

- Converter API/DTO externo para dominio interno.
- Isolar bibliotecas com tipos fracos, `any` ou formatos instaveis.
- Facilitar testes e mudancas de fornecedor.

## Praticas que nao devem ser seguidas

- Espalhar `any` pela base.
- Usar `as unknown as Tipo` para forcar compilacao.
- Aplicar non-null assertion `!` sem prova local.
- Silenciar erro com `@ts-ignore` sem justificativa e prazo.
- Confiar em tipo compilado para JSON, `localStorage`, query string, env ou resposta HTTP.
- Criar tipos genericos complexos para problema simples.
- Acoplar dominio inteiro a DTO externo.
- Usar optional chaining para esconder dado obrigatorio ausente.
- Usar `Record<string, unknown>` quando as chaves sao conhecidas.
- Misturar tipos de UI, dominio e API sem fronteira clara.
- Relaxar `tsconfig` globalmente para evitar correcao pontual.
- Tratar todo erro como `Error` sem narrowing.

## Validacao minima

Antes de concluir, verificar:

- typecheck executado ou risco explicitado
- contratos de entrada e saida estao claros
- dados externos sao validados antes de virar tipo confiavel
- `any`, casts e non-null assertions foram evitados ou justificados
- estados invalidos foram removidos ou tratados
- null/undefined e erros esperados foram considerados
- solucao nao adiciona complexidade de tipos sem ganho real

## Saida esperada

Ao aplicar esta skill, entregar conforme o caso:

- codigo, tipos, schemas ou refatoracao prontos para revisao
- justificativa curta para modelagem e trade-offs
- apontamento de riscos em contratos, runtime ou `tsconfig`
- comandos de validacao executados ou recomendados
- lacunas quando nao houver contexto suficiente para garantir seguranca
