---
tipo: indice
area: orius
produto: notas
central: ccn
tags: [orius, notas, ccn, xml, schema]
---

> **Índice CCN:** [[Orius/integracoes/tabelionato-notas/ccn/00-indice-ccn]] · **Upload:** [[Orius/integracoes/tabelionato-notas/ccn/api/endpoint-uploads]]

# CCN — índice da estrutura XML

Arquivo de importação de pessoas físicas — encoding típico **ISO-8859-1**, raiz `pessoas`.

## Hierarquia

```
pessoas (1)
└── pessoa (1..n) — xmlPessoa
    ├── cpf, nome (obrigatórios)
    ├── endereco, enderecoTrabalho — xmlEndereco
    ├── documento — xmlDocumento
    ├── carteiraHabilitacao — xmlCarteiraHabilitacao
    ├── biometria (0..n) — xmlBiometria
    ├── conjuge — xmlConjuge
    ├── ficha, cartorio, termoTitularidade, certidaoCasamento, anexo
    └── demais campos escalares (contato, filiação, flags…)
```

## Documentos

| Tema | Arquivo |
|------|---------|
| Elemento raiz | [[Orius/integracoes/tabelionato-notas/ccn/xml/estrutura-raiz]] |
| Entidade `pessoa` | [[Orius/integracoes/tabelionato-notas/ccn/xml/entidade-pessoa]] |
| `xmlEndereco` | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-endereco]] |
| `xmlDocumento` | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-documento]] |
| `xmlCarteiraHabilitacao` | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-carteira-habilitacao]] |
| `xmlBiometria` | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-biometria]] |
| `xmlConjuge` | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipo-conjuge]] |
| Anexos complementares | [[Orius/integracoes/tabelionato-notas/ccn/xml/tipos-anexos-complementares]] |
| Enumerações | [[Orius/integracoes/tabelionato-notas/ccn/xml/enumeracoes/00-indice-enumeracoes]] |
| Validações XSD | [[Orius/integracoes/tabelionato-notas/ccn/xml/validacoes-xml]] |
| Exemplo completo | [[Orius/integracoes/tabelionato-notas/ccn/xml/exemplo-xml]] |

## Artefatos

| Recurso | Link |
|---------|------|
| Exemplo XML | [CCN20251123-1.xml](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777905117317-CCN20251123-1.xml) |
| Pacote zip | [CcnExample (1).zip](https://orius-tools.s3.sa-east-1.amazonaws.com/community/1777905121285-CcnExample%20(1).zip) |
