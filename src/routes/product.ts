import { Router } from "express";
import { allProducts } from "../controllers/product";

const router = Router();

router.route("/").get(allProducts);

export { router as productRoutes };
