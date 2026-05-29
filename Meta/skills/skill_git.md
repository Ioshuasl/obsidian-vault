---
name: git-operacoes-essenciais
description: "Guia operacional de Git para status, diff, branch, commit, worktree, merge, rebase, stash, tag, push, pull e recuperacao segura. Use quando precisar executar, explicar, revisar ou padronizar operacoes comuns de Git."
category: developer-workflow
risk: medium
source: personal
date_added: "2026-05-21"
---

# Skill: Git Operacoes Essenciais

## Objetivo

Executar e orientar operacoes Git do dia a dia com clareza, seguranca e baixo risco de perda de trabalho.

Use esta skill para:

- inspecionar estado do repositorio
- criar commits claros
- trabalhar com branches e worktrees
- sincronizar com remoto
- fazer pull, push, merge e rebase
- usar stash, tag e restore com cuidado
- resolver conflitos
- revisar historico e diferencas
- recuperar erros comuns sem destruir alteracoes

Nao use para:

- revisar qualidade de codigo em profundidade
- reescrever historico compartilhado sem confirmacao
- apagar alteracoes locais sem pedido explicito

## Principios obrigatorios

- Sempre verificar o estado antes de alterar: `git status --short --branch`.
- Nunca descartar alteracoes locais sem confirmacao explicita.
- Preferir comandos nao destrutivos.
- Antes de `push --force`, usar `--force-with-lease` e confirmar o risco.
- Preservar trabalho do usuario em worktree suja.
- Explicar comandos perigosos antes de sugerir ou executar.
- Separar alteracoes relacionadas em commits pequenos e coesos.
- Usar mensagens de commit no padrao de pseudo codigo definido na secao Commit.

## Fluxo padrao

1. Verificar repositorio:

```bash
git status --short --branch
git remote -v
git branch --show-current
```

2. Entender mudancas:

```bash
git diff
git diff --staged
git log --oneline --decorate -n 10
```

3. Preparar alteracoes:

```bash
git add <arquivo>
git add -p
git restore --staged <arquivo>
```

4. Commitar:

```bash
git commit -m "[DSAAS-103] refactor(): descricao objetiva"
```

5. Sincronizar:

```bash
git fetch origin
git pull --rebase
git push origin <branch>
```

## Operacoes principais

### Status e historico

Use para entender o estado atual antes de agir.

```bash
git status --short --branch
git log --oneline --graph --decorate --all -n 30
git show <commit>
git blame <arquivo>
```

### Diff

Use para revisar o que mudou.

```bash
git diff
git diff <branch-base>...HEAD
git diff --name-only
git diff --staged
```

### Branch

Use branches para isolar trabalho.

```bash
git branch
git switch -c <nova-branch>
git switch <branch>
git branch -d <branch>
git branch -m <novo-nome>
```

Evite `git branch -D` sem confirmar que a branch pode ser perdida.

### Commit

Use commits pequenos, verificaveis e com mensagem clara no padrao do projeto.

```bash
git add <arquivos>
git add -p
git commit -m "[DSAAS-103] refactor(): reorganizar fluxo de validacao"
git commit --amend
```

Antes de `commit --amend`, confirmar se o commit ja foi enviado ao remoto.

Padrao obrigatorio em pseudo codigo:

```text
[CODIGO BRANCH] <OPERACAO>(TITULO): descricao objetiva
```

Exemplo base:

```text
[DSAAS-103] refactor(): descricao objetiva
```

Regras:

