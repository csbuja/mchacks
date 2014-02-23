/**
* GET /
* Home page.
*/

var routeList = require('../models/RouteList');

exports.index = function(req, res) {
  res.render('apitest', {
    title: 'API Test',
    data: routeList.getRoutes()
  });
};
