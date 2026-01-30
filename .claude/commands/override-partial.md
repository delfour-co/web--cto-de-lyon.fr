Crée un override d'un partial du theme Hugoplate.

> **WORKFLOW GIT OBLIGATOIRE** : Cette commande modifie du code. Appliquer intégralement le workflow Git décrit dans CLAUDE.md (issue -> worktree -> branche -> dev -> build -> commit -> push -> PR). Type : `feat` ou `refactor`. Label : `enhancement`.

---

Hugo résout les templates en cherchant d'abord dans `layouts/` du projet, puis dans `themes/hugoplate/layouts/`. Pour personnaliser un partial du theme sans le modifier directement, on le copie dans le projet.

## Collecte d'informations

Demander à l'utilisateur quel partial overrider. Les partials du theme sont dans :
- `themes/hugoplate/layouts/_partials/` (composants généraux)
- `themes/hugoplate/layouts/_partials/essentials/` (head, header, footer, script, style)
- `themes/hugoplate/layouts/_partials/components/` (theme-switcher, pagination, breadcrumb, etc.)

---

## Développement (dans le worktree)

1. Lister les partials disponibles dans le theme si l'utilisateur ne sait pas lequel choisir
2. Lire le contenu du partial source dans `themes/hugoplate/layouts/`
3. Vérifier si un override existe déjà dans `layouts/` du projet
4. Si pas d'override existant : copier le fichier du theme vers le même chemin relatif dans `layouts/`
5. Appliquer les modifications demandées sur la copie dans le projet
6. Lancer un build pour valider que le override fonctionne
7. Documenter ce qui a été modifié par rapport à l'original (commentaire en haut du fichier)

Partials déjà overridés dans ce projet :
- `layouts/_partials/essentials/header.html`
- `layouts/_partials/essentials/footer.html`
- `layouts/_partials/essentials/script.html`
- `layouts/_partials/essentials/style.html`
- `layouts/_partials/image.html`
- `layouts/_partials/logo.html`
- `layouts/_partials/scroll-to-top.html`
- `layouts/_partials/accessibility-head.html`
- `layouts/_partials/accessibility-panel.html`

Attention : après une mise à jour du theme, vérifier que les overrides sont toujours compatibles.
