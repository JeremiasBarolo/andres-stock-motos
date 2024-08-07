
    const express = require('express');
    const router = express.Router();
    const {OperacionVentaMotosController }= require('../controllers');

    router.get('/', OperacionVentaMotosController.listAllOperacionVentaMotos);
    router.get('/:OperacionVentaMotos_id', OperacionVentaMotosController.listOneOperacionVentaMotos);
    router.post('/', OperacionVentaMotosController.createOperacionVentaMotos);
    router.put('/:OperacionVentaMotos_id', OperacionVentaMotosController.updateOperacionVentaMotos);
    router.delete('/:OperacionVentaMotos_id', OperacionVentaMotosController.deleteOperacionVentaMotos);

    module.exports = router;
    