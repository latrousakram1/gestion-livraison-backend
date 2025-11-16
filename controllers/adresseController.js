const { Adresse } = require('../models');

exports.create = async (req, res) => {
  try {
    const adresse = await Adresse.create(req.body);
    res.status(201).json(adresse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const adresses = await Adresse.findAll();
    res.json(adresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const adresse = await Adresse.findByPk(req.params.id);
    if (!adresse) return res.status(404).json({ error: 'Adresse non trouvée' });
    res.json(adresse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const adresse = await Adresse.findByPk(req.params.id);
    if (!adresse) return res.status(404).json({ error: 'Adresse non trouvée' });
    await adresse.update(req.body);
    res.json(adresse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const adresse = await Adresse.findByPk(req.params.id);
    if (!adresse) return res.status(404).json({ error: 'Adresse non trouvée' });
    await adresse.destroy();
    res.json({ message: 'Adresse supprimée' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};