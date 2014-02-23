var apiData = require('../models/APIHandler');

model.export = function() {
  function getData() {
    //This needs more actual functionality
    return apiHandler.getData('routeList');
  }
}
