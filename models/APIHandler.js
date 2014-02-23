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
  
  return http.get(options).on('response', function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });
    return res.on('end', function() {
      console.log('parsing...');
      var ret = libxmljs.parseXmlString(body);
      console.log('parsed: ' + ret);
      return ret;
    });
  });
}
