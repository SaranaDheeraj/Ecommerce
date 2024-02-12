import { Router } from "express";
import { isLoggedIn } from "../middlewares/user";
import { addToCart, getCart } from "../controllers/cart";
const router = Router();

router.route("/").get(isLoggedIn, getCart);
router.route("/").post(isLoggedIn, addToCart);

export { router as cartRoutes };
