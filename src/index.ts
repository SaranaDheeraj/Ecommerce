import express from "express";
import { router as userRoutes } from "./routes/user";
const app = express();

app.use(express.json());
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("LISTENING ON PORT NO 3000!!");
});
