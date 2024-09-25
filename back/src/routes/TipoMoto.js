
    const express = require('express');
    const router = express.Router();
    const {TipoMotoController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', TipoMotoController.listAllTipoMoto);
    router.get('/:TipoMoto_id', TipoMotoController.listOneTipoMoto);
    router.post('/', TipoMotoController.createTipoMoto);
    router.put('/:TipoMoto_id', TipoMotoController.updateTipoMoto);
    router.delete('/:TipoMoto_id', TipoMotoController.deleteTipoMoto);

    module.exports = router;
    