const axios = require('axios');
const dotenv = require('dotenv').config();
const apiKey = process.env.NASA_API_KEY;

const fetchAstronomyPictureOfTheDay = async () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching APOD data:', error);
    throw error;
  }
};

module.exports = {
  fetchAstronomyPictureOfTheDay,
};
