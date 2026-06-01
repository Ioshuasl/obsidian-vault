---
tipo: regras-validacao
area: orius
produto: notas
orgao: receita-federal
tags: [orius, notas, doi, validacao]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]] · **Domínios:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Declaração inapta (rejeição individual)

Validações que rejeitam **declarações específicas** sem impedir outras no mesmo arquivo.

## Categorias

### Tipo de declaração

- Retificadoras (`1`) e canceladoras (`3`) **não podem** ser importadas.
- Mensagem: *"Declarações retificadoras ou canceladoras não podem ser importadas"*.

### Campos obrigatórios

- Estrutura mínima conforme [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]].
- Obrigatoriedade **condicional** por `tipoServico`, `tipoLivro`, `formaPagamento`, etc.

### Erros por campo

Para cada campo, o sistema valida:

| Tipo | Verificação |
|------|-------------|
| Numérico | Somente dígitos (formato esperado) |
| Data | Data válida (`YYYY-MM-DD`) |
| Domínio | Código existente nas [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio\|tabelas de domínio]] |
| Específicas | Regras do leiaute (DV, tamanho, exclusão mútua de campos) |

Formato da mensagem: **"Campo XXXXX, motivo: XXXX"**.

## Relação completa por ficha

- [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-dados-iniciais]]
- [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-operacao-imobiliaria]]
- [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-dados-imovel]]
- [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-partes]]

Voltar: [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/00-indice-regras-validacao]]
