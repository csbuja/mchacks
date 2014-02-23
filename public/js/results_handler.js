var map; // map object
var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
var markers = []; // markers that are on the map.
var clicked = "";

$(document).ready(function () {

	initializeMap();

	// FROM should automatically be set to current location (or a location chosen by user)
	// DESTINATION triggers a search and loads results into the results_pg.
	// on search, fill the results_pg with results.
	$('#destination').change( function(){

		console.log('perform search');
		
		$('.result').remove();

		performSearch();

	});


	// when a result is clicked, expand to show hidden information.
	$('.result').click( function(){

		console.log('click click');
		clicked = $(this).id;

		dropPin(45.5, 73.7, 45.2, 74);

	});

});


function performSearch(){
	//String s = $('.results_pg').children().length.toString();
	// $('.results_pg').append( $('.result #'+s.toString() ) );
};



// builds the map object
function initializeMap() {
	console.log("init");

	var mapOptions = {
    	disableDefaultUI: true,
    	zoom: 8,
		center: new google.maps.LatLng(45.5833, -73.7500)
	};
  	map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

	// sets up the directions to display on the map
	directionsDisplay.setMap(map);
};

function dropPin(lat, lng, lat2, lng2){

	console.log("drop pins");
	var position = new google.maps.LatLng( lat, lng);
	var position2 = new google.maps.LatLng( lat2, lng2);
	console.log( position );
	console.log( position2 );

	markers.push( new google.maps.Marker({
				position: position,
				map: map,
				draggable: false,
				animation: google.maps.Animation.DROP
			}));
	markers.push( new google.maps.Marker({
				position: position2,
				map: map,
				draggable: false,
				animation: google.maps.Animation.DROP
			}));
	console.log( markers.length );
	console.log( map );


	var request = {
    	origin:position,
    	destination:position2,
    	travelMode: google.maps.TravelMode.TRANSIT
  	};
  	directionsService.route(request, function(response, status) {
    	if (status == google.maps.DirectionsStatus.OK) {
      		directionsDisplay.setDirections(response);
    	}
  	});
};