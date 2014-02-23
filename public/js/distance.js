//adding comment to test git repo
	Number.prototype.toRad = function() {
		// convert an angle (in degrees) to radians
		var angle = this.valueOf();
		angle = angle * (Math.PI / 180);
		return angle;
	};

	Number.prototype.prettyPrint = function() {
		// return a string representation of an integer
		// which has commas every three digits
		var numStr = this.valueOf();
		numStr = numStr.toString();
		
		var count = 0;
		var str = "";
		
		for( var i = numStr.length - 1; i >= 0; i--){
			count++;
			str = numStr[i].concat(str);
			if((count%3 == 0) && i>0) str = ",".concat(str);
		}
		
		return str;
	};

	distanceFormula = function(first, second){
		// compute the distance in miles between two lat lng points
		// a point should look like {lat: 0.0, lng: 0.0}
			
		//------------------------------------------------------------------------------------------------------//
		// This function uses the ‘haversine’ formula to calculate the great-circle distance between two points //
		//------------------------------------------------------------------------------------------------------//
		var radiusOfEarthMiles = 3963.1676; // radius of earth in miles
		var distanceLat = (Math.abs(second.lat-first.lat)).toRad();
		var distanceLon = (Math.abs(second.lng-first.lng)).toRad();
		var lat1 = first.lat.toRad();
		var lat2 = second.lat.toRad();
		
		var a = (Math.sin(distanceLat/2) * Math.sin(distanceLat/2)) + (Math.sin(distanceLon/2) * Math.sin(distanceLon/2) * Math.cos(lat1) * Math.cos(lat2)); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var distance = radiusOfEarthMiles * c; //finds distance and converts to miles.
		//------------------------------------------------------------------------------------------------------//

		return distance;
	};
