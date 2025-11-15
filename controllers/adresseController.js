const { Adresse } = require('../models');

exports.getAll = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  const adresses = await Adresse.findAndCountAll({ limit: parseInt(limit), offset });
  res.json({ total: adresses.count, page: parseInt(page), data: adresses.rows });
};

exports.create = async (req, res) => {
  try {
    const adresse = await Adresse.create(req.body);
    res.status(201).json(adresse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};