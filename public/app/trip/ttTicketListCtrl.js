angular.module('app').controller('ttTicketListCtrl',
  ['$scope', 'ttTicket', 'ttIdentity', 'ttTicketDetail', '$location',
  function($scope, ttTicket, ttIdentity, ttTicketDetail, $location) {

  // get all of the users tickets
  var tickets = ttTicket.query({userId:ttIdentity.currentUser._id});

  $scope.tickets = tickets;

  $scope.sortOptions = [
    {value:"name", text:"Sort by Name"},
    {value:"price", text:"Sort by Price"}];
  $scope.sortOrder = $scope.sortOptions[0].value;

  $scope.showTicket = function(ticket) {
    var success = ttTicketDetail.store(ticket);
    if(success) {
      $location.path('/ticketdetail');
    }
  }
}])
