//
// map.js
// Theme module
//
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// const maps = document.querySelectorAll('[data-map]');
const maps = document.querySelectorAll("#map");

const accessToken = 'pk.eyJ1IjoiZml4YiIsImEiOiJjazQzMml6a3UwMzZsM29veGZ0aXM5NW55In0.QeIMO8Apa6GKDXtVHfBHlA';

maps.forEach(map => {
  const elementOptions = map.dataset.map;

  const defaultOptions = {
    container: map,
    style: 'mapbox://styles/mapbox/light-v9',
    scrollZoom: false,
    interactive: false,
    center: [-0.137424100, 51.509568600],
    zoom: 15
  };

  const options = {
    ...defaultOptions,
    ...elementOptions
  };

  // Get access token
  mapboxgl.accessToken = accessToken;

  // Init map
  new mapboxgl.Map(options);
});
