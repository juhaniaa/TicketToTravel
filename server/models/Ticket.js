var mongoose = require('mongoose');
  // Route = require('mongoose').model('Route'),
  // Station = require('mongoose').model('Station'),
  // Zone = require('mongoose').model('Zone');

  var ticketSchema = mongoose.Schema({
    route: {
      nr: {type:Number, required:'{PATH} is required'},
      name: {type:String, required:'{PATH} is required'}
    },
    origin: {
      nr: {type:Number, required:'{PATH} is required'},
      name: {type:String, required:'{PATH} is required'},
    },
    destination: {
      nr: {type:Number, required:'{PATH} is required'},
      name: {type:String, required:'{PATH} is required'},
    },
    zone: {
      nr: {type:Number, required:'{PATH} is required'},
      price: {type:Number, required:'{PATH} is required'},
    },
    amount: Number,
    payed: Boolean
  });

// var ticketSchema = mongoose.Schema({
//   route: {type:[Route.schema], required:'{PATH} is required'},
//   origin: {type:[Station.schema], required:'{PATH} is required'},
//   destination: {type:[Station.schema], required:'{PATH} is required'},
//   zone: {type:[Zone.schema], required:'{PATH} is required'},
//   amount: Number
// });

var Ticket = mongoose.model('Ticket', ticketSchema);
