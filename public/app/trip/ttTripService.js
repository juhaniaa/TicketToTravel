angular.module('app').factory('ttTripService', ['ttStation', 'ttCachedStations', 'ttCachedRoutes', 'ttRoute', function(ttStation, ttCachedStations, ttCachedRoutes, ttRoute) {
  var allStations = ttCachedStations.query();
  var originStations = allStations;
  var destinationStations = allStations;
  var allRoutes = ttCachedRoutes.query();
  var tripOrigin = null;
  var tripDestination = null;

  return {
    getAllRoutes : getAllRoutes,
    getAllStations : getAllStations,
    getOriginStations : getOriginStations,
    updateOrigins : updateOrigins,
    getDestinationStations : getDestinationStations,
    updateDestinations : updateDestinations,
    getTripOrigin : getTripOrigin,
    setTripOrigin : setTripOrigin,
    getTripDestination : getTripDestination,
    setTripDestination : setTripDestination
  };

  function getAllRoutes() {
    return allRoutes;
  }

  function getAllStations() {
    return allStations;
  }

  function getOriginStations() {
    return originStations;
  }

  function updateOrigins() {
    console.log(allRoutes);
    console.log("hello");
  }

  function getDestinationStations() {
    return destinationStations;
  }

  function updateDestinations() {

    /* this should be done server-side I guess */

    // ttRoute.find(function(err, results) {
    //   console.log(results);
    //   console.log("find");
    // });
    //   //
    //   // .where('stations')
    //   // .in([15])
    //   // .exec(function(err, records) {
    //   //   console.log(records);
    //   //   console.log("in stuff");
    //   // })

    /* This is obviously not the right way to do this */

    // // get all stations in the routes that have currently selected station
    // console.log(tripOrigin);
    // angular.forEach(allRoutes, function(value, key) {
    //   angular.forEach(value.stations, function(v, k) {
    //       if(v.nr === tripOrigin.nr){
    //         console.log("this one");
    //       }
    //       console.log(v.nr);
    //   })
    //   console.log(value);
    // })

    console.log("hello");
  }

  function getTripOrigin() {
    return tripOrigin;
  }

  function setTripOrigin(newOrigin) {
    tripOrigin = newOrigin;

    // if destination is empty
    updateDestinations();
  }

  function getTripDestination() {
    return tripDestination;
  }

  function setTripDestination(newDestination) {
    tripDestination = newDestination;

    // if origin is empty
    updateOrigins();
  }

}]);
