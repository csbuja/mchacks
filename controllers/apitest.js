/**
* GET /
* Home page.
*/

exports.index = function(req, res) {
  res.render('apitest', {
    title: 'API Test'
  });
};
