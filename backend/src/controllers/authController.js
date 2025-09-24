import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const register = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    const user = await prisma.user.create({
      data: { nome, email, senha: hashedPassword },
    });
    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (err) {
    if (err.code === "P2002") {
      return res.status(400).json({ message: "Email já cadastrado" });
    }
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: "Email não encontrado" });

    const match = await bcrypt.compare(senha, user.senha);
    if (!match) return res.status(400).json({ message: "Senha incorreta" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.json({ token, nome: user.nome });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
