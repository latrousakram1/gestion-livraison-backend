const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Livraison = sequelize.define('Livraison', {
  description: { type: DataTypes.STRING, allowNull: false },
  date_livraison: { type: DataTypes.DATEONLY, allowNull: false },
  client_id: { type: DataTypes.INTEGER, allowNull: false },
  adresse_id: { type: DataTypes.INTEGER, allowNull: false },
  utilisateur_id: { type: DataTypes.INTEGER, allowNull: false },
  statut_id: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Livraison;