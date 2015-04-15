var mongoose = require('mongoose'),
  Station = require('mongoose').model('Station');

var routeSchema = mongoose.Schema({
  name: {type:String, required:'{PATH} is required'},
  nr: {type:Number, required:'{PATH} is required'},
  stations: {type:[Station.schema], required:'{PATH} is required'}
});

var Route = mongoose.model('Route', routeSchema);

function createDefaultRoutes() {
  var st;
  Station.find({}).exec(function(err, coll) {
    st = coll;
  })
  Route.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Route.create({name: 'Eckerö-linjen', nr: 1, stations:[st[0], st[1]]});
      Route.create({name: 'Godby-linjen', nr: 2, stations:[st[1], st[3]]});
      Route.create({name: 'Långnäs-linjen', nr: 3, stations:[st[1], st[4]]});
    }
  })
}

exports.createDefaultRoutes = createDefaultRoutes;
