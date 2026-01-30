Modifie les design tokens du site (couleurs, typographie).

> **WORKFLOW GIT OBLIGATOIRE** : Cette commande modifie du code. Appliquer intégralement le workflow Git décrit dans CLAUDE.md (issue -> worktree -> branche -> dev -> build -> commit -> push -> PR). Type : `style` ou `feat`. Label : `enhancement`.

---

Les tokens de design sont dans `data/theme.json`. Ils contrôlent :
- **Couleurs** : primary, body, border, surfaces (light/dark)
- **Texte** : text-color, text-dark, text-light (pour chaque mode)
- **Typographie** : font families (primary: Heebo, secondary: Signika), taille de base, scale
- **Dark mode** : chaque couleur a sa variante `darkmode`

## Collecte d'informations

Demander à l'utilisateur ce qu'il souhaite modifier.

---

## Développement (dans le worktree)

1. Lire `data/theme.json` pour afficher les valeurs actuelles
2. Appliquer les modifications demandées
3. Si changement de font : vérifier que la font est chargée dans les plugins CSS (Google Fonts référencé dans `config/_default/hugo.toml` ou dans le head du theme)
4. Lancer un build pour valider
5. Recommander de tester visuellement en light ET dark mode

Attention :
- Les couleurs utilisent le format `#RRGGBB`
- Le theme Hugoplate génère `assets/css/generated-theme.css` à partir de ces tokens
- Un changement de couleur primary impacte les boutons, liens, et accents dans tout le site
