
    const express = require('express');
    const router = express.Router();
    const {PersonasController }= require('../controllers');

    router.get('/', PersonasController.listAllPersonas);
    router.get('/:Personas_id', PersonasController.listOnePersonas);
    router.post('/', PersonasController.createPersonas);
    router.put('/:Personas_id', PersonasController.updatePersonas);
    router.delete('/:Personas_id', PersonasController.deletePersonas);

    router.get('/empleados', PersonasController.listAllEmpleados);

    module.exports = router;
    