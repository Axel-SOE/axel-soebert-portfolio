document.addEventListener('DOMContentLoaded', function() {

var map = L.map('map').setView([51.29, 4.49], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var brasschaatCoords = [51.29014396111914, 4.49155569097763];
var marker = L.marker(brasschaatCoords).addTo(map);
marker.bindPopup('<b>Brasschaat</b><br>2930');
});

