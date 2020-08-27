/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
const express = require('express');

const HttpError = require('../models/http-error.js');

const router = express.Router();

const DUMMY_DATA = [{
  id: 11,
  name: 'Air Minis 250',
  slogan: 'Full court support',
  description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
  category: 'Basketball Shoes',
  default_price: '0',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
  ],
}];
// hardcoded id: 11
router.get('/:product_id', (req, res, next) => {
  // console.log(req.params);
  const productId = req.params.product_id;
  const product = DUMMY_DATA.find((p) => p.id == productId);
  if (!product) {
    throw new HttpError('Could not find product with the given id');
  }
  res.json({ product });
});

module.exports = router;
