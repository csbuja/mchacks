$(document).ready(function(){
 
   $('#position').on('change',formajax);
   $('#destination').on('change',formajax);


});

//runs the ajax

function formajax(event)
{
 if($('#position').value && $('#destination').value)
  {
  event.preventDefault();
  $.ajax('/views/busform.html',{
    type: 'POST',
    data: $('#form').serialize(),
    success:function(response)
    {
    //temperary
    dropPin(45.5, -73.7, 45.2, -74);
    },
    error: function(){
      alert("There's an error in your function");
    }
  
  });
  }
 else{
  clearOverlays();
 }
 }
}

function clearOverlays() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}

function dropPin(lat, lng, lat2, lng2){

	var position = new google.maps.LatLng( lat, lng);
	var position2 = new google.maps.LatLng( lat2, lng2);

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
