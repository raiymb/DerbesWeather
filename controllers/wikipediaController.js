const axios = require('axios');

const fetchSummary = async (city) => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(city)}`;
  const response = await axios.get(url);
    const { title, extract } = response.data;
    return { title, extract };
};

module.exports = { fetchSummary };
