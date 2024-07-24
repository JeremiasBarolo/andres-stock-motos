
    const express = require('express');
    const router = express.Router();
    const {MarcaController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/' , MarcaController.listAllMarca);
    router.get('/:Marca_id' , MarcaController.listOneMarca);
    router.post('/' , MarcaController.createMarca);
    router.put('/:Marca_id' , MarcaController.updateMarca);
    router.delete('/:Marca_id' , MarcaController.deleteMarca);

    module.exports = router;
    