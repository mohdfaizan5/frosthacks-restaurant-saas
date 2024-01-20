const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    phoneNo: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema); // users
module.exports = User;
