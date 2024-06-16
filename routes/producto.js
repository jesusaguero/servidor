// Rutas para producto
const express = require('express');
const router = express.Router();
const productocontroller = require('..controllers/productocontroller');

router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProducto);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;