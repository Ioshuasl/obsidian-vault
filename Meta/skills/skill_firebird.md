---
name: firebird-sql
description: "Analise, desenvolvimento, revisao e otimizacao de SQL, PSQL, modelagem, indices, transacoes, manutencao e diagnostico em bancos Firebird. Use para queries, procedures, triggers, planos de execucao, performance, backup/restore e boas praticas."
risk: safe
source: personal
date_added: "2026-03-27"
---

# Skill: Firebird SQL

## Objetivo

Orientar tarefas com Firebird para produzir SQL, PSQL, modelagem e manutencao com seguranca, clareza e desempenho verificavel.

Usar quando a tarefa envolver:

- escrever, revisar ou otimizar queries Firebird
- criar ou ajustar procedures, triggers, views e computed columns
- diagnosticar lentidao, bloqueios, deadlocks, garbage collection ou planos ruins
- desenhar tabelas, constraints, indices e relacionamentos
- revisar transacoes, isolamento, concorrencia e integridade
- orientar backup, restore, sweep, validacao e manutencao

Nao usar para:

- bancos que nao sejam Firebird, exceto comparacoes pontuais
- tuning sem SQL, plano, volume ou sintoma minimo
- decisoes de infraestrutura sem relacao com Firebird
- criacao de persona de DBA

## Principios obrigatorios

- Preservar integridade antes de otimizar performance.
- Pedir ou procurar evidencias antes de recomendar mudancas amplas.
- Preferir a menor mudanca reversivel que resolva o problema.
- Considerar a versao do Firebird antes de usar recurso especifico.
- Manter transacoes curtas, explicitas e compativeis com o padrao de concorrencia.
- Criar indices para consultas reais, nao por intuicao.
- Evitar logica escondida demais em triggers e procedures.
- Testar backup e restore antes de operacoes sensiveis.
- Explicar impacto em leitura, escrita, locks, I/O e manutencao quando relevante.
- Nunca sugerir ignorar erro de corrupcao, integridade ou backup.

## Fluxo

1. Identificar versao do Firebird, ambiente, volume aproximado e sintoma principal quando disponivel.
2. Ler SQL, PSQL, plano de execucao, indices e modelo afetado.
3. Separar problema de consulta, modelagem, indice, transacao, configuracao ou manutencao.
4. Propor ajuste pequeno e verificavel: reescrita de query, indice, constraint, rotina ou parametro.
5. Indicar comandos ou criterios de validacao: plano, tempo, leituras, cardinalidade, backup, restore ou teste funcional.
6. Alertar sobre riscos de producao, downtime, locks, escrita extra ou alteracoes destrutivas.

## Recursos do Firebird a considerar

### SQL e consultas

- `JOIN` explicito, `LEFT JOIN`, `EXISTS`, `IN`, CTE com `WITH` e subconsultas quando melhorarem clareza ou plano.
- `ROWS`, `FIRST`/`SKIP` ou `OFFSET`/`FETCH` conforme versao.
- `RETURNING` em `INSERT`, `UPDATE` e `DELETE` quando suportado.
- `UPDATE OR INSERT` para upsert quando a semantica for adequada.
- `MERGE` quando houver sincronizacao entre conjuntos de dados.
- Window functions quando a versao suportar e evitarem processamento externo.
- `EXECUTE BLOCK` para scripts pontuais e manutencoes controladas.
- `PLAN` apenas quando houver razao tecnica; preferir melhorar SQL, estatisticas e indices antes de forcar plano.

### PSQL

- Stored procedures executaveis e selecionaveis.
- Triggers `BEFORE` e `AFTER` para regras proximas ao dado, auditoria simples e consistencia.
- `SUSPEND` em procedures selecionaveis.
- `EXCEPTION` para erros de negocio claros.
- `WHEN ... DO` para tratamento controlado de excecoes.
- Variaveis locais, cursores, loops e parametros tipados.
- Packages quando a versao suportar e houver agrupamento real de API de banco.

### Modelagem e tipos

