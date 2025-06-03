const mongoose = require("mongoose");

//create a user model to store the user details
const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  dateOfBirth: { type: Date,default:Date.now },
  medicalInfo: String,
  allergy: String,
  address: String,
  phone: String,
});

//model it in mongoDB
const User = mongoose.model('User',userSchema);
module.exports = User;
