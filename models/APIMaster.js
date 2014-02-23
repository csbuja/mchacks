var libxmljs = require('xmljs');
var http = require('http');
var XmlStream = require('xml-stream');

/* return data to caller
 * param: (string) commandType
 *  valid values: routeList, routeConfig, predictions,
 *      predictionsForMultiStops, schedule, messages,
 *      vehicleLocations, 
 */
function getAPIData(command) {
  var options = {
    host: 'webservices.nextbus.com',
    path: '/service/publicXMLFeed?a=stl&command=' + command;
  };
  
  return http.get(options).on('response', function(response) {
  
    var xml = new XmlStream(response, 'utf8');
  
    return libxmljs.parse(xml);
    
  });
}
