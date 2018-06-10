const express = require('express');
const router = express.Router();
const controller = require('./controller');
const auth = require('./../auth');

/*
 * /api/platos           GET  - LISTAR PLATOS
 * /api/platos/registrar POST - REGISTRAR PLATOS
 * /api/platos/actualizar POST - ACTUALIZAR PLATOS
 */

router.route('/')
    .get(controller.all)

router.route('/registrar')
    .post(controller.create)

router.route('/actualizar')
    .post(controller.actualizar)
    
router.route('/platosByRestaurante')
    .post(controller.buscarPlatos)
    
module.exports = router;