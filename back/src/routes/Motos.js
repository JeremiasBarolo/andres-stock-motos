
    const express = require('express');
    const router = express.Router();
    const {MotosController }= require('../controllers');

    router.get('/', MotosController.listAllMotos);
    router.get('/:Motos_id', MotosController.listOneMotos);
    router.post('/', MotosController.createMotos);
    router.put('/:Motos_id', MotosController.updateMotos);
    router.delete('/:Motos_id', MotosController.deleteMotos);

    module.exports = router;
    