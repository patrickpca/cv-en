---
name: add-project
description: Insere um novo projeto na lista experience de src/metadata/metadata.js na posição cronológica correta, valida o arquivo, commita e faz push
disable-model-invocation: true
---

# Add Project

Insere um novo projeto na lista `experience` de `src/metadata/metadata.js`.

## Dados necessários

Colete do usuário (pergunte o que faltar):

- **date** — ex: `Jul/2026 - Aug/2026` ou `Dec/2025` (meses em inglês, abreviados)
- **client** — ex: `bp - GeoXYZ` (padrão: `Cliente - Empresa`)
- **projectTitle** — nome do projeto/survey
- **vessel** — nome da embarcação, ex: `Geo Ocean III` (ou `N/A`)
- **software** — lista; default se não informado: `['Qimera', 'Qinsy', 'AutoClean', 'QGis', 'GlobalMapper', 'Python']`
- **designation** — ex: `MBES Data Processor - Offshore: UK` (padrão: `Função - Modalidade: Local`)

## Passos

1. Ler `src/metadata/metadata.js` e localizar a lista `experience`.
2. Inserir o novo objeto na **posição cronológica correta** — a lista é decrescente por data de término (mais recente primeiro, no topo). Seguir formato exato dos objetos existentes (indentação, aspas simples, vírgula final).
3. Validar:
   ```bash
   node -e "const m = require('./src/metadata/metadata.js'); console.log(m.experience.length, m.experience[0].client)"
   ```
   Se der erro de sintaxe, corrigir antes de prosseguir.
4. Commit e push:
   ```bash
   git add src/metadata/metadata.js
   git commit -m "Insert: <client/projeto curto>"
   git push
   ```
5. Confirmar que o workflow de deploy disparou:
   ```bash
   gh run list --limit 1
   ```
   Se `gh` não estiver disponível, informar que o deploy no gh-pages leva ~1-2 min após o push.

## Regras

- NUNCA remover ou alterar projetos existentes — só inserir.
- Se a data do novo projeto for ambígua quanto à posição, perguntar ao usuário.
- Commit somente na branch `main` (deploy só dispara na main). Se estiver em outra branch, avisar o usuário antes.
