const express = require('express');
const router = express.Router();

// Mock data for tour packages
const mockPackages = [
  {
    id: 1,
    title: "Golden Triangle Tour",
    duration: "7 days",
    price: 1500,
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    rating: 4.8,
    featured: true,
    description: "Explore Delhi, Agra, and Jaipur in this classic Indian tour",
    inclusions: ["Hotels", "Meals", "Sightseeing", "Transport"]
  },
  {
    id: 2,
    title: "Ladakh Adventure",
    duration: "10 days",
    price: 1800,
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    rating: 4.9,
    featured: true,
    description: "High-altitude adventure in the Land of High Passes",
    inclusions: ["Camping", "Meals", "Guide", "Permits"]
  },
  {
    id: 3,
    title: "Andaman Island Getaway",
    duration: "5 days",
    price: 1200,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
    rating: 4.7,
    featured: true,
    description: "Tropical paradise with crystal clear waters",
    inclusions: ["Resort Stay", "Breakfast", "Snorkeling", "Island Hopping"]
  }
];

// GET /api/packages/top-selling - Fetch top-selling packages
router.get('/top-selling', (req, res) => {
  try {
    // Filter featured packages
    const featuredPackages = mockPackages.filter(pkg => pkg.featured);
    
    // Simulate API delay
    setTimeout(() => {
      res.json({
        success: true,
        data: featuredPackages,
        message: "Top selling packages fetched successfully"
      });
    }, 500);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch packages",
      error: err.message
    });
  }
});

module.exports = router;
