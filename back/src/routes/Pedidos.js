
    const express = require('express');
    const router = express.Router();
    const {PedidosController }= require('../controllers');

    router.get('/', PedidosController.listAllPedidos);
    router.get('/:Pedidos_id', PedidosController.listOnePedidos);
    router.post('/', PedidosController.createPedidos);
    router.put('/:Pedidos_id', PedidosController.updatePedidos);
    router.delete('/:Pedidos_id', PedidosController.deletePedidos);

    module.exports = router;
    