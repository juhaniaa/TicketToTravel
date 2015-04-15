var Route = require('mongoose').model('Route');

exports.getRoutes = function(req, res) {
  Route.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};
