var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoibnUtcnlpcCIsImEiOiJja201Nzdia2swYmh4Mm9xYmJ5cDk4aHVrIn0.vB38tUtuXc1dV28hICwO1A';
var map = new mapboxgl.Map({
container: '#map1',
style: 'mapbox://styles/mapbox/streets-v11'
});