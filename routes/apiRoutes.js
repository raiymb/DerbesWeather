const express = require('express');
const { fetchNews } = require('../controllers/newsController');
const { fetchCurrentWeather } = require('../controllers/weatherController');
const { fetchCryptoHistory } = require('../controllers/cryptoController');
const { fetchSummary } = require('../controllers/wikipediaController');
const { fetchAstronomyPictureOfTheDay } = require('../controllers/nasaController');
const { fetchForecast } = require('../controllers/weatherbitController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/news/:query', auth, async (req, res) => {
  try {
    const data = await fetchNews(req.params.query);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.get('/weather/current/:city', auth, async (req, res) => {
  try {
    const data = await fetchCurrentWeather(req.params.city);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/crypto/:coinId', auth, async (req, res) => {
  try {
    const data = await fetchCryptoHistory(req.params.coinId);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/wikipedia/:title', auth, async (req, res) => {
  try {
    const data = await fetchSummary(req.params.title);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/weather/forecast/:city', auth, async (req, res) => {
  try {
    const data = await fetchForecast(req.params.city);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/nasa/apod', auth, async (req, res) => {
  try {
    const data = await fetchAstronomyPictureOfTheDay();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
