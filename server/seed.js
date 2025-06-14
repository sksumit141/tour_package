require('dotenv').config();
const mongoose = require('mongoose');
const Destination = require('./models/destination');
const Package = require('./models/package');

const seedData = async () => {
  try {
    await mongoose.connect('mongodb+srv://singhksumit2004:XLRI%40581@cluster0.wtzocnh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    
    // Clear existing data
    await Destination.deleteMany({});
    await Package.deleteMany({});

    // Insert destinations
    const destinations = [
      {
        name: "Himalayan Retreat",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e",
        description: "Experience the majestic Himalayas with breathtaking views",
        startingPrice: 1200
      },
      {
        name: "Goa Beach Paradise",
        image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6",
        description: "Relax on pristine beaches with golden sands",
        startingPrice: 800
      },
      {
        name: "Kerala Backwaters",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
        description: "Cruise through serene backwaters on traditional houseboats",
        startingPrice: 950
      }
    ];

    await Destination.insertMany(destinations);

    // Insert packages
    const packages = [
      {
        title: "Golden Triangle Tour",
        duration: "7 days",
        price: 1500,
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
        rating: 4.8,
        featured: true
      },
      {
        title: "Ladakh Adventure",
        duration: "10 days",
        price: 1800,
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
        rating: 4.9,
        featured: true
      },
      {
        title: "Andaman Island Getaway",
        duration: "5 days",
        price: 1200,
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
        rating: 4.7,
        featured: true
      }
    ];

    await Package.insertMany(packages);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedData();
