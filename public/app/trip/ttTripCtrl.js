angular.module('app').controller('ttTripCtrl',
  ['ttCachedRoutes', '$location', '$scope', 'ttNotifier', 'ttTripService',
  function(ttCachedRoutes, $location, $scope, ttNotifier, ttTripService) {

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
     var trips = ttTripService.findTrips();
     if(trips) {
       $scope.trips
     } else {
       ttNotifier.error('Both stations must be selected and unique');
     }
  }

  $scope.showTicket = function(route) {
    // create ticket object and redirect
    ttTripService.setTicket(route);
    $location.path('/ticket');
  }
}])
