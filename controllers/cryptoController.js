const axios = require('axios');

const fetchCryptoHistory = async (coinId, days = 30, currency = 'usd') => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    throw error;
  }
};

module.exports = { fetchCryptoHistory };
