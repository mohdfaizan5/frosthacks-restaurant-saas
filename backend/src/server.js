import connectDB from "./db/connectDb.js";
import app from "./app.js";
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("\t✅ Server up ");
    });
  })
  .catch((error) => {
    console.log("Mongoose connection error", error);
  });
