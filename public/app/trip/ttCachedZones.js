angular.module('app').factory('ttCachedZones', ['ttZone', function(ttZone) {
  var zoneList;

  return {
    query: function() {
      if(!zoneList) {
        zoneList = ttZone.query();
      }

      return zoneList;
    }
  }
}])
