Crée une nouvelle page de contenu pour le site.

> **WORKFLOW GIT OBLIGATOIRE** : Cette commande modifie du code. Appliquer intégralement le workflow Git décrit dans CLAUDE.md (issue -> worktree -> branche -> dev -> build -> commit -> push -> PR). Type : `feat`. Label : `enhancement`.

---

## Collecte d'informations

Demander à l'utilisateur :
1. Le titre de la page
2. Une description courte (pour le SEO / meta_title)
3. Le slug souhaité (nom du fichier .md, en kebab-case)

---

## Développement (dans le worktree)

1. Créer le fichier dans `content/english/<slug>.md` avec le frontmatter Hugo :
   ```
   ---
   title: "<titre>"
   meta_title: "<titre> - CTO de Lyon"
   description: "<description>"
   draft: false
   ---
   ```
2. Demander si la page doit être ajoutée au menu de navigation (`config/_default/menus.fr.toml`), et si oui dans quel menu (main ou footer) et à quelle position (weight)
3. Proposer une structure de contenu Markdown adaptée au sujet
4. Rappeler que la page sera accessible à `https://cto-de-lyon.fr/<slug>/`

Convention : le contenu est rédigé en français. Les noms de fichiers techniques sont en kebab-case.
