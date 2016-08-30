'use strict';

var toGeoJson = require('togeojson');

var L = require('../../src/leaflet.filelayer.js')(
    window,
    require('leaflet'),
    toGeoJson
);

var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; 2013 OpenStreetMap contributors'
});

var myMap = L.map('map', {
    center: [0, 0],
    zoom: 2
}).addLayer(osm);

var style = {
    color: 'red',
    opacity: 1.0,
    fillOpacity: 1.0,
    weight: 2,
    clickable: false
};

L.Control.FileLayerLoad.LABEL = '<img class="icon" src="../folder.svg" alt="file icon"/>';
L.Control.fileLayerLoad({
    fitBounds: true,
    layerOptions: {
        style: style,
        pointToLayer: function (data, latlng) {
            return L.circleMarker(
              latlng,
              { style: style }
            );
        }
    }
}).addTo(myMap);