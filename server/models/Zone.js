var mongoose = require('mongoose');

var zoneSchema = mongoose.Schema({
  nr: {type:Number, required:'{PATH} is required'},
  price: {type:Number, required:'{PATH} is required'}
});

var Zone = mongoose.model('Zone', zoneSchema);

function createDefaultZones() {
  Zone.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Zone.create({nr: 1, price: 2});
      Zone.create({nr: 2, price: 4});
      Zone.create({nr: 3, price: 6});
    }
  })
}

exports.createDefaultZones = createDefaultZones;
