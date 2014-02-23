/**
* GET /
* Home page.
*/
var fs = require('fs'),
    eyes = require('eyes'),
    xml2js = require('xml2js');

exports.index = function(req, res) {
  //get the data from the api
   
  var parser = new xml2js.Parser();
  
  parser.on('end', function(result) {
    eyes.inspect(result);
  });
  
  //get xml
  var request = http.request(options, function(response) {
    response.setEncoding('utf8');
    
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
