Affiche l'état de tous les worktrees et branches de développement en cours.

## Étapes

### 1. Lister les worktrees Git
```bash
git worktree list
```

### 2. Pour chaque worktree (hors main)
Afficher :
- Chemin du worktree
- Branche associée
- Dernier commit (hash + message)
- Statut des fichiers (modifications non commitées)

```bash
# Pour chaque worktree path
git -C <worktree-path> log -1 --oneline
git -C <worktree-path> status --short
```

### 3. PRs associées
Pour chaque branche de worktree, vérifier s'il existe une PR :
```bash
gh pr list --head "<branch-name>" --json number,title,state,url
```

### 4. Issues ouvertes
Lister les issues ouvertes du repo :
```bash
gh issue list --state open --json number,title,labels,assignees
```

### 5. Résumé sous forme de tableau

Afficher un tableau récapitulatif :
```
| Branche | Worktree | PR | Issue | Statut |
```

Avec les statuts possibles :
- `dev` : worktree actif, pas de PR
- `review` : PR ouverte, en attente de review
- `merged` : PR mergée, worktree à nettoyer
- `dirty` : modifications non commitées dans le worktree
