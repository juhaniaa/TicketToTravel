var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    // db: 'mongodb://localhost/tickettravel',
    db: 'mongodb://travelapp:qwetravel@ds039211.mongolab.com:39211/tickettravel',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://travelapp:qwetravel@ds039211.mongolab.com:39211/tickettravel',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}
