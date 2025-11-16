const express = require('express');
const router = express.Router();
const livraisonController = require('../controllers/livraisonController');

router.get('/', livraisonController.getAll);
router.post('/', livraisonController.create);
router.get('/:id', livraisonController.getById);
router.put('/:id', livraisonController.update);
router.delete('/:id', livraisonController.delete);

module.exports = router;