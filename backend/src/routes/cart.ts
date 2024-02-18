import { Router } from "express";
import { isLoggedIn } from "../middlewares/user";
import { addToCart, getCart, updateItem } from "../controllers/cart";
const router = Router();

router.route("/").get(isLoggedIn, getCart);
router.route("/").post(isLoggedIn, addToCart);
router.route("/:id").put(isLoggedIn, updateItem);

export { router as cartRoutes };
