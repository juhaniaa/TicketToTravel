angular.module('app').controller('ttTicketDetailCtrl',
  ['$scope', '$location', 'ttTicketDetail',
  function($scope, $location, ttTicketDetail) {

   var showTicket = ttTicketDetail.fetch();

   if(showTicket) {
     $scope.ticket = showTicket;
   } else {
     $location.path('/tickets');
   }
}])
