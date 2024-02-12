import { Router, Request, Response } from "express";
import { signUp } from "../controllers/user";

const router = Router();

//signIn
//signUp
router.route("/").post(signUp);

export { router };
