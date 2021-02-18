const express = require('express');
const complaintsRoutes = require('./complaints.routes');
const serviceTypesRoutes = require('./service-types.routes');
const complaintStatusRoutes = require('./complaint-status.routes');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');

const router = express.Router();

/**
 * Agrega todas las rutas de los distintos archivos
 */
router.use('/api/complaints', complaintsRoutes);
router.use('/api/service-types', serviceTypesRoutes);
router.use('/api/complaint-status', complaintStatusRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/users', userRoutes);

module.exports = router;