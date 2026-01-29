const express = require('express');
const router = express.Router();
const trabajosRoutes = require('./trabajos');

// Rutas de trabajos
router.use('/trabajos', trabajosRoutes);

module.exports = router;