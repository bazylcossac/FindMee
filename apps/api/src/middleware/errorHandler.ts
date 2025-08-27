import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";

  logger.error(`Error ${statusCode}: ${message}`);
  if (err.stack) {
    logger.error(err.stack);
  }

  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

export const notFoundHandler = (req: Request, res: Response) => {
  logger.warn(`Route not found: ${req.method} ${req.originalUrl}`);

  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,
    method: req.method,
  });
};
