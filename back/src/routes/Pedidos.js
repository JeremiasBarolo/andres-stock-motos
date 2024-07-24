
    const express = require('express');
    const router = express.Router();
    const {PedidosController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', PedidosController.listAllPedidos);
    router.get('/pendientes', PedidosController.listAllPedidosPendientes);
    router.get('/:Pedidos_id', PedidosController.listOnePedidos);
    router.get('/stock/:Pedidos_id', PedidosController.listStockOnePedidos);

    router.post('/', PedidosController.createPedidos);
    router.put('/:Pedidos_id', PedidosController.updatePedidos);
    router.put('/stock/:Pedidos_id', PedidosController.updatePedidosStock);
    router.put('/SumarCantidades/:Pedidos_id', PedidosController.SumarCantidades);
    router.delete('/:Pedidos_id', PedidosController.deletePedidos);

    module.exports = router;
    