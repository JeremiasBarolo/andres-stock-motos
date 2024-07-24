
    const express = require('express');
    const router = express.Router();
    const {LocalidadesController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', LocalidadesController.listAllLocalidades);
    router.get('/:Localidades_id', LocalidadesController.listOneLocalidades);
    router.post('/', LocalidadesController.createLocalidades);
    router.put('/:Localidades_id', LocalidadesController.updateLocalidades);
    router.delete('/:Localidades_id', LocalidadesController.deleteLocalidades);

    module.exports = router;
    