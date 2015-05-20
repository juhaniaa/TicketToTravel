var Route = require('mongoose').model('Route');

exports.getRoutes = function(query, res) {

  var dest = query.destination;
  var orig = query.origin;
  // find the routes that have both of these two stations
  // Route.find({'stations.nr': { $all: [query.origin, query.destination]}}).exec(function(err, routes) {
  Route.find({'stations.nr': { $all: [dest, orig]}}).exec(function(err, routes) {
    res.send(routes);
  })
};
