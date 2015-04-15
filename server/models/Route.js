var mongoose = require('mongoose'),
  Station = require('mongoose').model('Station');

var routeSchema = mongoose.Schema({
  name: {type:String, required:'{PATH} is required'},
  nr: {type:Number, required:'{PATH} is required'},
  stations: {type:[Station], required:'{PATH} is required'}
});

var Route = mongoose.model('Route', routeSchema);

function createDefaultRoutes() {

  Route.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Station.find({}).exec(function(err, stations) {
        Route.create({name: 'Eckerö-linjen', nr: 1, stations:[stations[0], stations[1]]});
        Route.create({name: 'Godby-linjen', nr: 2, stations:[stations[1], stations[3]]});
      })
    }
  })
}

exports.createDefaultRoutes = createDefaultRoutes;
