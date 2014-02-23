/**
* GET /
* Home page.
*/

var http = require('http'),
  fs = require('fs'),
  xml2js = require('xml2js');

////////// code to get xml from url
var data = (function(command) {
  console.log('export...'+command);
  var options = {
    host: 'webservices.nextbus.com',
    port: 80,
    path: '/service/publicXMLFeed?a=stl&command='+command,
    method: 'GET'
  };
  return http.request(options, function(res) {
    res.setEncoding('utf8');
    
    var fullResponse = "";
    
    res.on('data', function (chunk) {
      fullResponse += chunk;
      console.log('chunk logged: ' + chunk);
    });
    
    return res.on('end', function() {
      var ret = parser.parseString(fullResponse);
      console.log('returning...'+ret);
      return ret;
    });
  });
  
  //code to parse xml
  var jsonstring = "";
  var jsonObj;
  var parser = new xml2js.Parser();
  parser.addListener('end', function(result) {
      jsonstring = JSON.stringify(result);
      jsonObj = JSON.parse(jsonstring);
      
      return jsonObj;
  });
})('routeDetails');

exports.index = function(req, res) {
  res.render('apitest', {
    title: 'API Test',
    data: routeList
  });
  console.log(routeList);
};
