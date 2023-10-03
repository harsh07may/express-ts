import winston, { format } from "winston";

export const logger = winston.createLogger({
  level: "info", // The minimum level of messages to log
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(
      (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console(), // Output to console
    new winston.transports.File({ filename: "error.log", level: "error" }), // Output to a file
  ],
});
