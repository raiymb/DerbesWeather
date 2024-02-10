const axios = require('axios');
const dotenv = require('dotenv').config();
const apiKey = process.env.OPENWEATHER_API_KEY;

const fetchCurrentWeather = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

module.exports = { fetchCurrentWeather };

