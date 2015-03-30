var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/tickettravel',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://juhaniaa:123qweasd@ds039311.mongolab.com:39311/tickettravel',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}
