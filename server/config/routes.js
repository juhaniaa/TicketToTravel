var auth = require('./auth'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  users = require('../controllers/users');

module.exports = function(app) {

  // app.post('/api/users', users.createUser);
  app.post('/api/users', function(req, res) {
    res.render('../../public/app/test');
  });
  app.put('/api/users', users.updateUser);

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
