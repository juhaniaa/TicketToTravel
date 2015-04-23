var auth = require('./auth'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  users = require('../controllers/users'),
  stations = require('../controllers/stations');
  routes = require('../controllers/routes'),
  tickets = require('../controllers/tickets.js');

module.exports = function(app) {

  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/api/stations', stations.getStations);

  app.get('/api/routes', function(req, res) {
    routes.getRoutes(req.query, res);
  });

  app.post('/api/tickets', tickets.createTicket);

  // render partials from public folder
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);
  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  // if requested resource does not exist
  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
}
