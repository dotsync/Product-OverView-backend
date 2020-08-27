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
},
{
  id: 12,
  name: 'Air Minis 25012',
  slogan: 'Full court support12',
  description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot12',
  category: 'Basketball Shoes12',
  default_price: '012',
  features: [
    {
      feature: 'Sole12',
      value: 'Rubber12',
    },
    {
      feature: 'Material12',
      value: 'FullControlSkin12',
    },
  ],
},
];
// hardcoded id: 11
const getProductList = (req, res, next) => {
  res.send(DUMMY_PRODUCTS);
};

exports.getProductList = getProductList;
