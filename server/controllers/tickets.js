var Ticket = require('mongoose').model('Ticket');

exports.createTicket = function(req, res) {
  var ticketData = req.body;

  Ticket.create(ticketData, function(err, ticket) {
    if(err) {
      res.status(400);
      return res.send({reason:err.toString()});
    }

    res.send(ticket);
  });

}

exports.getTickets = function(req, res) {
  var user = req.query.userId;
  // find the tickets of a specific user

  Ticket.find({'_owner': user}).exec(function(err, tickets) {
    res.send(tickets);
  })
}
