
    const express = require('express');
    const router = express.Router();
    const {DatosAdicionalesClienteController }= require('../controllers');

    router.get('/', DatosAdicionalesClienteController.listAllDatosAdicionalesCliente);
    router.get('/:DatosAdicionalesCliente_id', DatosAdicionalesClienteController.listOneDatosAdicionalesCliente);
    router.post('/', DatosAdicionalesClienteController.createDatosAdicionalesCliente);
    router.put('/:DatosAdicionalesCliente_id', DatosAdicionalesClienteController.updateDatosAdicionalesCliente);
    router.delete('/:DatosAdicionalesCliente_id', DatosAdicionalesClienteController.deleteDatosAdicionalesCliente);

    module.exports = router;
    