const { Livraison } = require('../models');

exports.getAll = async (req, res) => {
  const { page = 1, limit = 10, statut_id } = req.query;
  const offset = (page - 1) * limit;
  const where = statut_id ? { statut_id } : {};
  const livraisons = await Livraison.findAndCountAll({ where, limit: parseInt(limit), offset });
  res.json({ total: livraisons.count, page: parseInt(page), data: livraisons.rows });
};

exports.create = async (req, res) => {
  try {
    const livraison = await Livraison.create(req.body);
    res.status(201).json(livraison);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};