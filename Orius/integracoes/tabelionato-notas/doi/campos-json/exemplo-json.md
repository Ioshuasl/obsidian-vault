---
tipo: campos-json
area: orius
produto: notas
orgao: receita-federal
ficha: exemplo
tags: [orius, notas, doi, json, exemplo]
status: revisado
---

> **Campos:** [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]] · **Domínios:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/00-indice-tabelas-dominio]]

# Exemplo de payload JSON

Declaração original **notarial** (`tipoServico` = `"1"`) — escritura de compra e venda. Para **Registro de Imóveis**, usar `tipoServico` = `"2"` e campos de matrícula/CNM conforme [[Orius/integracoes/tabelionato-notas/doi/campos-json/ficha-dados-iniciais]].

```json
{
  "declaracoes": [
    {
      "tipoDeclaracao": "0",
      "tipoServico": "1",
      "dataLavraturaRegistroAverbacao": "2025-08-15",
      "tipoAto": "1",
      "numeroLivro": "987",
      "folha": "10-12",
      "dataNegocioJuridico": "2025-08-10",
      "tipoOperacaoImobiliaria": "11",
      "valorOperacaoImobiliaria": 450000.00,
      "valorBaseCalculoItbiItcmd": 450000.00,
      "formaPagamento": "5",
      "indicadorPermutaBens": false,
      "indicadorPagamentoDinheiro": true,
      "valorPagoMoedaCorrenteDataAto": 450000.00,
      "tipoParteTransacionada": "1",
      "valorParteTransacionada": 100.0,
      "destinacao": "1",
      "indicadorImovelPublicoUniao": false,
      "cib": "J7DNF01S",
      "matricula": "1234567",
      "codigoNacionalMatricula": "123456L00000001AA",
      "inscricaoMunicipal": "1234567890",
      "codigoIbge": "3550308",
      "areaImovel": 250.00,
      "indicadorAreaLoteNaoConsta": false,
      "areaConstruida": 180.0000,
      "indicadorAreaConstruidaNaoConsta": false,
      "tipoImovel": "67",
      "tipoLogradouro": "Rua",
      "nomeLogradouro": "Rua das Flores",
      "numeroImovel": "123",
      "complementoEndereco": "Apto 202",
      "bairro": "Centro",
      "cep": "01001000",
      "alienantes": [
        {
          "indicadorNiIdentificado": true,
          "ni": "98765432100",
          "participacao": 100.0,
          "indicadorNaoConstaParticipacaoOperacao": false,
          "indicadorEstrangeiro": false,
          "indicadorEspolio": false,
          "indicadorConjuge": false,
          "indicadorRepresentante": false,
          "representantes": []
        }
      ],
      "adquirentes": [
        {
          "indicadorNiIdentificado": true,
          "ni": "12345678901",
          "participacao": 50.0,
          "indicadorNaoConstaParticipacaoOperacao": false,
          "indicadorEstrangeiro": false,
          "indicadorEspolio": false,
          "indicadorConjuge": true,
          "indicadorConjugeParticipa": true,
          "indicadorCpfConjugeIdentificado": true,
          "cpfConjuge": "10987654321",
          "regimeBens": "2",
          "indicadorRepresentante": false,
          "representantes": []
        }
      ]
    }
  ]
}
```

Voltar: [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]]
