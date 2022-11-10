const express = require('express');

// importacion
const controllerservice = require('../controller/service');

const router = express.Router();

// direcciones
const get_un = '/uncademy';

// get datos
router.get(get_un, controllerservice.Uncademy);

module.exports = router;