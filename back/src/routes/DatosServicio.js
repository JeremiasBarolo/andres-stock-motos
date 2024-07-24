
    const express = require('express');
    const router = express.Router();
    const {DatosServicioController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', DatosServicioController.listAllDatosServicio);
    router.get('/:DatosServicio_id', DatosServicioController.listOneDatosServicio);
    router.post('/', DatosServicioController.createDatosServicio);
    router.put('/insumos/:DatosServicio_id', DatosServicioController.updateInsumos);
    router.put('/:DatosServicio_id', DatosServicioController.updateDatosServicio);

    router.delete('/:DatosServicio_id', DatosServicioController.deleteDatosServicio);

    module.exports = router;
    