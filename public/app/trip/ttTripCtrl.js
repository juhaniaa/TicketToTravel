angular.module('app').controller('ttTripCtrl', ['$scope', 'ttTripService', function($scope, ttTripService) {

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
    // find route/trip where both currentDestination and currentOrigin
    console.log("Finding trip");
    $scope.trips = ttTripService.findTrips();
  }

  $scope.purchase = function() {

  }
}])
