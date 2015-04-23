var Ticket = require('mongoose').model('Ticket');

exports.createTicket = function(req, res) {
  var ticketData = req.body;
  console.log(ticketData);

  Ticket.create(ticketData, function(err, ticket) {
    if(err) {
      res.status(400);
      return res.send({reason:err.toString()});
    }

    res.send(ticket);
  });

  // var ticket = new Ticket();
  //
  // ticket.route.push(ticketData.route);
  // ticket.origin.push(ticketData.route);
  // ticket.destination.push(ticketData.route);
  // ticket.zone.push(ticketData.route);
  // ticket.amount = ticketData.amount;
  //
  // ticket.save(function (err) {
  //   if(err) {
  //     res.status(400);
  //     return res.send({reason:err.toString()});
  //   }
  //   res.send(ticket);
  // })
}
