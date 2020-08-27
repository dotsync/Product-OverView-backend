/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
const express = require('express');

const productsControllers = require('../controllers/getProductStylesById-controller.js');

const router = express.Router();

// hardcoded id: 11
// router.get('/:product_id', productsControllers.getProductStylesById);
router.get('/:product_id/styles', productsControllers.getProductStylesById);

module.exports = router;
