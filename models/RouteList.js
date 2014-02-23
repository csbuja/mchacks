var apiData = require('../models/APIHandler');

module.export = function() {
  console.log('trying to get the route list');
  //This needs more actual functionality
  return apiHandler.getData('routeList');
}
