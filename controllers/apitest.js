/**
* GET /
* Home page.
*/

var routeList = require('../models/RouteList').getRoutes;

exports.index = function(req, res) {
  res.render('apitest', {
    title: 'API Test',
    data: routeList()
  });
};
