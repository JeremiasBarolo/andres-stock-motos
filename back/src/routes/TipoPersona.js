
    const express = require('express');
    const router = express.Router();
    const {TipoPersonaController }= require('../controllers');
    

    router.get('/', TipoPersonaController.listAllTipoPersona);
    router.get('/:TipoPersona_id', TipoPersonaController.listOneTipoPersona);
    router.post('/', TipoPersonaController.createTipoPersona);
    router.put('/:TipoPersona_id', TipoPersonaController.updateTipoPersona);
    router.delete('/:TipoPersona_id', TipoPersonaController.deleteTipoPersona);

    module.exports = router;
    