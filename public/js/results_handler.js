var map;
var clicked = "";

$(document).ready(function () {

	map = initializeMap();

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
	});

});

function performSearch(){
	String s = $('.results_pg').children().length.toString();
	 $('.results_pg').append( $('.result #'+s.toString() ) );

};



// builds the map object
function initializeMap() {
  var mapOptions = {
    disableDefaultUI: true,
    zoom: 8,
    center: new google.maps.LatLng(45.5833, -73.7500)
  };
  return new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}