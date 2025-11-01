import express from "express";
import cors from "cors";
import { auth } from "./auth.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:8080",
  credentials: true,
}));
app.use(express.json());

// Better Auth API routes
app.all("/api/auth/*", async (req, res) => {
  return auth.handler(req, res);
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "better-auth-server" });
});

app.listen(PORT, () => {
  console.log(`🚀 Better Auth server running on http://localhost:${PORT}`);
  console.log(`📡 Auth API available at http://localhost:${PORT}/api/auth`);
});

