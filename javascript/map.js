document.addEventListener('DOMContentLoaded', function() {

var map = L.map('map').setView([51.29, 4.49], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.polygon([
    [51.29774349503758, 4.440256466514076],
    [51.306973401874664, 4.4678939490561245],
    [51.31995652344387, 4.464460721411149],
    [51.351165353312034, 4.518877379584001],
    [51.307617279600436, 4.558359497501213],
    [51.26896862417096, 4.460512509619428]
],{
    color: '#49C3EB',
    fillOpacity: 0.3
}).addTo(map);
});

