Effectue une vérification complète avant déploiement.

Exécuter les vérifications suivantes dans l'ordre :

### 1. Validation du build
- Exécuter `npm run build` et vérifier l'absence d'erreurs
- Compter les pages HTML générées dans `public/`

### 2. Validation du contenu JSON
- Vérifier que `data/cto-de-lyon.json` est un JSON valide
- Vérifier que toutes les sections attendues existent (hero, introduction, mission, aboutUs, team, events, joinUs, rules, contact)
- Vérifier que les URLs dans le JSON sont valides (pas de liens cassés évidents)

### 3. Validation des images
- Vérifier que chaque image référencée dans `data/cto-de-lyon.json` (team members) existe dans `static/images/`
- Vérifier que le logo (`static/images/logo.png`) et le favicon (`static/images/favicon.svg`) existent

### 4. Validation de la configuration
- Vérifier la cohérence de `config/_default/params.toml`
- Vérifier que les menus dans `menus.fr.toml` pointent vers des pages ou ancres existantes
- Vérifier que `hugo.toml` a le bon `baseURL` (`https://cto-de-lyon.fr/`)

### 5. Validation des événements
- Vérifier que `data/luma-events.json` existe et contient des données valides
- Signaler si les événements sont absents (champ `error` ou array vide)

### 6. Résumé
Produire un rapport synthétique avec statut par vérification (OK / WARNING / ERROR) et les actions correctives si nécessaire.
