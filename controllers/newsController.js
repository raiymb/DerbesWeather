const axios = require('axios');
const dotenv = require('dotenv').config();
const api = process.env.GNEWS_API_KEY;

const fetchNews = async (query) => {
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&token=${api}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

module.exports = { fetchNews };
