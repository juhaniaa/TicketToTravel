angular.module('app').controller('ttTicketCtrl', ['$scope', 'ttTripService', function($scope, ttTripService) {
  // presents the ticket to user and lets user choose amount of tickets and button to purchase

  $scope.ticket = ttTripService.getTicket();
  $scope.purchase = function() {
    //TODO make post to server with ticket then DIBS stuff
  }
}])
