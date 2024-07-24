
    const express = require('express');
    const router = express.Router();
    const {UsuariosController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', UsuariosController.listAllUsuarios);
    router.get('/:Usuarios_id', UsuariosController.listOneUsuarios);
    router.post('/', UsuariosController.createUsuarios);
    router.put('/:Usuarios_id', UsuariosController.updateUsuarios);
    router.put('/updatePassword/:Usuarios_id', UsuariosController.updatePassword);
    router.delete('/:Usuarios_id', UsuariosController.deleteUsuarios);

    module.exports = router;
    