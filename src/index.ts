import express, { Express, Request, Response } from "express";
import "dotenv/config";
import { logger } from "./utils/logger";
import cors from "cors";
import { userRoute } from "./routes/UserRoute";
import connectToDb from "./utils/connectToDb";

const app: Express = express();
const port = process.env.PORT || 8080;

// Middleware
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
app.use("/api", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.listen(port, () => {
  logger.log("info", `server started at http://localhost:${port}`);
});
