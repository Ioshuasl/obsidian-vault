---
name: python-producao
description: "Desenvolvimento, revisao e evolucao de codigo Python para servicos, APIs, automacoes, integracoes, scripts, refatoracoes e diagnosticos com foco em clareza, testes, performance, seguranca e operacao em producao."
category: granular-workflow-bundle
risk: safe
source: personal
date_added: "2026-03-12"
---

# Skill: Python para Producao

## Objetivo

Orientar tarefas Python para entregar codigo claro, testavel, seguro e operavel.

Usar quando a tarefa envolver:

- implementar ou refatorar codigo Python
- revisar arquitetura, contratos, testes ou tratamento de erros
- diagnosticar performance, concorrencia, I/O, memoria ou banco de dados
- estruturar APIs, CLIs, workers, automacoes ou integracoes
- preparar codigo para execucao confiavel em producao

Nao usar para:

- tarefas sem relacao com Python
- discussoes puramente conceituais sem necessidade de decisao tecnica
- criacao de persona, tom de voz ou perfil profissional

## Principios obrigatorios

- Escolher a solucao mais simples que resolva o problema.
- Dar a cada unidade um unico motivo claro para mudar.
- Separar responsabilidades entre camadas, modulos e fronteiras do sistema.
- Preferir composicao a heranca para manter flexibilidade.
- Aplicar regra de tres: esperar repeticao suficiente antes de abstrair.
- Manter funcoes pequenas, com um proposito e geralmente entre 20 e 50 linhas.
- Injetar dependencias, preferencialmente por construtor ou parametro explicito, para facilitar testes.
- Apagar codigo morto antes de criar abstracoes ou padroes.
- Testar cada camada isolando sua responsabilidade.
- Preferir codigo explicito e legivel a solucoes inteligentes demais.
- Manter contratos claros entre modulos, APIs e dependencias externas.
- Tratar entradas invalidas, falhas parciais, timeouts e excecoes de forma explicita.
- Otimizar performance somente com hipotese tecnica ou evidencia.
- Considerar seguranca, segredos, dados sensiveis e autorizacao nas fronteiras do sistema.
- Incluir logs, metricas ou rastreabilidade quando a tarefa afetar operacao.

## Fluxo

1. Identificar objetivo funcional, contexto do projeto e restricoes relevantes.
2. Localizar padroes existentes antes de propor nova estrutura.
3. Remover codigo morto ou duplicacao acidental antes de abstrair.
4. Escolher a forma mais simples adequada: modulo, biblioteca, API, CLI, worker, batch ou integracao.
5. Definir contratos, entradas, saidas, erros esperados e dependencias externas.
6. Implementar com funcoes pequenas, dependencias explicitas e codigo legivel.
7. Validar cada camada afetada com testes, lint, type check ou execucao focal conforme o risco.
8. Explicitar riscos residuais quando a validacao completa nao for possivel.

## Criterios tecnicos

### Arquitetura

- Separar dominio, aplicacao, infraestrutura e interface quando houver responsabilidades distintas.
- Evitar modulos grandes, globals desnecessarios e configuracao implicita.
- Encapsular integracoes externas e acesso a dados.
- Manter transacoes, idempotencia e consistencia visiveis no codigo.
- Preferir composicao, protocolos ou interfaces pequenas a hierarquias profundas.
- Criar abstracoes somente depois de evidenciar repeticao ou variacao real.

### Codigo Python

- Usar `typing`, `dataclasses`, `context managers`, `generators` e `async/await` com criterio.
- Preferir nomes claros, funcoes coesas e fluxo de erro previsivel.
- Evitar truques de linguagem que dificultem leitura ou debug.
- Usar bibliotecas padrao ou dependencias ja presentes no projeto antes de adicionar novas.
- Injetar clientes, repositorios, configuracoes e relogios em vez de cria-los dentro da regra de negocio.
- Dividir funcoes longas quando houver mais de um nivel de abstracao ou motivo para mudar.

### Performance

- Verificar CPU, memoria, I/O, rede, banco e serializacao antes de otimizar.
- Escolher entre sincrono, assincrono, threads, processos, filas ou batch conforme o gargalo.
- Reduzir recomputacao, copia de dados e chamadas externas repetidas.
- Evitar micro-otimizacao sem impacto mensuravel.

### Confiabilidade

- Adicionar timeouts, retries com criterio, backoff e circuit breakers quando aplicavel.
- Evitar erros silenciosos e `except Exception` sem tratamento especifico.
- Projetar tarefas repetiveis para idempotencia.
- Isolar dependencias externas em testes.

### Observabilidade

- Usar logs estruturados para eventos relevantes, erros e decisoes operacionais.
- Incluir contexto de correlacao quando houver requisicoes, jobs, usuarios ou entidades.
- Expor metricas de latencia, volume, falha e uso de recursos quando necessario.
- Nao registrar segredos, tokens, dados sensiveis ou payloads excessivos.

## Validacao minima

Antes de concluir, verificar:

- comportamento principal coberto por teste ou execucao focal
- cada camada afetada testada no nivel adequado
- erros e bordas relevantes tratados
- interfaces e contratos preservados
- impacto operacional considerado
- nenhuma mudanca fora do escopo necessario

## Anti-padroes

Evitar:

- transformar toda solucao em arquitetura pesada
- espalhar regra de negocio em rotas, handlers ou scripts longos
- criar abstracao antes da terceira ocorrencia ou sem variacao real
- manter codigo morto enquanto adiciona novos padroes
- usar heranca profunda para compartilhar comportamento simples
- instanciar dependencias concretas dentro de logica de negocio
- acoplar codigo a ambiente local
- adicionar dependencias sem necessidade clara
- otimizar sem medir ou sem gargalo plausivel
- esconder falhas com defaults silenciosos
- criar logs ruidosos que nao ajudam diagnostico

## Saida esperada

Ao aplicar esta skill, entregar:

- mudanca implementada ou revisao objetiva
- justificativa tecnica curta para decisoes relevantes
- comandos de validacao executados
- riscos ou proximos passos somente quando forem concretos
