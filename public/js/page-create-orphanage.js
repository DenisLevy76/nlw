
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

let marker;
mymap.on('click', (event) => {
   const lat = event.latlng.lat
   const lng = event.latlng.lng

   document.querySelector('[name=lat]').value = lat
   document.querySelector('[name=lng]').value = lng

   if (marker){
      // essa condicional pode ser escrita como "marker && mymap.removeLayer(marker)" que também funciona
      mymap.removeLayer(marker)
   }

   marker= L.marker([lat, lng], {icon})
   marker.addTo(mymap)
})

function addPhotoField() {
   // peguei o container de imagens
   const containerImages = document.querySelector('.imagens-upload')
   // peguei o campo para duplicar
   const fieldContainer = document.querySelectorAll('.new-upload')
   // dupliquei o campo
   const newFieldContainer = fieldContainer[(fieldContainer.length - 1)].cloneNode(true)
   // verificar se está vazio
   if (newFieldContainer.children[0].value == '' || fieldContainer.length >= 6){
      return
   }
   // limpar o campo da copia
   newFieldContainer.children[0].value = ''
   // adicionar o campo duplicado ao container
   containerImages.appendChild(newFieldContainer)
}

function deleteField(event) {
   const span = event.currentTarget
   const fieldContainer = document.querySelectorAll('.new-upload')

   if (fieldContainer.length <= 1){
      span.parentNode.children[0].value = ''
      return
   }
   
   span.parentNode.remove()
}

function activateButton(event){
   const button = event.currentTarget

   const buttons = document.querySelectorAll(".select-button")

   buttons.forEach((button) => {
      button.classList.remove("active")
   })

   button.classList.add("active")

   const input = document.querySelector('[name="open-on-weekend"]')
   input.value = button.dataset.value
   
}

// criando e adicionando uma marcação
// L.marker([-1.3461205,-48.4257475], {icon}).addTo(mymap).bindPopup(popup)