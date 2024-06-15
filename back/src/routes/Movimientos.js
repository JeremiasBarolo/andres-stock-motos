
    const express = require('express');
    const router = express.Router();
    const {MovimientosController }= require('../controllers');

    router.get('/', MovimientosController.listAllMovimientos);
    router.get('/ventas', MovimientosController.listAllVentas);
    router.get('/:Movimientos_id', MovimientosController.listOneMovimientos);
    router.post('/', MovimientosController.createMovimientos);
    router.put('/:Movimientos_id', MovimientosController.updateMovimientos);
    router.delete('/:Movimientos_id', MovimientosController.deleteMovimientos);
    

    module.exports = router;
    