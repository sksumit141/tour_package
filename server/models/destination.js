// server/models/destination.js
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  startingPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Destination', destinationSchema);