const { Utilisateur, Role } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const utilisateurs = await Utilisateur.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      include: [Role]
    });
    res.json({
      total: utilisateurs.count,
      page: parseInt(page),
      data: utilisateurs.rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.create(req.body);
    res.status(201).json(utilisateur);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id, {
      include: [Role]
    });
    if (!utilisateur) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    res.json(utilisateur);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    await utilisateur.update(req.body);
    res.json(utilisateur);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    await utilisateur.destroy();
    res.json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};