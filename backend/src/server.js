const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const app = express();
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Everything workfine");
});

app.get("/createTahir", async (req, res) => {
  const createdUser = await User.create({
    phoneNo: "6362964875",
    password: "1234",
  });

  res.json({
    ...createdUser,
    message: "Create user successfully",
    success: true,
  });
});

app.get("/createAkshy", async (req, res) => {
  const createdUser = await User.create({
    phoneNo: "9886667080",
    password: "1234",
  });

  res.json({
    ...createdUser,
    message: "Create user successfully",
    success: true,
  });
});

app.post("/login", (req, res) => {
  const { phoneNo, password } = req.body;
  const foundUser = User.findOne({phoneNo})
  console.log(foundUser._doc)
  if(!foundUser){
    res.send("No such user found")
  }
  res.send("user found" )
});

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server up && DB connected✅");
    });
  })
  .catch((error) => {
    console.log("Mongoose connection error", error);
  });
