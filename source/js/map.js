 const showMapMarker = () => {
  let map = L.map('map').setView([59.968231, 30.317547], 17);
  let d2gIcon = L.icon({
    iconUrl: '../img/icons/stack.svg#map-marker',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
  });
  let marker = L.marker([59.968331, 30.317547], { icon: d2gIcon }).addTo(map);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar' }).addTo(map);
}


export { showMapMarker };
