import { UserType, ProductProps, Reviews } from "../shared/types";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const myOrders = new mongoose.Schema<ProductProps>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  seller: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  stock: { type: Number, required: true },
  orders: { type: Number, required: true },
  images: [{ type: String, required: true }],
  event: { type: String },
  lastUpdated: { type: Date, required: true },
  reviews: [{ type: String }],
  userId: { type: String, required: true },
  category: { type: String, required: true },
});
const myReviews = new mongoose.Schema<Reviews>({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  ratingStars: { type: Number, required: true },
  pictures: [{ type: String }],
});

const userSchema = new mongoose.Schema<UserType>({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  adress: { type: String, required: true },
  gender: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  myOrders: [myOrders],
  myReviews: [myReviews],
});


userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 7);
  }
  next();
});

const User = mongoose.model<UserType>("users", userSchema);
export default User;
