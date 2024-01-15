let mongoose = require("mongoose");

const collectionName = "users";

var usersSchema = new mongoose.Schema({
  Website: String,
  Username: String,
  Password: String,
});
var userModel = mongoose.model(collectionName, usersSchema);

module.exports = userModel;
