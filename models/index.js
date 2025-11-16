const { sequelize } = require('../config/database');

const Client = require('./Client');
const Adresse = require('./Adresse');
const Livraison = require('./Livraison');
const Utilisateur = require('./Utilisateur');
const Role = require('./Role');
const Statut = require('./Statut');

Client.hasMany(Livraison, { foreignKey: 'client_id' });
Livraison.belongsTo(Client, { foreignKey: 'client_id' });

Adresse.hasMany(Livraison, { foreignKey: 'adresse_id' });
Livraison.belongsTo(Adresse, { foreignKey: 'adresse_id' });

Utilisateur.hasMany(Livraison, { foreignKey: 'utilisateur_id' });
Livraison.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id' });

Statut.hasMany(Livraison, { foreignKey: 'statut_id' });
Livraison.belongsTo(Statut, { foreignKey: 'statut_id' });

Role.hasMany(Utilisateur, { foreignKey: 'role_id' });
Utilisateur.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = {
  sequelize,
  Client,
  Adresse,
  Livraison,
  Utilisateur,
  Role,
  Statut
};