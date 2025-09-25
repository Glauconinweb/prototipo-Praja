import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/auth.js";
import shopRoutes from "./routes/shops.js";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

// Configuração de CORS
// Substitua pelo domínio do seu frontend em produção
const FRONTEND_URL =
  process.env.FRONTEND_URL || "https://prototipo-praja.onrender.com";
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

// Permite receber JSON no body das requisições
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.json({ success: true, message: "API Prajá funcionando!" });
});

// Rotas de autenticação e lojas
app.use("/api/auth", authRoutes);
app.use("/api/shops", shopRoutes);

// Porta do servidor (Render fornece via env)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
