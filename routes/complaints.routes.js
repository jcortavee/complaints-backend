const express = require("express");
const router = express.Router();

const complaintController = require('../controllers/complaint.controller');

// Complaints Routes
router.get('/', complaintController.findAll);
router.post('/', complaintController.create);
router.get('/:id', complaintController.findById);
router.put('/:id', complaintController.update);
router.delete('/:id', complaintController.delete);

module.exports = router;