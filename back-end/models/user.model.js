const mongoose = require("mongoose");


//This is just for testing, without other columns
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  passwordHash: String,
  active: {
    type: Boolean,
    default: false
  },
});

const UsersModel = mongoose.model("User", UserSchema);

module.exports = {
  UsersModel,
};

