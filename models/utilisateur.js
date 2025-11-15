const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Utilisateur = sequelize.define('Utilisateur', {
  nom: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  mot_de_passe: { type: DataTypes.STRING, allowNull: false },
  role_id: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Utilisateur;