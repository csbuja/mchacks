/**
* GET /
* Home page.
*/
var routeList = require('../models/APIHandler');

exports.index = function(req, res) {
  res.render('apitest', {
    title: 'API Test',
    data: routeList.get('routeList')
  });
};
