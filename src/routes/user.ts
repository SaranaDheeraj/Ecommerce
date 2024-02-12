import { Router } from "express";
import { product, signIn, signUp } from "../controllers/user";
import { isLoggedIn } from "../middlewares/user";

const router = Router();

//signIn
//signUp
router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/products").post(isLoggedIn, product);

export { router };
