# Politique de sécurité

## Signaler une vulnérabilité

Si vous découvrez une faille de sécurité dans ce projet, **ne créez pas d'issue publique**. Contactez-nous de manière confidentielle :

- **Email** : contact@cto-de-lyon.fr
- **Objet** : `[SECURITY] <description courte>`

## Ce que nous attendons

- Une description de la vulnérabilité
- Les étapes pour la reproduire
- L'impact potentiel

## Notre engagement

- Accusé de réception sous 48h
- Évaluation et plan de correction sous 7 jours
- Communication transparente sur la résolution

## Périmètre

Ce projet est un site statique Hugo déployé sur GitHub Pages. Les vecteurs de sécurité concernent principalement :

- Injection de contenu via les données JSON
- Intégrité des ressources externes (CDN)
- Configuration des en-têtes de sécurité
- Dépendances npm

## Versions supportées

Seule la dernière version déployée sur `main` est supportée.
