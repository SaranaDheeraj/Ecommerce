import { PrismaClient, Prisma } from "@prisma/client";
import jwt from "jsonwebtoken";
require("dotenv").config();

const secret = process.env.SECRET!;

const prisma = new PrismaClient();

async function signUp(req: any, res: any) {
  const { username, email, password } = req.body;

  const userExists = await prisma.users.findFirst({
    where: {
      OR: [{ username }, { email }],
    },
  });
  if (userExists) {
    return res.status(400).json({ msg: "Username or email already exists" });
  }

  try {
    const result = await prisma.users.create({
      data: { username, email, password },
    });

    res.status(200).json({ msg: "user created successfully" });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
}

async function signIn(req: any, res: any) {
  const { username, password } = req.body;
  try {
    await prisma.users.findUnique({
      where: {
        username,
        password,
      },
    });

    const token = jwt.sign({ username }, secret);
    res.status(200).json({ token });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
}

async function product(req: any, res: any) {
  const { name, price, image, rating, category } = req.body;
  const categoryRecord = await prisma.categories.findFirst({
    where: {
      category,
    },
    select: {
      id: true,
    },
  });
  if (categoryRecord) {
    try {
      await prisma.products.create({
        data: {
          name,
          price,
          rating,
          image,
          userId: req.userId,
          categoryId: categoryRecord.id,
        },
      });

      res.status(200).json({ msg: "product created successfully!" });
    } catch (error) {
      res.status(400).json({ msg: "Internal server error!" });
    }
  } else {
    res.status(400).json({ msg: "Category not found" });
  }
}

export { signUp, signIn, product };
