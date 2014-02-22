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
var Map = function Map() {


	// feel free to edit map options... we want to probably center by default on user location.
	var mapOptions = {
		disableDefaultUI: true,
		zoom: 5,
		center: new google.maps.LatLng(39.50, -98.35),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}


	// init takes object of id 'map_canvas' and creates a map...
	// TODO: use css to define map bounds.
	this.init = function() { this.map = new google.maps.Map($('#map_canvas')[0], mapOptions); }


	// list of points to be added to the map
	this.points = []; // { lat:0.0, lng:0.0, name: "", time: Date() }

	// list of markers that have already been placesd on the map.
	this.markers = []; // array of markers already on map



	// adds a point to this.points
	this.addPoint = function(point) { this.points.push(point); }

	this.renderAllPoints = function () {
		// remove all old map data, *sort* the points
		// and render each point ever ~300ms
		// don't render the point if dist(this_pt,prev) === 0		
	}

	this.removeData = function() {
		// reset distance, clear polypath and markers
	}

	this.renderSinglePoint = function(cb) {
		// render a single point on the map
		// pan the map to the new point
		// make sure to update the polypath
		// consider recursion :)
	}

	// call the initializer
	this.init();
}
