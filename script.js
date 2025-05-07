let map = L.map('map').setView([47.0551347757616, 8.305066129833179], 16);

let green_marker = L.icon({
    iconUrl: 'img/green_marker.png',
});

let orange_marker = L.icon({
    iconUrl: 'img/orange_marker.png',
});

let red_marker = L.icon({
    iconUrl: 'img/red_marker.png',
});

// OpenStreetMap-Tiles laden
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker mit Popup hinzufügen
L.marker([47.05846993506582, 8.310923229170475], {icon: red_marker}).addTo(map)
  .bindPopup('Löwendenkmal')
  .openPopup();

  L.marker([47.05549754312702, 8.310256739922227]).addTo(map)
  .bindPopup('Hertensteinstrasse')
  .openPopup();

  L.marker([47.053680374103024, 8.308729270948183]).addTo(map)
  .bindPopup('Schwanenplatz')
  .openPopup();

  L.marker([47.05233432536328, 8.307978424218748]).addTo(map)
  .bindPopup('Rathausquai')
  .openPopup();

  L.marker([47.0516, 8.3075]).addTo(map)
  .bindPopup('Kapellbrücke')
  .openPopup();