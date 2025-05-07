let map = L.map('map').setView([47.0551347757616, 8.305066129833179], 16);

let green_marker = L.icon({
    iconUrl: 'img/green_marker.svg',
    iconSize:     [38, 95],
    iconAnchor: [19, 75],
});

let orange_marker = L.icon({
    iconUrl: 'img/orange_marker.svg',
    iconSize:     [38, 95],
    iconAnchor: [19, 75],
});

let red_marker = L.icon({
    iconUrl: 'img/red_marker.svg',
    iconSize:     [38, 95],
    iconAnchor: [19, 75],
});

// OpenStreetMap-Tiles laden
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: 'CartoDB Dark Matter'
}).addTo(map);

// Marker mit Popup hinzufügen
L.marker([47.058341871115616, 8.310841259645938], {icon: green_marker}).addTo(map)
  .bindPopup('Löwendenkmal')
  .openPopup();

  L.marker([47.05549754312702, 8.310256739922227], {icon: green_marker}).addTo(map)
  .bindPopup('Hertensteinstrasse')
  .openPopup();

  L.marker([47.05361289724891, 8.308787900487744], {icon: green_marker}).addTo(map)
  .bindPopup('Schwanenplatz')
  .openPopup();

  L.marker([47.05233432536328, 8.307978424218748], {icon: green_marker}).addTo(map)
  .bindPopup('Rathausquai')
  .openPopup();

  L.marker([47.0516, 8.3075], {icon: green_marker}).addTo(map)
  .bindPopup('Kapellbrücke')
  .openPopup();


  const bubble = L.divIcon({
    className: 'speech-bubble',
    iconAnchor: [19, 75]
  });
  
  L.marker([47.05796842786666, 8.308897547272052], {icon: bubble }).addTo(map);

  L.marker([47.05521471908057, 8.306938713116102], {icon: bubble}).addTo(map);

  L.marker([47.05325135356975, 8.303726564553916], {icon: bubble}).addTo(map);

  L.marker([47.05147643654085, 8.298668482793298], {icon: bubble}).addTo(map);

  L.marker([47.05033486219313, 8.304265147512542], {icon: bubble}).addTo(map);