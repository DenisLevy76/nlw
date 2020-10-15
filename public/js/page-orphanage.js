// criando o mapa
const options = {
   dragging: false,
   touchZoom: false,
   doubleClickZoom: false,
   scrollWheelZoom: false,
   zoomControl: false
}
const mymap = L.map('mapid', options).setView([-1.3461205,-48.4257475], 15)


// criando a layer do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap)

// criando um icone
const icon = L.icon({
   iconUrl: "/images/map-marker.svg",  
   iconSize: [48, 58],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2],
});

// criando e adicionando uma marcação
L.marker([-1.3461205,-48.4257475], {icon}).addTo(mymap)

function selectImage(event){
   const button = event.currentTarget

   const buttons = document.querySelectorAll(".images button")

   buttons.forEach((button) => {
      button.classList.remove("active")
   })

   const image = button.children[0]

   document.querySelector(".orphanage-details > img").src = image.src

   button.classList.add("active")
   
}