angular.module('app').controller('ttTicketCtrl',
  ['$scope', 'ttTripService', 'ttNotifier', 'ttIdentity',
  function($scope, ttTripService, ttNotifier, ttIdentity) {

  // presents the ticket to user and lets user choose amount of tickets and button to purchase
  $scope.amounts = [1,2,3,4,5,6,7,8,9,10];
  $scope.ticketAmount = $scope.amounts[0];
  $scope.ticket = ttTripService.getTicket();
  $scope.purchase = function() {
    if(!ttIdentity.currentUser) {
      ttNotifier.error('You need to login to purchase tickets!');
    } else {
      ttTripService.createTicket($scope.ticketAmount).then(function() {
        ttNotifier.notify('Ticket created!');
      }, function(reason) {
        ttNotifier.error(reason);
      });
    }
  }
}])
