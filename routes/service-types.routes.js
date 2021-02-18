const express = require("express");
const router = express.Router();

const serviceTypesController = require('../controllers/service-type.controller');

// Service Types Routes
router.get('/', serviceTypesController.findAll);
router.post('/', serviceTypesController.create);
router.get('/:id', serviceTypesController.findById);
router.put('/:id', serviceTypesController.update);
router.delete('/:id', serviceTypesController.delete);

module.exports = router;