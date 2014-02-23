var map; // map object
var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
var geocoder = new google.maps.Geocoder();
var latLng1 = null, latLng2 = null;
var markers = []; // markers that are on the map.


$(document).ready(function () {
	var searchValue = "";

	initializeMap();

	// the destination field has been changed.
	$('#destination').change( function(){

		console.log( $('#destination').text() );
		geocodeAddress(false);

	});


	// the position field has been changed.
	$('#position').change( function(){

		console.log( $('#position').text() );
		geocodeAddress(true);

	});


	// a result has been clicked.
	$('.result').click( function(){

		console.log('click click');
		clicked = $(this).id;
	});	

});

// ========================================================================================
// ========================================================================================








// ========================================================================================
// helper function to geocode.

function geocodeAddress(op){
	// op == true     --> position
	// op == false    --> destination

	var address;
	if(op == true) address = document.getElementById('position').text;
	else address = document.getElementById('destination').text;

	geocoder.geocode( { 'address': address}, function(results, status) {

		// GEOCODE SUCCESSFUL
    	if (status == google.maps.GeocoderStatus.OK)
    	{
    		if(op == true) latLng1 = results[0].geometry.location;
    		else latLng2 = results[0].geometry.location;
    	}
    	else 
    	{
    		if(op == true)
   			{
   				latLng1 = null;
    			console.log("- position geocode was not successful -");
    		}
    		else
    		{
   				latLng2 = null;
    			console.log("- destination geocode was not successful -");
    		}
    	}
    });

	if(latLng1 != null && latLng2 != null)
	{
		$('.result').remove();
		dropPin(latLng1, latLng2);
		performSearch( function(data){
			// CREATE CHILD OBJECTS FOR RESULTS_PG;

		});
	}
}
// ========================================================================================
// ========================================================================================








// ========================================================================================
// helper function to perform search.

function performSearch(cb){
	var data;
	//String s = $('.results_pg').children().length.toString();
	// $('.results_pg').append( $('.result #'+s.toString() ) );

	cb(data); // CREATE CHILD OBJECTS.
};
// ========================================================================================
// ========================================================================================







// ========================================================================================
// builds the map object

function initializeMap() {
	console.log("init");

	var mapOptions = {
    	disableDefaultUI: true,
    	zoom: 8,
		center: new google.maps.LatLng(45.5833, -73.7500)
	};
  	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	// sets up the directions to display on the map
	directionsDisplay.setMap(map);
};
// ========================================================================================
// ========================================================================================









// ========================================================================================
// drops pins at the two points.

function dropPin(pos1, pos2){

	// Resize icon and add it to map at begin point.
	var icon = {
    	url: '../img/mapBegin.png', // url
    	size: new google.maps.Size(width, height), // size
    	origin: new google.maps.Point(0,0), // origin
    	anchor: new google.maps.Point(anchor_left, anchor_top) // anchor 
 	};
	markers.push( new google.maps.Marker({
			position: pos1,
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP
			icon: icon
		}));

	// Resize icon and add it to map at end point.
	icon = {
    	url: '../img/mapEnd.png', // url
    	size: new google.maps.Size(width, height), // size
    	origin: new google.maps.Point(0,0), // origin
    	anchor: new google.maps.Point(anchor_left, anchor_top) // anchor 
 	};
	markers.push( new google.maps.Marker({
			position: pos2,
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP
			icon: icon
		}));


	// var request = {
 //   		origin:position,
 //    	destination:position2,
 //    	travelMode: google.maps.TravelMode.TRANSIT
 //  	};
 //  	directionsService.route(request, function(response, status){
 //    	if (status == google.maps.DirectionsStatus.OK)
 //    	{
 //   			directionsDisplay.setDirections(response);
 //    	}
 //  	});
};
// ========================================================================================
// ========================================================================================





