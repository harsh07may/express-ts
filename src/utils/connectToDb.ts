import "dotenv/config";
import mongoose from "mongoose";
import { logger } from "./logger";

const connectToDb = async () => {
  const url = process.env.DATABASE_URL || "";
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions)
    .then(() => {
      logger.log("info", "Database connected");
    })
    .catch((err) => {
      logger.log("error", err);
    });
};

export default connectToDb;
