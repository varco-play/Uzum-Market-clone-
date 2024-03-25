import { Request, Response } from "express";
import Product from "../../models/Product";
import { ProductProps } from "../../shared/types";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    if (!products) return res.status(404).json({ msg: "No product found" });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error occured");
  }
};

export const productsByCategory = async (req: Request, res: Response) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category: category });
    if (!products) return res.status(404).send("Category not found!");
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error occured");
  }
};

export  const createNewProduct = async (req: Request, res: Response) => {
  const product = await  Product.create(req.body as ProductProps);
  if (!product) return res.status(400).json({ msg: "Failed to create product."});
  res.status(201).json(`${product.name} - was created`)
}