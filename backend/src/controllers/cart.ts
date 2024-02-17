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
    const items = await prisma.cart.findMany({
      where: {
        userId: req.userId,
      },
    });

    var exists = items.find((item) => item.productId == productId);

    if (exists) {
      const updatedItem = await prisma.cart.update({
        where: { id: exists.id },
        data: { quantity: exists.quantity + quantity }, // Update quantity
      });
      res
        .status(200)
        .json({ msg: "added to cart successfully", exists: updatedItem });
    } else {
      const newItem = await prisma.cart.create({
        data: { name, quantity, price, userId: req.userId, productId },
      });
      res
        .status(200)
        .json({ msg: "added to cart successfully", exists: newItem });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
}

export { getCart, addToCart };
