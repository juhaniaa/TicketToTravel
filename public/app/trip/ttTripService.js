angular.module('app').factory('ttTripService', ['ttRoute', function(ttRoute) {

  var tripOrigin = null;
  var tripDestination = null;
  var ticket = null;

  return {
    getTripOrigin : getTripOrigin,
    setTripOrigin : setTripOrigin,
    getTripDestination : getTripDestination,
    setTripDestination : setTripDestination,
    findTrips : findTrips,
    setTicket : setTicket,
    getTicket : getTicket
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

  function setTicket(route) {
    // TODO calculate zones from origin - destination

    // TODO get the apropriate zone object
    /*
    zones: [{
      nr: 1,
      price: 2
    },{
      nr: 2,
      price: 4
    },{
      nr: 3,
      price: 6
    }] */

    // var ticketZone;
    // ttCachedZones.query().$promise.then(function(collection) {
    //   collection.forEach(function(zone) {
    //     if(zone.nr === 3) {
    //       ticketZone = zone;
    //       console.log("Found zone");
    //     }
    //   });
    // })

    ticket = {
      Route : route,
      Origin : tripOrigin,
      Destination : tripDestination,
      Zones : 3,
      Price : 6,
      Amount : 1
    }
  }

  function getTicket() {
    return ticket;
  }
}]);
