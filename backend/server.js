import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();

// Initalize express
const app = express();

// Database Connection
connectDB();

// Middleware
// CORS: allow requests from your frontend (set FRONTEND_URL in Render env)
const allowedOrigin = process.env.FRONTEND_URL || "*";
app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

// Routes
app.use("/api/products", productRouter);

// Base route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 404 route
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.yellow.bold)
);
