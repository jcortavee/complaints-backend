const express = require("express");
const router = express.Router();

const complaintStatusController = require('../controllers/complaint-status.controller');

// Complaints status Routes
router.get('/', complaintStatusController.findAll);
router.get('/:id', complaintStatusController.findById);

module.exports = router;