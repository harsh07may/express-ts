import e, { Request, Response } from "express";
import User, { IUser } from "../models/User";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      throw new Error("No users found");
    }
    const usersJson: IUser[] = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      created_at: user.created_at,
    }));
    res.send(usersJson);
  } catch (error: any) {
    res.send(error.message);
  }
};

export const getUserById = (req: Request, res: Response) => {
  const id = req.params.id;
  res.send("A User " + id);
};
export const createUser = (req: Request, res: Response) => {
  res.send("Creating a User ");
};
export const updateUser = (req: Request, res: Response) => {
  res.send("Updating a User ");
};
export const deleteUser = (req: Request, res: Response) => {
  res.send("Deleting a User ");
};
