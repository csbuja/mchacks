/**
* GET /
* Home page.
*/
var xml2js = require('xml2js'),
  http = require('http');

exports.index = function(req, res) {
  //get the data from the api
  var parser = new xml2js.Parser();
  var extractedData = "";
  var fullResponse = "";
  var options = {
    host: 'webservices.nextbus.com',
    port: 80,
    path: '/service/publicXMLFeed?a=stl&command=routeList',
    method: 'GET'
  };
  var request = http.request(options, function(response) {
    response.setEncoding('utf8');
    
    response.on('data', function (chunk) {
      fullResponse += chunk;
      console.log(chunk);
    });

    parser.parseString(fullResponse, function(err,result){
      //Extract the value from the data element
      extractedData = result['data'];
    });
  });
  console.log(fullResponse);
  console.log(extractedData);
  res.render('apitest', {
    title: 'API Test',
    data: extractedData
  });
};
