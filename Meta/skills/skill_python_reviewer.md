---
name: python-code-review
description: "Revisao tecnica de codigo Python, PRs, refatoracoes, APIs, jobs, automacoes e servicos com foco em bugs, regressao, seguranca, performance, testabilidade, manutencao e operacao em producao."
category: granular-workflow-bundle
risk: safe
source: personal
date_added: "2026-03-27"
---

# Skill: Revisao de Codigo Python

## Objetivo

Revisar codigo Python para encontrar riscos reais antes de merge, release ou refatoracao.

Usar quando a tarefa envolver:

- revisar pull request, diff, commit ou arquivo Python
- avaliar refatoracao, bugfix, feature, API, CLI, worker, job ou automacao
- procurar regressao, falha de contrato, problema de teste ou risco operacional
- revisar seguranca, concorrencia, I/O, performance ou integracao externa
- classificar achados por impacto e orientar correcao

Nao usar para:

- revisao de linguagens que nao sejam Python, exceto pontos de integracao
- formatacao cosmetica sem risco tecnico
- reescrita completa quando o pedido for apenas review
- criacao de persona de reviewer

## Principios obrigatorios

- Findings primeiro, resumo depois.
- Priorizar bug, regressao, seguranca, perda de dados, concorrencia e falha operacional.
- Diferenciar bloqueio, risco relevante e melhoria opcional.
- Revisar comportamento e contratos antes de estilo.
- Preferir comentarios objetivos, rastreaveis e acionaveis.
- Validar se a solucao e a mais simples que resolve o problema.
- Aplicar responsabilidade unica, separacao de responsabilidades e baixo acoplamento.
- Preferir composicao a heranca e dependencias explicitas a globals ocultos.
- Aplicar regra de tres antes de exigir abstracao.
- Sugerir remocao de codigo morto antes de novos padroes.
- Evitar feedback opinativo sem impacto claro.

## Fluxo

1. Identificar objetivo da mudanca, area afetada e contratos publicos.
2. Ler o diff ou codigo procurando impacto funcional antes de estilo.
3. Mapear entradas, saidas, estados invalidos, excecoes e dependencias externas.
4. Revisar testes existentes e lacunas para fluxos alterados.
5. Procurar riscos de seguranca, dados sensiveis, concorrencia, I/O, banco, fila e filesystem.
6. Avaliar performance somente onde houver volume, latencia, repeticao ou custo plausivel.
7. Reportar findings com severidade, local, impacto e direcao de correcao.
8. Informar testes ou validacoes que faltam quando nao houver evidencia suficiente.

## Severidade dos findings

- `Critico`: pode causar perda de dados, vulnerabilidade grave, indisponibilidade ou quebra ampla.
- `Alto`: bug provavel, regressao relevante, falha de seguranca ou contrato importante.
- `Medio`: fragilidade concreta, borda nao coberta, manutencao arriscada ou performance plausivel.
- `Baixo`: melhoria tecnica util, clareza, consistencia ou reducao de risco pequeno.
- `Opcional`: sugestao de estilo ou refatoracao sem impacto direto no comportamento.

Use severidade somente quando houver justificativa tecnica. Nao elevar preferencia pessoal a bloqueio.

## Checklist de revisao

### Corretude e contratos

- Entradas, saidas e invariantes estao claros.
- `None`, vazio, erro e estados invalidos foram tratados.
- Mudancas preservam compatibilidade com chamadas existentes.
- Retornos, exceptions e side effects combinam com o contrato esperado.
- Regras de negocio nao foram movidas para local inadequado.

### Python e design

- Funcoes permanecem pequenas, coesas e com um proposito.
- Modulos e classes tem um motivo claro para mudar.
- Dependencias sao injetadas por parametro, construtor ou fronteira clara quando isso melhora teste.
- Defaults mutaveis, mutabilidade compartilhada e side effects ocultos foram evitados.
- `typing`, `dataclasses`, `context managers`, iteradores e `async/await` sao usados com criterio.
- Heranca nao esta sendo usada onde composicao resolveria melhor.
- Abstracoes novas tem repeticao ou variacao real que as justifique.

### Erros e robustez

- Excecoes nao sao engolidas silenciosamente.
- `except Exception` possui motivo, escopo pequeno e tratamento util.
- I/O externo possui timeout, retry, backoff ou fallback quando aplicavel.
- Operacoes repetiveis consideram idempotencia.
- Falhas parciais deixam estado consistente.

### Seguranca

- Dados sensiveis, tokens e segredos nao aparecem em logs, erros ou repositorio.
- Entradas externas sao validadas antes de uso sensivel.
- Permissoes, autenticacao e autorizacao sao preservadas.
- Serializacao, paths, comandos e queries nao abrem risco de injecao.

### Performance

- Loops, consultas, chamadas externas e serializacao nao escalam mal sem necessidade.
- Nao ha recomputacao obvia em caminhos quentes.
- Operacoes bloqueantes nao foram introduzidas em fluxo async ou sensivel.
- Uso de memoria e processamento em lote fazem sentido para o volume esperado.
- Otimizacoes propostas possuem ganho plausivel e nao aumentam complexidade sem motivo.

### Testes e validacao

- Testes cobrem comportamento, nao apenas implementacao.
- Fluxos de sucesso, erro e borda relevantes foram considerados.
- Dependencias externas sao isoladas ou simuladas adequadamente.
- Regressao provavel tem teste dedicado.
- Lint, type check ou testes focalizados foram executados ou recomendados conforme risco.

### Operacao

- Logs ajudam diagnostico sem vazar dados sensiveis.
- Erros importantes sao observaveis.
- Jobs, workers e integracoes possuem rastreabilidade suficiente.
- Mudancas de schema, filas ou contratos externos tem plano de compatibilidade.

## Boas praticas

- Apontar o problema no menor trecho possivel.
- Explicar o risco concreto antes da sugestao.
- Sugerir correcao proporcional ao impacto.
- Confirmar padroes existentes do projeto antes de pedir nova abordagem.
- Preferir mudancas pequenas, testaveis e reversiveis.
- Separar achados obrigatorios de melhorias.
- Mencionar ausencia de testes como risco quando ela impede confiar na mudanca.

## Praticas que nao devem ser seguidas

- Focar a revisao em formatacao quando ha risco funcional.
- Pedir arquitetura pesada para problema simples.
- Exigir abstracao antes da terceira ocorrencia ou sem variacao real.
- Tratar preferencia de estilo como bug.
- Ignorar compatibilidade, migracao ou contratos externos.
- Aprovar tratamento generico de erro sem observabilidade.
- Aceitar transacao, arquivo, conexao ou lock sem escopo claro.
- Misturar sync e async sem avaliar bloqueio.
- Recomendar dependencia nova sem ganho evidente.
- Sugerir refatoracao ampla sem explicar risco ou retorno.

## Formato de saida

Ao entregar review, usar esta ordem:

1. Findings por severidade, com arquivo/linha quando disponivel.
2. Perguntas ou suposicoes que afetem a decisao.
3. Resumo curto somente depois dos achados.
4. Testes executados, ausentes ou recomendados.

Cada finding deve conter:

- severidade
- local
- problema
- impacto
- direcao de correcao

Se nao houver achados relevantes, dizer isso claramente e informar riscos residuais ou lacunas de teste.

## Validacao minima

Antes de concluir, verificar:

- achados estao ligados a risco real
- severidade esta proporcional ao impacto
- comentarios sao especificos e acionaveis
- comportamento, contratos, testes e operacao foram considerados
- sugestoes respeitam o escopo da mudanca
- melhorias opcionais nao foram apresentadas como bloqueios
