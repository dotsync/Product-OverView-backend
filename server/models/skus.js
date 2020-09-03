const mongoose = require('mongoose');

const { Schema } = mongoose;

const skuSchema = new Schema({
  style_id: { type: String },
  sku_id: { type: String },
  quantity: { type: String, required: true },
  size: { type: String, required: true },
});

module.exports = mongoose.model('Sku', skuSchema);
