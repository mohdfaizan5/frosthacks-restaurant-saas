import User from "../models/user.model.js";
import jwt from "jsonwebtoken"



const generateJWT = (phoneNo) => {
  const token = jwt.sign(phoneNo, process.env.JWT_SECRET);
  return token;
};

const homepage = (req, res) => {
  res.send("Everything workfine");
};

const registerUser = async (req, res) => {
  const { phoneNo, password, username } = req.body;
  const foundUser = await User.findOne({ phoneNo });
  console.log(foundUser);

  if (!foundUser) {
    const createdUser = await User.create({
      phoneNo: phoneNo,
      password: password,
      username: username,
    });
    const token = generateJWT(phoneNo);

    res.status(200).json({
      success: true,
      token: token,
      createdUser,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "User Already exists"
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password, phoneNo } = req.body;
  const foundUser = await User.findOne({ phoneNo });
  console.log(foundUser);

  if (!foundUser) {
    res.send("No such user found, first register user");
  } else {
    if(!foundUser.password === password){
      res.status(401).json({
        message: "Invalid Credetials",
        success: false
      })
    }
    const token = generateJWT(phoneNo);
    res.status(200).json({
      success: true,
      token: token,
    });
  }
};

const dashboard =
  ( (req, res) => {
    res.send("Welcome to dashboard");
  });

export { dashboard, loginUser, registerUser,homepage };
