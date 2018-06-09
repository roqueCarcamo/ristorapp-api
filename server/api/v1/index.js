const express = require('express');
const router = express.Router();
const users = require('./users/routes');
const restaurantes = require('./restaurantes/routes');


router.use('/users', users);

router.use('/restaurantes', restaurantes);

module.exports = router;