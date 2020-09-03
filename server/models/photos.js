const mongoose = require('mongoose');

const { Schema } = mongoose;

const photosSchema = new Schema({
  style_id: { type: String },
  photo_id: { type: String },
  thumbnail_url: { type: String, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model('Photos', photosSchema);
