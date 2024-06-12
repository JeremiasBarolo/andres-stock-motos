
const express = require('express');
const router = express.Router();
const {MotosController }= require('../controllers');

router.get('/', MotosController.listAllMotosUsadas);

module.exports = router;
