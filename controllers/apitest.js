/**
* GET /
* Home page.
*/

var data = require('RouteList.js');

exports.index = function(req, res) {
  res.render('apitest', {
    title: 'API Test',
    data: data
  });
};
