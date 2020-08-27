/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
const express = require('express');

const productsControllers = require('../controllers/products-controllers.js');

const router = express.Router();

// hardcoded id: 11
router.get('/:product_id', productsControllers.getProductByID);

module.exports = router;
