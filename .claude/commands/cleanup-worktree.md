Nettoie un worktree après le merge de sa PR.

## Paramètre attendu : $ARGUMENTS
Nom de la branche à nettoyer (ex: `feat/42-add-blog`). Si vide, lister les worktrees existants et demander lequel nettoyer.

---

## Étapes

### 1. Lister les worktrees existants
```bash
git worktree list
```

### 2. Vérifier le statut de la PR associée
Si un nom de branche est fourni, vérifier que la PR est bien mergée :
```bash
gh pr list --head "<branch-name>" --state merged --json number,title,url -q '.[0]'
```

Si la PR n'est pas mergée :
- Avertir l'utilisateur
- Demander confirmation avant de supprimer le worktree
- Si la PR est encore ouverte, proposer de la consulter d'abord

### 3. Supprimer le worktree
```bash
# Depuis le repo principal (PAS depuis le worktree lui-même)
git worktree remove ../.worktrees/<branch-name>
```

Si le worktree contient des modifications non commitées, `git worktree remove` échouera.
Dans ce cas :
- Lister les fichiers modifiés
- Demander à l'utilisateur s'il veut forcer la suppression (`--force`)

### 4. Supprimer la branche locale
```bash
git branch -d <branch-name>
```

Si la branche n'a pas été mergée, `git branch -d` échouera (protection). Ne PAS utiliser `-D` sans confirmation explicite.

### 5. Optionnel : Supprimer la branche remote
```bash
git push origin --delete <branch-name>
```

Demander confirmation avant. GitHub supprime souvent automatiquement la branche après merge si configuré.

### 6. Nettoyer le répertoire parent si vide
```bash
# Si le dossier parent du worktree est vide, le supprimer
rmdir ../.worktrees/<type>/ 2>/dev/null
rmdir ../.worktrees/ 2>/dev/null
```

### 7. Résumé
- Worktree supprimé : `../.worktrees/<branch-name>`
- Branche locale supprimée : `<branch-name>`
- Branche remote : supprimée ou conservée
- Worktrees restants : `git worktree list`
