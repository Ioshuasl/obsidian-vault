---
tipo: referencia
area: orius
produto: notas
tags: [orius, notas, balcao, extraprotocolar]
status: revisado
fonte: "Tabelionato_de_Notas.md"
atualizado: 2026-05-29
---

# Atos extraprotocolares (serviços de balcão)

Serviços **rápidos**, em regra feitos **no balcão**, sem registro integral em livros protocolares.

## 1. Abertura de ficha-padrão (cartão de assinatura)

Cadastro da pessoa no cartório antes de reconhecer firmas:

- Nome, CPF, RG, endereço, profissão
- **Assinatura** de referência (e, hoje, foto/biometria)

Sem ficha aberta, o primeiro reconhecimento exige abrir firma.

**No software:** `T_PESSOA`, `T_PESSOA_CARTAO`, `T_BIOMETRIA_PESSOA` · integração **CCN** para base nacional — [[Orius/integracoes/tabelionato-notas/ccn]].

## 2. Reconhecimento de firma

O cartório confirma que a **assinatura é daquela pessoa** — não valida o mérito do contrato inteiro.

| Modalidade | Como funciona |
|------------|---------------|
| **Por semelhança** | Compara assinatura do documento com a da ficha |
| **Por autenticidade (verdadeiro)** | Pessoa assina **na frente** do escrevente |
| **Por abono** | Terceiro conhecido do cartório atesta identidade (casos específicos) |

Uso frequente: transferência de veículo, contratos de valor, risco de fraude.

**Reconhecimento de firma de empresa:** validar assinatura do representante **e** poderes (contrato social, procuração).

## 3. Autenticação de cópia

Confirma que a **cópia é fiel ao original** apresentado — não atesta verdade do conteúdo.

## 4. Certidões (balcão / livro)

- **Positiva:** encontrou o ato/documento
- **Negativa:** não encontrou o que foi buscado

Exceções de acesso: testamento de pessoa viva, sigilo judicial.

## 5. Sinal público

Validação da **assinatura de outro tabelião** (outra comarca/estado). Relacionado ao módulo **CNSIP** da CENSEC — [[integracoes-centrais-notas#CENSEC]].

## Módulo de balcão no legado

Pedidos de serviço: `T_SERVICO_PEDIDO`, `T_SERVICO_ITEMPEDIDO`, `T_SERVICO_TIPO`, etiquetas.

## Relacionado

- [[atos-protocolares]]
- [[fluxo-ato-notarial]]
- [[mapa-dominio-software-notas]]
