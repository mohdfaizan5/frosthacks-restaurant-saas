const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const userToken = req.headers.token;
  console.log(userToken);

  const isValid = jwt.verify(
    userToken,
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        res.send("Unautherized request, token is not correct, login");
      } else {
        req.user = decoded
        next()
        // res.send("Autherized user")
        // console.log("Valid token", decoded);
      }
    }
  );
};

module.exports = verifyToken;
