
    const express = require('express');
    const router = express.Router();
    const {MovimientosController }= require('../controllers');

    router.get('/', MovimientosController.listAllMovimientos);
    router.get('/ventas', MovimientosController.listAllVentas);
    router.get('/historiales', MovimientosController.listHistorial);
    router.get('/listado-precios', MovimientosController.listPrecios);
    router.get('/services', MovimientosController.listAllServices);
    router.get('/ventas/motos', MovimientosController.listAllMotosMovimientos);
    router.get('/relaciones/:Movimientos_id', MovimientosController.listAllRelaciones);
    router.get('/:Movimientos_id', MovimientosController.listOneMovimientos);
    

    router.post('/', MovimientosController.createMovimientos);
    router.post('/venta/motos', MovimientosController.createVentaMoto);

    router.put('/:Movimientos_id', MovimientosController.updateMovimientos);
    router.put('/repuestos/:Movimientos_id', MovimientosController.updateVentaRepuestos);
    router.put('/venta/motos/:Movimientos_id', MovimientosController.updateVentaMotos);

    router.delete('/:Movimientos_id', MovimientosController.deleteMovimientos);
    router.delete('/venta-repuestos/:Movimientos_id', MovimientosController.deleteVentaRespuestos);
    

    module.exports = router;
    