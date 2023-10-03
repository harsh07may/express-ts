import { randomUUID } from "crypto";
import mongoose, { Schema, model } from "mongoose";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
}

//Make User Schema and model using IUser interface
const UserSchema: Schema = new mongoose.Schema({
  id: {
    type: String,
    default: randomUUID(),
  },
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = model<IUser>("User", UserSchema);
export default User;
