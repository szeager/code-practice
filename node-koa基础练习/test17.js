var mongoose = require('./test16')
var Schema = require('mongoose').Schema;

// model
var User = new Schema({
  name: { type: String },
  address: { type: String },
})
module.exports = mongoose.model('UserModel', User);