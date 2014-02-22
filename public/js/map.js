var map;
function initialize() {
  var mapOptions = {
  	disableDefaultUI: true,
    zoom: 5,
    center: new google.maps.LatLng(45.5833, -73.7500),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
