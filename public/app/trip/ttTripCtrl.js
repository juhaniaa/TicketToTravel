angular.module('app').controller('ttTripCtrl', ['ttCachedRoutes', '$location', '$scope', 'ttTripService', function(ttCachedRoutes, $location, $scope, ttTripService) {

  // when user changes origin
  $scope.$watch( function() {
    return ttTripService.getTripOrigin();
  }, function(data) {
    $scope.currentOrigin = data;
  })

  // when user changes destination
  $scope.$watch( function() {
    return ttTripService.getTripDestination();
  }, function(data) {
    $scope.currentDestination = data;
  })

  $scope.findTrips = function() {
    // find route/trip where both currentDestination and currentOrigin present
    // TODO should not run if same orig as dest
    console.log("Finding trip");
    $scope.trips = ttTripService.findTrips();

    // TEMP
    var routes = ttCachedRoutes.query();
    console.log(routes);
  }

  $scope.showTicket = function(route) {
    // create ticket object and redirect to ticket.jade?
    console.log(route);
    ttTripService.setTicket(route);
    $location.path('/ticket');

  }
}])
