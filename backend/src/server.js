const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = require("./middleware/auth.middleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const generateJWT = (phoneNo) => {
  const token = jwt.sign(phoneNo, process.env.JWT_SECRET);
  return token;
};

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Everything workfine");
});

// Protected route

// app.get("/createTahir", async (req, res) => {
//   const createdUser = await User.create({
//     phoneNo: "6362964875",
//     password: "1234",
//   });

//   res.json({
//     ...createdUser,
//     message: "Create user successfully",
//     success: true,
//   });
// });

// app.get("/createAkshy", async (req, res) => {
//   const createdUser = await User.create({
//     phoneNo: "9886667080",
//     password: "1234",
//   });

//   res.json({
//     ...createdUser,
//     message: "Create user successfully",
//     success: true,
//   });
// });

app.post("/register", async (req, res) => {
  const { phoneNo, password, username } = req.body;
  const foundUser = await User.findOne({ phoneNo });
  console.log(foundUser);
  
  if (!foundUser) {
    
    const createdUser = await User.create({
      phoneNo: phoneNo,
      password: password,
      username: username
    })
    const token = generateJWT(phoneNo);

    res.status(200).json({
      success: true,
      token: token,
      createdUser: createdUser
    });
  } else {
    res.send("User Already exists");
  }
});

app.post("/login", async (req, res) => {
  const { username, password, phoneNo } = req.body;
  const foundUser = await User.findOne({ phoneNo });
  console.log(foundUser);

  if (!foundUser) {
    res.send("No such user found, first register user");
  } else {
    const token = generateJWT(phoneNo);
    res.status(200).json({
      success: true,
      token: token,
    });
  }
});

app.get("/dashboard", verifyToken, (req, res)=>{
  res.send("Welcome to dashboard")
})

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
