/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
const express = require('express');

const productsControllers = require('../controllers/getProductStylesById-controller.js');

const router = express.Router();

router.get('/:product_id/styles', productsControllers.getProductStylesById);

module.exports = router;
