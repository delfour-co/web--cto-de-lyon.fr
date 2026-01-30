# CTO de Lyon - Site Communautaire

## Contexte projet

Site vitrine de la communauté des CTO de Lyon, une communauté indépendante, bénévole et exclusivement technique pour les leaders tech lyonnais. Le site est déployé sur **GitHub Pages** à l'adresse `https://cto-de-lyon.fr/`.

## Stack technique

| Composant | Technologie | Version |
|-----------|-------------|---------|
| SSG | Hugo (extended) | 0.152.0 |
| Theme | Hugoplate (Zeon Studio) | 3.4.2 |
| CSS | Tailwind CSS | v4.1+ |
| Runtime | Node.js | 20 |
| CI/CD | GitHub Actions | deploy.yml / build-pr.yml |
| Hébergement | GitHub Pages | - |
| Events | Luma API (fetch au build) | - |

## Architecture du projet

```
├── archetypes/              # Templates pour nouveau contenu Hugo
├── assets/css/              # CSS custom (scroll.css, overrides Tailwind)
├── config/_default/         # Configuration Hugo (TOML)
│   ├── languages.toml       # Config langue (fr uniquement)
│   ├── menus.fr.toml        # Menus principal + footer
│   └── params.toml          # Paramètres site (navbar, theme, meta, etc.)
├── content/english/         # Pages Markdown (héritage theme, contenu FR)
│   ├── _index.md            # Page d'accueil (contenu minimal, data-driven)
│   ├── lancer-sa-communaute.md
│   ├── manifeste.md
│   └── privacy-policy.md
├── data/                    # Données structurées JSON
│   ├── cto-de-lyon.json     # Contenu principal (hero, mission, team, etc.)
│   ├── luma-events.json     # Events Luma (auto-généré au build)
│   ├── social.json          # Liens réseaux sociaux
│   └── theme.json           # Design tokens (couleurs, fonts)
├── layouts/                 # Templates Hugo custom
│   ├── baseof.html          # Layout racine
│   ├── home.html            # Page d'accueil (data-driven depuis cto-de-lyon.json)
│   └── _partials/           # Partials custom (header, footer, accessibility, etc.)
├── scripts/
│   └── fetch-luma-events.js # Script Node.js: fetch Luma API -> data/luma-events.json
├── static/                  # Assets statiques (images, CSS accessibilité)
│   ├── css/accessibility.css
│   └── images/              # Logo, favicon, photos équipe (AVIF + PNG fallback)
├── themes/hugoplate/        # Theme Hugo (NE PAS MODIFIER directement)
├── hugo.toml                # Config Hugo racine
└── package.json             # Scripts npm (dev, build, fetch-events)
```

## Commandes essentielles

```bash
# Développement local
npm run dev                    # Fetch events + hugo server (http://localhost:1313)

# Build production
npm run build                  # Fetch events + hugo build -> ./public/

# Fetch événements Luma uniquement
npm run fetch-events           # Met à jour data/luma-events.json

# Hugo seul (sans fetch events)
hugo server                    # Dev server sans refresh events
hugo                           # Build seul
```

## Patterns et conventions critiques

### Data-driven home page
La page d'accueil est **entièrement pilotée par `data/cto-de-lyon.json`**. Le template `layouts/home.html` itère sur les sections JSON (hero, introduction, mission, aboutUs, team, events, joinUs, rules, contact). Pour modifier le contenu de l'accueil, modifier le JSON, pas le template.

### Contenu Markdown
Les pages secondaires (manifeste, lancer-sa-communaute, privacy-policy) utilisent le frontmatter Hugo classique avec `title`, `meta_title`, `description`, `draft`. Le répertoire est `content/english/` (héritage du theme, le contenu est bien en français).

### Events Luma
Les événements sont fetchés au build depuis l'API Luma (`scripts/fetch-luma-events.js`). Le script écrit dans `data/luma-events.json`. En cas d'erreur API, un fallback vide est généré pour ne pas bloquer le build. Le template events dans `layouts/home.html` gère le cas "aucun événement".

### Theme Hugoplate
Le theme est dans `themes/hugoplate/`. **Ne jamais modifier les fichiers du theme directement.** Pour overrider : copier le fichier dans le dossier `layouts/` ou `assets/` racine avec le même chemin relatif. Hugo résout les templates du projet avant ceux du theme.

### Tailwind CSS
Tailwind v4 est configuré via le theme. Le projet utilise `tailwind-bootstrap-grid` pour le système de grille (`row`, `col-*`, `md:col-*`, `lg:col-*`). Les classes utilitaires Tailwind sont utilisées directement dans les templates HTML.

### Dark mode
Le site supporte light/dark/system via le theme switcher. Utiliser les classes `dark:` de Tailwind. Les tokens de couleur sont dans `data/theme.json`. Les surfaces sombres utilisent le préfixe `darkmode-` (ex: `bg-darkmode-light`, `text-darkmode-text-dark`).

