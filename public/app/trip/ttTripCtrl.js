angular.module('app').controller('ttTripCtrl', ['$scope', 'ttTripService', function($scope, ttTripService) {

  // // when user changes origin
  // $scope.$watch( function() {
  //   return ttTripService.getTripOrigin();
  // }, function(data) {
  //   $scope.origin = data;
  //   // tell service to change available destinations
  //   ttTripService.updateDestinations();
  // })
  //
  // // when user changes destination
  // $scope.$watch( function() {
  //   return ttTripService.getTripDestination();
  // }, function(data) {
  //   $scope.destination = data;
  //   // tell service to change available origins
  //   ttTripService.updateOrigins();
  // })

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

  $scope.updateDestination = function() {
    ttTripService.setTripDestination($scope.destination);
  }

  $scope.updateOrigin = function() {
    ttTripService.setTripOrigin($scope.origin);
  }

  $scope.allRoutes = ttTripService.getAllRoutes();

  // var routes = [
  //   { id: 1, name: 'Eckerö-linjen', nr: 3, stops: [stations[0], stations[1], stations[2]]},
  //   { id: 1, name: 'Godby-linjen', nr: 3, stops: [stations[0], stations[3]]}
  // ];

  $scope.purchase = function() {

  }
}])
