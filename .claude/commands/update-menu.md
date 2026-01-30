Modifie la navigation du site (menus principal et footer).

> **WORKFLOW GIT OBLIGATOIRE** : Cette commande modifie du code. Appliquer intégralement le workflow Git décrit dans CLAUDE.md (issue -> worktree -> branche -> dev -> build -> commit -> push -> PR). Type : `feat` ou `fix`. Label : `enhancement`.

---

La configuration des menus est dans `config/_default/menus.fr.toml`.

## Collecte d'informations

Demander à l'utilisateur :
1. Quel menu modifier : **main** (navbar) ou **footer**
2. L'action : ajouter, modifier ou supprimer une entrée
3. Pour un ajout/modification :
   - Nom affiché
   - URL (peut être une ancre `#section`, un chemin relatif `/page/`, ou un lien externe `https://...`)
   - Position (weight, les entrées sont triées par poids croissant)

---

## Développement (dans le worktree)

1. Lire `config/_default/menus.fr.toml` pour voir l'état actuel
2. Appliquer la modification en respectant le format TOML Hugo :
   ```toml
   [[main]]
   name = "Nom"
   url = "/chemin/"
   weight = 10
   ```
3. Pour les ancres (`#section`), vérifier que la section correspondante existe dans `layouts/home.html`
4. Pour les pages internes, vérifier que le fichier existe dans `content/english/`
5. Pour les liens externes, ajouter les attributs `target="_blank"` et `rel="noopener"` (géré automatiquement par le template si l'URL commence par `http`)

Note : Le bouton "Rejoignez nous" dans la navbar est configuré séparément dans `config/_default/params.toml` sous `[navigation_button]`.
