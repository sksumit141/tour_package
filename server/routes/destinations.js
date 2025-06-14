// server/routes/destinations.js
const express = require('express');
const Destination = require('../models/destination');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find().limit(3);
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;