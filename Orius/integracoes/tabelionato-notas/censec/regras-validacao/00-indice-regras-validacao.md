---
tipo: indice
area: orius
produto: notas
central: censec
---

# Regras de validação (JSON)

Regras estruturadas para montagem e validação do payload antes do envio à CENSEC. Implementadas no n8n: [[Orius/integracoes/tabelionato-notas/censec/automacao/n8n-upload-json-gateway]].

| Central | Bloco payload | Nota |
|---------|---------------|------|
| CEP | `atosCep` | [[Orius/integracoes/tabelionato-notas/censec/regras-validacao/cep]] |
| CESDI | `atosCesdi` | [[Orius/integracoes/tabelionato-notas/censec/regras-validacao/cesdi]] |
| CTP | `declaracoes` | [[Orius/integracoes/tabelionato-notas/censec/regras-validacao/ctp]] |
| RCTO | `testamentos` | _sem regra no vault / sem validador n8n ainda_ |

Espelho editável: `C:\Users\kenio\soap-ui test\censec\regras-validacao-*.md`

Voltar: [[Orius/integracoes/tabelionato-notas/censec/00-indice-censec]]
