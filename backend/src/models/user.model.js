import mongoose, { Schema, model } from "mongoose";

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
    username: {
      type: String,
      required: true,
      unique: true
    },
    // menus:{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: Category
    // }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema); // users
export default User


