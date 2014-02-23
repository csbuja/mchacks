/**
* GET /
* Home page.
*/
var http = require('http'),
    eyes = require('eyes'),
    xml2js = require('xml2js');

exports.index = function(req, res) {
  //get the data from the api
  
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
      eyes.inspect(result);
    });
        
    response.on('data', function (chunk) {
      fullResponse += chunk;
      console.log(chunk);
    });

    parser.parseString(fullResponse);
  });
  
  res.render('apitest', {
    title: 'API Test',
    data: {}
  });
};
