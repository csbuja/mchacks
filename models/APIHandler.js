var http = require('http'),
  fs = require('fs'),
  xml2js = require('xml2js');

////////// code to get xml from url
module.exports = function(command) {
    console.log('export...'+command);
    var parser = new xml2js.Parser();
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
      });
      
      var extractedData = "";
      return parser.parseString(xml, function(err,result){
        //Extract the value from the data element
        extractedData = result['data'];
        console.log(extractedData);
        return extractedData;
      });
    });
  }
