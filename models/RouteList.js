var masterAPI = require('APIHandler.js');

function getRouteList() {
  var masterData = getAPIData('routeList');
  
  console.log(masterData);
  return masterData;
}
