require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGODB_URI,
  gnewsApiKey: process.env.GNEWS_API_KEY,
  openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
  weatherBitApiKey: process.env.WEATHERBIT_API_KEY,
};
