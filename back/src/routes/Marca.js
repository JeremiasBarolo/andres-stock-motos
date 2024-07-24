
    const express = require('express');
    const router = express.Router();
    const {MarcaController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.get('/', authMiddleware , MarcaController.listAllMarca);
    router.get('/:Marca_id', authMiddleware , MarcaController.listOneMarca);
    router.post('/', authMiddleware , MarcaController.createMarca);
    router.put('/:Marca_id', authMiddleware , MarcaController.updateMarca);
    router.delete('/:Marca_id', authMiddleware , MarcaController.deleteMarca);

    module.exports = router;
    