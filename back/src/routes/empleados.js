
const express = require('express');
const router = express.Router();
const {PersonasController }= require('../controllers');

router.get('/', PersonasController.listAllEmpleados);

module.exports = router;
