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
console.log("Sensor-Daten:", data);

let hertensteinstrasse = data[0];
let kapellbruecke = data[1];
let loewendenkmal = data[3];
let rathausquai = data[4];
let schwanenplatz = data[5];

console.log({ hertensteinstrasse, kapellbruecke, loewendenkmal, rathausquai, schwanenplatz });




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




function formatUnixTimeToHHMM(isoTime) {
  const date = new Date(isoTime);  // Direktes Umwandeln des ISO-Zeitstrings
  if (isNaN(date)) return 'Keine Zeit verfügbar';

  return date.toLocaleTimeString('de-CH', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

loewendenkmal.time = formatUnixTimeToHHMM(loewendenkmal.ISO_time);
kapellbruecke.time = formatUnixTimeToHHMM(kapellbruecke.ISO_time);
hertensteinstrasse.time = formatUnixTimeToHHMM(hertensteinstrasse.ISO_time);
rathausquai.time = formatUnixTimeToHHMM(rathausquai.ISO_time);
schwanenplatz.time = formatUnixTimeToHHMM(schwanenplatz.ISO_time);


function getCrowdMessage(counter) {
  if (counter > 100) {
      return "Fühlt sich an wie an der Fasnacht, nur ohne Musik und Kostüme.";
  } else if (counter > 50) {
      return "Luzern ist wach, aber du brauchst noch keine Ellenbogen, um durchzukommen.";
  } else {
      return "Mehr Platz als während dem Corona-Lockdown.";
  }
}



// OpenStreetMap-Tiles laden
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: 'CartoDB Dark Matter'
}).addTo(map);

// Marker mit Popup hinzufügen
L.marker([47.058341871115616, 8.310841259645938], {icon: green_marker}).addTo(map)
.bindPopup(`
  <div class="popup-content">
    <h2>${getCrowdMessage(loewendenkmal.counter)}</h2>
    <p class="info">Anzahl Leute: ${loewendenkmal.counter}<br>zuletzt gemessen: ${loewendenkmal.time} Uhr</p>
    </div>`);

L.marker([47.0580694107522, 8.311013370717475], {icon: loewendenkmalIcon }).addTo(map);




L.marker([47.05549754312702, 8.310256739922227], {icon: green_marker}).addTo(map)
.bindPopup(`
  <div class="popup-content">
    <h2>${getCrowdMessage(hertensteinstrasse.counter)}</h2>
    <p class="info">Anzahl Leute: ${hertensteinstrasse.counter} <br>zuletzt gemessen: ${hertensteinstrasse.time} Uhr</p>
    </div>`);

L.marker([47.05520389812051, 8.31030314438318], { icon: hertensteinstrasseIcon }).addTo(map);



L.marker([47.05361289724891, 8.308787900487744], {icon: green_marker}).addTo(map)
.bindPopup(`
  <div class="popup-content">
    <h2>${getCrowdMessage(schwanenplatz.counter)}</h2>
    <p class="info">Anzahl Leute: ${schwanenplatz.counter}<br>zuletzt gemessen: ${schwanenplatz.time} Uhr</p>
    </div>`);

L.marker([47.053326495141825, 8.308983862796921], {icon: schwanenplatzIcon }).addTo(map);



L.marker([47.05233432536328, 8.307978424218748], {icon: green_marker}).addTo(map)
.bindPopup(`
  <div class="popup-content">
    <h2>${getCrowdMessage(rathausquai.counter)}</h2>
    <p class="info">Anzahl Leute: ${rathausquai.counter}<br>zuletzt gemessen: ${rathausquai.time} Uhr</p>
    </div>`);

L.marker([47.052037509036495, 8.309074616902045], { icon: rathausquaiIcon }).addTo(map);

L.marker([47.0516, 8.3075], {icon: green_marker}).addTo(map)
.bindPopup(`
  <div class="popup-content">
    <h2>${getCrowdMessage(kapellbruecke.counter)}</h2>
    <p class="info">Anzahl Leute: ${kapellbruecke.counter}<br>zuletzt gemessen: ${kapellbruecke.time} Uhr</p>
    </div>`);

  L.marker([47.05141583560954, 8.30709768417738], { icon: kapellbrueckeIcon }).addTo(map);
