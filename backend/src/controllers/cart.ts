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
  const { name, quantity, price, productId, userId } = req.body;
  try {
    const item = await prisma.cart.create({
      data: { name, quantity, price, userId, productId },
    });

    res.status(200).json({ msg: "added to cart successfully", item });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
}

export { getCart, addToCart };
