
    const express = require('express');
    const router = express.Router();
    const {StockController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', StockController.listAllStock);
    router.get('/disponible', StockController.listAllDisponible);
    router.get('/repuestos', StockController.listAllRepuestos);
    router.get('/stock-general', StockController.listAllStockGeneral);
    router.get('/venta-respuestos', StockController.listAllVentasRepuestos);
    router.get('/venta-accesorios', StockController.listAllVentasAccesesorios);
    router.get('/insumos', StockController.listAllInsumos);
    router.get('/servicios', StockController.listAllServicios);
    router.get('/:Stock_id', StockController.listOneStock);
    router.post('/', StockController.createStock);
    router.put('/:Stock_id', StockController.updateStock);
    router.delete('/:Stock_id', StockController.deleteStock);

    module.exports = router;
    