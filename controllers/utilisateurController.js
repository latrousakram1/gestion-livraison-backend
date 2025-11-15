const { Utilisateur } = require('../models');

exports.getAll = async (req, res) => {
  const { page = 1, limit = 10, role_id } = req.query;
  const offset = (page - 1) * limit;
  const where = role_id ? { role_id } : {};
  const utilisateurs = await Utilisateur.findAndCountAll({ where, limit: parseInt(limit), offset });
  res.json({ total: utilisateurs.count, page: parseInt(page), data: utilisateurs.rows });
};

exports.create = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.create(req.body);
    res.status(201).json(utilisateur);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};