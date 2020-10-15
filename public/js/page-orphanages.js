// criando o mapa
const mymap = L.map('mapid').setView([-1.3461205,-48.4257475], 12.25)

// criando a layer do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap)

// criando um icone
const icon = L.icon({
   iconUrl: "/images/map-marker.svg",
   iconSize: [48, 58],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2],
});

function allocateMarkers({id, name, lat, lng}){
   
   const popup = L.popup({
      closeButton: false,
      className: 'map-popup',
      minWidth: 240,
      minHeight: 240
   }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage popup-button"><img src="/images/arrow-white.svg"></a>`)
   
   // criando e adicionando uma marcação
   L.marker([lat, lng], {icon}).addTo(mymap).bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll(".orphanages-span span")

console.log(orphanagesSpan);

orphanagesSpan.forEach(orphanagesSpan => {
   const orphanage = {
      id: orphanagesSpan.dataset.id,
      name: orphanagesSpan.dataset.name,
      lat: orphanagesSpan.dataset.lat,
      lng: orphanagesSpan.dataset.lng
   }

   allocateMarkers(orphanage)
})
