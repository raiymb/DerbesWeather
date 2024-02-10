document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('citySearchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const city = document.getElementById('cityInput').value.trim();
        if (!city) return; // Basic validation

        // Fetching weather data as an example; extend this for other APIs
        fetchWeatherData(city);
        fetchCryptoData();
        fetchNasaData();
        // Extend fetch functions for Wikipedia and News based on city
    });
});

function fetchWeatherData(city) {
    fetch(`/api/weather/${city}`)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
            updateMap(data.coordinates.lat, data.coordinates.lon);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function fetchCryptoData() {
    fetch(`/api/crypto`)
        .then(response => response.json())
        .then(data => {
            displayCryptoData(data);
        })
        .catch(error => console.error('Error fetching cryptocurrency data:', error));
}

function fetchNasaData() {
    fetch(`/api/nasa`)
        .then(response => response.json())
        .then(data => {
            displayNasaData(data);
        })
        .catch(error => console.error('Error fetching NASA data:', error));
}

function displayWeatherData(data) {
    const weatherContainer = document.getElementById('weatherData');
    weatherContainer.innerHTML = `<h3>Weather in ${data.name}</h3>
                                  <p>Temperature: ${data.temperature}°C, ${data.description}</p>`;
}

function displayCryptoData(data) {
    const cryptoContainer = document.getElementById('cryptoData');
    cryptoContainer.innerHTML = `<h3>Cryptocurrency Rates</h3><p>${data}</p>`;
}

function displayNasaData(data) {
    const nasaContainer = document.getElementById('nasaData');
    nasaContainer.innerHTML = `<h3>NASA's Picture of the Day</h3>
                               <img src="${data.url}" alt="NASA's Picture of the Day" />`;
}

function updateMap(lat, lon) {
    const map = L.map('mapContainer').setView([lat, lon], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([lat, lon]).addTo(map);
}
