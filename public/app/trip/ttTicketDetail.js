angular.module('app').factory('ttTicketDetail',
  ['ttTicket',
  function() {

  var ticket = null;

  return {
    store : store,
    fetch : fetch
  };

  function store(newTicket) {
    // store ticket
    if(newTicket !== null) {
      ticket = newTicket;
      return true;
    } else {
      return false;
    }
  }

  function fetch() {
    // get the ticket
    if(ticket !== null) {
      return ticket;
    } else {
      return false;
    }
  }
}]);
