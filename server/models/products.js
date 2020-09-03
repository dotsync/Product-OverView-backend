const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  product_id: { type: String },
  name: { type: String, required: true },
  slogan: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  default_price: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