- `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `CHECK` e `NOT NULL` para integridade declarativa.
- Domains para padronizar tipos, restricoes e defaults reutilizaveis.
- Generators/sequences com `NEXT VALUE FOR` para chaves e numeradores.
- Computed columns quando a derivacao for deterministica e util em consultas.
- Collations e charsets definidos com cuidado, evitando mudancas tardias sem plano.
- Tipos numericos, datas e timestamps escolhidos conforme precisao e semantica real.

### Indices e estatisticas

- Indices simples e compostos alinhados a filtros, joins, ordenacoes e cardinalidade.
- Ordem de colunas em indice composto baseada em igualdade, seletividade e uso recorrente.
- Indices `ASC`/`DESC` quando ordenacao for parte relevante do plano.
- Indices expression-based quando suportados e quando a expressao for recorrente.
- `SET STATISTICS INDEX` apos grandes alteracoes de dados ou distribuicao.
- Revisao de indices redundantes, pouco seletivos ou caros para escrita.

### Transacoes e concorrencia

- Isolamento configurado conforme necessidade: consistencia, leitura concorrente e conflito.
- `READ COMMITTED`, `SNAPSHOT` e modos relacionados conforme versao e uso.
- Commits frequentes em lotes longos para evitar garbage e retencao de versoes antigas.
- Evitar transacoes abertas por tempo excessivo em telas, relatorios ou conexoes ociosas.
- Planejar retry de conflitos quando a aplicacao puder repetir a operacao com seguranca.

### Manutencao e diagnostico

- Backup e restore com `gbak` para validacao logica, migracoes e limpeza estrutural.
- `nbackup` quando backup incremental/fisico for adequado ao ambiente.
- `gfix` para validacao, sweep e recuperacao somente com cuidado e backup previo.
- Tabelas de monitoramento `MON$` para conexoes, transacoes, statements e I/O.
- Estatisticas e plano de execucao para comparar antes/depois.
- Sweep automatico ou manual avaliado conforme carga, transacoes e rotina de backup.

## Boas praticas

### Consultas

- Escrever predicados sargaveis: evitar funcao, cast ou calculo sobre coluna indexada no `WHERE`.
- Filtrar cedo e retornar somente colunas necessarias.
- Preferir `EXISTS` para testar existencia quando nao precisa retornar dados da subconsulta.
- Evitar `SELECT *` em APIs, relatorios e integracoes.
- Usar aliases claros e nomes consistentes.
- Comparar planos antes e depois de ajustes relevantes.

### Indices

- Criar indice para padroes frequentes de filtro, join e ordenacao.
- Evitar muitos indices em tabelas com alta taxa de escrita.
- Preferir indice composto bem justificado a varios indices simples redundantes.
- Recalcular estatisticas quando a distribuicao dos dados mudar muito.
- Remover indices duplicados somente apos confirmar impacto nas queries existentes.

### PSQL e regras de negocio

- Usar procedures para operacoes transacionais proximas ao dado quando isso reduzir trafego e inconsistencia.
- Manter triggers pequenas, previsiveis e documentadas por nome claro.
- Evitar efeitos colaterais invisiveis em cascata de triggers.
- Retornar erros de negocio com mensagens compreensiveis.
- Separar scripts de manutencao pontual de rotinas permanentes.

### Seguranca e operacao

- Testar DDL e manutencao em ambiente separado antes de producao.
- Fazer backup antes de alteracoes destrutivas, migracoes e correcoes de corrupcao.
- Validar restore periodicamente, nao apenas a geracao do backup.
- Conceder privilegios minimos necessarios.
- Evitar expor usuario administrativo em aplicacoes.

## Praticas que nao devem ser seguidas

- Forcar `PLAN` como primeira resposta para query lenta.
- Criar indice para toda coluna usada em `WHERE` sem analisar seletividade e escrita.
- Usar `SELECT *` por padrao.
- Manter transacoes abertas durante interacao do usuario.
- Usar trigger para mascarar modelagem ruim ou regra que pertence claramente a aplicacao.
- Colocar grandes processos batch em uma unica transacao sem necessidade.
- Alterar charset, collation, page size ou parametros sensiveis sem backup, teste e plano de rollback.
- Rodar comandos de recuperacao ou sweep agressivo diretamente em producao sem copia validada.
- Ignorar deadlocks, corrupcao, erro de backup ou falha de integridade.
- Apagar constraints para "ganhar performance" sem alternativa de integridade.
- Adicionar hints, casts ou funcoes que tornam predicados nao sargaveis.

## Validacao minima

Antes de concluir, verificar:

- versao do Firebird considerada ou compatibilidade sinalizada
- SQL ou PSQL sugerido e coerente com o objetivo
- impacto em indices, escrita, locks e transacoes avaliado quando relevante
- backup/rollback mencionado em alteracoes arriscadas
- forma de medir resultado indicada: plano, tempo, leituras, testes ou restore
- riscos residuais explicitados quando faltar evidencia

## Saida esperada

Ao aplicar esta skill, entregar conforme o caso:

- SQL, PSQL, DDL ou comandos de manutencao prontos para revisao
- recomendacoes objetivas de indice, query, transacao ou rotina
- justificativa curta baseada em plano, cardinalidade, concorrencia ou integridade
- alertas de seguranca operacional para producao
