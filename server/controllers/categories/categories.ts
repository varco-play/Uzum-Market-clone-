import { Request, Response } from "express";
import Product from "./../../models/Product";


export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await (await Product.find()).map(product => product.category)
  if (!categories) return res.status(404).json({ msg: "Categories not found" });
  res.status(200).json(categories);
};
