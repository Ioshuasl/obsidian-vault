---
tipo: plane-projeto
area: orius
plane_workspace: saas
plane_identifier: DSAAS
plane_slug: dsaas
plane_project_id: "c2bd4415-5b56-451b-ba8b-32e376ab6b32"
plane_nome: Demandas
categoria: web
produto: geral
status: ativo
tags: [plane, dsaas, software]
---

# Plane — DSAAS (Demandas)

Demandas gerais de **software web**, features transversais e backlog que não cabem em um PBO/MVP específico.

| Campo | Valor |
|-------|-------|
| Issues UI | http://192.168.1.100:8090/saas/projects/c2bd4415-5b56-451b-ba8b-32e376ab6b32/issues/ |

## Documentação no vault

- [[Orius/00-indice]] — produtos e integrações
- ADRs: `Orius/conhecimento/decisoes/`

## Estados

| Nome | UUID | Grupo |
|------|------|-------|
| Backlog | `a3572228-cc3c-468a-972a-cf99c5af93c3` | backlog |
| Fazer | `d02aa661-2f37-4c9e-a685-eef6fd53c077` | unstarted |
| Analisando | `1eb7ab92-ab00-484a-ab8d-5762811019f7` | started |
| Fazendo | `b40d809b-af3e-4762-9e50-198de73f3382` | started |
| Revisando | `9d3c2029-a1ce-4332-9731-d47fb7800827` | started |
| Testando | `62ef37dc-bc30-4d05-a083-b608837740c0` | started |
| Homologando | `3d48dfdb-b72b-4fd4-8048-18420fc13d33` | started |
| Feito | `1fedc5bb-b7ac-4a39-a0d8-48c8a1b6bc16` | completed |
| Cancelado | `ebab91c6-0aba-416a-b0b5-583be357fdcf` | cancelled |

```env
PLANE_PROJECT_ID=c2bd4415-5b56-451b-ba8b-32e376ab6b32
PLANE_PROJECT_IDENTIFIER=DSAAS
PLANE_PROJECT_URL=http://192.168.1.100:8090/saas/projects/c2bd4415-5b56-451b-ba8b-32e376ab6b32/issues/
PLANE_STATE_DONE=1fedc5bb-b7ac-4a39-a0d8-48c8a1b6bc16
PLANE_STATE_TODO=d02aa661-2f37-4c9e-a685-eef6fd53c077
```

## Relacionado

- [[00-indice-projetos]]
