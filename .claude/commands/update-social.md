Met à jour les liens de réseaux sociaux du site.

> **WORKFLOW GIT OBLIGATOIRE** : Cette commande modifie du code. Appliquer intégralement le workflow Git décrit dans CLAUDE.md (issue -> worktree -> branche -> dev -> build -> commit -> push -> PR). Type : `feat` ou `fix`. Label : `enhancement`.

---

Les réseaux sociaux sont configurés dans `data/social.json` et affichés dans le footer via le partial `layouts/_partials/essentials/footer.html`.

## Collecte d'informations

Demander à l'utilisateur :
1. L'action : ajouter, modifier ou supprimer un réseau social
2. Pour un ajout/modification :
   - Le nom du réseau (linkedin, github, twitter, mastodon, etc.)
   - L'URL du profil/page
   - L'icône Font Awesome correspondante (le site utilise Font Awesome 6.5.1)

---

## Développement (dans le worktree)

Structure d'une entrée dans `data/social.json` :
```json
{
  "name": "linkedin",
  "icon": "fab fa-linkedin",
  "link": "https://www.linkedin.com/groups/12921552/"
}
```

1. Lire `data/social.json` pour voir l'état actuel
2. Appliquer la modification dans l'array `main`
3. Vérifier que la classe d'icône Font Awesome est valide (préfixe `fab` pour les marques, `fas` pour les icônes solid)
4. Lancer un build pour valider

Icônes Font Awesome courantes :
- LinkedIn : `fab fa-linkedin`
- GitHub : `fab fa-github`
- Twitter/X : `fab fa-x-twitter`
- Mastodon : `fab fa-mastodon`
- YouTube : `fab fa-youtube`
- Discord : `fab fa-discord`
- Slack : `fab fa-slack`
