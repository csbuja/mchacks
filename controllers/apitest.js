/**
* GET /
* Home page.
*/
var routeList = require('../modules/routeList.xhtml');

exports.index = function(req, res) {
  res.render('apitest', {
    title: 'API Test',
    data: routeList
  });
};
