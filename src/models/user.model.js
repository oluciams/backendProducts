const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  email: {
    type:String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  }
})

module.exports = mongoose.model('User', UserSchema)