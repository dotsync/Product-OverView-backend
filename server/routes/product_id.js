/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
const express = require('express');

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
  console.log(req.params);
  const productId = req.params.product_id;
  const product = DUMMY_DATA.find((p) => p.id == productId);
  if (!product) {
    return res
      .status(404)
      .json({ message: 'Could not find the product' });
  }
  res.json({ product });
});

module.exports = router;
