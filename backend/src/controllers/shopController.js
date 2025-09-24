import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getShops = async (req, res) => {
  try {
    const shops = await prisma.shop.findMany();
    res.json({ shops });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
