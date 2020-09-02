const mongoose = require('mongoose');

const { Schema } = mongoose;

const styleSchema = new Schema({
  product_id: { type: Number, required: true },
  name: { type: String, required: true },
  original_price: { type: String, required: true },
  sale_price: { type: String, required: true },
  'default?': { type: Boolean, required: true },
});

module.exports = mongoose.model('Style', styleSchema);
