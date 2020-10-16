const map = L.map("mapid").setView([-23.6686047,-46.6175243], 16)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
}) 

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar pequenos anjinhos <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"></a>')


L.marker([-23.6686047,-46.6175243], { icon })
  .addTo(map)
  .bindPopup(popup)
  
