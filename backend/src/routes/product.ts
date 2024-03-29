import { Router } from "express";
import {
  addReview,
  allProducts,
  allReviews,
  getThreeProducts,
  getProduct,
} from "../controllers/product";
import { isLoggedIn } from "../middlewares/user";

const router = Router();

router.route("/").get(allProducts);
router.route("/limited").get(getThreeProducts);

router.route("/:id").get(getProduct);
router.route("/:id/review").post(isLoggedIn, addReview);
router.route("/:id/reviews").get(allReviews);

export { router as productRoutes };
