// client/src/api/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchDestinations = async () => {
  const response = await axios.get(`${API_BASE_URL}/destinations`);
  return response.data;
};

export const fetchTopSellingPackages = async () => {
  const response = await axios.get(`${API_BASE_URL}/packages/top-selling`);
  return response.data;
};