const express = require('express');
const router = express.Router();
const controller = require('./controller');
const auth = require('./../auth');

/*
 * /api/pedidos           GET  - LISTAR PEDIDOS
 * /api/pedidos/registrar POST - REGISTRAR PEDIDO
 */

router.route('/')
    .get(controller.all)

router.route('/registrar')
    .post(controller.create)

router.route('/byRestaurante')
    .post(controller.buscarByRestaurante)

router.route('/byUsuario')
    .post(controller.buscarByUsuario)
    
module.exports = router;