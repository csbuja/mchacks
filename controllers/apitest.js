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
  var request = http.request(options, function(err,response) {
    response.setEncoding('utf8');
   
    var parser = new xml2js.Parser();
    parser.on('end', function(err,result) {
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
