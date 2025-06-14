// client/src/api/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Fetch all destinations
export const fetchDestinations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/destinations`);
    return response.data.data; // Return the data array
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};

// Fetch top-selling packages
export const fetchTopSellingPackages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/packages/top-selling`);
    return response.data.data; // Return the data array
  } catch (error) {
    console.error('Error fetching packages:', error);
    throw error;
  }
};