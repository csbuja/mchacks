var apiData = require('../models/APIHandler')('routeList');

module.export = function() {
  //This needs more actual functionality
  return apiData.getResponse();
}
