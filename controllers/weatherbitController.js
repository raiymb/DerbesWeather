const axios = require('axios');
const dotenv = require('dotenv').config();
const weatherbitApiKey = process.env.WEATHERBIT_API_KEY;


const fetchForecast = async (city) => {
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${weatherbitApiKey}&days=16`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching Weatherbit forecast data:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchForecast };
