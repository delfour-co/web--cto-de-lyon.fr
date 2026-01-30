# CTO de Lyon

Site web de la communauté des CTO de Lyon — un lieu d'échanges tech, indépendant et engagé.

**[cto-de-lyon.fr](https://cto-de-lyon.fr)**

## Présentation

La communauté des CTO de Lyon rassemble les dirigeants techniques, CTO, VP Engineering et tech leaders de la région lyonnaise autour d'un objectif : partager, apprendre et grandir ensemble.

- **Indépendant** — Aucune dépendance à un groupe, cluster ou entreprise
- **Bénévole** — Animé par des CTO qui donnent de leur temps
- **Exclusivité Tech** — Réservé aux profils techniques

## Stack technique

| Composant | Version |
|---|---|
| [Hugo](https://gohugo.io) (extended) | 0.152.0 |
| [Hugoplate](https://github.com/zeon-studio/hugoplate) (thème) | 3.4.2 |
| [Tailwind CSS](https://tailwindcss.com) | v4 |
| Node.js | 20 LTS |

## Prérequis

- [Hugo Extended](https://gohugo.io/installation/) >= 0.152.0
- [Node.js](https://nodejs.org/) >= 20
- npm

## Installation

```bash
git clone --recurse-submodules https://github.com/delfour-co/web--cto-de-lyon.fr.git
cd web--cto-de-lyon.fr
npm ci
```

## Développement

```bash
# Serveur de développement avec hot reload
npm run dev

# Build de production
npm run build

# Fetch des événements Luma uniquement
npm run fetch-events
```

Le serveur de développement est accessible sur `http://localhost:1313/`.

## Architecture

```
├── assets/css/          # CSS custom (scroll, thème)
├── config/_default/     # Configuration Hugo (params, menus, langues)
├── content/english/     # Pages Markdown (manifeste, accessibilité, etc.)
├── data/                # Données JSON (contenu page d'accueil, événements, thème)
├── layouts/             # Templates Hugo (overrides du thème)
├── scripts/             # Scripts Node.js (fetch Luma)
├── static/images/       # Images statiques
├── themes/hugoplate/    # Thème (submodule Git — ne pas modifier)
└── .github/workflows/   # CI/CD GitHub Actions
```

### Page d'accueil data-driven

Le contenu de la page d'accueil est piloté par `data/cto-de-lyon.json` et rendu par `layouts/home.html`. Les événements sont fetchés depuis l'API [Luma](https://lu.ma/cto-de-lyon) au build via `scripts/fetch-luma-events.js`.

### Déploiement

Le site est déployé automatiquement sur GitHub Pages via GitHub Actions :
- **Push sur `main`** → build et déploiement
- **Cron quotidien (00:00 UTC)** → refresh des événements Luma
- **Dispatch manuel** → déploiement à la demande

## Contribution

Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour les guidelines de contribution.

## Équipe

| Nom | Rôle |
|---|---|
| Xavier Gorse | Co-fondateur @Elao, @Amabla et @Rix |
| Xavier Barry | CTO CTPO @pHack-Man @Jobo |
| Yann Verneau | Co-founder, CTO @Co-CTO |
| Kevin Delfour | CTO @Shiroo |

## Liens

- [Site web](https://cto-de-lyon.fr)
- [Événements Luma](https://lu.ma/cto-de-lyon)
- [Groupe LinkedIn](https://www.linkedin.com/groups/12921552/)
- [GitHub](https://github.com/cto-de-lyon)

## Licence

Ce projet est sous licence [MIT](LICENSE).
