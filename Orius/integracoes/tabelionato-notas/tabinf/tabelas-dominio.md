---
tipo: integracao
area: orius
produto: notas
central: tabinf
tags: [orius, notas, tabinf, dominio, codigos]
status: revisado
---

# TABINF IBGE — tabelas de dominio

## Dominios codificados no layout

- **TRIM-PESQUISA**: `1`, `2`, `3`, `4`
- **COMPL-FOLHA**: `1=Frente`, `2=Verso`, `9=Sem complemento`
- **REGIME-BENS**: `1=Comunhao universal`, `2=Comunhao parcial`, `3=Separacao`, `9=Sem declaracao`
- **COD-RESP-FILHO**: `1=Conjuge 1`, `2=Conjuge 2`, `3=Ambos`, `4=Outro`, `9=Sem declaracao`
- **SEXO-CONJ1/SEXO-CONJ2**: `1=Masculino`, `2=Feminino`

## Dominio combinado UF/Municipio/Pais

| Regra | UF | Municipio | Pais |
|---|---|---|---|
| 1 (estrangeiro) | `98` | `99999` | Codigo ONU ou `999` |
| 2 (Brasil sem municipio) | `59` | `99999` | `999` |
| 3 (ignorado) | `99` | `99999` | `999` |
| 4 (UF nacional) | diferente de `98`, `59`, `99` | Codigo municipio IBGE ou `99999` | `999` |

## Observacoes importantes

- Nao utilizar o codigo ONU `076` (Brasil) neste layout.
- Quando necessario, usar `999` como ignorado no campo de pais.

## Tabelas externas

- **UF e Municipio**: tabela do IBGE (Sistema de Estatisticas Vitais).
- **Pais**: tabela de paises/territorios da ONU disponibilizada via IBGE.
