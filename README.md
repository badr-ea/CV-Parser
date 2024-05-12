# Configuration de l'environnement pour l'application CV Parser avec React, Express.js, MongoDB et Git

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre système :

- [Node.js](https://nodejs.org/)
- [MongoDB Compass](https://www.mongodb.com/try/download/community) (pour la gestion de MongoDB avec une interface graphique)
- [Git](https://git-scm.com/) (pour la gestion de version et le contrôle de code source)
- Un éditeur de texte de votre choix (par exemple, Visual Studio Code)

## Clonage du dépôt

Pour commencer, clonez le dépôt de l'application CV Parser sur votre machine locale en exécutant la commande suivante dans votre terminal :

```bash
git clone https://github.com/badr-ea/CV-Parser.git
```

## Configuration du côté client (React)

1. **Installer les dépendances du côté client** : Ouvrez un terminal dans le répertoire `client` de votre projet CV Parser et exécutez la commande suivante pour installer les dépendances :

   ```bash
   cd client
   npm install
   
2. **Démarrer le serveur de développement** : Après l'installation des dépendances, vous pouvez démarrer le serveur de développement React en exécutant la commande suivante :

   ```bash
   npm start
Cela lancera votre application React dans votre navigateur par défaut à l'adresse ***http://localhost:3000***.

## Configuration du côté serveur (Express.js et MongoDB)
   
1. **Installer les dépendances du côté serveur** : Ouvrez un terminal dans le répertoire `server` de votre projet CV Parser et exécutez la commande suivante pour installer les dépendances :

   ```bash
   cd ../server
   npm install

2. **Configurer la variable d'environnement MONGODB_URI** : Dans le fichier `.env` du répertoire `server`, assurez-vous de modifier la variable MONGODB_URI selon votre configuration MongoDB.
   Par exemple :

   ```bash
   MONGODB_URI=mongodb://localhost:27017/cv-parser
   
4. **Démarrer le serveur Express** : Après l'installation des dépendances, vous pouvez démarrer le serveur Express en exécutant la commande suivante :
   
   ```bash
   node app.js

5. **Gestion des fichiers uploadés** : Les fichiers téléversés par l'application seront stockés dans le répertoire `uploads` du côté serveur. Assurez-vous que ce répertoire existe et dispose des autorisations nécessaires pour stocker des fichiers.   
 
## Configuration de MongoDB

1. **Installation de MongoDB** : Téléchargez et installez MongoDB depuis mongodb.com. Suivez les instructions pour votre système d'exploitation.
2. **Utilisation de MongoDB Compass** : Après l'installation de MongoDB, utilisez MongoDB Compass pour gérer vos bases de données MongoDB avec une interface graphique conviviale. Ouvrez MongoDB Compass et connectez-vous à votre base de données MongoDB en utilisant l'URL de connexion appropriée.





   
   
