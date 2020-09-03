const mongoose = require('mongoose');

const { Schema } = mongoose;

const featureSchema = new Schema({
  product_id: { type: String },
  feature_id: { type: String },
  feature: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = mongoose.model('Feature', featureSchema);
