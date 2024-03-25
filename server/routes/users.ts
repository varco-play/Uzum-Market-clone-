import express from "express";
import { check } from "express-validator";
import { authUser, getUserProfile, logout, register } from "../controllers/users/usersAuth";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.post(
  "/register",
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password min length should be 6").isLength({ min: 6 }),
  ],
  register
);
router.post(
  "/authUser",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password min length should be 6").isLength({ min: 6 }),
  ],
  authUser
);
router.delete("/logoutUser", logout);
router.get("/userProfile", verifyToken, getUserProfile)

export default router;
