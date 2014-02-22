/*
	hints:
	-implement the line with a google.maps.Polyline
	-let google redraw the polyline (see .getPath()) when a new
	point is added - don't delete the whole thing and add it again 
	-use google.maps.Marker for markers
	-use .setMap(null) do remove/delete either of these from your map
	you're making work for yourself if you do it any other way
*/



// Our map object.
var Map = function Map(view) {


	// feel free to edit map options... we want to probably center by default on user location.
	var mapOptions = {
		disableDefaultUI: true,
		zoom: 5,
		center: new google.maps.LatLng(39.50, -98.35),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}


	// init takes object of id 'map_canvas' and creates a map...
	// TODO: use css to define map bounds.
	this.init = function() { this.map = new google.maps.Map($('#map_canvas'), mapOptions); }

	this.init();
}
