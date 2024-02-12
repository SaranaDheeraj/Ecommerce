import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function allProducts(req: any, res: any) {
  try {
    const products = await prisma.products.findMany();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ msg: "failed to fetch products!" });
  }
}

export { allProducts };
