---
tipo: campos-json
area: orius
produto: notas
orgao: receita-federal
ficha: dados-iniciais
tags: [orius, notas, doi, json]
status: revisado
---

> **Domínios:** [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoDeclaracao|tipoDeclaracao]], [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoServico|tipoServico]], [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoAto|tipoAto]], [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoLivro|tipoLivro]], [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/naturezaTitulo|naturezaTitulo]]  
> **Validação:** [[Orius/integracoes/tabelionato-notas/doi/regras-validacao/ficha-dados-iniciais]]

# Ficha: Dados Iniciais

Dados referentes ao ato notarial ou registral.

| Campo | Tipo | Tam. | Obrigatório | Descrição / Regra |
| --- | --- | --- | --- | --- |
| **tipoDeclaracao** | Alfanumérico | — | Sim | Deve ser `"0"` (Original). Retificadoras/Canceladoras não são importadas via lote. |
| **tipoServico** | Alfanumérico | — | Sim | Conforme [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoServico]]. |
| **dataLavraturaRegistroAverbacao** | Data | — | Sim | Formato: `YYYY-MM-DD`. |
| **tipoAto** | Alfanumérico | — | Sim | Conforme [[Orius/integracoes/tabelionato-notas/doi/tabelas-dominio/tipoAto]]. Varia segundo o `tipoServico`. |
| **tipoLivro** | Alfanumérico | — | Sim* | *Obrigatório se `tipoServico` = Registro de Imóveis (`"2"`). |
| **numeroLivro** | Alfanumérico | 7 | Opcional* | Se `tipoServico` = Notarial (`"1"`), deve começar com número. Se Registro de Imóveis, incluir apenas se `tipoLivro` = Transcrição (`"2"`). Opcional se MNE preenchida. |
| **folha** | Alfanumérico | 7 | Sim | Páginas/Folhas (ex.: início-fim). |
| **matriculaNotarialEletronica** | Alfanumérico | 24 | Não | MNE. Somente se `tipoServico` = Notarial. Formato: `CCCCCC.AAAA.MM.DD.NNNNNNNN-DD` (sem traços/pontos). DV: Mod 97 Base 10 (ISO 7064). |
| **matricula** | Alfanumérico | 15 | Opcional* | Obrigatório se `tipoServico` = Registro de Imóveis e `tipoLivro` = Matrícula (`"1"`), salvo se CNM preenchido. |
| **transcricao** | Inteiro | 8 | Opcional* | Obrigatório se `tipoLivro` = Transcrição das Transmissões (`"2"`). |
| **codigoNacionalMatricula** | Alfanumérico | — | Opcional* | CNM. Formato: `CCCCCC.L.NNNNNNN-DD` (sem pontos/traços). DV: Mod 97 Base 10. |
| **numeroRegistroAverbacao** | Alfanumérico | 7 | Sim* | Obrigatório se `tipoServico` = Registro de Imóveis e `tipoLivro` = Matrícula. |
| **naturezaTitulo** | Alfanumérico | — | Sim* | Obrigatório se `tipoServico` = Registro de Imóveis. |
| **numeroRegistro** | Alfanumérico | 30 | Sim* | Obrigatório se `tipoServico` = Registro de Títulos e Documentos (`"3"`). |
| **existeDoiAnterior** | Booleano | — | Sim* | Obrigatório se `tipoServico` = Registro de Imóveis. Informar se consta "Emitida a DOI" no título. |

## tipoAto por tipoServico

| tipoServico | Opções de tipoAto |
|-------------|-------------------|
| Notarial (`1`) | Escritura (`1`), Procuração (`2`) |
| Registro de Imóveis (`2`) | Averbação (`3`), Registro (`4`) |
| Registro de Títulos e Documentos (`3`) | Registros para fins de publicidade (`5`), Registro para fins de conservação (`6`) |

Voltar: [[Orius/integracoes/tabelionato-notas/doi/campos-json/00-indice-campos-json]]
