const container = document.querySelector("#sensor-container");

const API_URL = "https://portal.alfons.io/app/devicecounter/api/sensors?api_key=3ad08d9e67919877e4c9f364974ce07e36cbdc9e";

async function fetchSensorData(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();

        if (json.success && Array.isArray(json.data)) {
            return json.data;
        } else {
            console.error("Unerwartetes Format:", json);
            return [];
        }
    } catch (error) {
        console.error("Fehler beim Abrufen der API:", error);
        return [];
    }
}


function renderSensors(sensors) {
    sensors.forEach(sensor => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>${sensor.name}</h2>
            <p>Zähler: ${sensor.counter}</p>
            <p>Zeit: ${sensor.ISO_time} (${sensor.zone})</p>
        `;
        container.appendChild(div);
    });
}

const data = await fetchSensorData(API_URL);
console.log(data);
let hertensteinstrasse = data[0];
console.log(hertensteinstrasse)

const data1 = await fetchSensorData(API_URL);
console.log(data);
let kapellbruecke = data[1];
console.log(kapellbruecke)

const data3 = await fetchSensorData(API_URL);
console.log(data);
let loewendenkmal = data[3];
console.log(loewendenkmal)

const data4 = await fetchSensorData(API_URL);
console.log(data);
let rathausquai = data[4];
console.log(rathausquai)

const data5 = await fetchSensorData(API_URL);
console.log(data);
let schwanenplatz = data[5];
console.log(schwanenplatz)



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
.bindPopup(`
  <div class="popup-content">
    <h2>Mehr Platz als während dem Corona-Lockdown</h2>
    <p class="info">Anzahl Leute: ${loewendenkmal.counter}<br>zuletzt gemessen: ${loewendenkmal.time} Uhr</p>
    </div>`);

L.marker([47.0580694107522, 8.311013370717475], {icon: loewendenkmalIcon }).addTo(map);




L.marker([47.05549754312702, 8.310256739922227], {icon: green_marker}).addTo(map)
.bindPopup(`
  <div class="popup-content">
    <h2>Mehr Platz als während dem Corona-Lockdown</h2>
    <p class="info">Anzahl Leute: ${hertensteinstrasse.counter} <br>zuletzt gemessen: ${hertensteinstrasse.time} Uhr</p>
    </div>`);

L.marker([47.05520389812051, 8.31030314438318], { icon: hertensteinstrasseIcon }).addTo(map);



L.marker([47.05361289724891, 8.308787900487744], {icon: green_marker}).addTo(map)
.bindPopup(`
  <div class="popup-content">
    <h2>Mehr Platz als während dem Corona-Lockdown</h2>
    <p class="info">Anzahl Leute: ${schwanenplatz.counter}<br>zuletzt gemessen: ${schwanenplatz.time} Uhr</p>
    </div>`);

L.marker([47.053326495141825, 8.308983862796921], {icon: schwanenplatzIcon }).addTo(map);



L.marker([47.05233432536328, 8.307978424218748], {icon: green_marker}).addTo(map)
.bindPopup(`
  <div class="popup-content">
    <h2>Mehr Platz als während dem Corona-Lockdown</h2>
    <p class="info">Anzahl Leute: ${rathausquai.counter}<br>zuletzt gemessen: ${rathausquai.time} Uhr</p>
    </div>`);

L.marker([47.052037509036495, 8.309074616902045], { icon: rathausquaiIcon }).addTo(map);

L.marker([47.0516, 8.3075], {icon: green_marker}).addTo(map)
.bindPopup(`
  <div class="popup-content">
    <h2>Mehr Platz als während dem Corona-Lockdown</h2>
    <p class="info">Anzahl Leute: ${kapellbruecke.counter}<br>zuletzt gemessen: ${kapellbruecke.time} Uhr</p>
    </div>`);

  L.marker([47.05141583560954, 8.30709768417738], { icon: kapellbrueckeIcon }).addTo(map);
