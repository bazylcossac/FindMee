import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";
import config from "./config";
import { logger } from "./utils/logger";

dotenv.config();

const app = express();
const PORT = config.server.port;

app.use(
  cors({
    origin: config.cors.origin,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "FindMee API Server is running!",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api", routes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`🚀 FindMee API Server running on port ${PORT}`);
  logger.info(`📱 Health check: http://localhost:${PORT}/health`);
  logger.info(`🌐 API base: http://localhost:${PORT}/api`);
  logger.info(`🔧 Environment: ${config.server.nodeEnv}`);
});

export default app;