- `[CODIGO BRANCH]` identifica ticket, tarefa ou branch.
- `<OPERACAO>` indica a acao principal: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`.
- `(TITULO)` informa escopo curto quando existir; pode ficar vazio como `()`.
- `descricao objetiva` deve ser curta, em portugues, no infinitivo ou imperativo.

Exemplos:

- `[DSAAS-103] refactor(): reorganizar servico de contratos`
- `[DSAAS-103] fix(api): corrigir validacao de status`
- `[DSAAS-103] feat(ui): adicionar filtro por periodo`
- `[DSAAS-103] test(): cobrir fluxo de cancelamento`

### Pull e fetch

Use `fetch` para atualizar referencias remotas sem mexer na worktree.

```bash
git fetch origin
git pull
git pull --rebase
```

Preferir `git pull --rebase` quando a branch local tem commits proprios e o time usa historico linear.

### Push

Use push para publicar a branch.

```bash
git push origin <branch>
git push -u origin <branch>
```

Para reescrita de historico:

```bash
git push --force-with-lease
```

Usar somente quando necessario e com consciencia de impacto em outras pessoas.

### Merge

Use merge quando quiser preservar historico de integracao.

```bash
git switch <destino>
git merge <origem>
```

Em conflito:

```bash
git status
git diff
git add <arquivos-resolvidos>
git commit
```

Cancelar merge em andamento:

```bash
git merge --abort
```

### Rebase

Use rebase para reaplicar commits sobre outra base e manter historico linear.

```bash
git fetch origin
git rebase origin/main
git rebase -i HEAD~3
```

Em conflito:

```bash
git status
git add <arquivos-resolvidos>
git rebase --continue
```

Cancelar rebase:

```bash
git rebase --abort
```

Nao fazer rebase de branch compartilhada sem alinhamento com o time.

### Worktree

Use worktree para trabalhar em mais de uma branch sem trocar o diretorio atual.

Listar:

```bash
git worktree list
```

Criar worktree com nova branch:

```bash
git worktree add ../repo-feature -b <branch>
```

Criar worktree para branch existente:

```bash
git worktree add ../repo-fix <branch>
```

Remover:

```bash
git worktree remove ../repo-feature
git worktree prune
```

Antes de remover uma worktree, verificar `git status` dentro dela.

### Stash

Use stash para guardar mudancas temporarias.

```bash
git stash push -m "descricao curta"
git stash list
git stash show -p stash@{0}
git stash pop
git stash apply stash@{0}
git stash drop stash@{0}
```

Preferir commit temporario quando a mudanca for importante ou extensa.

### Restore e checkout

Use `restore` para desfazer mudancas locais com mais clareza.

```bash
git restore <arquivo>
git restore --staged <arquivo>
git restore --source=<commit> <arquivo>
```

`git restore <arquivo>` descarta mudancas nao commitadas naquele arquivo. Confirmar antes.

### Tags

Use tags para marcar versoes.

```bash
git tag
git tag v1.2.0
git tag -a v1.2.0 -m "Release v1.2.0"
git push origin v1.2.0
git push origin --tags
```

### Remotos

Use para configurar e verificar origem.

```bash
git remote -v
git remote add origin <url>
git remote set-url origin <url>
```

## Recuperacao segura

Antes de qualquer recuperacao, verificar:

```bash
git status --short --branch
git reflog
```

Casos comuns:

```bash
git restore --staged <arquivo>
git commit --amend
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reflog
git switch -
```

Evitar sem confirmacao explicita:

```bash
git reset --hard
git clean -fd
git branch -D <branch>
git push --force
```

## Resolucao de conflitos

Fluxo recomendado:

1. Rodar `git status`.
2. Abrir arquivos em conflito.
3. Escolher versao correta ou combinar as duas.
4. Remover marcadores `<<<<<<<`, `=======`, `>>>>>>>`.
5. Rodar testes relevantes.
6. Marcar resolvido com `git add`.
7. Continuar merge ou rebase.

Comandos:

```bash
git diff --name-only --diff-filter=U
git add <arquivo>
git merge --continue
git rebase --continue
```

## Checklist antes de commit

- `git status --short --branch` revisado
- diff lido
- arquivos staged conferidos
- testes relevantes executados quando aplicavel
- commit contem uma mudanca coesa
- mensagem segue `[CODIGO BRANCH] <OPERACAO>(TITULO): descricao objetiva`

## Checklist antes de push

- branch correta
- remoto correto
- commits locais revisados
- branch atualizada com `fetch` ou `pull --rebase`
- nenhum segredo, arquivo temporario ou artefato indevido no diff

## Formato de resposta da skill

Quando orientar o usuario, responder com:

1. estado identificado
2. comando recomendado
3. motivo curto
4. risco, se houver
5. proximo passo

Exemplo:

```md
Estado: branch local tem commits nao enviados.
Comando: git push -u origin minha-branch
Motivo: publica a branch e configura upstream.
Risco: baixo, se a branch correta foi confirmada.
Proximo passo: abrir PR ou continuar desenvolvimento.
```

## Regra final

Em Git, primeiro preservar trabalho; depois sincronizar; depois alterar historico. Se houver risco de perda de mudancas, parar e pedir confirmacao objetiva.
