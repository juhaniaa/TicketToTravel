angular.module('app').controller('ttTripCtrl', ['$scope', 'ttTripService', function($scope, ttTripService) {

  // when user chooses a origin
  $scope.$watch( function() {
    return ttTripService.tripOrigin;
  }, function(data) {
    $scope.origin = data;
  })

  // when user chooses a destination
  $scope.$watch( function() {
    return ttTripService.tripDestination;
  }, function(data) {
    $scope.destination = data;
  })

  // when the list of available origins is changed
  $scope.$watch( function() {
    return ttTripService.getOriginStations();
  }, function(data) {
    $scope.origins = data;
  }, true)

  // when the list of available destinations is changed
  $scope.$watch( function() {
    return ttTripService.getDestinationStations();
  }, function(data) {
    $scope.destinations = data;
  }, true)

  // var routes = [
  //   { id: 1, name: 'Eckerö-linjen', nr: 3, stops: [stations[0], stations[1], stations[2]]},
  //   { id: 1, name: 'Godby-linjen', nr: 3, stops: [stations[0], stations[3]]}
  // ];

  $scope.purchase = function() {

  }
}])
