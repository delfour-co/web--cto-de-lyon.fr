Lance le serveur de développement Hugo.

Étapes :
1. Vérifier que les dépendances npm sont installées (`node_modules/` existe), sinon exécuter `npm ci`
2. Lancer `npm run dev` en arrière-plan (fetch events + hugo server)
3. Attendre que le serveur soit prêt (surveiller la sortie pour "Web Server is available")
4. Confirmer l'URL d'accès (typiquement http://localhost:1313/)
5. Mentionner que le live reload est actif

Note : le serveur reste actif en arrière-plan. Utiliser le task ID pour vérifier les logs ou l'arrêter.
