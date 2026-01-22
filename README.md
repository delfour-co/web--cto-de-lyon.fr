# CTO de Lyon

Site web de la communauté des CTO de Lyon.

## 🚀 Commandes

```bash
npm install          # Installer les dépendances
npm run dev          # Démarrer le serveur de développement (localhost:4321)
npm run build        # Construire le site pour la production
npm run preview      # Prévisualiser le build localement
```

## 🛠️ Technologies

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## 📦 Déploiement

Le site est déployé automatiquement sur GitHub Pages via GitHub Actions à chaque push sur la branche `main`.

### Configuration GitHub Pages

1. Allez dans les paramètres de votre repository GitHub
2. Naviguez vers **Settings** > **Pages**
3. Configurez la source de déploiement :
   - **Source** : GitHub Actions
4. Le workflow `.github/workflows/deploy.yml` se déclenchera automatiquement

### Configuration du domaine personnalisé

Si vous utilisez un domaine personnalisé (comme `www.cto-de-lyon.fr`), configurez-le dans les paramètres GitHub Pages et ajoutez les enregistrements DNS appropriés.

**Note** : Si votre repository n'est pas nommé `username.github.io`, vous devrez peut-être ajouter un `base` dans `astro.config.mjs`. Voir les commentaires dans le fichier de configuration.
