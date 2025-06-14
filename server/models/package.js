const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  featured: { type: Boolean, default: false }
});

module.exports = mongoose.model('Package', packageSchema);
