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

let loewendenkmalIcon = L.divIcon({
  className: 'text-label', // optional für eigenes CSS
  html: 'Löwendenkmal',
  iconSize: [100, 40], // Größe des "Icons" (optional)
  iconAnchor: [50, 20]  // Ankerpunkt, damit es gut sitzt
});

let hertensteinstrasseIcon = L.divIcon({
  className: 'text-label', // optional für eigenes CSS
  html: 'Hertensteinstrasse',
  iconSize: [100, 40], // Größe des "Icons" (optional)
  iconAnchor: [50, 20]  // Ankerpunkt, damit es gut sitzt
});

let schwanenplatzIcon = L.divIcon({
  className: 'text-label', // optional für eigenes CSS
  html: 'Schwanenplatz',
  iconSize: [100, 40], // Größe des "Icons" (optional)
  iconAnchor: [50, 20]  // Ankerpunkt, damit es gut sitzt
});

let rathausquaiIcon = L.divIcon({
  className: 'text-label', // optional für eigenes CSS
  html: 'Rathausquai',
  iconSize: [100, 40], // Größe des "Icons" (optional)
  iconAnchor: [50, 20]  // Ankerpunkt, damit es gut sitzt
});

let kapellbrueckeIcon = L.divIcon({
  className: 'text-label', // optional für eigenes CSS
  html: 'Kapellbrücke',
  iconSize: [100, 40], // Größe des "Icons" (optional)
  iconAnchor: [50, 20]  // Ankerpunkt, damit es gut sitzt
});

// OpenStreetMap-Tiles laden
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: 'CartoDB Dark Matter'
}).addTo(map);

// Marker mit Popup hinzufügen
L.marker([47.058341871115616, 8.310841259645938], {icon: green_marker}).addTo(map)
  .bindPopup('Löwendenkmal <br> Mehr Platz als während dem Corona-Lockdown <br> Anzahl Leute: 22 <br> zuletzt gemessen: 6:58');

L.marker([47.058170455176885, 8.31080272726595], { icon: loewendenkmalIcon }).addTo(map);

L.marker([47.05549754312702, 8.310256739922227], {icon: green_marker}).addTo(map)
  .bindPopup('Hertensteinstrasse <br> Mehr Platz als während dem Corona-Lockdown <br> Anzahl Leute: 22 <br> zuletzt gemessen: 6:58');

L.marker([47.05523847502904, 8.310229805044944], { icon: hertensteinstrasseIcon }).addTo(map);

L.marker([47.05361289724891, 8.308787900487744], {icon: green_marker}).addTo(map)
  .bindPopup('Schwanenplatz <br> Mehr Platz als während dem Corona-Lockdown <br> Anzahl Leute: 22 <br> zuletzt gemessen: 6:58');

L.marker([47.05339218104952, 8.308790786301056], { icon: schwanenplatzIcon }).addTo(map);

L.marker([47.05233432536328, 8.307978424218748], {icon: green_marker}).addTo(map)
  .bindPopup('Rathausquai <br> Mehr Platz als während dem Corona-Lockdown <br> Anzahl Leute: 22 <br> zuletzt gemessen: 6:58');

L.marker([47.05208179316366, 8.307845011455354], { icon: rathausquaiIcon }).addTo(map);

L.marker([47.0516, 8.3075], {icon: green_marker}).addTo(map)
  .bindPopup('Kapellbrücke <br> Mehr Platz als während dem Corona-Lockdown <br> Anzahl Leute: 22 <br> zuletzt gemessen: 6:58');

  L.marker([47.05159596791637, 8.307537488571525], { icon: kapellbrueckeIcon }).addTo(map);
