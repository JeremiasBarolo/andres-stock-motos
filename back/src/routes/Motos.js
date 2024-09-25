
    const express = require('express');
    const router = express.Router();
    const {MotosController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', MotosController.listAllMotos);
    router.get('/usadas', MotosController.listAllMotosUsadas);
    router.get('/nuevas', MotosController.listAllMotosNuevas);
    router.get('/consignacion', MotosController.listAllMotosConsignacion);
    router.get('/:Motos_id', MotosController.listOneMotos);
    router.post('/', MotosController.createMotos);
    router.put('/:Motos_id', MotosController.updateMotos);
    router.delete('/:Motos_id', MotosController.deleteMotos);

    module.exports = router;
    