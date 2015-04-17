angular.module('app').factory('ttTripService', ['ttRoute', function(ttRoute) {

  var tripOrigin = null;
  var tripDestination = null;

  return {
    getTripOrigin : getTripOrigin,
    setTripOrigin : setTripOrigin,
    getTripDestination : getTripDestination,
    setTripDestination : setTripDestination,
    findTrips : findTrips
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

  function findTrips() {
    // request routes that have currentOrigin and Destination as stations
    return ttRoute.query({origin:tripOrigin.nr, destination:tripDestination.nr});
  }

}]);
