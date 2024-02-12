import { Router, Request, Response } from "express";
import { signIn } from "../controllers/user";

const router = Router();

router.route("/").get(signIn);

export { router };
