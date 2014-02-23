var http = require('http'),
  fs = require('fs'),
  xml2js = require('xml2js');

////////// code to get xml from url
module.exports = {
  get: function(command) {
     //get xml
  var options = {
      host: 'webservices.nextbus.com',
      port: 80,
      path: '/service/publicXMLFeed?a=stl&command=routeList',
      method: 'GET'
    };
  var fullResponse = '';
  http.get(options, function(response) {
    response.setEncoding('utf8');
   
    var parser = new xml2js.Parser();
    parser.on('end', function(result) {
      return result;
    });
        
    response.on('data', function (chunk) {
      fullResponse = fullResponse + chunk;
    });
    
    response.on('end', function(result) {
        parser.parseString(fullResponse);
        console.log(fullResponse);
    });
  });
  }
}
