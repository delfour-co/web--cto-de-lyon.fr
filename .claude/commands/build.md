Exécute un build complet du site Hugo et vérifie qu'il n'y a aucune erreur.

Étapes :
1. Exécuter `npm run build` (qui lance fetch-events puis hugo)
2. Analyser la sortie pour détecter :
   - Erreurs Hugo (template errors, missing partials, broken references)
   - Warnings importants (deprecated features, missing images)
   - Erreurs du script fetch-luma-events.js (API Luma inaccessible)
3. Vérifier que le dossier `public/` a été généré correctement
4. Lister les pages générées avec `find public/ -name "*.html" | sort`
5. Résumer le résultat : succès/échec, nombre de pages, taille du build, warnings éventuels

Si le build échoue, analyser l'erreur en détail et proposer un correctif.
