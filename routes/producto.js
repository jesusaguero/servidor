// Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/ProductoController');

router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProducto);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;