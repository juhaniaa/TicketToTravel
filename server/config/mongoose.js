var mongoose = require('mongoose'),
  userModel = require('../models/User.js'),
  stationModel = require('../models/Station.js'),
  routeModel = require('../models/Route.js'),
  zoneModel = require('../models/Zone.js'),
  ticketModel = require('../models/Ticket.js');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('tickettravel db opened');
  });

  stationModel.createDefaultStations();
  routeModel.createDefaultRoutes();
  zoneModel.createDefaultZones();
};
