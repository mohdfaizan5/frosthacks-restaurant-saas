import { Router } from "express";
import { dashboard, homepage, loginUser, registerUser } from "../controllers/user.controller.js";
import verifyToken from "../middleware/auth.middleware.js";

const router = Router();


router.route("/").get(verifyToken, homepage);
router.route("/dashboard").get(dashboard);
router.route("/login").post(loginUser)
router.route("/register").post(registerUser)

export default router;
