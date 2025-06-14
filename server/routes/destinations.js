// server/routes/destinations.js
const express = require('express');
const router = express.Router();

// Mock data for destinations
const mockDestinations = [
  {
    id: 1,
    name: "Himalayan Retreat",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e",
    description: "Experience the majestic Himalayas with breathtaking views",
    startingPrice: 1200,
    rating: 4.8,
    duration: "7 days"
  },
  {
    id: 2,
    name: "Goa Beach Paradise",
    image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6",
    description: "Relax on pristine beaches with golden sands",
    startingPrice: 800,
    rating: 4.5,
    duration: "5 days"
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
    description: "Cruise through serene backwaters on traditional houseboats",
    startingPrice: 950,
    rating: 4.7,
    duration: "4 days"
  }
];

// GET /api/destinations - Fetch all destinations
router.get('/', (req, res) => {
  try {
    // Simulate API delay
    setTimeout(() => {
      res.json({
        success: true,
        data: mockDestinations,
        message: "Destinations fetched successfully"
      });
    }, 500);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch destinations",
      error: err.message
    });
  }
});

module.exports = router;