var Station = require('mongoose').model('Station');

exports.getStations = function(req, res) {
  Station.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};
