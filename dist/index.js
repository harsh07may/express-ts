"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const logger_1 = require("./utils/logger");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// Middleware
app.use(express_1.default.json()); //support JSON bodies
app.use(express_1.default.urlencoded({ extended: true })); //support url encoded bodies
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index");
});
app.listen(port, () => {
    logger_1.logger.log("info", `server started at http://localhost:${port}`);
});
