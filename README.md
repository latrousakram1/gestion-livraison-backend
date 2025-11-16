Gestion des Livraisons
Ce projet est un backend développé avec Node.js, Express et Sequelize pour gérer les livraisons, les clients, les utilisateurs, les adresses, les rôles et les statuts. Il est conçu pour être testé avec Postman et facilement extensible pour des besoins professionnels ou académiques.
Technologies utilisées
- Node.js
- Express
- Sequelize (ORM)
- MySQL
- Postman (pour tester l’API)
Structure du projet
- models : contient les modèles Sequelize (Client, Livraison, Adresse, Utilisateur, Role, Statut)
- controllers : contient la logique métier pour chaque ressource
- routes : contient les endpoints RESTful pour chaque entité
- seedTestData.js : script d’initialisation avec des données de test
- postman : contient les collections et environnements Postman pour tester l’API
Installation
- Cloner le dépôt GitHub
- Installer les dépendances avec la commande : npm install
- Configurer le fichier .env avec les informations de connexion à la base de données
- Exécuter le script de seed : node seedTestData.js
- Lancer le serveur : npm start
Endpoints principaux
- GET /clients
- POST /clients
- GET /livraisons
- POST /livraisons
- GET /utilisateurs?page=1&limit=10
- POST /utilisateurs
- GET /roles
- POST /roles
- GET /statuts
- POST /statuts
Fonctionnalités
- Création et gestion des livraisons avec statut et adresse
- Gestion des utilisateurs avec rôles (Admin, Livreur, Client)
- Système de pagination pour les listes
- Intégration Postman pour tester tous les endpoints
- Script de seed pour insérer des données de test rapidement
Auteur
Akram Latrous
Étudiant en intelligence artificielle à La Cité collégiale
Contact : akram@example.com
