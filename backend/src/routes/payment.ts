import { Router } from "express";
const router = Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

router.route("/").post(async (req: any, res: any) => {
  const { items } = req.body;

  const lineItems = items.map((item: any) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.price,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/failure",
  });

  res.json({ id: session.id });
});

export { router as paymentRoutes };
