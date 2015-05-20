angular.module('app').factory('ttTripService', ['ttRoute', 'ttTicket', 'ttIdentity', '$q', function(ttRoute, ttTicket, ttIdentity, $q) {

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
    getTicket : getTicket,
    createTicket : createTicket
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
    if(tripOrigin === null || tripDestination === null || tripOrigin.nr === tripDestination.nr) {
      return false;
    } else {
    // request routes that have currentOrigin and Destination as stations
      return ttRoute.query({origin:tripOrigin.nr, destination:tripDestination.nr});
    }
  }

  function setTicket(route) {
    // TODO calculate zones from origin - destination

    var zones = [{
      nr: 1,
      price: 2
    },{
      nr: 2,
      price: 4
    },{
      nr: 3,
      price: 6
    }]

    // TODO get the apropriate zone object
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
      route : { nr:route.nr, name:route.name },
      origin : { nr:tripOrigin.nr, name:tripOrigin.name },
      destination : { nr:tripDestination.nr, name:tripDestination.name },
      zone : zones[2], // TODO calculate from stations
      amount : 1 // default value
    }
  }

  function getTicket() {
    return ticket;
  }

  function createTicket(ticketAmount) {

    ticket._owner = ttIdentity.currentUser._id;
    ticket.amount = ticketAmount;

    var newTicket = new ttTicket(ticket);

    var dfd = $q.defer();
    newTicket.$save().then(function() {
      dfd.resolve();
    }, function(response) {
      dfd.reject(response.data.reason);
    })

    return dfd.promise;
  }
}]);
