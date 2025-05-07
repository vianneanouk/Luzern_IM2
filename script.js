
console.log("hallo")

const container = document.querySelector("#spell-container")

const API_URL = "https://portal.alfons.io/app/devicecounter/api/sensors?api_key=3ad08d9e67919877e4c9f364974ce07e36cbdc9e"

async function fetchData(url) {
    try {
        const response = await fetch (url);
        return await response.json();
    } catch (e) {
    console.error(e);
    return [];
    }
}

const myData = await fetchData(API_URL);
console.log(myData[0].description);

function showData(data) {
    data.forEach((element) => {
        const card = document.createElement("div");
        card.innerHTML = `<h2>${element.name}</h2>`;
        container.appendChild(card);
    });
}

showData(myData);

var map = L.map('map').setView([47.0502, 8.3093], 13);