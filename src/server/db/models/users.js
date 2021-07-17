const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", UsersSchema);
