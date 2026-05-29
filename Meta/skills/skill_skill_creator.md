---
name: skill-creator-optimized
description: "Criação e revisão de skills com foco em baixo consumo de tokens, alta clareza, performance operacional, assertividade e estrutura enxuta. Use quando for criar, refatorar, padronizar ou otimizar uma skill para que ela seja acionável, reutilizável e econômica em contexto."
category: granular-workflow-bundle
risk: safe
source: personal
date_added: "2026-03-12"
---

# Skill: Criador de Skills Otimizadas

## Objetivo

Criar skills que sejam:

- enxutas
- acionáveis
- fáceis de disparar
- econômicas em tokens
- focadas em performance operacional
- assertivas na execução

Essa skill deve evitar verbosidade desnecessária e priorizar instruções que realmente mudam o comportamento do agente.

---

## Princípios obrigatórios

### 1. Economia de tokens

Sempre reduzir contexto desnecessário.

Regras:

- manter a descrição de ativação objetiva e específica
- evitar explicações longas sobre conceitos já conhecidos por LLMs
- remover redundância entre frontmatter e corpo
- usar exemplos curtos em vez de blocos longos de teoria
- preferir checklist operacional a texto narrativo
- mover detalhes extensos para referências separadas apenas quando necessário

---

### 2. Performance operacional

A skill deve acelerar execução real, não apenas parecer bem escrita.

Regras:

- instruir decisões com poucos passos
- priorizar fluxo determinístico quando a tarefa for sensível
- incluir somente recursos que evitem retrabalho recorrente
- usar scripts quando a mesma lógica seria reescrita repetidamente
- evitar arquivos auxiliares sem função prática

---

### 3. Assertividade

A skill deve dizer com clareza:

- quando usar
- quando não usar
- qual saída produzir
- qual padrão seguir
- quais restrições respeitar

Se houver ambiguidade, a skill deve pedir o mínimo de esclarecimentos possível.

---

### 4. Otimização contínua

Toda skill criada por esta skill deve nascer preparada para iteração.

Regras:

- preferir estrutura modular
- separar núcleo da skill de detalhes variantes
- facilitar revisão futura
- eliminar instruções vagas como "faça da melhor forma"
- transformar preferências em critérios verificáveis

---

## Fluxo de criação

### Etapa 1. Entender o objetivo real

Antes de escrever a skill:

1. identificar o trabalho recorrente que a skill deve resolver
2. identificar gatilhos reais de uso
3. identificar saídas esperadas
4. identificar riscos, limites e decisões frequentes

Se faltar contexto, perguntar apenas o mínimo indispensável.

Perguntas preferenciais:

- qual tarefa repetitiva essa skill deve resolver?
- que tipo de pedido deve ativá-la?
- qual resultado a skill deve produzir com consistência?

---

### Etapa 2. Definir o nível de liberdade

Escolher a forma da skill conforme a fragilidade da tarefa:

- alta liberdade: heurísticas curtas para tarefas abertas
- média liberdade: fluxo recomendado com algumas variações
- baixa liberdade: passos rígidos, scripts ou template fixo

Não superespecificar tarefas criativas.
Não deixar vagas tarefas sensíveis ou repetitivas.

---

### Etapa 3. Projetar a estrutura mínima

Toda skill deve nascer com o menor conjunto útil de artefatos.

Criar apenas o que for necessário:

- `SKILL.md` quando a skill seguir o formato canônico de pasta
- `scripts/` quando houver ganho real de determinismo
- `references/` quando houver documentação grande ou variante
- `assets/` apenas se arquivos forem usados na entrega

Nunca criar documentação ornamental.

Evitar:

- `README.md`
- `CHANGELOG.md`
- guias duplicados
- exemplos excessivos
- contexto histórico irrelevante

---

### Etapa 4. Escrever o frontmatter com precisão

O frontmatter deve maximizar a precisão de disparo da skill.

Critérios:

- `name` curto, claro e em kebab-case
- `description` descreve o que faz e quando usar
- descrição inclui gatilhos concretos
- descrição evita marketing, adjetivos vagos e rodeios

Modelo mental:

`<o que a skill faz> + <quando usar> + <tipo de tarefa>`

Exemplo bom:

```md
description: "Criação e revisão de skills enxutas com foco em economia de tokens, estrutura modular e instruções acionáveis. Use quando precisar criar, refatorar ou otimizar uma skill."
```

---

### Etapa 5. Escrever o corpo da skill

O corpo deve ser operacional.

Estrutura preferida:

1. objetivo
2. princípios obrigatórios
3. fluxo de execução
4. critérios de qualidade
5. template de saída, se útil

Prioridades de escrita:

- usar verbos no imperativo
- frases curtas
- poucas seções
- pouca teoria
- foco em decisão e execução

---

### Etapa 6. Embutir otimização por padrão

Toda skill criada deve incluir estes comportamentos sempre que fizer sentido:

- reduzir leitura de contexto amplo sem necessidade
- preferir inspeção progressiva do projeto
- usar ferramentas mais específicas antes de abordagens genéricas
- evitar passos redundantes
- preservar alterações do usuário
- validar somente o necessário para ter confiança
- não criar arquivos extras sem justificativa

---

## Critérios de qualidade

Antes de concluir uma skill, validar:

- a skill explica claramente quando deve ser usada
- o texto está enxuto e sem repetição
- existe um fluxo executável e não apenas conceitual
- há critérios objetivos de decisão
- a skill evita desperdício de tokens
- a skill evita ambiguidade desnecessária
- a estrutura permite evolução futura

Se qualquer item falhar, reescrever em vez de expandir.

---

## Anti-padrões

Nunca gerar skills com:

- texto inflado para parecer sofisticado
- descrições genéricas demais
- muitas seções sem função prática
- listas enormes de ferramentas sem contexto
- instruções que repetem conhecimento básico do modelo
- exemplos longos que não agregam decisão
- arquivos extras só para organização estética

---

## Template enxuto

Usar este molde base ao criar novas skills:

```md
---
name: nome-da-skill
description: "O que a skill faz, quando usar e em quais contextos ela deve ser acionada."
---

# Nome da Skill

## Objetivo

Definir o resultado esperado da skill em linguagem direta.

## Princípios obrigatórios

- restrição 1
- restrição 2
- restrição 3

## Fluxo

1. entender contexto mínimo
2. escolher estratégia adequada
3. executar com menor custo possível
4. validar o essencial

## Critérios de qualidade

- saída clara
- baixo ruído
- alta reutilização
- sem desperdício de contexto
```

---

## Regra final

Se houver dúvida entre:

- escrever mais ou escrever melhor
- criar mais arquivos ou reduzir superfície
- explicar muito ou instruir com precisão

Sempre escolher a opção mais enxuta, verificável e útil para execução real.
