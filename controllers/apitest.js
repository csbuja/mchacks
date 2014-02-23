/**
* GET /
* Home page.
*/

var data = require('../models/RouteList');

exports.index = function(req, res) {
  res.render('apitest', {
    title: 'API Test',
    data: data
  });
};
