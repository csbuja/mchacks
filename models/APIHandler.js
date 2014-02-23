var http = require('http'),
  fs = require('fs'),
  xml2js = require('xml2js');

////////// code to get xml from url
module.exports = {
  get: function(command) {
    console.log('export...'+command);
    var parser = new xml2js.Parser();
    var extractedData = "";
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
      });
      console.log(fullResponse);
      return parser.parseString(fullResponse, function(err,result){
        //Extract the value from the data element
        extractedData = result['data'];
      });
    });
    console.log(extractedData);
    return extractedData;
  }
}
