const express = require('express');

const productsControllers = require('../controllers/getProductList-controller.js');

const router = express.Router();

// hardcoded id: 11
router.get('/list', productsControllers.getProductList);

module.exports = router;
