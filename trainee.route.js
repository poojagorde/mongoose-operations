const express = require('express');

const TraineeCotroller = require('../controller/trainee.controller');

const router = express.Router();

router.get('/', TraineeCotroller.getTrainees);

module.exports = router;