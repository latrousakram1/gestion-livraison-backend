const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Adresse = sequelize.define('Adresse', {
  rue: { type: DataTypes.STRING, allowNull: false },
  ville: { type: DataTypes.STRING, allowNull: false },
  province: { type: DataTypes.STRING, allowNull: false },
  code_postal: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Adresse;