import { Response } from "express";
import jwt from "jsonwebtoken";

const generateToken = (res: Response, userId: any) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
      expiresIn: "10d",
    });

    res.cookie("auth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "develpment",
      sameSite: "strict",
      maxAge: 10 * 24 * 60 * 60 * 1000,
    });
  } catch {
    res
      .status(400)
      .json( "error while creating token");
  }
};

export default generateToken;
