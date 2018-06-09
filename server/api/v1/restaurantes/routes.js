const express = require('express');
const router = express.Router();
const controller = require('./controller');
const auth = require('./../auth');

/*
 * /api/restaurantes           GET  - LISTAR RESTAURANTES
 * /api/restaurantes/registrar POST - REGISTRAR RESTAURANTES
 * /api/restaurantes/actualizar POST - ACTUALIZAR RESTAURANTES
 */

router.route('/')
    .get(controller.all)

router.route('/registrar')
    .post(controller.create)

router.route('/actualizar')
    .post(controller.actualizar)
    
module.exports = router;