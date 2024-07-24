
    const express = require('express');
    const router = express.Router();
    const {TipoMovimientosController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', TipoMovimientosController.listAllTipoMovimientos);
    router.get('/:TipoMovimientos_id', TipoMovimientosController.listOneTipoMovimientos);
    router.post('/', TipoMovimientosController.createTipoMovimientos);
    router.put('/:TipoMovimientos_id', TipoMovimientosController.updateTipoMovimientos);
    router.delete('/:TipoMovimientos_id', TipoMovimientosController.deleteTipoMovimientos);

    module.exports = router;
    