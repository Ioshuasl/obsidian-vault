---
tipo: indice
area: pessoal
projeto: tjdocs
---

# Endpoints — índice (documentados por você)

Sem Swagger/Postman oficial — esta lista é a fonte da verdade.

| Método | Path | Descrição | Nota |
|--------|------|-----------|------|
| POST | `/v1/consulta/busca-avancada-nova` | Busca avançada / listagem de documentos | [[Pessoal/projetos/tjdocs/api/endpoints/consulta-busca-avancada-nova]] |
| GET | `/documentos/{id}` | Detalhe do documento + PDF (`urlUploadPdf`) | [[Pessoal/projetos/tjdocs/api/endpoints/documentos-por-id]] |

## Template para próximo endpoint

Ao documentar, criar `endpoints/<nome-descritivo>.md` com:

- URL, método, auth
- Body e exemplos cURL
- Resposta (campos + exemplo real)
- Resultado de teste

Voltar: [[Pessoal/projetos/tjdocs/api/00-indice-api]]
