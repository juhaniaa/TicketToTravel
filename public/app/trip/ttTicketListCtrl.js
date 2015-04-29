angular.module('app').controller('ttTicketListCtrl', ['$scope', function($scope) {

  // this is the controller that shows the user a list of his/her bought tickets

  // get all of the users tickets
  $scope.tickets = null;

  $scope.sortOptions = [{value:"name", text:"Sort by Name"},
    {value:"price", text:"Sort by Price"}];
  $scope.sortOrder = $scope.sortOptions[0].value;

  $scope.stuff = function() {

  }
}])
