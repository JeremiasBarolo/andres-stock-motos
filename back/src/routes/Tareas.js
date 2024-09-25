
    const express = require('express');
    const router = express.Router();
    const {TareasController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)
    router.get('/countHome', TareasController.countHome);
    router.get('/', TareasController.listAllTareas);
    router.get('/:Tareas_id', TareasController.listOneTareas);
    router.get('/empleado/:Tareas_id', TareasController.listTareasEmpleado);
    router.get('/countHome', TareasController.countHome);
    router.post('/', TareasController.createTareas);
    router.put('/:Tareas_id', TareasController.updateTareas);
    router.delete('/:Tareas_id', TareasController.deleteTareas);

    module.exports = router;
    