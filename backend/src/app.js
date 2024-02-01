import express from "express";
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"))


// importing Routes 
import userRoute from "./routes/user.routes.js"

// routes declaration
app.use("/api/", userRoute)
app.use("/api/rest/", userRoute)





export default app;