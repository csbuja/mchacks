var libxmljs = require('libxmljs');
var http = require('http');

/* return data to caller
 * param: (string) commandType
 *  valid values: routeList, routeConfig, predictions,
 *      predictionsForMultiStops, schedule, messages,
 *      vehicleLocations, 
 */
module.exports = function(command) {
  var options = {
    host: 'webservices.nextbus.com',
    path: '/service/publicXMLFeed?a=stl&command=' + command
  };
  
  return http.get(options).on('response', function(response) {
    return response.on("data", function(chunk) {
      console.log("BODY: " + chunk);
      return libxmljs.parseXmlString(chunk);
    });
  });
}
