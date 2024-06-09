const express = require('express');
const router = express.Router();
const {PersonasController }= require('../controllers');

router.get('/', PersonasController.listAllProveedores);

module.exports = router;