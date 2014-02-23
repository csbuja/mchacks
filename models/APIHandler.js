var libxmljs = require('libxmljs');
var http = require('http');

/* return data to caller
 * param: (string) commandType
 *  valid values: routeList, routeConfig, predictions,
 *      predictionsForMultiStops, schedule, messages,
 *      vehicleLocations, 
 */
module.exports = function(options) {
  var app = options.app; //not actually used
  var command = options.param2;
  var options = {
    host: 'webservices.nextbus.com',
    path: '/service/publicXMLFeed?a=stl&command=' + command
  };
  
  return http.get(options).on('response', function(response) {
    console.log(response);
    return libxmljs.parseXmlFile(response);
  });
}
