var mongoose = require('mongoose');

var stationSchema = mongoose.Schema({
  name: {type:String, required:'{PATH} is required'},
  nr: {type:Number, required:'{PATH} is required'},
  position: {type:String, required:'{PATH} is required'}
});

var Station = mongoose.model('Station', stationSchema);

function createDefaultStations() {
  Station.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Station.create({name: 'Gottby', nr: 15, position: 'x'});
      Station.create({name: 'Mariehamn', nr: 1, position: 'x'});
      Station.create({name: 'Eckerö', nr: 25, position: 'x'});
      Station.create({name: 'Godby', nr: 11, position: 'x'});
    }
  })
}

exports.createDefaultStations = createDefaultStations;
