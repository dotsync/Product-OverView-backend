const HttpError = require('../models/http-error.js');
const Product = require('../models/product');

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
const DUMMY_PRODUCT_ID = [{
  id: 11,
  name: 'Air Minis 250',
  slogan: 'Full court support',
  description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
  category: 'Basketball Shoes',
  default_price: '0',
  features: [
    {
      // id 11
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      // id 11
      feature: 'Material',
      value: 'FullControlSkin',
    },
  ],
}];
/* ***************** */
/* ***************************** */
const getProductList = (req, res, next) => {
  res.send(DUMMY_PRODUCTS);
};

const createProduct = async (req, res, next) => {
  // TODO input validation
  const {
    name, slogan, description, category, default_price,
  } = req.body;
  // create product
  const createdProduct = new Product({
    name,
    slogan,
    description,
    category,
    default_price,
  });
  // save product
  try {
    await createdProduct.save();
  } catch (err) {
    const error = new HttpError(
      'Creating Product failed',
      500,
    );
    // stop execution
    return next(error);
  }
  res.status(200).json({ product: createdProduct });
};

const getProductById = (req, res, next) => {
  // console.log(req.params);
  const productId = Number(req.params.product_id);
  const product = DUMMY_PRODUCT_ID.find((p) => p.id === productId);
  if (!product) {
    throw new HttpError('Could not find product with the given id');
  }
  res.json({ product });
};

exports.getProductById = getProductById;
exports.getProductList = getProductList;
exports.createProduct = createProduct;
