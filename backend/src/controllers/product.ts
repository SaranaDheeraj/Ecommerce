import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function allProducts(req: any, res: any) {
  const { categoryId } = req.query;
  try {
    if (categoryId) {
      const products = await prisma.products.findMany({
        where: {
          categoryId: parseInt(categoryId),
        },
      });
      res.status(200).json(products);
    } else {
      const products = await prisma.products.findMany();
      res.status(200).json(products);
    }
  } catch (e) {
    res.status(500).json({ msg: "failed to fetch products!" });
  }
}

async function getProduct(req: any, res: any) {
  const { id } = req.params;
  try {
    const product = await prisma.products.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(product);
  } catch (e) {
    res.status(400).json({ msg: "product not found" });
  }
}

async function addReview(req: any, res: any) {
  const { description, rating } = req.body;
  const userId = req.userId;

  const productId = parseInt(req.params.id);
  try {
    const existingProduct = await prisma.products.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return res.status(400).json({ msg: "product not found" });
    }

    const review = await prisma.reviews.create({
      data: {
        description,
        rating,
        userId,
        productId,
      },
    });
    console.log(review);
    res.status(200).json({ msg: "review added successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: "something went wrong" });
  }
}

async function allReviews(req: any, res: any) {
  try {
    const reviews = await prisma.reviews.findMany({
      where: {
        productId: parseInt(req.params.id),
      },
    });
    res.status(200).json(reviews);
  } catch (e) {
    res.status(400).json({ msg: "reviews not found for this product!" });
  }
}

async function getThreeProducts(req: any, res: any) {
  const { categoryId } = req.query;

  try {
    if (categoryId) {
      const products = await prisma.products.findMany({
        take: 3,
        where: {
          categoryId: parseInt(categoryId),
        },
      });
      res.status(200).json(products);
    } else {
      const products = await prisma.products.findMany({
        take: 3,
      });
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(400).json({ msg: "Unable to retrieve products!" });
  }
}

export { allProducts, getProduct, addReview, allReviews, getThreeProducts };
