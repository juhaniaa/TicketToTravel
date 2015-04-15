angular.module('app').factory('ttTripService', ['ttStation', 'ttCachedStations', 'ttCachedRoutes', function(ttStation, ttCachedStations, ttCachedRoutes) {
  var allStations = ttCachedStations.query();
  var originStations = allStations;
  var destinationStations = allStations;
  var allRoutes = ttCachedRoutes.query();
  // var allRoutes = null;
  var tripOrigin = null;
  var tripDestination = null;

  return {
    getAllStations : getAllStations,
    getOriginStations : getOriginStations,
    getDestinationStations : getDestinationStations,
    tripOrigin : tripOrigin,
    // setTripOrigin : setTripOrigin,
    tripDestination : tripDestination
    // setTripDestination : setTripDestination
  };

  function getAllStations() {
    return allStations;
  }

  function getOriginStations() {
    return originStations;
  }

  function setOriginStations() {

  }

  function getDestinationStations() {
    return destinationStations;
  }

  function getDestinationStations() {

  }

  // function getTripOrigin() {
  //   return tripOrigin;
  // }

  // function setTripOrigin(newOrigin) {
  //   tripOrigin = newOrigin;
  //
  //   // change the tripdestinations
  // }

  // function getTripDestination() {
  //   return tripDestination;
  // }

  // function setTripDestination(newDestination) {
  //   tripDestination = newDestination;
  //
  //   // change the triporigins
  // }

}]);
