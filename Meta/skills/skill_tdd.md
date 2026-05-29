---
name: tdd-avancado
description: "Aplicacao avancada de TDD para implementar, corrigir e refatorar software guiado por testes, com foco em comportamento, design, ciclos curtos, test doubles, arquitetura testavel, regressao e feedback rapido."
category: granular-workflow-bundle
risk: safe
source: personal
date_added: "2026-03-27"
---

# Skill: TDD Avancado

## Objetivo

Guiar desenvolvimento e refatoracao por testes confiaveis, pequenos e orientados a comportamento.

Usar quando a tarefa envolver:

- implementar feature ou bugfix com teste antes do codigo
- refatorar com seguranca sem alterar comportamento
- criar testes unitarios, integracao, contrato, componente ou E2E
- reduzir acoplamento, fragilidade ou baixa testabilidade
- revisar suite lenta, instavel, acoplada a detalhes internos ou com mocks excessivos
- desenhar fluxo Red, Green, Refactor para mudancas complexas

Nao usar para:

- escrever teste apenas depois do codigo sem mudar abordagem
- buscar cobertura cosmetica sem risco ou comportamento claro
- testar detalhe privado sem contrato observavel
- criacao de persona de especialista em TDD

## Principios obrigatorios

- Red, Green, Refactor em ciclos curtos.
- Um teste novo deve falhar pelo motivo esperado antes da implementacao.
- Implementar o minimo suficiente para passar.
- Refatorar somente com testes verdes.
- Testar comportamento observavel, nao estrutura interna.
- Preferir o menor nivel de teste que de confianca suficiente.
- Manter testes deterministas, rapidos e independentes.
- Usar doubles para isolar dependencia, nao para simular toda a implementacao.
- Deixar a dificuldade de testar revelar acoplamento ruim.
- Cobertura e consequencia de bom design, nao objetivo isolado.
- Preservar legibilidade dos testes como documentacao viva.

## Fluxo

1. Definir o comportamento esperado e o criterio de sucesso observavel.
2. Escolher o nivel de teste: unitario, integracao, contrato, componente ou E2E.
3. Escrever o menor teste que falhe pelo motivo correto.
4. Implementar o codigo mais simples que faca o teste passar.
5. Rodar o teste focal e confirmar verde.
6. Refatorar nomes, duplicacao, responsabilidades e design sem mudar comportamento.
7. Repetir com o proximo comportamento ou borda relevante.
8. Rodar suite maior quando houver risco de regressao.

## Ciclos e estrategias

### Red, Green, Refactor

- Red: teste falha por ausencia do comportamento esperado.
- Green: codigo minimo passa sem generalizacao prematura.
- Refactor: melhora estrutura mantendo comportamento.
- Nao pular refactor quando o verde foi obtido com solucao temporaria.

### Triangulation

- Comecar com caso simples.
- Adicionar segundo ou terceiro exemplo para forcar generalizacao.
- Usar quando a regra ainda nao esta clara.
- Evitar generalizar antes de exemplos suficientes.

### Fake it until you make it

- Retornar valor constante para passar o primeiro teste quando isso acelerar o ciclo.
- Substituir por regra real ao adicionar novos casos.
- Nao deixar fake sobreviver depois que a regra exigir generalizacao.

### Obvious implementation

- Implementar diretamente quando a regra e simples e o teste ja protege o comportamento.
- Manter o ciclo curto mesmo quando a solucao parecer obvia.

### Outside-in TDD

- Comecar por comportamento externo e descer para colaboradores.
- Usar quando o fluxo, contrato ou integracao guia o design.
- Substituir dependencias externas por doubles enquanto o design emerge.

### Inside-out TDD

- Comecar por regra pura ou unidade central.
- Usar quando o dominio ou algoritmo e a parte mais incerta.
- Integrar depois com testes de colaboracao.

## Escolha do nivel de teste

### Unitario

- Usar para regras puras, validacoes, mapeamentos e servicos pequenos.
- Deve ser rapido, isolado e deterministico.
- Evitar banco, rede, clock real e filesystem quando nao forem o comportamento testado.

### Integracao

- Usar para verificar colaboracao real entre modulos, banco, API interna, filas ou adapters.
- Aceitar custo maior quando o risco esta na fronteira.
- Isolar ambiente e dados para evitar flakiness.

### Contrato

- Usar para APIs, eventos, adapters, repositories, clients e integracoes entre camadas.
- Verificar shape, semantica, erros e compatibilidade.
- Util para evitar regressao entre frontend/backend ou service/data layer.

### Componente/UI

- Usar para comportamento visivel, interacao, acessibilidade basica e estados de tela.
- Testar por role, label, texto e evento do usuario.
- Evitar acoplar a classe CSS, estrutura DOM interna ou detalhe de biblioteca.

### End-to-end

- Usar para fluxos criticos de negocio e integracao real.
- Manter poucos, estaveis e focados em caminhos de alto valor.
- Nao substituir testes menores por E2E amplo e lento.

