const { Livraison, Client, Adresse, Utilisateur, Statut } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const livraisons = await Livraison.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      include: [Client, Adresse, Utilisateur, Statut]
    });
    res.json({
      total: livraisons.count,
      page: parseInt(page),
      data: livraisons.rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const livraison = await Livraison.create(req.body);
    res.status(201).json(livraison);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const livraison = await Livraison.findByPk(req.params.id, {
      include: [Client, Adresse, Utilisateur, Statut]
    });
    if (!livraison) return res.status(404).json({ error: 'Livraison non trouvée' });
    res.json(livraison);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const livraison = await Livraison.findByPk(req.params.id);
    if (!livraison) return res.status(404).json({ error: 'Livraison non trouvée' });
    await livraison.update(req.body);
    res.json(livraison);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const livraison = await Livraison.findByPk(req.params.id);
    if (!livraison) return res.status(404).json({ error: 'Livraison non trouvée' });
    await livraison.destroy();
    res.json({ message: 'Livraison supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};