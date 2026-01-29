const express = require('express');
const router = express.Router();
const trabajoController = require('../controllers/trabajoController');
const { validateTrabajo } = require('../middlewares/validation');

// GET /api/trabajos - Obtener todos los trabajos
router.get('/', trabajoController.getAll);

// POST /api/trabajos - Crear nuevo trabajo
router.post('/', validateTrabajo, trabajoController.create);

// PUT /api/trabajos/:id - Actualizar trabajo
router.put('/:id', validateTrabajo, trabajoController.update);

// PATCH /api/trabajos/:id/pagar - Marcar como pagado
router.patch('/:id/pagar', trabajoController.markAsPaid);

// DELETE /api/trabajos/:id - Eliminar trabajo
router.delete('/:id', trabajoController.delete);

module.exports = router;