const { Client } = require('../models');

exports.getAll = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  const clients = await Client.findAndCountAll({ limit: parseInt(limit), offset });
  res.json({ total: clients.count, page: parseInt(page), data: clients.rows });
};

exports.create = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};