var apiData = require('../models/APIHandler')('routeList');

module.export = function(options) {
  //This needs more actual functionality
  console.log(options);
  console.log(apiData);
  return apiData;
}
