
    const express = require('express');
    const router = express.Router();
    const {PersonasController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', PersonasController.listAllPersonas);
    router.get('/proveedores', PersonasController.listAllProveedores);
    router.get('/clientes', PersonasController.listAllClientes);
    router.get('/empleados', PersonasController.listAllEmpleados);
    router.get('/mejores-empleados', PersonasController.mejoresEmpleados);
    router.get('/mejores-clientes', PersonasController.mejoresClientes);
    router.get('/:Personas_id', PersonasController.listOnePersonas);
    
    router.post('/', PersonasController.createPersonas);
    router.put('/:Personas_id', PersonasController.updatePersonas);
    router.delete('/:Personas_id', PersonasController.deletePersonas);

    router.get('/empleados', PersonasController.listAllEmpleados);

    module.exports = router;
    