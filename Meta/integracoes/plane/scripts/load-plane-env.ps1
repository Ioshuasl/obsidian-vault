param(
  [string]$ProjectSlug = $env:PLANE_DEFAULT_PROJECT_SLUG
)
if (-not $ProjectSlug) { $ProjectSlug = "autonr" }

$vault = "C:\Users\kenio\OneDrive\Documentos\Obsidian Vault"
$envFile = Join-Path $vault ".env"
if (-not (Test-Path $envFile)) { throw ".env nao encontrado: $envFile" }

Get-Content $envFile | ForEach-Object {
  if ($_ -match '^\s*([^#][^=]+)=(.*)$') {
    [Environment]::SetEnvironmentVariable($matches[1].Trim(), $matches[2].Trim(), 'Process')
  }
}

$projMd = Join-Path $vault "Meta\integracoes\plane\projetos\$ProjectSlug.md"
if (-not (Test-Path $projMd)) { throw "Projeto nao encontrado: $projMd" }

$content = Get-Content $projMd -Raw
foreach ($key in @('PLANE_PROJECT_ID','PLANE_PROJECT_IDENTIFIER','PLANE_PROJECT_URL','PLANE_STATE_DONE','PLANE_STATE_TODO','PLANE_STATE_IN_PROGRESS')) {
  if ($content -match "$key=([^\s`r`n]+)") {
    Set-Item -Path "env:$key" -Value $matches[1]
  }
}

Write-Host "Plane: workspace=$env:PLANE_WORKSPACE project=$env:PLANE_PROJECT_IDENTIFIER (slug=$ProjectSlug)"
if ($env:PLANE_API_KEY) {
  Write-Host "API key: $($env:PLANE_API_KEY.Substring(0, [Math]::Min(15, $env:PLANE_API_KEY.Length)))..."
}
