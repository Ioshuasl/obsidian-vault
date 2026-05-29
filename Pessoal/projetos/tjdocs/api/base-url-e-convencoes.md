---
tipo: referencia
area: pessoal
projeto: tjdocs
tags: [pessoal, tjdocs, api]
---

# API — base URL e convenções

## Base URL

```
https://tjdocs-backend.tjgo.jus.br/v1
```

## Autenticação

Para o escopo deste projeto: **sem autenticação** nos endpoints utilizados.

> Se no futuro algum endpoint exigir token ou API key, documentar em nota separada e marcar no índice.

## Descoberta inicial (raiz `/v1`)

Resposta observada na raiz:

```json
{
  "_links": {
    "pastas": {
      "href": "http://tjdocs-backend.tjgo.jus.br/v1/pastas"
    }
  }
}
```

Indícios:

- API usa **`_links`** para navegação (padrão HAL-like)
- Recurso **`pastas`** confirmado em `/v1/pastas`
- URLs em `_links` podem vir com `http://` — validar redirects e usar HTTPS no cliente quando possível

## Convenções para documentar endpoints

Em cada nota de recurso, preencher:

| Campo | Exemplo |
|-------|---------|
| Método | `GET` |
| Path | `/v1/documentos` |
| Query params | `?page=1&size=20` |
| Body | — |
| Resposta | JSON + estrutura |
| Paginação | `_links`, `page`, etc. |

## Headers sugeridos no cliente

```http
Accept: application/json
User-Agent: <nome-do-seu-projeto>/1.0
```

## Ambientes

| Ambiente | URL | Notas |
|----------|-----|-------|
| Produção | `https://tjdocs-backend.tjgo.jus.br/v1` | Única conhecida até agora |

Voltar: [[Pessoal/projetos/tjdocs/api/00-indice-api]]
