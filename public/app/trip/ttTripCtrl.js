angular.module('app').controller('ttTripCtrl', ['$scope', function($scope) {

  // first user selects a from station from all available
  // then the to-station is allowed to be chosen from list of stations on same route
  //...what if multiple routes on the from-station?
  var stations = [
    { id: 1, name: 'Gottby', nr: 15, position: 'x' },
    { id: 2, name: 'Mariehamn', nr: 1, position: 'x' },
    { id: 3, name: 'Eckerö', nr: 25, position: 'x' },
    { id: 4, name: 'Godby', nr: 11, position: 'x' }
  ];

  var routes = [
    { id: 1, name: 'Eckerö-linjen', nr: 3, stops: [stations[0], stations[1], stations[2]]},
    { id: 1, name: 'Godby-linjen', nr: 3, stops: [stations[0], stations[3]]}
  ];

  $scope.stations = stations;
  $scope.routes = routes;
  $scope.trip = {
    origin: stations[1],
    destination: stations[3]
  };
}])
