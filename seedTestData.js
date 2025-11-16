// seedTestData.js
require('dotenv').config();
const { sequelize, Client, Adresse, Livraison, Utilisateur, Role, Statut } = require('./models');

async function seedTestData() {
  try {
    await sequelize.authenticate();
    console.log(' Connexion à la base réussie.');

    // Rôles
    const [admin, livreur, clientRole] = await Promise.all([
      Role.create({ nom: 'Admin' }),
      Role.create({ nom: 'Livreur' }),
      Role.create({ nom: 'Client' })
    ]);

    // Utilisateurs
    const [akram, sophie] = await Promise.all([
      Utilisateur.create({ nom: 'Akram Latrous', email: 'akram@example.com', mot_de_passe: 'Marka123456', role_id: admin.id }),
      Utilisateur.create({ nom: 'Sophie Tremblay', email: 'sophie@example.com', mot_de_passe: 'Sophie123', role_id: livreur.id })
    ]);

    // Clients
    const [jean, fatima] = await Promise.all([
      Client.create({ nom: 'Jean Dupont', email: 'jean.dupont@example.com', telephone: '514-111-2222' }),
      Client.create({ nom: 'Fatima El Idrissi', email: 'fatima.idrissi@example.com', telephone: '438-333-4444' })
    ]);

    // Adresses
    const [adr1, adr2] = await Promise.all([
      Adresse.create({ rue: '123 rue Principale', ville: 'Montréal', province: 'Québec', code_postal: 'H1A1A1' }),
      Adresse.create({ rue: '456 avenue Laurier', ville: 'Gatineau', province: 'Québec', code_postal: 'J8T2T2' })
    ]);

    // Statuts
    const [enAttente, enCours, livree] = await Promise.all([
      Statut.create({ nom: 'En attente' }),
      Statut.create({ nom: 'En cours' }),
      Statut.create({ nom: 'Livrée' })
    ]);

    // Livraisons
    await Promise.all([
      Livraison.create({
        description: 'Colis fragile à livrer',
        date_livraison: '2025-11-16',
        client_id: jean.id,
        adresse_id: adr1.id,
        utilisateur_id: akram.id,
        statut_id: enAttente.id
      }),
      Livraison.create({
        description: 'Documents urgents',
        date_livraison: '2025-11-17',
        client_id: fatima.id,
        adresse_id: adr2.id,
        utilisateur_id: sophie.id,
        statut_id: enCours.id
      })
    ]);

    console.log(' Données de test insérées avec succès.');
    process.exit(0);
  } catch (error) {
    console.error(' Erreur lors de l’insertion des données :', error);
    process.exit(1);
  }
}

seedTestData();