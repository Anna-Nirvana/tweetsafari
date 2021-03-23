//Mapbox.js template
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoibnUtcnlpcCIsImEiOiJja201Nzdia2swYmh4Mm9xYmJ5cDk4aHVrIn0.vB38tUtuXc1dV28hICwO1A';
var map = new mapboxgl.Map({
container: '#map1',
style: 'mapbox://styles/mapbox/streets-v11'
});

//Leaflet template - set geo coordinates for start view:
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

//Leaflet reference URL for Mapbox: https://api.mapbox.com/styles/v1/nu-ryip/ckmf5uxn1dao617p8ggx2dgui.html?fresh=true&title=view&access_token=pk.eyJ1IjoibnUtcnlpcCIsImEiOiJja201Nzdia2swYmh4Mm9xYmJ5cDk4aHVrIn0.vB38tUtuXc1dV28hICwO1A