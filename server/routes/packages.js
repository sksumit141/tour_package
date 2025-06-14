// server/routes/packages.js
const express = require('express');
const Package = require('../models/package');
const router = express.Router();

router.get('/top-selling', async (req, res) => {
  try {
    const packages = await Package.find({ featured: true }).limit(3);
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;