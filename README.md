# Projet d'Apprentissage : Tests Automatisés avec Playwright

## Objectif

Ce projet a été créé pour **apprendre et maîtriser** l'utilisation de **Playwright** dans le cadre de l'automatisation de tests pour des applications web. Il comprend des scripts de test visant à valider diverses fonctionnalités d'une application cible, en mettant l'accent sur les bonnes pratiques et l'utilisation efficace de Playwright.

## Fonctionnalités Testées

- **Tests d'authentification** : Vérification de la connexion et de la déconnexion avec des jeux de données valides et invalides.
- **Navigation** : Validation de la navigation entre différentes pages et de la présence des éléments clés.
- **Interactions avec les formulaires** : Tests de saisie de données, soumission de formulaires, et vérification des messages d'erreur.

## Structure du Projet

- **`tests/`** : Contient les scripts de test organisés par fonctionnalité.
- **`pages/`** : Implémente le modèle Page Object pour une meilleure maintenabilité des tests.
- **`playwright.config.js`** : Fichier de configuration de Playwright.
- **`package.json`** : Gestion des dépendances et des scripts via npm.

## Prérequis

- **Node.js** version 14 ou supérieure.
- **npm** version 6 ou supérieure.

## Installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/dejaham/InqomTest.git
   cd InqomTest
   ```

2. **Installer les dépendances** :

   ```bash
   npm install
   ```

3. **Installer les navigateurs requis par Playwright** :

   ```bash
   npx playwright install
   ```

## Exécution des Tests

- **Lancer tous les tests** :

  ```bash
  npx playwright test
  ```

- **Lancer un test spécifique** :

  ```bash
  npx playwright test nom_du_test.spec.js
  ```

- **Générer et afficher le rapport des tests** :

  ```bash
  npx playwright show-report
  ```

## Ressources Utiles

- [Documentation officielle de Playwright](https://playwright.dev/docs/intro)
- [API Reference de Playwright](https://playwright.dev/docs/api/class-playwright)

## Auteur

- **Johann de jaham** - Passionné par l'automatisation des tests et l'amélioration de la qualité logicielle. [Mon profil LinkedIn](https://www.linkedin.com/in/dejaham/).
