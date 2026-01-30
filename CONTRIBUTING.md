# Contribuer au site CTO de Lyon

Merci de votre intérêt pour contribuer au site de la communauté CTO de Lyon !

## Prérequis

- [Hugo Extended](https://gohugo.io/installation/) >= 0.152.0
- [Node.js](https://nodejs.org/) >= 20
- npm

## Workflow de contribution

### 1. Forker et cloner

```bash
git clone --recurse-submodules https://github.com/<votre-username>/web--cto-de-lyon.fr.git
cd web--cto-de-lyon.fr
npm ci
```

### 2. Créer une issue

Avant tout développement, [créez une issue](https://github.com/delfour-co/web--cto-de-lyon.fr/issues/new) décrivant le problème ou l'amélioration.

### 3. Créer une branche

```bash
git checkout -b <type>/<issue>-<description-courte>
```

Types de branches :
- `feat/` — nouvelle fonctionnalité
- `fix/` — correction de bug
- `perf/` — optimisation de performance
- `docs/` — documentation
- `ci/` — CI/CD
- `refactor/` — refactoring
- `chore/` — maintenance

Exemple : `fix/42-remove-unused-css`

### 4. Développer

```bash
npm run dev
```

Conventions :
- **Ne jamais modifier** les fichiers dans `themes/hugoplate/` — créer des overrides dans `layouts/` ou `assets/`
- **Tailwind CSS v4** — classes utilitaires, mobile-first (`md:`, `lg:`)
- **Dark mode** — chaque style visuel doit avoir son équivalent `dark:`
- **Accessibilité** — WCAG 2.1 AA minimum (contraste, ARIA, labels, focus visible)
- **Contenu en français** — orthographe et grammaire soignées

### 5. Valider le build

```bash
npm run build
```

Le build **doit passer** avant tout commit.

### 6. Commiter

Nous utilisons les [Conventional Commits](https://www.conventionalcommits.org/) :

```
<type>: <description courte>

<description détaillée optionnelle>

Closes #<numéro-issue>
```

Types : `feat`, `fix`, `perf`, `docs`, `ci`, `refactor`, `chore`, `test`

### 7. Ouvrir une Pull Request

- Titre au format Conventional Commits
- Description avec `Closes #<numéro-issue>`
- Le build CI doit passer

## Structure du projet

| Dossier | Contenu |
|---|---|
| `layouts/` | Templates Hugo (overrides du thème) |
| `assets/css/` | CSS custom |
| `data/` | Données JSON (contenu, thème, events) |
| `content/english/` | Pages Markdown |
| `config/_default/` | Configuration Hugo |
| `static/images/` | Images statiques |
| `scripts/` | Scripts Node.js |

## Ce qu'on ne modifie pas

- `themes/hugoplate/` — c'est un submodule Git, les modifications se font via des overrides dans `layouts/` et `assets/`
- `data/luma-events.json` — généré automatiquement au build
- `public/` — output de build, dans le `.gitignore`

## Questions ?

Ouvrez une [issue](https://github.com/delfour-co/web--cto-de-lyon.fr/issues) ou contactez l'équipe à contact@cto-de-lyon.fr.
