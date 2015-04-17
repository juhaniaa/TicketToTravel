angular.module('app').factory('ttTripService', ['ttStation', 'ttCachedStations', 'ttCachedRoutes', 'ttRoute', function(ttStation, ttCachedStations, ttCachedRoutes, ttRoute) {

  var tripOrigin = null;
  var tripDestination = null;

  return {
    getTripOrigin : getTripOrigin,
    setTripOrigin : setTripOrigin,
    getTripDestination : getTripDestination,
    setTripDestination : setTripDestination
  };

  function getTripOrigin() {
    return tripOrigin;
  }

  function setTripOrigin(newOrigin) {
    tripOrigin = newOrigin;
  }

  function getTripDestination() {
    return tripDestination;
  }

  function setTripDestination(newDestination) {
    tripDestination = newDestination;
  }

}]);
