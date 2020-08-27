const express = require('express');

const productsControllers = require('../controllers/getProductById-controller.js');

const router = express.Router();

// hardcoded id: 11
router.get('/:product_id', productsControllers.getProductById);

module.exports = router;
