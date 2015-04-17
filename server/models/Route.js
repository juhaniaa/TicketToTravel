var mongoose = require('mongoose'),
  Station = require('mongoose').model('Station');

var routeSchema = mongoose.Schema({
  name: {type:String, required:'{PATH} is required'},
  nr: {type:Number, required:'{PATH} is required'},
  stations: {type:[Station.schema], required:'{PATH} is required'}
});

var Route = mongoose.model('Route', routeSchema);

function createDefaultRoutes() {
  Route.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Route.create({name: 'Eckerö-linjen', nr: 1, stations:[{name: 'Mariehamn', nr: 1, position: 'x'}, {name: 'Gottby', nr: 15, position: 'x'}, {name: 'Eckerö', nr: 25, position: 'x'}]});
      Route.create({name: 'Godby-linjen', nr: 2, stations:[{name: 'Mariehamn', nr: 1, position: 'x'}, {name: 'Godby', nr: 11, position: 'x'}]});
      Route.create({name: 'Långnäs-linjen', nr: 3, stations:[{name: 'Mariehamn', nr: 1, position: 'x'}, {name: 'Långnäs', nr: 13, position: 'x'}]});
    }
  })
}

exports.createDefaultRoutes = createDefaultRoutes;
