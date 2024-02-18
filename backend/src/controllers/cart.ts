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
  const { name, quantity, price, productId, image } = req.body;
  try {
    const items = await prisma.cart.findMany({
      where: {
        userId: req.userId,
      },
    });

    var exists = items.find((item) => item.productId == productId);

    if (exists) {
      if (exists.quantity >= 3) {
        return res
          .status(400)
          .json({ msg: "Can't add more than three Items of Same quantity" });
      }
      const updatedItem = await prisma.cart.update({
        where: { id: exists.id },
        data: { quantity: exists.quantity + quantity }, // Update quantity
      });
      res
        .status(200)
        .json({ msg: "added to cart successfully", exists: updatedItem });
    } else {
      const newItem = await prisma.cart.create({
        data: { name, quantity, price, userId: req.userId, productId, image },
      });
      res
        .status(200)
        .json({ msg: "added to cart successfully", exists: newItem });
    }
  } catch (e) {
    res.status(400).json({ msg: e });
  }
}

async function updateItem(req: any, res: any) {
  const { id } = req.params;
  const { quantity } = req.body;
  if (quantity > 4 && quantity < 1) {
    return res.send(400).json({ msg: "you can only order 4 items max!" });
  }
  try {
    const updatedItem = await prisma.cart.update({
      where: { id: parseInt(id) },
      data: { quantity },
    });
    res.status(200).json(updatedItem);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "something went wrong" });
  }
}

export { getCart, addToCart, updateItem };
