const express = require('express');
const productsControllers = require('../controllers/productsController.js');
const productStylesControllers = require('../controllers/productStylesController.js');

const router = express.Router();
// get list of products
router.get('/list', productsControllers.getProductList);
// get product by id
router.get('/:product_id', productsControllers.getProductById);
// post product to list
router.post('/list', productsControllers.createProduct);
// get product styles by product id
router.get('/:product_id/styles', productStylesControllers.getProductStylesById);

module.exports = router;
