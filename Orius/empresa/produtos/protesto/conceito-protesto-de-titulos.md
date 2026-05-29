---
tipo: conceito
area: orius
produto: protesto
tags: [orius, protesto, dominio, conceito]
status: revisado
fonte: "Protesto_de_T_tulos (1).md"
atualizado: 2026-05-29
---

# O que é protesto de títulos

## Em uma frase

**Protesto de título** é o procedimento extrajudicial em que o **cartório de protesto** formaliza que uma **dívida representada por título** (duplicata, nota promissória, cheque, etc.) **não foi paga** após o devedor ser **intimado**, gerando registro público da inadimplência.

## Papel do Tabelionato de Protesto

O cartório **não cobra a dívida em nome do credor** como um escritório de cobrança. Ele:

1. **Recebe** o título apresentado pelo credor (apresentante).
2. **Registra** a entrada no sistema (apontamento / protocolo).
3. **Intima** o devedor oficialmente.
4. Aguarda o **prazo legal** (tríduo — 3 dias úteis).
5. Se não houver pagamento nem causa de suspensão, **lavra o protesto** (registro público de não pagamento).
6. Pode, depois, registrar **cancelamento** do protesto quando a obrigação for satisfeita e houver documentação.

O Estado, por meio do cartório, atesta: *o devedor foi avisado oficialmente e não quitou no prazo* — o que dá **força probatória e publicidade** à cobrança extrajudicial.

## Exemplo didático (credor × devedor)

| Papel | Exemplo | No sistema |
|-------|---------|------------|
| **Credor / apresentante** | João vendeu um notebook e não recebeu | Apresentante do título; pode ser banco, empresa ou PF |
| **Devedor** | Carlos assinou nota promissória e não pagou no vencimento | Sacado / devedor; intimado pelo cartório |
| **Cartório** | Registra, intima, protesta ou encerra sem protesto | Tabelionato de protesto (cliente Orius) |

João leva a **nota promissória** ao cartório com dados de Carlos (nome, CPF, endereço, valor). O cartório **não resolve a venda** — apenas executa o **rito de protesto**.

## Títulos típicos

Documentos de dívida que podem ser apresentados a protesto, conforme legislação e prática:

- Duplicata
- Nota promissória
- Cheque
- Letra de câmbio
- Outros títulos de crédito admitidos em lei

No legado Orius, a entidade central costuma ser **`P_TITULO`**, com vínculos a pessoa, banco, espécie, ocorrências e andamentos.

## O que o protesto **não** é

| Não é | É |
|-------|---|
| Ação judicial de cobrança | Procedimento **cartorário** extrajudicial |
| Execução fiscal | Registro de inadimplência em título cambial/mercantil |
| Negativação direta no Serasa pelo cartório | Protesto no cartório; consultas/efeitos podem integrar-se a birôs e centrais (ex.: CENPROT, Serasa em certidões específicas) |

## Por que isso importa no software

Cada etapa do rito vira **estado de negócio**, **prazos**, **custas**, **selos**, **comunicação com devedor** e **arquivos de retorno** para apresentantes (CRA). Erro de fluxo (protestar antes do tríduo, cancelar sem documento) gera **responsabilidade do cartório**.

Próximo passo: [[fluxo-operacional-protesto]] · [[mapa-dominio-software]]

## Relacionado

- [[00-indice-protesto-negocio]]
- [[Orius/empresa/produtos/tabelionato-protesto]]
