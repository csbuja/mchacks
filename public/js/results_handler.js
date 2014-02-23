var map; // map object
var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
var directionsService = new google.maps.DirectionsService();
var geocoder = new google.maps.Geocoder();
var latLng1 = null, latLng2 = null;
var markers = []; // markers that are on the map.
var closeToHome = [];
var closeToHell = [];


$(document).ready(function () {
	var searchValue = "";

	initializeMap();

	$('#submit').click( function(){
		console.log("submit button");
		$('.result').remove();
		directionsDisplay.setMap(null);
		clearOverlays();
		geocodeAddress(true);
		geocodeAddress(false);
	});

	$('#clear').click( function(){ 
		console.log("clear button");
		$('.result').remove();
		directionsDisplay.setMap(null);
		clearOverlays();
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
	if(op == true) address = document.getElementById('position').value;
	else address = document.getElementById('destination').value;

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

		if(latLng1 != null && latLng2 != null)
		{
			dropPin(latLng1, latLng2);
			performSearch( function(data){
			// CREATE CHILD OBJECTS FOR RESULTS_PG;

			});
		}



    });

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
    	zoom: 6,
		center: new google.maps.LatLng(42.33, -83.04)
	};
  	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	// sets up the directions to display on the map
	directionsDisplay.setMap(map);


	var old = $('.results_pg');
	var newObj = document.createElement('div');
	newObj.setAttribute('id', 'result-head');
	old.append(newObj);

	$('#result-head').append(
		$('<div />', { "class": 'start', text:'Starting from:' })
	);
	$('#result-head').append(
		$('<div />', { "class": 'end', text:'Ending at:' })
	);
	$('#result-head').append(
		$('<div />', { "class": 'total-dist', text:'Distance:' })
	);
	$('#result-head').append(
		$('<div />', { "class": 'length', text:'Duration:' })
	);

};
// ========================================================================================
// ========================================================================================









// ========================================================================================
// drops pins at the two points.

function dropPin(pos1, pos2){

	var request = {
   		origin:pos1,
    	destination:pos2,
    	travelMode: google.maps.TravelMode.TRANSIT
  	};
  	directionsService.route(request, function(response, status){
    	if (status == google.maps.DirectionsStatus.OK)
    	{
    		directionsDisplay.setMap(map);
   			directionsDisplay.setDirections(response);
   			gatherData( response['routes'][0] );

    	}
  	});
};
// ========================================================================================
// ========================================================================================


function clearOverlays() {
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

function gatherData(data)
{
	console.log(data);

	var totalDist = 0.0;
	var arriving_time;
	var departing_time;
	var departing_add;
	var arriving_add;
	var duration;

	for(var i = 0; i < data.legs.length; i++)
	{
		if(i == 0)
		{
			departing_time = data.legs[i].departure_time['text'];
			departing_add = data.legs[i].start_address;
			arriving_time = data.legs[i].arrival_time['text'];
			arriving_add = data.legs[i].end_address;
			duration = data.legs[i].duration['text'];
		}

		totalDist += parseFloat(data.legs[i].distance.text);
	}


	markers.push( new google.maps.Marker({
			position: new google.maps.LatLng(data.legs[0]['start_location']['d'], data.legs[0]['start_location']['e']),
			map: map,
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			icon: '../img/mapBegin.png'
		}));

	markers.push( new google.maps.Marker({
			position: new google.maps.LatLng(data.legs[0]['end_location']['d'], data.legs[0]['end_location']['e']),
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			icon: '../img/mapEnd.png'
		}));

	// difference in time.


	$('.results_pg').append($('<div />', { "class": 'result' }) );
	$('.result').append( 	
		$('<div />', { 
			"class": 'start',
			text : departing_add
		})
	);
	$('.result').append( 	
		$('<div />', { 
			"class": 'end',
			text : arriving_add
		})
	);
	$('.result').append( 	
		$('<div />', { 
			"class": 'total-dist',
			text : totalDist
		})
	);
	$('.result').append( 	
		$('<div />', { 
			"class": 'length',
			text : duration
		})
	);

};


