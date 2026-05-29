#Requires -Version 5.1
<#
.SYNOPSIS
  Exporta metadados das tabelas P_ (protesto) do palmelo2 e gera stubs no vault.

.DOCUMENTACAO
  Orius/desenvolvimento/scripts/firebird/export-protesto-p.md

.EXAMPLE
  .\export-protesto-p.ps1
  .\export-protesto-p.ps1 -VaultOnly
#>
param(
    [string]$Database = "192.168.1.100/3050:palmelo2",
    [string]$User = "SYSDBA",
    [string]$Password = "masterkey",
    [string]$Charset = "ISO8859_1",
    [string]$Isql = "C:\Program Files\Firebird\Firebird_4_0\isql.exe",
    [string]$TablePrefix = "P_",
    [string]$ScriptDir = $PSScriptRoot,
    [string]$JsonOut = "",
    [string]$VaultRoot = "",
    [switch]$VaultOnly
)

$ErrorActionPreference = "Stop"

# .../Orius/desenvolvimento/scripts/firebird -> .../Orius/desenvolvimento/banco-de-dados
if (-not $VaultRoot) {
    $DevRoot = Split-Path (Split-Path $ScriptDir -Parent) -Parent
    $VaultRoot = Join-Path $DevRoot "banco-de-dados"
}
$VaultRoot = [IO.Path]::GetFullPath($VaultRoot)

if (-not $JsonOut) {
    $JsonOut = Join-Path $VaultRoot "metadata\palmelo2\protesto-p-metadata.json"
}
$JsonOut = [IO.Path]::GetFullPath($JsonOut)
$JsonVaultLink = "Orius/desenvolvimento/banco-de-dados/metadata/palmelo2/protesto-p-metadata.json"
$ScriptVaultLink = "Orius/desenvolvimento/scripts/firebird/export-protesto-p.ps1"
$ScriptDocLink = "Orius/desenvolvimento/scripts/firebird/export-protesto-p.md"

$VaultTabelas = Join-Path $VaultRoot "produtos\protesto\tabelas"
$VaultIndice = Join-Path $VaultRoot "produtos\protesto\00-indice-protesto-db.md"

function Invoke-IsqlQuery {
    param([string]$Sql)
    $batch = @"
SET LIST ON;
SET ECHO OFF;
CONNECT '$Database' USER '$User' PASSWORD '$Password';
$sql
QUIT;
"@
    $tmp = [IO.Path]::GetTempFileName()
    try {
        [IO.File]::WriteAllText($tmp, $batch, [Text.UTF8Encoding]::new($false))
        $raw = & $Isql -charset $Charset -q -input $tmp 2>&1 | Out-String
        if ($LASTEXITCODE -ne 0 -and $raw -match "Statement failed|Error") {
            throw "isql falhou:`n$raw"
        }
        return $raw
    }
    finally {
        Remove-Item $tmp -Force -ErrorAction SilentlyContinue
    }
}

function Parse-IsqlListBlocks {
    param([string]$Raw)
    $blocks = @()
    $current = @{}
    foreach ($line in ($Raw -split "`r?`n")) {
        if ($line -match "^(SQL>|Database:|CON>|usage:)" -or $line.Trim() -eq "") { continue }
        if ($line -match "^([A-Z0-9_]+)\s{2,}(.+)$") {
            $key = $Matches[1].Trim()
            $val = $Matches[2].Trim()
            if ($current.ContainsKey($key)) {
                $blocks += ,([PSCustomObject]$current.Clone())
                $current = @{}
            }
            $current[$key] = $val
        }
    }
    if ($current.Count -gt 0) { $blocks += ,([PSCustomObject]$current) }
    return $blocks
}

function To-IntOrZero {
    param($Value)
    if ($null -eq $Value -or "$Value" -eq "" -or "$Value" -eq "<null>") { return 0 }
    return [int]$Value
}

function Get-FbTypeName {
    param($Row)
    $t = To-IntOrZero $Row.FIELD_TYPE
    $len = To-IntOrZero $Row.FIELD_LENGTH
    switch ($t) {
        7 { return "SMALLINT" }
        8 { return "INTEGER" }
        9 { return "QUAD" }
        10 { return "FLOAT" }
        12 { return "DATE" }
        13 { return "TIME" }
        14 { if ($len -gt 0) { "CHAR($len)" } else { "CHAR" } }
        16 { return "BIGINT" }
        27 { return "DOUBLE PRECISION" }
        35 { return "TIMESTAMP" }
        37 { if ($len -gt 0) { "VARCHAR($len)" } else { "VARCHAR" } }
        261 {
            if ($Row.FIELD_SUB_TYPE -eq "1") { return "BLOB SUB_TYPE TEXT" }
            return "BLOB"
        }
        default { return "TYPE_$t" }
    }
}

