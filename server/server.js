const express = require('express');
const cors = require('cors');
const destinationRoutes = require('./routes/destinations');
const packageRoutes = require('./routes/packages');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/packages', packageRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Adventure Travel API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});