//Use Node with Browserify to enable require
browserify script.js -o node.js

//Mapbox.js template
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYS1uaXJ2YW5hIiwiYSI6ImNraWNkdTNnbDBxN2wyeGw2NWNwd3k0d2EifQ.fkhFRK0trir8P5JOg82OXA';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-180, 180], // starting position [lng, lat]
zoom: 9 // starting zoom
});