function Export-Metadata {
    $tablesRaw = Invoke-IsqlQuery @"
SELECT TRIM(RDB`$RELATION_NAME) AS TABLE_NAME
FROM RDB`$RELATIONS
WHERE RDB`$SYSTEM_FLAG = 0
  AND RDB`$VIEW_BLR IS NULL
  AND TRIM(RDB`$RELATION_NAME) STARTING WITH '$TablePrefix'
ORDER BY 1;
"@
    $tables = (Parse-IsqlListBlocks $tablesRaw | ForEach-Object { $_.TABLE_NAME }) | Where-Object { $_ }

    $colsRaw = Invoke-IsqlQuery @"
SELECT TRIM(rf.RDB`$RELATION_NAME) AS TABLE_NAME,
       TRIM(rf.RDB`$FIELD_NAME) AS FIELD_NAME,
       rf.RDB`$FIELD_POSITION AS FIELD_POSITION,
       f.RDB`$FIELD_TYPE AS FIELD_TYPE,
       f.RDB`$FIELD_SUB_TYPE AS FIELD_SUB_TYPE,
       f.RDB`$FIELD_LENGTH AS FIELD_LENGTH,
       f.RDB`$FIELD_PRECISION AS FIELD_PRECISION,
       f.RDB`$FIELD_SCALE AS FIELD_SCALE,
       rf.RDB`$NULL_FLAG AS NULL_FLAG,
       TRIM(f.RDB`$DEFAULT_SOURCE) AS DEFAULT_SOURCE,
       TRIM(cs.RDB`$CHARACTER_SET_NAME) AS CHARSET
FROM RDB`$RELATION_FIELDS rf
JOIN RDB`$FIELDS f ON f.RDB`$FIELD_NAME = rf.RDB`$FIELD_SOURCE
LEFT JOIN RDB`$CHARACTER_SETS cs ON cs.RDB`$CHARACTER_SET_ID = f.RDB`$CHARACTER_SET_ID
WHERE TRIM(rf.RDB`$RELATION_NAME) STARTING WITH '$TablePrefix'
ORDER BY 1, rf.RDB`$FIELD_POSITION;
"@
    $cols = Parse-IsqlListBlocks $colsRaw

    $pkRaw = Invoke-IsqlQuery @"
SELECT TRIM(rc.RDB`$RELATION_NAME) AS TABLE_NAME,
       TRIM(seg.RDB`$FIELD_NAME) AS FIELD_NAME,
       TRIM(rc.RDB`$CONSTRAINT_NAME) AS CONSTRAINT_NAME,
       seg.RDB`$FIELD_POSITION AS FIELD_POSITION
FROM RDB`$RELATION_CONSTRAINTS rc
JOIN RDB`$INDEX_SEGMENTS seg ON seg.RDB`$INDEX_NAME = rc.RDB`$INDEX_NAME
WHERE rc.RDB`$CONSTRAINT_TYPE = 'PRIMARY KEY'
  AND TRIM(rc.RDB`$RELATION_NAME) STARTING WITH '$TablePrefix'
ORDER BY 1, seg.RDB`$FIELD_POSITION;
"@
    $pks = Parse-IsqlListBlocks $pkRaw

    $fkRaw = Invoke-IsqlQuery @"
SELECT TRIM(fk.RDB`$RELATION_NAME) AS TABLE_NAME,
       TRIM(fk.RDB`$CONSTRAINT_NAME) AS CONSTRAINT_NAME,
       TRIM(pk.RDB`$RELATION_NAME) AS REF_TABLE,
       TRIM(iseg.RDB`$FIELD_NAME) AS FIELD_NAME,
       TRIM(iseg_pk.RDB`$FIELD_NAME) AS REF_FIELD,
       iseg.RDB`$FIELD_POSITION AS FIELD_POSITION
FROM RDB`$RELATION_CONSTRAINTS fk
JOIN RDB`$REF_CONSTRAINTS ref ON ref.RDB`$CONSTRAINT_NAME = fk.RDB`$CONSTRAINT_NAME
JOIN RDB`$RELATION_CONSTRAINTS pk ON pk.RDB`$CONSTRAINT_NAME = ref.RDB`$CONST_NAME_UQ
JOIN RDB`$INDEX_SEGMENTS iseg ON iseg.RDB`$INDEX_NAME = fk.RDB`$INDEX_NAME
JOIN RDB`$INDEX_SEGMENTS iseg_pk ON iseg_pk.RDB`$INDEX_NAME = pk.RDB`$INDEX_NAME
    AND iseg_pk.RDB`$FIELD_POSITION = iseg.RDB`$FIELD_POSITION
WHERE fk.RDB`$CONSTRAINT_TYPE = 'FOREIGN KEY'
  AND TRIM(fk.RDB`$RELATION_NAME) STARTING WITH '$TablePrefix'
ORDER BY 1, fk.RDB`$CONSTRAINT_NAME, iseg.RDB`$FIELD_POSITION;
"@
    $fks = Parse-IsqlListBlocks $fkRaw

    $idxRaw = Invoke-IsqlQuery @"
SELECT TRIM(i.RDB`$RELATION_NAME) AS TABLE_NAME,
       TRIM(i.RDB`$INDEX_NAME) AS INDEX_NAME,
       i.RDB`$UNIQUE_FLAG AS UNIQUE_FLAG,
       TRIM(seg.RDB`$FIELD_NAME) AS FIELD_NAME,
       seg.RDB`$FIELD_POSITION AS FIELD_POSITION
FROM RDB`$INDICES i
JOIN RDB`$INDEX_SEGMENTS seg ON seg.RDB`$INDEX_NAME = i.RDB`$INDEX_NAME
WHERE TRIM(i.RDB`$RELATION_NAME) STARTING WITH '$TablePrefix'
  AND i.RDB`$INDEX_NAME NOT IN (
    SELECT rc.RDB`$INDEX_NAME FROM RDB`$RELATION_CONSTRAINTS rc
    WHERE rc.RDB`$CONSTRAINT_TYPE IN ('PRIMARY KEY', 'FOREIGN KEY')
  )
ORDER BY 1, i.RDB`$INDEX_NAME, seg.RDB`$FIELD_POSITION;
"@
    $idx = Parse-IsqlListBlocks $idxRaw

    $result = [ordered]@{
        exported_at = (Get-Date -Format "yyyy-MM-dd")
        database    = $Database
        charset     = $Charset
        prefix      = $TablePrefix
        produto     = "protesto"
        script      = $ScriptVaultLink
        table_count = $tables.Count
        tables      = @{}
    }

    foreach ($t in $tables) {
        $tableCols = $cols | Where-Object { $_.TABLE_NAME -eq $t } | Sort-Object { To-IntOrZero $_.FIELD_POSITION }
        $colList = foreach ($c in $tableCols) {
            $def = $c.DEFAULT_SOURCE
            if ($def) { $def = $def -replace "^DEFAULT\s+", "" }
            if (-not $def -or $def -eq "<null>") { $def = "-" }
            $fkCol = $fks | Where-Object { $_.TABLE_NAME -eq $t -and $_.FIELD_NAME -eq $c.FIELD_NAME } | Select-Object -First 1
            [ordered]@{
                name          = $c.FIELD_NAME
                position      = To-IntOrZero $c.FIELD_POSITION
                type          = Get-FbTypeName $c
                charset       = if ($c.CHARSET -and $c.CHARSET -ne "<null>") { $c.CHARSET } else { $null }
                nullable      = -not $c.NULL_FLAG
                default       = if ($def -eq "-") { $null } else { $def }
                pk            = [bool]($pks | Where-Object { $_.TABLE_NAME -eq $t -and $_.FIELD_NAME -eq $c.FIELD_NAME })
                fk_to_table   = if ($fkCol) { $fkCol.REF_TABLE } else { $null }
                fk_to_column  = if ($fkCol) { $fkCol.REF_FIELD } else { $null }
                fk_constraint = if ($fkCol) { $fkCol.CONSTRAINT_NAME } else { $null }
            }
        }

        $pkGroups = $pks | Where-Object { $_.TABLE_NAME -eq $t } | Group-Object CONSTRAINT_NAME
        $pkList = foreach ($g in $pkGroups) {
            [ordered]@{
                name    = $g.Name
                columns = ($g.Group | Sort-Object { To-IntOrZero $_.FIELD_POSITION } | ForEach-Object { $_.FIELD_NAME })
            }
        }

        $fkGroups = $fks | Where-Object { $_.TABLE_NAME -eq $t } | Group-Object CONSTRAINT_NAME
        $fkList = foreach ($g in $fkGroups) {
            $first = $g.Group | Select-Object -First 1
            [ordered]@{
                name        = $g.Name
                ref_table   = $first.REF_TABLE
                columns     = ($g.Group | Sort-Object { To-IntOrZero $_.FIELD_POSITION } | ForEach-Object { $_.FIELD_NAME })
                ref_columns = ($g.Group | Sort-Object { To-IntOrZero $_.FIELD_POSITION } | ForEach-Object { $_.REF_FIELD })
            }
        }

        $idxGroups = $idx | Where-Object { $_.TABLE_NAME -eq $t } | Group-Object INDEX_NAME
        $idxList = foreach ($g in $idxGroups) {
            [ordered]@{
                name    = $g.Name
                unique  = ($g.Group[0].UNIQUE_FLAG -eq "1")
                columns = ($g.Group | Sort-Object { To-IntOrZero $_.FIELD_POSITION } | ForEach-Object { $_.FIELD_NAME })
            }
        }

        $result.tables[$t] = [ordered]@{
            columns      = @($colList)
            primary_keys = @($pkList)
            foreign_keys = @($fkList)
            indexes      = @($idxList)
        }
    }

    $dir = Split-Path $JsonOut -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    $json = $result | ConvertTo-Json -Depth 10
    [IO.File]::WriteAllText($JsonOut, $json, [Text.UTF8Encoding]::new($false))
    Write-Host "JSON: $JsonOut ($($tables.Count) tabelas)"
    return $result
}

function Get-DominioHint {
    param([string]$TableName)
    switch -Regex ($TableName) {
        "FEBRABAN|LAYOUT|ARQUIVO" { return "febraban-layout" }
        "CENPROT|REG_CENPROT|SEQUENCIA" { return "cenprot" }
        "TITULO|PARCELAMENTO|NOTA" { return "titulo" }
        "PESSOA|INDISP" { return "pessoa" }
        "CERTIDAO|PROTECAO" { return "certidao" }
        "LIVRO|ANDAMENTO|OCORRENCIA|HISTORICO" { return "livro-andamento" }
        "BANCO|ESPECIE|MOTIVO|CUSTAS|IRREGULAR|TEMPLATE|INST_" { return "cadastro" }
        default { return "protesto" }
    }
}

function Write-VaultStubs {
    param($Meta)
    if (-not (Test-Path $VaultTabelas)) {
        New-Item -ItemType Directory -Force -Path $VaultTabelas | Out-Null
    }

    $integracaoMap = @{
        "P_REG_CENPROT"        = @("cenprot")
        "P_SEQUENCIA_CENPROT"  = @("cenprot")
        "P_FEBRABAN"           = @("febraban")
        "P_FEBRABAN_CABECALHO" = @("febraban")
        "P_FEBRABAN_DETALHE"   = @("febraban")
        "P_FEBRABAN_RODAPE"    = @("febraban")
    }

    $tableNames = @($Meta.tables.PSObject.Properties.Name | Sort-Object)
    foreach ($t in $tableNames) {
        $info = $Meta.tables.$t
        $dominio = Get-DominioHint $t
        $integracoes = if ($integracaoMap.ContainsKey($t)) { $integracaoMap[$t] } else { @() }
        $intYaml = if ($integracoes.Count) { "`nrelaciona_integracao: [$($integracoes -join ', ')]" } else { "" }

        $schemaRows = foreach ($c in @($info.columns)) {
            $nullStr = if ($c.nullable) { "S" } else { "N" }
            $def = if ($c.default -and $c.default -ne "<null>") { $c.default -replace '\|', '\|' } else { "-" }
            $pk = if ($c.pk) { "sim" } else { "" }
            $fk = if ($c.fk_to_table) { "``$($c.fk_to_table)($($c.fk_to_column))``" } else { "" }
            "| ``$($c.name)`` | $($c.type) | $nullStr | $def | $pk | $fk | |"
        }

        $pkRows = foreach ($pk in @($info.primary_keys)) {
            $cols = $pk.columns -join ", "
            "| ``$($pk.name)`` | PRIMARY KEY | $cols |"
        }
        if (-not $pkRows) { $pkRows = "| _(nenhuma)_ | - | - |" }

        $fkRows = foreach ($fk in @($info.foreign_keys)) {
            $cols = ($fk.columns -join ", ")
            $refCols = ($fk.ref_columns -join ", ")
            "| ``$($fk.name)`` | FOREIGN KEY | $cols -> ``$($fk.ref_table)($refCols)`` |"
        }
        if (-not $fkRows) { $fkRows = "| _(nenhuma)_ | - | - |" }

        $idxRows = foreach ($ix in @($info.indexes)) {
            $u = if ($ix.unique) { "UNIQUE" } else { "INDEX" }
            $cols = $ix.columns -join ", "
            "| ``$($ix.name)`` | $u | $cols |"
        }
        if (-not $idxRows) { $idxRows = "| _(nenhuma)_ | - | - |" }

        $md = @"
---
tipo: tabela-db
area: orius
produto: protesto
dominio: $dominio
tabela: $t
banco: palmelo2
tags: [orius, db, firebird, protesto, $dominio]
status: gerado
tem_legado_delphi: true$intYaml
---

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]] | **Dominio:** ``$dominio`` | **Indice DB:** [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/00-indice-protesto-db]]

# ``$t``

## Objetivo

_(A preencher.)_

## Descricao

_(A preencher.)_

## Schema

| Coluna | Tipo (Firebird) | Null | Default | PK | FK | Descricao |
|--------|-----------------|------|---------|----|----|-----------|
$($schemaRows -join "`n")

## Chaves e indices

| Nome | Tipo | Colunas |
|------|------|---------|
$($pkRows -join "`n")
$($fkRows -join "`n")
$($idxRows -join "`n")

## Relacionamentos

_(Documentar cardinalidades na fase seguinte - ver FK acima.)_

## Regras de negocio

- 

## Legado (Delphi)

| Item | Referencia |
|------|------------|
| Unit / datamodule | |
| Telas | |

## Web (novo)

| Item | Referencia |
|------|------------|
| Entidade / API | |
| Migracao | [[Orius/desenvolvimento/refatoracao/migracao-delphi-para-web]] |

## Integracoes

_(Se aplicavel.)_

## Metadados

| Campo | Valor |
|-------|-------|
| Export JSON | [[$JsonVaultLink]] |
| Script | [[$ScriptDocLink]] |
| Extraido em | $($Meta.exported_at) |
| Charset conexao | $($Meta.charset) |
| Status | ``gerado`` - schema automatico; objetivo/descricao pendentes |

"@
        $path = Join-Path $VaultTabelas "$t.md"
        [IO.File]::WriteAllText($path, $md.TrimEnd() + "`n", [Text.UTF8Encoding]::new($false))
    }

    $links = ($tableNames | ForEach-Object { "- [[Orius/desenvolvimento/banco-de-dados/produtos/protesto/tabelas/$_|``$_``]]" }) -join "`n"
    $indice = @"
---
tipo: indice-db
area: orius
produto: protesto
banco: palmelo2
tags: [orius, db, firebird, protesto, indice]
atualizado: $($Meta.exported_at)
total_tabelas: $($tableNames.Count)
status: gerado
---

# Protesto - indice de tabelas (``P_``)

> **Produto:** [[Orius/empresa/produtos/tabelionato-protesto]]  
> **Inventario:** [[Orius/desenvolvimento/banco-de-dados/inventario/palmelo2/protesto-tabelas]]  
> **Convencoes:** [[Orius/desenvolvimento/banco-de-dados/convencoes-nomenclatura]]  
> **Script:** [[$ScriptDocLink]]

Metadados de schema (**colunas, PK, FK, indices**) gerados automaticamente. Relacionamentos de negocio e objetivo de cada tabela: _fase seguinte_.

## Tabelas ($($tableNames.Count))

$links

## Dominios sugeridos (rascunho)

| Dominio | Tabelas |
|---------|---------|
| titulo | ``P_TITULO``, ``P_PARCELAMENTO``, ``P_NOTA_TITULO``, ... |
| pessoa | ``P_PESSOA``, ``P_PESSOA_VINCULO``, indisponibilidade |
| febraban-layout | ``P_FEBRABAN*``, ``P_LAYOUT*``, ``P_ARQUIVO_TITULO`` |
| cenprot | ``P_REG_CENPROT``, ``P_SEQUENCIA_CENPROT`` |
| livro-andamento | ``P_LIVRO_*``, ``P_ANDAMENTO``, ``P_HISTORICO``, ocorrencias |
| certidao | ``P_CERTIDAO``, ``P_PROTECAO_CREDITO`` |
| cadastro | bancos, especies, motivos, custas, templates |

Voltar: [[Orius/desenvolvimento/banco-de-dados/00-indice-banco-dados]]

"@
    [IO.File]::WriteAllText($VaultIndice, $indice.TrimEnd() + "`n", [Text.UTF8Encoding]::new($false))
    Write-Host "Vault: $($tableNames.Count) notas em $VaultTabelas"
}

if ($VaultOnly) {
    if (-not (Test-Path $JsonOut)) { throw "JSON nao encontrado: $JsonOut" }
    $meta = Get-Content $JsonOut -Raw | ConvertFrom-Json
    Write-VaultStubs $meta
}
else {
    $meta = Export-Metadata
    Write-VaultStubs $meta
}

Write-Host "Concluido."
