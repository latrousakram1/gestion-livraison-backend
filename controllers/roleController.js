const { Role } = require('../models');

exports.getAll = async (req, res) => {
  const roles = await Role.findAll();
  res.json(roles);
};

exports.create = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};