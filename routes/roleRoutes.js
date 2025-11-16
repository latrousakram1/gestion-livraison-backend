const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

router.get('/', roleController.getAll);
router.post('/', roleController.create);
router.get('/:id', roleController.getById);
router.put('/:id', roleController.update);
router.delete('/:id', roleController.delete);

module.exports = router;