angular.module('app').controller('ttTicketListCtrl', ['$scope', 'ttTicket', 'ttIdentity', function($scope, ttTicket, ttIdentity) {

  // this is the controller that shows the user a list of his/her bought tickets

  // get all of the users tickets
  var tickets = ttTicket.query({userId:ttIdentity.currentUser._id});
  // $scope.tickets = ttTicket.query();
  $scope.tickets = tickets;
  console.log(tickets);

  $scope.sortOptions = [{value:"name", text:"Sort by Name"},
    {value:"price", text:"Sort by Price"}];
  $scope.sortOrder = $scope.sortOptions[0].value;

  $scope.stuff = function() {

  }
}])
