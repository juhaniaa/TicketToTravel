angular.module('app').controller('ttTicketCtrl', ['$scope', 'ttTripService', 'ttNotifier', function($scope, ttTripService, ttNotifier) {
  // presents the ticket to user and lets user choose amount of tickets and button to purchase
  $scope.amounts = [1,2,3,4,5,6,7,8,9,10];
  $scope.ticketAmount = $scope.amounts[0];
  $scope.ticket = ttTripService.getTicket();
  $scope.purchase = function() {
    //TODO check that it is the correct password
    //TODO make post to server with ticket then DIBS stuff
    if(false) {
      ttNotifier.error('Password not correct');
    } else {
      ttTripService.createTicket($scope.ticketAmount).then(function() {
        ttNotifier.notify('Ticket created!');
      }, function(reason) {
        ttNotifier.error(reason);
      });
    }
  }
}])
