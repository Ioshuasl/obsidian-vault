---
tipo: referencia
area: meta
tags: [plane, registry, autonr]
---

# Mapas Plane ↔ automação

| Arquivo | Conteúdo |
|---------|----------|
| [[autonr-work-items]] | **Registro canônico** — `operacao` → UUID, `AUTONR-n`, URL, status |
| [[autonr-legacy]] | Títulos antigos de cards (sem prefixo `[n8n] Op`) |

## Atualizar registro

```powershell
cd Meta/integracoes/plane/scripts
node sync-plane-registry.js --project autonr
node link-vault-plane.js --project autonr
```

## Concluir card ao terminar n8n

```powershell
node mark-plane-done.js --project autonr --op ListBoletosPO
node mark-plane-done.js --project autonr --scan-workflows
```

## Frontmatter no vault (após link-vault)

```yaml
plane_work_item_id: "<uuid>"
plane_sequence_id: 38
plane_key: AUTONR-38
plane_url: "http://192.168.1.100:8090/saas/projects/.../issues/38"
plane_automation_status: pending
```
