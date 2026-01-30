Ajoute une nouvelle section à la page d'accueil.

> **WORKFLOW GIT OBLIGATOIRE** : Cette commande modifie du code. Appliquer intégralement le workflow Git décrit dans CLAUDE.md (issue -> worktree -> branche -> dev -> build -> commit -> push -> PR). Type : `feat`. Label : `enhancement`.

---

La page d'accueil est composée de sections rendues depuis `data/cto-de-lyon.json` par le template `layouts/home.html`.

## Collecte d'informations

Demander à l'utilisateur :
1. Le nom de la section (clé JSON)
2. Le titre
3. Le contenu (texte, items structurés, etc.)
4. La position souhaitée dans la page (entre quelles sections existantes)

---

## Développement (dans le worktree)

1. Ajouter la structure de données dans `data/cto-de-lyon.json` en respectant les patterns existants :
   - Section simple texte : `{ "title": "...", "content": "..." }` ou `{ "title": "...", "content": ["...", "..."] }`
   - Section avec items : `{ "title": "...", "content": "...", "items": [{ "title": "...", "content": "..." }] }`
   - Section avec CTA : ajouter `"action": { "title": "...", "url": "..." }`

2. Ajouter le bloc HTML correspondant dans `layouts/home.html` à la bonne position :
   - Utiliser `{{ with $data.nomSection }}` pour wrapper la section
   - Respecter le pattern existant : `<section id="..." class="section ou section-sm">` avec container/row/col
   - Alterner `bg-gradient` pour le fond (sections paires/impaires)
   - Supporter le dark mode avec les classes `dark:`

3. Si la section doit apparaître dans la navigation, ajouter une ancre dans `config/_default/menus.fr.toml`

4. Lancer un build pour valider

Patterns de sections existants à suivre :
- Section texte centrée : voir "introduction" ou "aboutUs"
- Section avec cards : voir "mission" ou "rules"
- Section CTA : voir "joinUs" ou "contact"
- Section cards complexes : voir "events" ou "team"
