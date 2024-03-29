import express from "express";
import cors from "cors";

import { router as userRoutes } from "./routes/user";
import { productRoutes } from "./routes/product";
import { cartRoutes } from "./routes/cart";
import { paymentRoutes } from "./routes/payment";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/create-checkout-session", paymentRoutes);

app.listen(3000, () => {
  console.log("LISTENING ON PORT NO 3000!!");
});
