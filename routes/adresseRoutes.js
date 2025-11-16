const express = require('express');
const router = express.Router();
const adresseController = require('../controllers/adresseController');

router.get('/', adresseController.getAll);
router.post('/', adresseController.create);
router.get('/:id', adresseController.getById);
router.put('/:id', adresseController.update);
router.delete('/:id', adresseController.delete);

module.exports = router;