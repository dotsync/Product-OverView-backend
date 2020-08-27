const HttpError = require('../models/http-error.js');

const DUMMY_PRODUCTS = [{
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
const getProductById = (req, res, next) => {
  // console.log(req.params);
  const productId = Number(req.params.product_id);
  const product = DUMMY_PRODUCTS.find((p) => p.id === productId);
  if (!product) {
    throw new HttpError('Could not find product with the given id');
  }
  res.json({ product });
};

exports.getProductById = getProductById;
