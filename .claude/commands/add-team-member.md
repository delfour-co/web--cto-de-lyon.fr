Ajoute un nouveau membre à l'équipe affichée sur la page d'accueil.

> **WORKFLOW GIT OBLIGATOIRE** : Cette commande modifie du code. Appliquer intégralement le workflow Git décrit dans CLAUDE.md (issue -> worktree -> branche -> dev -> build -> commit -> push -> PR). Type : `feat`. Label : `enhancement`.

---

## Collecte d'informations

Demander à l'utilisateur :
1. Nom complet du membre
2. Rôle / titre (ex: "CTO @Entreprise")
3. URL LinkedIn
4. Photo du membre (chemin vers le fichier source)

---

## Développement (dans le worktree)

1. Si une photo est fournie :
   - La convertir en AVIF et PNG si nécessaire (recommander les deux formats)
   - La placer dans `static/images/team/` avec un nom en kebab-case basé sur le prénom+nom (ex: `jdupont.avif`, `jdupont.png`)
   - Dimensions recommandées : 200x200px minimum, carré
2. Ajouter l'entrée dans `data/cto-de-lyon.json`, section `team.members` :
   ```json
   {
     "fullName": "<nom complet>",
     "role": "<rôle>",
     "imageUrl": "/images/team/<fichier>.avif",
     "linkedin": "<url linkedin>"
   }
   ```
3. Vérifier que le template `layouts/home.html` section Team rendra correctement le nouveau membre (grille responsive lg:col-3)
4. Lancer un build pour valider (`npm run build`)

Note : La grille team utilise `lg:col-3` (4 colonnes). Si plus de 4 membres, vérifier que le rendu reste correct.
