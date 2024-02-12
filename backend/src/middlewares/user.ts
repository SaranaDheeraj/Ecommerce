import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

require("dotenv").config();
const secret = process.env.SECRET!;

async function isLoggedIn(req: any, res: any, next: any) {
  var { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ msg: "unauthorized" });
  }
  authorization = authorization.split(" ");
  const token = authorization[1];

  try {
    const decoded: any = jwt.verify(token, secret);
    if (!decoded) {
      return res.status(401).json({ msg: "Invalid token" });
    }
    const user = await prisma.users.findUnique({
      where: { username: decoded.username },
    });
    if (!user) {
      return res.status(401).json({ msg: "unauthorized" });
    }

    req.userId = user.id;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Internal server error" });
  }
}

export { isLoggedIn };
