const express = require("express");
const router = express.Router();

const userController = require('../controllers/user.controller');

// User Routes
router.get('/', userController.findAll);
router.get('/:id', userController.findById);

module.exports = router;