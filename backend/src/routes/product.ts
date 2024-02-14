import { Router } from "express";
import {
  addReview,
  allProducts,
  allReviews,
  getFourProducts,
  product,
} from "../controllers/product";
import { isLoggedIn } from "../middlewares/user";

const router = Router();

router.route("/").get(allProducts);
router.route("/limited").get(getFourProducts);
router.route("/:id").get(product);
router.route("/:id/review").post(isLoggedIn, addReview);
router.route("/:id/reviews").get(allReviews);

export { router as productRoutes };
