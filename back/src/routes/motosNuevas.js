
const express = require('express');
const router = express.Router();
const {MotosController }= require('../controllers');

router.get('/', MotosController.listAllMotosNuevas);

module.exports = router;
