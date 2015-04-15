angular.module('app').factory('ttCachedStations', ['ttStation', function(ttStation) {
  var stationList;

  return {
    query: function() {
      if(!stationList) {
        stationList = ttStation.query();
      }

      return stationList;
    }
  }
}])
