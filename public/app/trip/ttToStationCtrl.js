angular.module('app').controller('ttToStationCtrl', ['$scope', '$location', 'ttCachedStations', 'ttTripService', 'ttNotifier', function($scope, $location, ttCachedStations, ttTripService, ttNotifier) {

  $scope.stations = ttCachedStations.query();

  $scope.sortOptions = [
    {value:"name", text:"Sort by Name"},
    {value:"nr", text:"Sort by Number"}];
  $scope.sortOrder = $scope.sortOptions[0].value;

  $scope.addStation = function(station) {    
    ttTripService.setTripDestination(station);
    ttNotifier.notify('Destination added');
    $location.path('/trip');
  }
}])
