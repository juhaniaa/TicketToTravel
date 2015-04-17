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

  $scope.purchase = function() {

  }
}])
