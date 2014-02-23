var apiData = require('../models/APIHandler');

console.log('trying to get a route');

module.export = function() {
  //This needs more actual functionality
  return apiHandler.getData('routeList');
}
