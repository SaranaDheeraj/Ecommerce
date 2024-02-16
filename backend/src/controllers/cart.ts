import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function getCart(req: any, res: any) {
  try {
    const cart = await prisma.cart.findMany({
      where: { userId: req.userId },
    });
    if (cart) {
      return res.status(200).json(cart);
    }
    return res.status(200).json({ msg: "Your cart is Empty" });
  } catch (e) {
    res.status(400).json("No cart find with that userId");
  }
}

async function addToCart(req: any, res: any) {
  const { name, quantity, price, productId } = req.body;
  try {
    const item = await prisma.cart.create({
      data: { name, quantity, price, userId: req.userId, productId },
    });
    res.status(200).json({ msg: "added to cart successfully" });
  } catch (e) {
    res.status(400).json({ msg: "something went wrong!" });
  }
}

export { getCart, addToCart };
