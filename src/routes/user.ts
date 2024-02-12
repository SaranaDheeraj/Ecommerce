import { Router, Request, Response } from "express";
import { signIn, signUp } from "../controllers/user";

const router = Router();

//signIn
//signUp
router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

export { router };
