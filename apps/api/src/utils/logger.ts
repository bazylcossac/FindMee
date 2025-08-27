import config from "../config";

export const logger = {
  info: (message: string, ...args: any[]) => {
    if (config.logging.level === "info" || config.logging.level === "debug") {
      console.log(`[INFO] ${message}`, ...args);
    }
  },

  error: (message: string, ...args: any[]) => {
    console.error(`[ERROR] ${message}`, ...args);
  },

  warn: (message: string, ...args: any[]) => {
    if (
      config.logging.level === "warn" ||
      config.logging.level === "info" ||
      config.logging.level === "debug"
    ) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  },

  debug: (message: string, ...args: any[]) => {
    if (config.logging.level === "debug") {
      console.log(`[DEBUG] ${message}`, ...args);
    }
  },
};
