import express from "express";
import { router as userRoutes } from "./routes/user";
import { productRoutes } from "./routes/product";
const app = express();

app.use(express.json());
app.use("/user", userRoutes);
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("LISTENING ON PORT NO 3000!!");
});
