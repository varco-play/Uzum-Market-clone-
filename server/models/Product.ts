import mongoose from "mongoose";
import { ProductProps } from "../shared/types";

const productSchema = new mongoose.Schema<ProductProps>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: [
      "Electronics",
      "Furniture",
      "Clothes",
      "Shoes",
      "Accessories",
      "Beauty & Care",
      "Health",
      "Appliances",
      "Building & Repair",
      "Auto",
      "Children",
      "Hobby & Creation",
      "Sport",
      "Food",
      "Zoo Products",
      "Books",
    ],
  },
  podCategory: {
    type: String,
    required: true,
  },
  seller: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  orders: { type: Number, required: true },
  images: [{ type: String, required: true }],
  lastUpdated: { type: Date },
  userId: { type: String, required: true },
  oldPrice: { type: Number },
  event: { type: String },
  reviews: [{ type: String }],
});

const Product = mongoose.model<ProductProps>("Products", productSchema);
export default Product;