## Test doubles

- Dummy: valor passado apenas para preencher parametro.
- Stub: retorna resposta controlada.
- Spy: registra chamadas para verificacao.
- Mock: define expectativa de interacao.
- Fake: implementacao simplificada funcional, como repository em memoria.

Boas regras:

- Preferir fake ou stub simples quando interacao exata nao importa.
- Usar mock quando o comportamento relevante e a interacao.
- Evitar mockar o proprio sistema sob teste.
- Evitar mocks de detalhes internos que tornam refactor caro.
- Nomear doubles pelo papel no teste.

## Patterns populares

### AAA

- Arrange: preparar dados e dependencias.
- Act: executar comportamento.
- Assert: verificar resultado observavel.
- Manter cada bloco curto e legivel.

### Given / When / Then

- Usar quando o cenario de negocio importa.
- Bom para BDD, testes de aceitacao e fluxos de dominio.
- Evitar texto cerimonial sem clareza adicional.

### Test Data Builder

- Usar para criar objetos complexos com defaults seguros.
- Customizar apenas campos relevantes ao cenario.
- Evitar fixtures globais grandes e opacas.

### Object Mother

- Usar com cuidado para exemplos padronizados.
- Evitar quando centralizar muitos cenarios e esconder dados importantes.

### Golden Master / Characterization Test

- Usar antes de refatorar legado sem comportamento totalmente conhecido.
- Capturar comportamento atual para proteger mudanca estrutural.
- Revisar snapshots para nao congelar bug acidental sem consciencia.

### Approval / Snapshot Testing

- Usar para saidas estruturadas grandes, UI ou texto quando revisao humana agrega valor.
- Evitar snapshots enormes que ninguem revisa.
- Preferir asserts especificos quando o comportamento importante e pequeno.

### Property-based Testing

- Usar para invariantes, parsers, validadores, calculos e regras com muitos casos.
- Definir propriedades do dominio, nao apenas gerar dados aleatorios.
- Manter exemplos concretos para casos criticos.

### Mutation Testing

- Usar para medir capacidade dos testes de detectar mudancas erradas.
- Aplicar em codigo critico quando cobertura tradicional nao basta.
- Nao usar como requisito pesado para todo projeto.

## Escolas de TDD

### Detroit / Classicist

- Prioriza estado final e comportamento observavel.
- Usa menos mocks e mais objetos reais.
- Boa escolha para dominio puro e baixo custo de setup.

### London / Mockist

- Prioriza colaboracoes e mensagens entre objetos.
- Usa mocks para dirigir design de dependencias.
- Boa escolha para arquitetura orientada a portas/adapters ou interacoes externas.

Regra pratica:

- Preferir Classicist quando o comportamento pode ser verificado por resultado.
- Usar Mockist quando a interacao com dependencia e parte essencial do contrato.
- Misturar abordagens conforme risco, sem dogma.

## Boas praticas

- Escrever nomes de teste que descrevem regra ou comportamento.
- Manter um motivo principal de falha por teste.
- Usar setup minimo e explicito.
- Criar builders quando dados repetidos poluem o teste.
- Controlar clock, aleatoriedade, ambiente, rede e filesystem.
- Isolar dependencias externas no ciclo curto.
- Rodar testes focalizados durante desenvolvimento e suite maior antes de concluir.
- Refatorar testes com o mesmo cuidado do codigo de producao.
- Remover testes redundantes que nao aumentam confianca.
- Cobrir bordas relevantes: vazio, nulo, erro, permissao, concorrencia e idempotencia quando aplicavel.

## Praticas que nao devem ser seguidas

- Escrever implementacao grande antes do primeiro teste.
- Testar metodo privado por reflexo.
- Acoplar teste a ordem interna, classe CSS, nome de funcao privada ou detalhe acidental.
- Usar mock em excesso para cada colaborador.
- Criar teste que passa mesmo quando o comportamento esta quebrado.
- Manter suite lenta, flakey ou dependente de ordem.
- Usar snapshot gigante como substituto de assert claro.
- Medir qualidade apenas por percentual de cobertura.
- Criar fixtures globais que escondem o dado relevante.
- Desabilitar teste instavel sem corrigir causa ou registrar risco.
- Testar framework em vez da regra do sistema.

## Validacao minima

Antes de concluir, verificar:

- houve teste vermelho antes da implementacao quando a tarefa permitia TDD real
- teste falha pelo motivo correto
- teste protege comportamento ou contrato observavel
- implementacao e a menor solucao sustentavel para o caso atual
- refactor foi considerado depois do verde
- suite focal foi executada
- lacunas de teste ou validacao foram explicitadas

## Saida esperada

Ao aplicar esta skill, entregar conforme o caso:

- teste novo ou revisado antes da implementacao
- implementacao minima para passar
- refatoracao feita ou justificativa para nao fazer
- comandos de teste executados
- riscos residuais quando nao houver ambiente, tempo ou contexto para validar
