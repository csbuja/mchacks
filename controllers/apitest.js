/**
* GET /
* Home page.
*/

var routeList = require('./models/RouteList')('routeList');

exports.index = function(req, res) {
  res.render('apitest', {
    title: 'API Test',
    data: routeList
  });
  console.log(routeList);
};
