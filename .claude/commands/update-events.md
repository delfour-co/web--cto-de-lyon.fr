Met à jour les événements depuis l'API Luma.

Étapes :
1. Exécuter `npm run fetch-events` (lance `scripts/fetch-luma-events.js`)
2. Lire le fichier `data/luma-events.json` généré
3. Afficher un résumé lisible :
   - Nombre d'événements récupérés
   - Pour chaque événement : nom, date formatée, ville, tag éventuel
   - Date du dernier fetch (`fetchedAt`)
4. Si erreur (events vide + champ `error`), expliquer le problème et vérifier :
   - Connectivité réseau
   - Validité de l'URL API dans `scripts/fetch-luma-events.js`
   - Format de réponse de l'API Luma

Note : Ce script est automatiquement exécuté avant chaque build (`prebuild` dans package.json).
