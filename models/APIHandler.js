var http = require('http'),
  fs = require('fs'),
  xml2js = require('xml2js');

////////// code to get xml from url
getData = function(command) {
  var options = {
    host: 'webservices.nextbus.com',
    port: 80,
    path: '/service/publicXMLFeed?a=stl&command='+command,
    method: 'GET'
  };
  var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    
    var fullResponse = "";
    
    res.on('data', function (chunk) {
      fullResponse += chunk;
      console.log('chunk logged: ' + chunk);
    });
    
    return res.on('end', function(){
      console.log(fullResponce);
      return parser.parseString(fullResponse);
    });
  });
  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
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
}
