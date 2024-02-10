function updateMap(coordinates) {
    const map = L.map('mapContainer').setView([coordinates.lat, coordinates.lon], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([coordinates.lat, coordinates.lon]).addTo(map);
  }
  