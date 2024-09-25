
    const express = require('express');
    const router = express.Router();
    const {TipoServicioController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', TipoServicioController.listAllTipoServicio);
    router.get('/:TipoServicio_id', TipoServicioController.listOneTipoServicio);


    module.exports = router;
    