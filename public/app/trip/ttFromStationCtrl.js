angular.module('app').controller('ttFromStationCtrl', ['$scope', '$location', 'ttCachedStations', 'ttTripService', 'ttNotifier', function($scope, $location, ttCachedStations, ttTripService, ttNotifier) {

  $scope.stations = ttCachedStations.query();

  $scope.sortOptions = [{value:"name", text:"Sort by Name"},
    {value:"nr", text:"Sort by Number"}];
  $scope.sortOrder = $scope.sortOptions[0].value;

  $scope.addStation = function(station) {
    // user clicked station to add
    // add it to origin station
    console.log("setOrigin");
    console.log(station);
    ttTripService.setTripOrigin(station);
    ttNotifier.notify('Origin added');
    $location.path('/trip');
  }
}])