### Accessibilité
Un panneau d'accessibilité custom est intégré (`accessibility-panel.html`, `accessibility-head.html`, `static/css/accessibility.css`). Le toggle est dans le header. Chaque modification doit préserver les attributs ARIA, les labels, et le contraste.

### Images
Les photos d'équipe sont en **AVIF avec fallback PNG** dans `static/images/team/`. Le favicon est en SVG. Les images utilisent le partial `image.html` avec lazy loading.

## Workflow Git obligatoire (agents)

**Tout développement doit suivre ce workflow. Aucune exception.**

Repo : `delfour-co/web--cto-de-lyon.fr` (origin: `git@github.com:delfour-co/web--cto-de-lyon.fr.git`)

### Étapes séquentielles

#### 1. Créer l'issue GitHub
```bash
gh issue create --title "<type>: <description>" --body "<contexte détaillé>" --label "<label>"
```
Labels disponibles : `bug`, `enhancement`, `documentation`, `chore`
Récupérer le numéro de l'issue créée.

#### 2. Créer le worktree + branche
```bash
# Depuis le repo principal (main), s'assurer d'être à jour
git fetch origin main
# Créer le worktree avec une branche dédiée
git worktree add ../.worktrees/<branch-name> -b <branch-name> origin/main
```

**Convention de nommage des branches** : `<type>/<issue-number>-<short-slug>`
- `feat/42-add-blog-section`
- `fix/15-broken-event-cards`
- `chore/23-update-deps`
- `docs/8-update-manifeste`

#### 3. Installer les dépendances dans le worktree
```bash
cd ../.worktrees/<branch-name>
npm ci
```

#### 4. Développer
Travailler exclusivement dans le répertoire du worktree. Vérifier le build régulièrement :
```bash
npm run build
```

#### 5. Commit(s)
```bash
git add <fichiers spécifiques>
git commit -m "<type>: <description>

<corps optionnel>

Refs #<issue-number>"
```
Format Conventional Commits : `feat:`, `fix:`, `chore:`, `ci:`, `docs:`, `refactor:`, `style:`

#### 6. Push
```bash
git push -u origin <branch-name>
```

#### 7. Créer la PR qui ferme l'issue
```bash
gh pr create --title "<type>: <description>" --body "$(cat <<'EOF'
## Summary
<description des changements>

## Changes
- <liste des modifications>

## Test plan
- [ ] Build Hugo réussi (`npm run build`)
- [ ] Vérification visuelle en local
- [ ] Dark mode vérifié
- [ ] Mobile responsive vérifié

Closes #<issue-number>

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

#### 8. Nettoyage post-merge
Après merge de la PR :
```bash
# Depuis le repo principal
git worktree remove ../.worktrees/<branch-name>
git branch -d <branch-name>
```

### Répertoire des worktrees
Tous les worktrees sont créés dans `../.worktrees/` (répertoire frère du projet). Ce répertoire est créé automatiquement par `git worktree add`. Chaque worktree est nommé comme sa branche.

### Règles impératives
- **Jamais de commit direct sur `main`** : toujours passer par branche + PR
- **Jamais de push --force sur `main`**
- **Un worktree = une issue = une branche = une PR**
- **Le build doit passer** avant le push (`npm run build`)
- **Conventional Commits** obligatoire
- **La PR doit contenir `Closes #<issue>`** pour fermer automatiquement l'issue

## Conventions de code

- **Langue du contenu** : Français (textes, commentaires dans les templates)
- **Langue du code** : Anglais (variables, noms de fichiers techniques, commit messages)
- **Commits** : Conventional Commits (`feat:`, `fix:`, `ci:`, `chore:`, `docs:`, `refactor:`, `style:`)
- **Branches** : `<type>/<issue-number>-<short-slug>` (voir workflow Git ci-dessus)
- **HTML/Templates** : Indentation 2 espaces, attributs Tailwind sur la même ligne quand possible
- **JSON** : Indentation 2 espaces
- **TOML** : Format Hugo standard
- **`main`** : branche de production (deploy auto via GitHub Actions), protégée

## Points d'attention

1. **Ne pas modifier `themes/hugoplate/`** : utiliser le mécanisme d'override Hugo
2. **`content/english/`** : le nom du dossier est hérité du theme, le contenu est en français
3. **`data/luma-events.json`** est auto-généré : ne pas le modifier manuellement
4. **Build CI** : Hugo 0.152.0 extended + Node.js 20 (voir `.github/workflows/`)
5. **Pas de `node_modules` dans le repo** : `npm ci` est exécuté en CI
6. **Assets CSS** dans `assets/css/` sont traités par Hugo Pipes, ceux dans `static/css/` sont copiés tels quels

## Liens externes clés

- **Site** : https://cto-de-lyon.fr/
- **Luma** : https://luma.com/cto-de-lyon
- **LinkedIn** : https://www.linkedin.com/groups/12921552/
- **GitHub** : https://github.com/cto-de-lyon
- **Contact** : contact@cto-de-lyon.fr
