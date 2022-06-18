const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
});

UserSchema.pre('save', async function(next){
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(this.password, salt)
  this.password = hash
  next()
})

module.exports = mongoose.model('User', UserSchema)