function initializeMap() {
  var mapOptions = {
    disableDefaultUI: true,
    zoom: 8,
    center: new google.maps.LatLng(45.5833, -73.7500)
  };
  return new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

//google.maps.event.addDomListener(window, 'load', initialize);
