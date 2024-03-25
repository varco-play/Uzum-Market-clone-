import express from "express";
import cors from "cors";
import connectDB from "./utils/db";
import products from "./routes/products";
import users from "./routes/users";
import categories from "./routes/categories";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 7777;

connectDB(process.env.MONGO_URL as string);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", products);
app.use("/api/categories", categories);
app.use("/api/users", users);

app.listen(PORT, () => {
  console.log(`Server running on port - ${PORT}`);
});
