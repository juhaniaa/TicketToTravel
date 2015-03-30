var mongoose = require('mongoose'),
  encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type:String, required:'{PATH} is required'},
  lastName: {type:String, required:'{PATH} is required'},
  username: {
      type:String,
      required: '{PATH} is required!',
      unique:true
  },
  salt: {type:String, required:'{PATH} is required'},
  hashed_pwd: {type:String, required:'{PATH} is required'},
  roles: [String]
});

userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function(role) {
    return this.roles.indexOf(role) > -1;
  }
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'joe');
      User.create({firstName:'Joe',lastName:'Starbuck',username:'joe', salt:salt, hashed_pwd:hash, roles:['admin']});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'steve');
      User.create({firstName:'Steve',lastName:'Hero',username:'steve', salt:salt, hashed_pwd:hash, roles:[]});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'dave');
      User.create({firstName:'Dave',lastName:'Newton',username:'dave', salt:salt, hashed_pwd:hash});
    }
  })
}

exports.createDefaultUsers = createDefaultUsers;
