
    const express = require('express');
    const router = express.Router();
    const {RolController }= require('../controllers');

    router.get('/', RolController.listAllRol);
    router.get('/:Rol_id', RolController.listOneRol);
    router.post('/', RolController.createRol);
    router.put('/:Rol_id', RolController.updateRol);
    router.delete('/:Rol_id', RolController.deleteRol);

    module.exports = router;
    