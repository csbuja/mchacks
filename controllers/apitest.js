/**
* GET /
* Home page.
*/
exports.index = function(req, res) {
  //get the data from the api
  var parser = new xml2js.Parser();
  var extractedData = "";
  var options = {
    host: 'webservices.nextbus.com',
    port: 80,
    path: '/service/publicXMLFeed?a=stl&command=routeList',
    method: 'GET'
  };
  var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    
    var fullResponse = "";
    
    res.on('data', function (chunk) {
      fullResponse += chunk;
    });

    parser.parseString(fullResponse, function(err,result){
      //Extract the value from the data element
      extractedData = result['data'];
    });
  });
  res.render('apitest', {
    title: 'API Test',
    data: extractedData
  });
};
