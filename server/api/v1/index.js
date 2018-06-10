const express = require('express');
const router = express.Router();
const users = require('./users/routes');
const restaurantes = require('./restaurantes/routes');
const platos = require('./platos/routes');


router.use('/users', users);

router.use('/restaurantes', restaurantes);

router.use('/platos', platos);

module.exports = router;