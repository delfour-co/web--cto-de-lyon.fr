Modifie le contenu d'une section de la page d'accueil.

> **WORKFLOW GIT OBLIGATOIRE** : Cette commande modifie du code. Appliquer intégralement le workflow Git décrit dans CLAUDE.md (issue -> worktree -> branche -> dev -> build -> commit -> push -> PR). Type : `fix` ou `feat` selon le changement. Label : `enhancement`.

---

La page d'accueil est data-driven : tout le contenu est dans `data/cto-de-lyon.json`.

## Collecte d'informations

Demander à l'utilisateur quelle section modifier parmi :
- **hero** : titre principal, description, CTA (title + url)
- **introduction** : titre, paragraphes de contenu (array)
- **mission** : titre, description, items (title + content chacun)
- **aboutUs** : titre, paragraphes (array)
- **team** : titre, description, membres (voir commande add-team-member)
- **events** : titre, description (les events eux-mêmes viennent de Luma)
- **joinUs** : titre, contenu, CTA, lien politique de confidentialité
- **rules** : titre, items avec titre + contenu
- **contact** : titre, contenu, CTA (title + url mailto)

---

## Développement (dans le worktree)

1. Lire la section actuelle dans `data/cto-de-lyon.json`
2. Appliquer les modifications demandées
3. Vérifier la cohérence du JSON (structure, guillemets, virgules)
4. Lancer un build pour valider (`npm run build`)

Attention : respecter la structure JSON existante. Ne pas ajouter de champs non utilisés par le template `layouts/home.html`.
