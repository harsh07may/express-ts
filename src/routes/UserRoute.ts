import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController";
export const userRoute = Router();

userRoute.get("/User", getAllUsers);
userRoute.get("/User/:id", getUserById);
userRoute.post("/User", createUser);
userRoute.put("/User", updateUser);
userRoute.delete("/User", deleteUser);
