---
tipo: campos-json
area: orius
produto: notas
orgao: receita-federal
ficha: estrutura-basica
tags: [orius, notas, doi, json]
status: revisado
---

> **Domínios:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]] · **Validação estrutural:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/rejeicao-arquivo]]

# Estrutura básica do JSON

O arquivo deve conter um único objeto raiz com o array `declaracoes`. Cada elemento do array é uma declaração completa (todas as fichas em um objeto plano).

```json
{
  "declaracoes": [
    { ... },
    { ... }
  ]
}
```

## Convenções

| Aspecto | Regra |
|---------|-------|
| Datas | `YYYY-MM-DD` |
| Booleanos | `true` / `false` |
| Monetários | até 18 inteiros e 2 decimais (ex.: `450000.00`) |
| Domínios | enviar apenas o **código** (string), conforme [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio\|tabelas de domínio]] |
| Campos opcionais vazios | **omitir** o atributo (não enviar `null` ou string vazia) |
| Alienantes / adquirentes | arrays JSON no mesmo nível dos demais campos da declaração |

## Fichas dentro de cada declaração

Os campos das fichas DOI-Web compõem um **objeto único** por declaração (não há subobjetos por ficha). Ver fichas:

- [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-iniciais]]
- [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-operacoes-imobiliarias]]
- [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-imovel]]
- [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-alienantes-adquirentes]]

Voltar: [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]]
