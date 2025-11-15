const { Statut } = require('../models');

exports.getAll = async (req, res) => {
  const statuts = await Statut.findAll();
  res.json(statuts);
};

exports.create = async (req, res) => {
  try {
    const statut = await Statut.create(req.body);
    res.status(201).json(statut);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};