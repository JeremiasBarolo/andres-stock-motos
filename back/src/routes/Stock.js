
    const express = require('express');
    const router = express.Router();
    const {StockController }= require('../controllers');

    router.get('/', StockController.listAllStock);
    router.get('/disponible', StockController.listAllDisponible);
    router.get('/repuestos', StockController.listAllRepuestos);
    router.get('/general', StockController.listAllStockVentaGeneral);
    router.get('/insumos', StockController.listAllInsumos);
    router.get('/servicios', StockController.listAllServicios);
    router.get('/:Stock_id', StockController.listOneStock);
    router.post('/', StockController.createStock);
    router.put('/:Stock_id', StockController.updateStock);
    router.delete('/:Stock_id', StockController.deleteStock);

    module.exports = router;
    