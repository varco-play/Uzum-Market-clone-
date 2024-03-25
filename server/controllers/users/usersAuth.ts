import { Request, Response } from "express";
import User from "../../models/User";
import { UserType } from "../../shared/types";
import generateToken from "./../../utils/createToken";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });
    const userNumber = await User.findOne({
      phoneNumber: req.body.phoneNumber,
    });

    if (user || userNumber) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User(req.body);
    await user.save();
    generateToken(res, user._id);
    res.status(200).json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ message: "Error while registering" });
    console.log(err);
  }
};

export const authUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json("User not found");

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) return res.status(500).json("Invalid password");

    generateToken(res, user._id);
    res.status(200).json({
      userId: user._id,
      userName: user.name,
    });
  } catch (err) {
    res.status(500).json("Server issue");
    console.log("error in  login", err);
  }
};

export const logout = async (req: Request, res: Response) => {
  res
    .cookie("auth", "", { expires: new Date(0) })
    .status(200)
    .json({ message: "User has logged out" });
};

export const getUserProfile = async (req: Request, res: Response) => {
  const user = await User.findOne({ _id: req.userId }).select("-password");

  if (!user) return res.status(401).json("User profile not found");

  res.status(200).json(user);
};
